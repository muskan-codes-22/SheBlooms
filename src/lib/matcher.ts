import { QA_DATABASE, QAEntry } from '../data/qa';
import { ARTICLES } from '../data/articles';
import { checkSafety, SafetyCheckResult } from './safety';

export interface MatcherResponse {
  answer: {
    opener: string;
    explanation: string;
    tips: string[];
    doctorAlert?: string;
  };
  sourceArticleId?: string;
  followUps: string[];
  safety: SafetyCheckResult;
  isFallback?: boolean;
}

export function findBestMatch(userQuery: string, currentStage?: string): MatcherResponse {
  const safety = checkSafety(userQuery);

  if (safety.isCrisis) {
    return {
      answer: {
        opener: 'Dear bloom, please take a gentle breath 🌸',
        explanation: safety.message || 'Please reach out to someone who cares about you or a professional helpline.',
        tips: [
          'Talk with a parent, school counselor, or doctor right now.',
          'Call a free, confidential mental health helpline.',
          'Your health, feelings, and life truly matter.'
        ]
      },
      followUps: ['How do I talk to my family?', 'What are healthy coping strategies?'],
      safety
    };
  }

  const queryTokens = userQuery.toLowerCase().split(/[\s,?.!]+/).filter(t => t.length > 2);
  let bestScore = 0;
  let bestEntry: QAEntry | null = null;

  for (const entry of QA_DATABASE) {
    let score = 0;

    // Check keyword hits
    for (const kw of entry.keywords) {
      const kwWords = kw.toLowerCase().split(' ');
      if (userQuery.toLowerCase().includes(kw.toLowerCase())) {
        score += 8;
      }
      for (const kwWord of kwWords) {
        if (queryTokens.includes(kwWord)) {
          score += 3;
        }
      }
    }

    // Check question title overlap
    const questionTokens = entry.question.toLowerCase().split(/[\s,?.!]+/);
    for (const token of queryTokens) {
      if (questionTokens.includes(token)) {
        score += 2;
      }
    }

    // Boost if matching current stage
    if (currentStage) {
      const entryStages = entry.stage
        ? [entry.stage]
        : (ARTICLES.find(a => a.id === entry.sourceArticleId)?.targetStages || []);
      if (entryStages.includes(currentStage as any)) {
        score += 1.5;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  // If score is decent (>= 3)
  if (bestEntry && bestScore >= 3) {
    const answer = { ...bestEntry.answer };
    if (safety.isRedFlag && !answer.doctorAlert) {
      answer.doctorAlert = safety.doctorRecommendation;
    }
    return {
      answer,
      sourceArticleId: bestEntry.sourceArticleId,
      followUps: bestEntry.followUps,
      safety
    };
  }

  // Fallback when no direct match found
  return {
    isFallback: true,
    answer: {
      opener: 'Thank you for asking! While I don’t have an exact clinical match for that specific phrasing, here is gentle guidance 🌸',
      explanation: 'Menstrual cycles and bodily changes are deeply individual. For common topics like cycle length (21–35 days), cramp relief (warmth, hydration, magnesium), or hygiene (washing only outer skin), our reviewed guides have reliable information.',
      tips: [
        'Explore our Learning Hub for reviewed articles on puberty, cycle care, and menopause.',
        'Try asking: "Is period pain normal?", "How do I use a tampon?", or "What are the 4 cycle phases?".',
        'Always speak to a doctor or trusted health worker if you notice sudden changes in your body.'
      ],
      doctorAlert: safety.isRedFlag ? safety.doctorRecommendation : undefined
    },
    sourceArticleId: 'what-is-a-period',
    followUps: ['Is period pain normal?', 'What is a normal cycle length?', 'How do I use a tampon?', 'What are the 4 phases of the cycle?'],
    safety
  };
}

