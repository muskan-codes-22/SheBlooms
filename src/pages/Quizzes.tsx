import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Share2, 
  Check, 
  Trophy, 
  Flame,
  BookOpen,
  Sparkles,
  AlertCircle,
  Trash2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { QUIZZES, Quiz, PreparedQuestion, getPreparedQuizQuestions } from '../data/quizzes/index';
import { ARTICLES } from '../data/articles';
import { useApp } from '../context/AppContext';

export const Quizzes: React.FC = () => {
  const { progress, recordQuizResult, clearQuizResults, stageInfo, stage } = useApp();
  
  // Navigation & Filter state
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<PreparedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showReviewList, setShowReviewList] = useState(false);
  const [clearedToast, setClearedToast] = useState(false);

  // Question answers history for review at the end
  const [answeredHistory, setAnsweredHistory] = useState<{
    question: PreparedQuestion;
    userSelections: number[];
    isCorrect: boolean;
  }[]>([]);

  // Automatically align initial filter with user stage if present
  React.useEffect(() => {
    if (stage) {
      setSelectedStageFilter(stage);
    }
  }, [stage]);

  // Published quizzes filtered by stage and sorted with recommended quiz first
  const filteredQuizzes = useMemo(() => {
    let list: Quiz[] = QUIZZES.filter((q: Quiz) => q.published !== false);
    
    if (selectedStageFilter !== 'all') {
      list = list.filter((q: Quiz) => q.targetStages.includes(selectedStageFilter as any));
    }

    if (stageInfo?.recommendedQuizId) {
      list.sort((a: Quiz, b: Quiz) => {
        if (a.id === stageInfo.recommendedQuizId) return -1;
        if (b.id === stageInfo.recommendedQuizId) return 1;
        return 0;
      });
    }
    return list;
  }, [selectedStageFilter, stageInfo]);

  const startQuiz = (quiz: Quiz) => {
    const prepared = getPreparedQuizQuestions(quiz);
    setActiveQuiz(quiz);
    setQuestions(prepared);
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
    setStreak(0);
    setAnsweredHistory([]);
    setShowReviewList(false);
  };

  const triggerConfetti = () => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#D6457F', '#8B4F7E', '#9B7FD1', '#EDB650']
    });
  };

  const handleToggleOption = (idx: number, isMulti: boolean) => {
    if (isAnswerSubmitted) return;

    if (isMulti) {
      setSelectedOptions(prev => 
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    } else {
      setSelectedOptions([idx]);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOptions.length === 0 || !activeQuiz || questions.length === 0) return;
    setIsAnswerSubmitted(true);

    const currentQ = questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQ.type === 'multi-select') {
      const userSorted = [...selectedOptions].sort();
      const correctSorted = [...currentQ.mappedCorrectAnswers].sort();
      isCorrect = (
        userSorted.length === correctSorted.length &&
        userSorted.every((val, i) => val === correctSorted[i])
      );
    } else {
      isCorrect = (
        selectedOptions.length === 1 &&
        currentQ.mappedCorrectAnswers.includes(selectedOptions[0])
      );
    }

    setAnsweredHistory(prev => [
      ...prev,
      {
        question: currentQ,
        userSelections: selectedOptions,
        isCorrect
      }
    ]);

    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);
      triggerConfetti();
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (!activeQuiz || questions.length === 0) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptions([]);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz finished
      const total = questions.length;
      const finalPercentage = Math.round((score / total) * 100);

      recordQuizResult({
        quizId: activeQuiz.id,
        quizTitle: activeQuiz.title,
        score,
        total,
        percentage: finalPercentage
      });

      setIsCompleted(true);
      if (finalPercentage >= 65) {
        triggerConfetti();
      }
    }
  };

  const handleShareResult = () => {
    if (!activeQuiz) return;
    const shareText = `🌸 I explored the "${activeQuiz.title}" quiz on SheBlooms and scored ${score}/${questions.length}! Building real menstrual health confidence.`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClearData = () => {
    if (window.confirm('Clear all your saved quiz scores from this browser? (Your bookmarks and read articles will remain intact).')) {
      clearQuizResults();
      setClearedToast(true);
      setTimeout(() => setClearedToast(false), 3000);
    }
  };

  const currentQ = questions[currentQuestionIndex];
  const progressPercent = questions.length > 0 ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100) : 0;
  const isMultiSelect = currentQ?.type === 'multi-select';

  // Analysis of results
  const topicsMastered = useMemo(() => {
    const mastered = new Set<string>();
    answeredHistory.filter(h => h.isCorrect).forEach(h => mastered.add(h.question.topicTag));
    return Array.from(mastered);
  }, [answeredHistory]);

  const topicsToReview = useMemo(() => {
    const missed = new Set<string>();
    answeredHistory.filter(h => !h.isCorrect).forEach(h => missed.add(h.question.topicTag));
    return Array.from(missed);
  }, [answeredHistory]);

  // Recommended guides based on questions answered
  const recommendedGuides = useMemo(() => {
    if (!answeredHistory.length) return [];
    
    // Prioritize articles from missed questions, then answered questions
    const missedArticleIds = answeredHistory
      .filter(h => !h.isCorrect)
      .map(h => h.question.relatedArticleId);
    
    const allArticleIds = answeredHistory.map(h => h.question.relatedArticleId);
    const uniqueIds = Array.from(new Set([...missedArticleIds, ...allArticleIds]));

    return uniqueIds
      .map(id => ARTICLES.find(a => a.id === id))
      .filter((a): a is typeof ARTICLES[0] => Boolean(a))
      .slice(0, 3);
  }, [answeredHistory]);

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Quizzes & Body Smarts
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-lg mx-auto leading-relaxed">
          Friendly scenario-based questions to build real body awareness, bust taboos, and know when to talk to a doctor.
        </p>

        {/* Badge row ONLY shown after user has earned one */}
        {progress.badges.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {progress.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-bold border bg-gradient-to-r from-petal to-lavender text-plum border-raspberry shadow-xs"
              >
                {badge} ✓
              </span>
            ))}
          </div>
        )}

        {/* Stage Filter Tabs (when not inside an active quiz) */}
        {!activeQuiz && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Quizzes' },
              { id: 'puberty', label: '🌸 Puberty & First Period' },
              { id: 'cycle', label: '🌺 Cycle & Period Care' },
              { id: 'menopause', label: '🍂 Perimenopause & Menopause' },
              { id: 'educator', label: '🤝 Educators & Caregivers' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedStageFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedStageFilter === tab.id
                    ? 'bg-raspberry text-white shadow-soft-pink'
                    : 'bg-white/80 dark:bg-plum-deep text-plum/70 dark:text-pink-200 hover:bg-petal/50 border border-petal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {clearedToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 inline-block px-4 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold"
          >
            Quiz history cleared from this device!
          </motion.div>
        )}
      </section>

      {/* Main Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If Active Quiz is playing */}
        {activeQuiz && !isCompleted && currentQ && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple relative overflow-hidden max-w-3xl mx-auto"
          >
            {/* Top Bar with Quiz Title & Progress */}
            <div className="flex items-center justify-between pb-4 border-b border-petal/60 text-xs">
              <div>
                <span className="font-bold text-raspberry uppercase tracking-wider text-[11px] block">
                  {activeQuiz.title}
                </span>
                <div className="font-semibold text-orchid dark:text-pink-300 flex items-center gap-2 mt-0.5">
                  <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-petal/60 text-plum font-bold">
                    {currentQ.topicTag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {streak > 1 && (
                  <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-extrabold animate-pulse">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>{streak} Streak!</span>
                  </div>
                )}

                <button
                  onClick={() => setActiveQuiz(null)}
                  className="text-plum/50 hover:text-raspberry font-semibold underline text-xs"
                >
                  Exit Quiz
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-lavender/50 dark:bg-pink-950 my-4 overflow-hidden">
              <div
                className="h-full bg-raspberry transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Scenario Box (if present) */}
            {currentQ.scenario && (
              <div className="mb-4 p-3.5 rounded-xl bg-petal/40 dark:bg-pink-950/40 border border-petal/70 text-xs sm:text-sm text-plum dark:text-pink-200 leading-relaxed font-normal">
                <span className="font-bold text-raspberry mr-1.5 inline-flex items-center gap-1">
                  <span>Scenario:</span>
                </span>
                <span>{currentQ.scenario}</span>
              </div>
            )}

            {/* Question Text & Multi-select Hint */}
            <div className="my-4">
              <h3 className="font-serif font-bold text-base sm:text-xl text-plum dark:text-pink-100 leading-snug">
                {currentQ.question}
              </h3>
              {isMultiSelect && (
                <p className="text-[11px] text-raspberry font-bold mt-1">
                  💡 Select all options that apply
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-6" role={isMultiSelect ? 'group' : 'radiogroup'} aria-label="Quiz options">
              {currentQ.shuffledOptions.map((option: string, idx: number) => {
                const isSelected = selectedOptions.includes(idx);
                const isCorrectAnswer = currentQ.mappedCorrectAnswers.includes(idx);
                let optionStyle = 'bg-white/70 dark:bg-plum-deep border-petal hover:border-violet/40 text-plum dark:text-pink-100';

                if (isAnswerSubmitted) {
                  if (isCorrectAnswer) {
                    optionStyle = 'bg-emerald-100/90 border-emerald-400 text-emerald-950 font-semibold';
                  } else if (isSelected && !isCorrectAnswer) {
                    optionStyle = 'bg-rose-100/90 border-rose-400 text-rose-950 font-normal';
                  } else {
                    optionStyle = 'opacity-40 border-transparent';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-petal/70 border-raspberry text-raspberry font-bold ring-2 ring-raspberry/30';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    role={isMultiSelect ? 'checkbox' : 'radio'}
                    aria-checked={isSelected}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleToggleOption(idx, isMultiSelect)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 shrink-0 rounded-${isMultiSelect ? 'md' : 'full'} border flex items-center justify-center text-[10px] ${
                        isSelected 
                          ? 'bg-raspberry border-raspberry text-white' 
                          : 'border-plum/30'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-relaxed">{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrectAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer is submitted */}
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl mb-6 text-xs leading-relaxed ${
                  (isMultiSelect 
                    ? (selectedOptions.length === currentQ.mappedCorrectAnswers.length && selectedOptions.every(val => currentQ.mappedCorrectAnswers.includes(val)))
                    : (selectedOptions.length === 1 && currentQ.mappedCorrectAnswers.includes(selectedOptions[0]))
                  )
                    ? 'bg-emerald-50/90 border border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/90 border border-rose-200 text-rose-950'
                }`}
              >
                <div className="font-bold mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
                  {(isMultiSelect 
                    ? (selectedOptions.length === currentQ.mappedCorrectAnswers.length && selectedOptions.every(val => currentQ.mappedCorrectAnswers.includes(val)))
                    : (selectedOptions.length === 1 && currentQ.mappedCorrectAnswers.includes(selectedOptions[0]))
                  ) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Nice thinking! That's correct.</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Good to know! Here is the science:</span>
                    </>
                  )}
                </div>
                
                <p className="mt-1">{currentQ.explanation.whyCorrect}</p>
                
                {currentQ.explanation.whyWrong && (
                  <p className="mt-2 text-[11px] opacity-90 border-t border-black/5 pt-1.5">
                    <span className="font-semibold">Why other options mislead: </span>
                    {currentQ.explanation.whyWrong}
                  </p>
                )}
              </motion.div>
            )}

            {/* Action Button */}
            {!isAnswerSubmitted ? (
              <button
                disabled={selectedOptions.length === 0}
                onClick={handleSubmitAnswer}
                className="w-full py-2.5 rounded-xl bg-raspberry text-white font-bold text-xs disabled:opacity-40 shadow-soft-pink hover:bg-raspberry-dark transition-all"
              >
                {isMultiSelect ? 'Confirm Selections' : 'Confirm Answer'}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full py-2.5 rounded-xl bg-raspberry text-white font-bold text-xs shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center justify-center gap-1.5"
              >
                <span>
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Learning Summary'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        )}

        {/* Results Screen */}
        {activeQuiz && isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple max-w-2xl mx-auto space-y-6"
          >
            <div className="text-center">
              <span className="text-4xl">🌸</span>
              <h2 className="font-serif font-bold text-2xl text-plum dark:text-pink-100 mt-2">
                Quiz Completed!
              </h2>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                You correctly answered <span className="font-bold text-plum">{score}</span> of <span className="font-bold">{questions.length}</span> questions ({Math.round((score / questions.length) * 100)}%)
              </p>
              
              <p className="text-xs text-plum/80 dark:text-pink-200 mt-2 italic font-medium">
                {score === questions.length 
                  ? "Outstanding! You're a true champion of body literacy." 
                  : score >= Math.ceil(questions.length * 0.7)
                  ? "Great progress! Every question builds genuine body confidence."
                  : "Good effort! Taking this quiz is a powerful step in understanding your cycle."}
              </p>
            </div>

            {/* Topic Mastery Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {topicsMastered.length > 0 && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Concepts Mastered</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {topicsMastered.map((topic, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-white text-emerald-800 text-[11px] font-semibold border border-emerald-100">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {topicsToReview.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Areas to Explore</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {topicsToReview.map((topic, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-white text-amber-800 text-[11px] font-semibold border border-amber-100">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Read this next recommendations */}
            {recommendedGuides.length > 0 && (
              <div className="p-4 rounded-xl bg-white/70 dark:bg-plum-deep border border-petal">
                <div className="flex items-center gap-1.5 font-bold text-xs text-plum dark:text-pink-100 mb-2.5">
                  <BookOpen className="w-4 h-4 text-raspberry" />
                  <span>Recommended Guides to Read Next:</span>
                </div>
                <div className="space-y-2">
                  {recommendedGuides.map(article => (
                    <Link
                      key={article.id}
                      to={`/learn/${article.id}`}
                      className="p-2.5 rounded-lg border border-petal/60 hover:border-raspberry bg-white/60 dark:bg-plum/20 hover:bg-petal/30 transition-all flex items-center justify-between text-xs group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{article.icon}</span>
                        <div>
                          <div className="font-bold text-plum dark:text-pink-100 group-hover:text-raspberry transition-colors">
                            {article.title}
                          </div>
                          <div className="text-[11px] text-orchid dark:text-pink-300">
                            {article.readTime} read
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-plum/40 group-hover:text-raspberry group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle Full Question Review */}
            <div>
              <button
                onClick={() => setShowReviewList(!showReviewList)}
                className="w-full py-2 px-3 rounded-xl border border-petal text-xs font-bold text-plum hover:bg-petal/30 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>{showReviewList ? 'Hide Question Review' : 'Review All Questions & Answers'}</span>
                {showReviewList ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {showReviewList && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-3 overflow-hidden text-left text-xs"
                  >
                    {answeredHistory.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border ${
                          item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1">
                          <span className="text-plum">Q{idx + 1}: {item.question.topicTag}</span>
                          <span className={item.isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                            {item.isCorrect ? 'Correct ✓' : 'Review ✗'}
                          </span>
                        </div>
                        <p className="font-semibold text-plum mb-2">{item.question.question}</p>
                        <p className="text-[11px] text-plum/80 leading-relaxed">{item.question.explanation.whyCorrect}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Health Disclaimer */}
            <div className="p-3 rounded-xl bg-petal/30 border border-petal/60 text-[11px] text-orchid dark:text-pink-300 text-center leading-relaxed">
              ⚠️ <strong>Note:</strong> This quiz is designed for health awareness and education, not medical diagnosis. Every body is unique—if you experience concerning symptoms, please speak with a doctor or gynaecologist.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="px-4 py-2 rounded-xl border border-petal text-xs font-bold text-raspberry hover:bg-petal/30 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz (Shuffled)</span>
              </button>
              
              <button
                onClick={handleShareResult}
                className="px-4 py-2 rounded-xl border border-petal text-xs font-bold text-plum hover:bg-petal/30 flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied Link!' : 'Share Result'}</span>
              </button>

              <button
                onClick={() => setActiveQuiz(null)}
                className="px-5 py-2 rounded-xl bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark"
              >
                All Quizzes
              </button>
            </div>
          </motion.div>
        )}

        {/* Published Quizzes Library */}
        {!activeQuiz && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredQuizzes.map((quiz: Quiz) => {
                const previousResult = progress.quizResults.find(r => r.quizId === quiz.id);
                const isRecommended = stageInfo?.recommendedQuizId === quiz.id;

                return (
                  <div
                    key={quiz.id}
                    className="rounded-2xl glass-card p-5 border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl">{quiz.icon}</div>
                        <div className="flex items-center gap-1.5">
                          {isRecommended && (
                            <span className="px-2 py-0.5 rounded-md bg-raspberry text-white font-bold text-[10px] shadow-xs">
                              Recommended
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-md bg-lavender/60 text-plum font-semibold text-[10px]">
                            {quiz.ageTier === 'all' ? 'All ages' : `Ages ${quiz.ageTier}`}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100 mb-1 leading-snug">
                        {quiz.title}
                      </h3>
                      
                      <p className="text-xs text-plum/70 dark:text-pink-200 mb-3 line-clamp-2 leading-relaxed">
                        {quiz.subtitle}
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-orchid dark:text-pink-300 font-semibold mb-4">
                        <span>{quiz.displayCount} questions <span className="opacity-60">(pool of {quiz.questions.length})</span></span>
                        {previousResult && (
                          <span className="text-emerald-700 font-bold">
                            Best: {previousResult.score}/{previousResult.total} ({previousResult.percentage}%)
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => startQuiz(quiz)}
                      className="w-full py-2.5 rounded-xl bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{previousResult ? 'Retake Quiz' : 'Start Quiz'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Privacy note & Clear my quiz data */}
            <div className="pt-8 border-t border-petal/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-orchid dark:text-pink-300">
              <p>
                🔒 All quiz progress is stored privately in your browser's localStorage. Zero tracking.
              </p>
              {progress.quizResults.length > 0 && (
                <button
                  onClick={handleClearData}
                  className="inline-flex items-center gap-1 text-[11px] text-plum/60 hover:text-rose-600 font-medium underline transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear my quiz data</span>
                </button>
              )}
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
