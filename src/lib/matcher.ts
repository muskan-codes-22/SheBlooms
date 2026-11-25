import { QA_DATABASE, QAEntry } from '../data/qa';
import { ARTICLES } from '../data/articles';
import { 
  checkSafety, 
  SafetyCheckResult, 
  NormalizedStage, 
  buildSafeFallback, 
  sanitizeQuery, 
  StructuredAnswer 
} from './safety';

export interface MatcherResponse {
  answer: StructuredAnswer;
  sourceArticleId?: string;
  followUps: string[];
  safety: SafetyCheckResult;
  isFallback?: boolean;
  matchedArticleId?: string;
  confidenceScore?: number;
}

/**
 * Stopwords to filter out of query tokens to avoid false matches on common grammar words.
 */
const STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'about', 'from', 'what', 'how', 'why',
  'when', 'where', 'who', 'does', 'did', 'have', 'having', 'has', 'should',
  'could', 'would', 'can', 'are', 'was', 'were', 'been', 'being', 'you',
  'your', 'this', 'that', 'these', 'those', 'there', 'some', 'during'
]);

/**
 * Generic domain words that appear in many questions.
 * Matching only one of these words without other topic tokens indicates an unrelated question.
 */
const GENERIC_DOMAIN_WORDS = new Set([
  'cycle', 'period', 'periods', 'menses', 'menstruation', 'blood', 'body', 'normal',
  'bleed', 'bleeding', 'days', 'like', 'feel'
]);

/**
 * Central Question Matching & Safety Enforcement Engine.
 * 
 * Flow:
 * 1. Read selected life stage & normalize it
 * 2. Run Central Medical Safety Layer (Crisis, Red Flags, Medical Interventions)
 * 3. If safety rule triggered -> safety response strictly overrides Q&A
 * 4. Filter Q&A dataset by life-stage appropriateness (e.g. no adult contraception for Young Bloomers)
 * 5. Compute token & phrase relevance scores
 * 6. Enforce confidence threshold & ambiguity detection
 * 7. Return approved answer OR stage-adapted safe fallback
 */
export function findBestMatch(userQuery: string, currentStage?: string | null): MatcherResponse {
  // 1. Run Central Medical Safety Layer FIRST
  const safety = checkSafety(userQuery, currentStage);
  const normalizedStage = safety.normalizedStage;

  // 2. Strict Safety Override (Crisis, Emergency Red Flags, Sensitive Medical Interventions, Weird Questions)
  if (safety.overrideAnswer) {
    return {
      answer: safety.overrideAnswer,
      sourceArticleId: safety.sourceArticleId,
      followUps: safety.followUps || [
        'What questions should I ask my doctor?',
        'Is period pain normal?',
        'What is a normal cycle length?'
      ],
      safety,
      isFallback: safety.isFallback || false,
      confidenceScore: safety.isFallback ? 0 : 100
    };
  }

  // 3. Pre-process query tokens
  const cleanUserQuery = sanitizeQuery(userQuery);
  const queryTokens = cleanUserQuery
    .split(' ')
    .filter(t => t.length > 2 && !STOPWORDS.has(t));

  // If query is effectively empty after cleaning
  if (queryTokens.length === 0 && cleanUserQuery.length < 3) {
    const fallbackAnswer = buildSafeFallback(normalizedStage, userQuery);
    return {
      answer: fallbackAnswer,
      followUps: ['Is period pain normal?', 'What is a normal cycle length?', 'How do I use a pad?'],
      safety,
      isFallback: true,
      confidenceScore: 0
    };
  }

  // 4. Candidate Evaluation with Stage Restrictions
  const scoredEntries: { entry: QAEntry; score: number }[] = [];

  for (const entry of QA_DATABASE) {
    // LIFE STAGE FILTER:
    // If user is in puberty (Young Bloomers), strictly exclude adult-restricted entries
    if (normalizedStage === 'puberty') {
      if (entry.minAgeTier === 'adult') continue;
      if (entry.allowedStages && !entry.allowedStages.includes('puberty')) continue;
    }

    let score = 0;
    const cleanEntryQuestion = sanitizeQuery(entry.question);

    // Exact question match
    if (cleanUserQuery === cleanEntryQuestion) {
      score += 30;
    }

    // Keyword & Phrase Matching
    for (const kw of entry.keywords) {
      const cleanKw = sanitizeQuery(kw);

      if (cleanKw.includes(' ')) {
        // Multi-word phrase exact match in query
        if (cleanUserQuery.includes(cleanKw)) {
          score += 14;
        }
      } else {
        // Single keyword exact match in query
        if (cleanUserQuery.includes(cleanKw)) {
          score += 8;
        }
      }

      // Word-level overlap
      const kwWords = cleanKw.split(' ').filter(w => !STOPWORDS.has(w));
      for (const kwWord of kwWords) {
        if (queryTokens.includes(kwWord)) {
          score += 3.5;
        }
      }
    }

    // Question title token overlap
    const questionTokens = cleanEntryQuestion.split(' ').filter(w => !STOPWORDS.has(w));
    for (const token of queryTokens) {
      if (questionTokens.includes(token)) {
        score += 2.5;
      }
    }

    // Life Stage Contextual Affinity
    if (normalizedStage !== 'unknown') {
      if (entry.stage === normalizedStage) {
        score += 3.0;
      } else if (entry.allowedStages && entry.allowedStages.includes(normalizedStage as any)) {
        score += 1.5;
      } else if (entry.stage && entry.stage !== normalizedStage) {
        // Mismatch penalty if explicitly tagged for another stage
        score -= 4.0;
      }
    }

    // Track which query tokens were actually matched by this entry
    const matchedQueryTokens = new Set<string>();
    const entryKeywordWords = new Set<string>();
    for (const kw of entry.keywords) {
      for (const w of sanitizeQuery(kw).split(' ')) {
        if (!STOPWORDS.has(w)) entryKeywordWords.add(w);
      }
    }
    for (const token of queryTokens) {
      if (entryKeywordWords.has(token) || questionTokens.includes(token)) {
        matchedQueryTokens.add(token);
      }
    }

    // False Match Guardrail:
    // If user wrote a multi-word question (>= 3 non-stopwords like "pilot airplane to Mars during cycle"),
    // but only a single generic domain word (e.g. "cycle") matched, do not inflate into a false match!
    const allMatchedAreGeneric = Array.from(matchedQueryTokens).every(t => GENERIC_DOMAIN_WORDS.has(t));
    if (queryTokens.length >= 3 && (matchedQueryTokens.size < 2 || allMatchedAreGeneric)) {
      score = 0;
    }

    if (score > 0) {
      scoredEntries.push({ entry, score });
    }
  }

  // Sort descending by score
  scoredEntries.sort((a, b) => b.score - a.score);

  const topMatch = scoredEntries[0];
  const secondMatch = scoredEntries[1];

  // 5. Confidence Threshold & Ambiguity Checks
  // A solid match requires at least score >= 7 (representing a clear keyword or title hit)
  const CONFIDENCE_THRESHOLD = 7.0;

  if (!topMatch || topMatch.score < CONFIDENCE_THRESHOLD) {
    const fallbackAnswer = buildSafeFallback(normalizedStage, userQuery);
    return {
      answer: fallbackAnswer,
      sourceArticleId: normalizedStage === 'puberty' ? 'first-period-expect' : 'what-is-a-period',
      followUps: normalizedStage === 'puberty'
        ? ['What does a first period feel like?', 'What goes in a school period kit?', 'Is vaginal discharge normal?']
        : ['What is a normal cycle length?', 'Is period pain normal?', 'What Indian foods help with cramps?'],
      safety,
      isFallback: true,
      confidenceScore: topMatch ? topMatch.score : 0
    };
  }

  // Ambiguity check: If top two candidates are very close and belong to different topics, do not force an answer
  if (
    secondMatch &&
    (topMatch.score - secondMatch.score < 1.0) &&
    topMatch.entry.category !== secondMatch.entry.category &&
    topMatch.entry.id !== secondMatch.entry.id
  ) {
    const fallbackAnswer = buildSafeFallback(normalizedStage, userQuery);
    return {
      answer: fallbackAnswer,
      followUps: [topMatch.entry.question, secondMatch.entry.question],
      safety,
      isFallback: true,
      confidenceScore: topMatch.score
    };
  }

  // 6. Assemble Approved Educational Answer
  const answer = { ...topMatch.entry.answer };

  // If user asks something outside their selected stage, add a gentle context note without shame
  if (
    normalizedStage !== 'unknown' &&
    topMatch.entry.stage &&
    topMatch.entry.stage !== normalizedStage
  ) {
    answer.explanation += '\n\n*(Note: While this topic is especially common in another life stage, learning about how different bodies function is natural and helpful.)*';
  }

  return {
    answer,
    sourceArticleId: topMatch.entry.sourceArticleId,
    followUps: topMatch.entry.followUps,
    safety,
    isFallback: false,
    matchedArticleId: topMatch.entry.id,
    confidenceScore: topMatch.score
  };
}
