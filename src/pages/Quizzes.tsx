import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Flame 
} from 'lucide-react';
import { QUIZZES, Quiz, QuizQuestion } from '../data/quizzes';
import { useApp } from '../context/AppContext';

export const Quizzes: React.FC = () => {
  const { progress, recordQuizResult } = useApp();
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [copied, setCopied] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<QuizQuestion[]>([]);

  // Only show published quizzes (Myth or Fact, Cycle Basics, First Period Ready)
  const publishedQuizzes = QUIZZES.filter(q => q.published !== false);

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
    setStreak(0);
    setMissedQuestions([]);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#D6457F', '#8B4F7E', '#9B7FD1', '#EDB650']
    });
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !activeQuiz) return;
    setIsAnswerSubmitted(true);

    const currentQ = activeQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQ.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);
      triggerConfetti();
    } else {
      setStreak(0);
      setMissedQuestions(prev => [...prev, currentQ]);
    }
  };

  const handleNextQuestion = () => {
    if (!activeQuiz) return;

    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz finished
      const total = activeQuiz.questions.length;
      const finalScore = score + (selectedOption === activeQuiz.questions[currentQuestionIndex].correctIndex ? 1 : 0);
      const percentage = Math.round((finalScore / total) * 100);

      recordQuizResult({
        quizId: activeQuiz.id,
        quizTitle: activeQuiz.title,
        score: finalScore,
        total,
        percentage
      });

      setIsCompleted(true);
      if (percentage >= 70) {
        triggerConfetti();
      }
    }
  };

  const handleShareResult = () => {
    if (!activeQuiz) return;
    const shareText = `🌸 I scored ${score}/${activeQuiz.questions.length} on SheBlooms "${activeQuiz.title}"! Testing my menstrual health knowledge with confidence.`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentQ = activeQuiz?.questions[currentQuestionIndex];
  const progressPercent = activeQuiz ? Math.round(((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100) : 0;

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Quizzes & Myth Busters
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-md mx-auto">
          Short, friendly checks to test facts and build period confidence.
        </p>

        {/* Badge row ONLY shown after user has earned one */}
        {progress.badges.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
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
                <span className="font-bold text-raspberry uppercase tracking-wider text-[11px]">
                  {activeQuiz.title}
                </span>
                <div className="font-semibold text-orchid dark:text-pink-300">
                  Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                </div>
              </div>

              {streak > 1 && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-extrabold">
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

            {/* Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-lavender/50 dark:bg-pink-950 my-4 overflow-hidden">
              <div
                className="h-full bg-raspberry transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="my-5">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let optionStyle = 'bg-white/70 dark:bg-plum-deep border-petal hover:border-violet/40 text-plum dark:text-pink-100';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-100/80 border-emerald-400 text-emerald-900 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-100/80 border-rose-400 text-rose-900';
                  } else {
                    optionStyle = 'opacity-40 border-transparent';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-petal/60 border-raspberry text-raspberry font-bold ring-2 ring-raspberry/30';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
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
                className={`p-3.5 rounded-xl mb-6 text-xs leading-relaxed ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border border-rose-200 text-rose-900'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {selectedOption === currentQ.correctIndex ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <span>Context & Clarification:</span>
                  )}
                </div>
                <p>{currentQ.explanation}</p>
              </motion.div>
            )}

            {/* Action Button */}
            {!isAnswerSubmitted ? (
              <button
                disabled={selectedOption === null}
                onClick={handleSubmitAnswer}
                className="w-full py-2.5 rounded-xl bg-raspberry text-white font-bold text-xs disabled:opacity-40 shadow-soft-pink hover:bg-raspberry-dark transition-all"
              >
                Confirm Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full py-2.5 rounded-xl bg-raspberry text-white font-bold text-xs shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center justify-center gap-1.5"
              >
                <span>
                  {currentQuestionIndex < activeQuiz.questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
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
            className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple text-center max-w-xl mx-auto space-y-5"
          >
            <span className="text-4xl">🌸</span>
            <div>
              <h2 className="font-serif font-bold text-2xl text-plum dark:text-pink-100">
                Quiz Completed!
              </h2>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                You scored {score} out of {activeQuiz.questions.length} ({Math.round((score / activeQuiz.questions.length) * 100)}%)
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="px-4 py-2 rounded-xl border border-petal text-xs font-bold text-raspberry hover:bg-petal/30"
              >
                Try Again
              </button>
              <button
                onClick={() => setActiveQuiz(null)}
                className="px-5 py-2 rounded-xl bg-raspberry text-white text-xs font-bold shadow-soft-pink"
              >
                All Quizzes
              </button>
            </div>
          </motion.div>
        )}

        {/* 3 Quizzes Library (Icon + Title + "8 questions" + 1 button) */}
        {!activeQuiz && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {publishedQuizzes.map(quiz => {
              const previousResult = progress.quizResults.find(r => r.quizId === quiz.id);

              return (
                <div
                  key={quiz.id}
                  className="rounded-2xl glass-card p-5 border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-3">{quiz.icon}</div>
                    
                    <h3 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100 mb-1 leading-snug">
                      {quiz.title}
                    </h3>
                    
                    <span className="text-xs text-orchid dark:text-pink-300 font-semibold block mb-4">
                      {quiz.questions.length} questions
                    </span>
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
        )}

      </section>

    </div>
  );
};
