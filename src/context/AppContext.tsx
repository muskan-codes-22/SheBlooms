import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadUserProgress, saveUserProgress, clearAllUserData, UserProgress, QuizResult } from '../lib/storage';
import { STAGES, StageInfo } from '../data/stages';

interface AppContextType {
  stage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null;
  stageInfo: StageInfo | null;
  setStage: (stage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null) => void;
  welcomingStage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null;
  setWelcomingStage: (stage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null) => void;
  progress: UserProgress;
  toggleSaveTip: (tipId: string) => void;
  markArticleRead: (articleId: string) => void;
  toggleChecklistItem: (itemId: string) => void;
  recordQuizResult: (result: Omit<QuizResult, 'date'>) => void;
  incrementQuestionsAsked: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress);
  const [welcomingStage, setWelcomingStage] = useState<'puberty' | 'cycle' | 'menopause' | 'educator' | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('sheblooms_dark') === 'true';
  });

  // Sync dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sheblooms_dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sheblooms_dark', 'false');
    }
  }, [isDarkMode]);

  const stage = progress.stage;
  const stageInfo = stage ? STAGES[stage] : null;

  const setStage = (newStage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null) => {
    const updated = saveUserProgress({ stage: newStage });
    setProgress(updated);
    if (newStage) {
      setWelcomingStage(newStage);
    }
  };

  const toggleSaveTip = (tipId: string) => {
    const saved = progress.savedTipIds.includes(tipId)
      ? progress.savedTipIds.filter(id => id !== tipId)
      : [...progress.savedTipIds, tipId];
    const updated = saveUserProgress({ savedTipIds: saved });
    setProgress(updated);
  };

  const markArticleRead = (articleId: string) => {
    if (!progress.readArticleIds.includes(articleId)) {
      const read = [...progress.readArticleIds, articleId];
      const updated = saveUserProgress({ readArticleIds: read });
      setProgress(updated);
    }
  };

  const toggleChecklistItem = (itemId: string) => {
    const items = progress.completedChecklistIds.includes(itemId)
      ? progress.completedChecklistIds.filter(id => id !== itemId)
      : [...progress.completedChecklistIds, itemId];
    const updated = saveUserProgress({ completedChecklistIds: items });
    setProgress(updated);
  };

  const recordQuizResult = (result: Omit<QuizResult, 'date'>) => {
    const newEntry: QuizResult = {
      ...result,
      date: new Date().toISOString()
    };
    const updatedResults = [newEntry, ...progress.quizResults.filter(q => q.quizId !== result.quizId)];

    // Unlock badges based on performance
    const newBadges = [...progress.badges];
    if (!newBadges.includes('🌸 Welcome Bud')) {
      newBadges.push('🌸 Welcome Bud');
    }
    if (result.percentage >= 60 && !newBadges.includes('🌷 Bloomer')) {
      newBadges.push('🌷 Bloomer');
    }
    if (result.percentage >= 80 && !newBadges.includes('🌺 Full Bloom')) {
      newBadges.push('🌺 Full Bloom');
    }
    if (result.percentage === 100 && !newBadges.includes('🏆 Knowledge Queen')) {
      newBadges.push('🏆 Knowledge Queen');
    }

    const updated = saveUserProgress({
      quizResults: updatedResults,
      badges: newBadges
    });
    setProgress(updated);
  };

  const incrementQuestionsAsked = () => {
    const count = progress.questionsAskedCount + 1;
    const updated = saveUserProgress({ questionsAskedCount: count });
    setProgress(updated);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const resetAllData = () => {
    clearAllUserData();
    setProgress(loadUserProgress());
    setWelcomingStage(null);
  };

  return (
    <AppContext.Provider
      value={{
        stage,
        stageInfo,
        setStage,
        welcomingStage,
        setWelcomingStage,
        progress,
        toggleSaveTip,
        markArticleRead,
        toggleChecklistItem,
        recordQuizResult,
        incrementQuestionsAsked,
        isDarkMode,
        toggleDarkMode,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
