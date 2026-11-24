export type AgeTier = '9-12' | '13-17' | 'adult' | 'all';
export type QuestionDifficulty = 'easy' | 'medium' | 'challenge';
export type QuestionType = 'single-choice' | 'multi-select' | 'scenario' | 'myth-fact';

export interface QuizExplanation {
  whyCorrect: string;
  whyWrong?: string; // Explains why common misconceptions are incorrect
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  scenario?: string; // Optional context, e.g. "Meera is 13 and noticed..."
  question: string;
  options: string[];
  correctAnswers: number[]; // Array of correct option indices (0-indexed)
  explanation: QuizExplanation;
  topicTag: string; // e.g., "Cycle Tracking", "Hygiene Habits", "Red Flags", "Diet & Iron"
  difficulty: QuestionDifficulty;
  ageTier: AgeTier;
  relatedArticleId: string;
  doctorReviewFlag?: string; // Marked with [VERIFY: ...] where clinical verification is required
}

export interface Quiz {
  id: string;
  title: string;
  subtitle: string;
  badgeTag: string;
  icon: string;
  color: string;
  category: string;
  targetStages: ('puberty' | 'cycle' | 'menopause' | 'educator')[];
  ageTier: AgeTier;
  displayCount: number; // Number of questions shown per attempt (e.g., 8-10)
  disclaimer?: string;
  published: boolean;
  questions: QuizQuestion[];
}

// Runtime validator to ensure zero malformed questions
export function validateQuestion(q: QuizQuestion, quizId: string): void {
  if (!q.id) throw new Error(`Question in ${quizId} is missing an id`);
  if (!q.question) throw new Error(`Question ${q.id} in ${quizId} is missing question text`);
  if (!q.options || q.options.length < 2) throw new Error(`Question ${q.id} in ${quizId} needs at least 2 options`);
  if (!q.correctAnswers || q.correctAnswers.length === 0) throw new Error(`Question ${q.id} in ${quizId} has no correct answers`);
  q.correctAnswers.forEach((idx: number) => {
    if (idx < 0 || idx >= q.options.length) {
      throw new Error(`Question ${q.id} in ${quizId} has invalid correct index ${idx}`);
    }
  });
  if (!q.explanation?.whyCorrect) throw new Error(`Question ${q.id} in ${quizId} is missing explanation`);
  if (!q.topicTag) throw new Error(`Question ${q.id} in ${quizId} is missing a topicTag`);
  if (!q.relatedArticleId) throw new Error(`Question ${q.id} in ${quizId} is missing relatedArticleId`);
}
