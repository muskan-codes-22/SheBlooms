export interface QuizResult {
  quizId: string;
  quizTitle: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export interface UserProgress {
  stage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null;
  savedTipIds: string[];
  readArticleIds: string[];
  completedChecklistIds: string[];
  quizResults: QuizResult[];
  questionsAskedCount: number;
  badges: string[];
}

const STORAGE_KEY = 'sheblooms_user_data_v1';

const DEFAULT_PROGRESS: UserProgress = {
  stage: null,
  savedTipIds: [],
  readArticleIds: [],
  completedChecklistIds: [],
  quizResults: [],
  questionsAskedCount: 0,
  badges: [],
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch (err) {
    console.error('Failed to load user progress', err);
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveUserProgress(progress: Partial<UserProgress>): UserProgress {
  try {
    const current = loadUserProgress();
    const updated = { ...current, ...progress };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save user progress', err);
    return loadUserProgress();
  }
}

export function clearAllUserData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('sheblooms_chat_history');
  } catch (err) {
    console.error('Failed to clear user data', err);
  }
}
