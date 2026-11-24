import { Quiz, QuizQuestion, validateQuestion } from './types';
import { firstPeriodReadyQuiz } from './first-period-ready';
import { mythOrFactQuiz } from './myth-or-fact';
import { cycleBasicsQuiz } from './cycle-basics';
import { menopauseKnowHowQuiz } from './menopause-know-how';
import { normalOrDoctorQuiz } from './normal-or-doctor';
import { hygieneSmartsQuiz } from './hygiene-smarts';
import { pubertyBodyChangesQuiz } from './puberty-body-changes';
import { consentBoundariesQuiz } from './consent-boundaries';
import { fuelYourCycleQuiz } from './fuel-your-cycle';
import { supportSomeoneElseQuiz } from './support-someone-else';

export * from './types';
export { firstPeriodReadyQuiz } from './first-period-ready';
export { mythOrFactQuiz } from './myth-or-fact';
export { cycleBasicsQuiz } from './cycle-basics';
export { menopauseKnowHowQuiz } from './menopause-know-how';
export { normalOrDoctorQuiz } from './normal-or-doctor';
export { hygieneSmartsQuiz } from './hygiene-smarts';
export { pubertyBodyChangesQuiz } from './puberty-body-changes';
export { consentBoundariesQuiz } from './consent-boundaries';
export { fuelYourCycleQuiz } from './fuel-your-cycle';
export { supportSomeoneElseQuiz } from './support-someone-else';

export const QUIZZES: Quiz[] = [
  firstPeriodReadyQuiz,
  mythOrFactQuiz,
  cycleBasicsQuiz,
  normalOrDoctorQuiz,
  hygieneSmartsQuiz,
  pubertyBodyChangesQuiz,
  consentBoundariesQuiz,
  fuelYourCycleQuiz,
  supportSomeoneElseQuiz,
  menopauseKnowHowQuiz,
];

// Run runtime verification in dev/browser
if (typeof window !== 'undefined') {
  QUIZZES.forEach((quiz: Quiz) => {
    quiz.questions.forEach((q: QuizQuestion) => {
      try {
        validateQuestion(q, quiz.id);
      } catch (err) {
        console.error(`Quiz Validation Error in [${quiz.id}]:`, err);
      }
    });
  });
}

export interface PreparedQuestion extends QuizQuestion {
  originalIndex: number;
  shuffledOptions: string[];
  mappedCorrectAnswers: number[];
}

/**
 * Samples and randomizes a quiz attempt:
 * 1. Takes a randomized sample of size `displayCount` from the pool.
 * 2. Shuffles the options for each question so correct answers aren't fixed in place.
 * 3. Maps `correctAnswers` indices accurately to the shuffled option positions.
 */
export function getPreparedQuizQuestions(quiz: Quiz): PreparedQuestion[] {
  // 1. Shuffle all questions in the pool
  const shuffledPool = [...quiz.questions].sort(() => Math.random() - 0.5);
  
  // 2. Select displayCount questions (or all if displayCount >= pool)
  const targetCount = Math.min(quiz.displayCount || 8, shuffledPool.length);
  const selected = shuffledPool.slice(0, targetCount);

  // 3. For each question, shuffle options while updating mappedCorrectAnswers
  return selected.map((q: QuizQuestion, qIdx: number) => {
    // Pair each option with its original index
    const indexedOptions = q.options.map((opt: string, idx: number) => ({
      text: opt,
      originalIdx: idx,
    }));

    // Shuffle options
    const shuffledIndexed = [...indexedOptions].sort(() => Math.random() - 0.5);

    // Find the new positions of all originally correct options
    const mappedCorrectAnswers = shuffledIndexed
      .map((item: { text: string; originalIdx: number }, newIdx: number) => 
        (q.correctAnswers.includes(item.originalIdx) ? newIdx : -1)
      )
      .filter((idx: number) => idx !== -1);

    return {
      ...q,
      originalIndex: qIdx,
      shuffledOptions: shuffledIndexed.map((item: { text: string }) => item.text),
      mappedCorrectAnswers,
    };
  });
}
