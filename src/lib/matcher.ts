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
import { classifyIntent } from './intent';
import { calculateNextPeriod } from './cycleCalculator';

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
  'your', 'this', 'that', 'these', 'those', 'there', 'some', 'during',
  'tell', 'me', 'please', 'hey', 'hello', 'got', 'will'
]);

/**
 * Generic domain words that appear in many questions.
 * Matching only these words without other topic tokens indicates an unrelated question.
 */
const GENERIC_DOMAIN_WORDS = new Set([
  'cycle', 'period', 'periods', 'menses', 'menstruation', 'blood', 'body', 'normal',
  'bleed', 'bleeding', 'days', 'like', 'feel', 'get', 'next'
]);

/**
 * Central Question Matching & Safety Enforcement Engine.
 */
export function findBestMatch(userQuery: string, currentStage?: string | null): MatcherResponse {
  // 1. Run Central Medical Safety Layer FIRST
  const safety = checkSafety(userQuery, currentStage);
  const normalizedStage = safety.normalizedStage;

  // Strict Safety Override (Crisis, Red Flags, Medical Interventions, Weird Questions)
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

  // 2. Classify User Intent
  const intentResult = classifyIntent(userQuery);

  // Script: Devanagari Hindi Check
  if (intentResult.isHindiDevanagari) {
    return {
      answer: {
        opener: 'Namaste! 🌸',
        explanation: 'SheBloom is currently optimized to provide accurate guidance in English. You can ask your question in English or Hinglish (for example: "mera period late hai" or "is period pain normal").',
        tips: [
          'Try typing your question using the English alphabet.',
          'Examples: "How do I use a pad?" or "Why do cramps happen?".',
          'Your health questions stay 100% private on your own device.'
        ]
      },
      sourceArticleId: 'what-is-a-period',
      followUps: ['How do I use a pad?', 'Is period pain normal?', 'What is a normal cycle length?'],
      safety,
      isFallback: true,
      confidenceScore: 0
    };
  }

  // Date Prediction Intent (Computation in code, never text match guessing)
  if (intentResult.intent === 'date_prediction') {
    if (intentResult.extractedDateStr) {
      const calcResult = calculateNextPeriod(intentResult.extractedDateStr, new Date(), normalizedStage === 'puberty');
      if (calcResult.isValid) {
        return {
          answer: {
            opener: calcResult.message.opener,
            explanation: calcResult.message.explanation,
            tips: calcResult.message.tips
          },
          sourceArticleId: 'cycle-basics',
          followUps: [
            'How do I track my cycle on a calendar?',
            'What is a normal cycle length in teens?',
            'Is period pain normal?'
          ],
          safety,
          isFallback: false,
          confidenceScore: 100
        };
      }
    }

    // Date prediction without a valid date: ask clarifying question
    if (
      userQuery.toLowerCase().includes('when') || 
      userQuery.toLowerCase().includes('due') || 
      userQuery.toLowerCase().includes('next period') ||
      userQuery.toLowerCase().includes('calculate')
    ) {
      return {
        answer: {
          opener: 'When did your last period start? 🌸',
          explanation: 'To help calculate your estimated next period window, what date did your last period begin? You can type a date like "2 Nov", "Nov 2nd", or "2/11".',
          tips: [
            'Tell me the day your bleeding first started.',
            'Cycles in teens commonly range between 21 and 45 days.',
            'Your dates stay 100% private on your device.'
          ]
        },
        sourceArticleId: 'cycle-basics',
        followUps: ['I got my period on 2 Nov', 'How do I count my cycle days?', 'What is a normal cycle length?'],
        safety,
        isFallback: false,
        confidenceScore: 90
      };
    }
  }

  // Out of Scope Intent
  if (intentResult.intent === 'out_of_scope') {
    return {
      answer: {
        opener: 'I specialize in menstrual health and puberty 🌸',
        explanation: "I am SheBloom, your private menstrual and body health guide. I can't answer general trivia, politics, or unrelated topics, but I'm here for any questions about your body, periods, or cycle!",
        tips: [
          'Ask about: "normal cycle length", "cramp relief", "how to use a pad", or "ovulation signs".',
          'Explore our Learning Hub for verified stage guides.',
          'Your questions remain private on your device.'
        ]
      },
      sourceArticleId: 'what-is-a-period',
      followUps: ['What is a normal cycle length?', 'Is period pain normal?', 'How do I use a pad?'],
      safety,
      isFallback: true,
      confidenceScore: 0
    };
  }

  // Unclear Intent (Keyboard mashing or too short)
  if (intentResult.intent === 'unclear') {
    return {
      answer: {
        opener: "I'm not sure I understood that. Could you tell me a bit more? 🌸",
        explanation: 'Every question about your body is welcome here. Try asking in simpler words or pick from the suggestions below.',
        tips: [
          'You can ask about first periods, cramps, pads, or cycle tracking.',
          'If you have severe pain or heavy bleeding, speaking with a parent or doctor is always safe.',
          'Browse our Learning Hub for step-by-step guides.'
        ]
      },
      sourceArticleId: normalizedStage === 'puberty' ? 'first-period-expect' : 'what-is-a-period',
      followUps: normalizedStage === 'puberty'
        ? ['What does a first period feel like?', 'How do I use a pad?', 'Is period pain normal?']
        : ['What is a normal cycle length?', 'Is period pain normal?', 'How do I recognize my ovulation window?'],
      safety,
      isFallback: true,
      confidenceScore: 0
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
    if (normalizedStage === 'puberty') {
      if (entry.minAgeTier === 'adult') continue;
      if (entry.allowedStages && !entry.allowedStages.includes('puberty')) continue;
    }

    let score = 0;
    const cleanEntryQuestion = sanitizeQuery(entry.question);

    // Exact question match
    if (cleanUserQuery === cleanEntryQuestion) {
      score += 35;
    }

    // Keyword & Phrase Matching
    for (const kw of entry.keywords) {
      const cleanKw = sanitizeQuery(kw);

      if (cleanKw.includes(' ')) {
        // Multi-word phrase exact match in query
        if (cleanUserQuery.includes(cleanKw)) {
          score += 18;
        }
      } else {
        // Single keyword exact match in query
        if (cleanUserQuery.includes(cleanKw)) {
          score += 8;
        }
      }

      // Word-level overlap
      const kwWords = cleanKw.split(' ').filter(w => !STOPWORDS.has(w) && !GENERIC_DOMAIN_WORDS.has(w));
      for (const kwWord of kwWords) {
        if (queryTokens.includes(kwWord)) {
          score += 4.0;
        }
      }
    }

    // Question title token overlap (excluding generic words)
    const questionTokens = cleanEntryQuestion.split(' ').filter(w => !STOPWORDS.has(w) && !GENERIC_DOMAIN_WORDS.has(w));
    for (const token of queryTokens) {
      if (questionTokens.includes(token)) {
        score += 3.0;
      }
    }

    // Life Stage Contextual Affinity
    if (normalizedStage !== 'unknown') {
      if (entry.stage === normalizedStage) {
        score += 3.0;
      } else if (entry.allowedStages && entry.allowedStages.includes(normalizedStage as any)) {
        score += 1.5;
      } else if (entry.stage && entry.stage !== normalizedStage) {
        score -= 4.0;
      }
    }

    // Track which non-generic query tokens were actually matched
    const matchedNonGenericTokens = new Set<string>();
    const entryKeywordWords = new Set<string>();
    for (const kw of entry.keywords) {
      for (const w of sanitizeQuery(kw).split(' ')) {
        if (!STOPWORDS.has(w) && !GENERIC_DOMAIN_WORDS.has(w)) entryKeywordWords.add(w);
      }
    }
    for (const token of queryTokens) {
      if (!GENERIC_DOMAIN_WORDS.has(token) && (entryKeywordWords.has(token) || questionTokens.includes(token))) {
        matchedNonGenericTokens.add(token);
      }
    }

    // If query has multiple non-generic tokens but entry matched none of them, discard
    const nonGenericQueryTokens = queryTokens.filter(t => !GENERIC_DOMAIN_WORDS.has(t));
    if (nonGenericQueryTokens.length >= 2 && matchedNonGenericTokens.size === 0) {
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

  // Ambiguity check
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
