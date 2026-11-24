import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  RotateCcw, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { STAGES, StageId } from '../data/stages';

// Stage-specific interactive components (100% interactive UI, ZERO images)
import { FirstPeriodCare } from '../components/care/FirstPeriodCare';
import { CyclePeriodCare } from '../components/care/CyclePeriodCare';
import { MenopauseCare } from '../components/care/MenopauseCare';
import { EducatorCare } from '../components/care/EducatorCare';

export const CareGuides: React.FC = () => {
  const { stage, setStage, progress, toggleChecklistItem } = useApp();
  
  // Local active tab for stage (defaults to context stage or 'puberty')
  const [activeStageId, setActiveStageId] = useState<StageId>(stage || 'puberty');

  // Keep in sync if app stage changes externally
  useEffect(() => {
    if (stage) {
      setActiveStageId(stage);
    }
  }, [stage]);

  const stagesList = [
    {
      id: 'puberty' as StageId,
      name: 'First Period',
      tagline: 'Puberty & First Cycle (Ages 9–17)',
      icon: '🌷',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'cycle' as StageId,
      name: 'Cycle & Period Care',
      tagline: 'Daily Cycle Tracking & Pain Relief',
      icon: '🔄',
      color: 'from-rose-500 to-orchid'
    },
    {
      id: 'menopause' as StageId,
      name: 'Perimenopause & Menopause',
      tagline: 'Symptom Care & Health Milestones',
      icon: '🌿',
      color: 'from-purple-600 to-indigo-500'
    },
    {
      id: 'educator' as StageId,
      name: 'Educators & Caregivers',
      tagline: 'Teaching Kits & Scripted Conversations',
      icon: '🤝',
      color: 'from-amber-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      
      {/* Top Banner / Hero */}
      <section className="bg-gradient-to-b from-blush/60 via-lavender-light/30 to-transparent pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-petal/40">
        <div className="max-w-6xl mx-auto">
          
          {/* Trust & Privacy Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/60 border border-petal text-xs font-bold text-raspberry shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Interactive Care Toolkits · 100% Private (Device Only)</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-orchid dark:text-pink-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Evidence-based · Aligned with WHO & MoHFW</span>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight leading-tight">
              Care Guides & <br />
              <span className="bg-gradient-to-r from-raspberry via-pink-600 to-orchid bg-clip-text text-transparent">
                Practical Toolkits
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-plum/80 dark:text-pink-200/80 leading-relaxed">
              Do-it-now interactive checklists, symptom relief toolkits, and step-by-step guidance.
              Designed to help you take action immediately, with zero judgment and zero tracking.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className="mt-8 pt-4 border-t border-petal/50">
            <div className="text-xs font-bold uppercase tracking-wider text-orchid dark:text-pink-300 mb-3 flex items-center justify-between">
              <span>Select Life Stage Toolkit</span>
              {stage && stage !== activeStageId && (
                <button
                  onClick={() => setActiveStageId(stage)}
                  className="text-[11px] text-raspberry hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Switch back to your selected stage ({STAGES[stage]?.name.split('/')[0].trim()})</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {stagesList.map((s) => {
                const isActive = activeStageId === s.id;
                const isSelectedInContext = stage === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveStageId(s.id);
                      if (stage !== s.id) {
                        setStage(s.id);
                      }
                    }}
                    className={`relative p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-white dark:bg-plum-deep border-raspberry shadow-soft-pink ring-2 ring-raspberry/20'
                        : 'bg-white/60 dark:bg-plum/40 border-petal hover:border-raspberry/50 hover:bg-white dark:hover:bg-plum-deep/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      {isSelectedInContext && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-petal text-raspberry border border-petal">
                          Active Stage
                        </span>
                      )}
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${isActive ? 'text-raspberry' : 'text-plum dark:text-pink-100'}`}>
                        {s.name}
                      </div>
                      <div className="text-[10px] text-orchid/80 dark:text-pink-300/80 mt-0.5 line-clamp-1">
                        {s.tagline}
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeStageCareIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-raspberry rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Stage Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <AnimatePresence mode="wait">
          {activeStageId === 'puberty' && (
            <motion.div
              key="puberty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <FirstPeriodCare
                completedChecklistIds={progress.completedChecklistIds}
                onToggleChecklist={toggleChecklistItem}
              />
            </motion.div>
          )}

          {activeStageId === 'cycle' && (
            <motion.div
              key="cycle"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <CyclePeriodCare />
            </motion.div>
          )}

          {activeStageId === 'menopause' && (
            <motion.div
              key="menopause"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <MenopauseCare />
            </motion.div>
          )}

          {activeStageId === 'educator' && (
            <motion.div
              key="educator"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <EducatorCare />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Cross-Navigation: Connect with Learn & Quizzes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-petal/60">
        <div className="bg-gradient-to-br from-lavender/40 via-blush/60 to-petal/30 rounded-3xl p-6 sm:p-8 border border-petal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-raspberry text-xs font-bold border border-petal">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Want to test what you have learned?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum dark:text-pink-100">
                Put your care skills to the test with scenario quizzes
              </h3>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/80 leading-relaxed">
                Take our myth-busting and scenario-based quizzes, or explore in-depth clinical articles in our Learn library.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                to="/quiz"
                className="px-5 py-3 rounded-2xl bg-raspberry text-white font-bold text-xs sm:text-sm hover:bg-raspberry-dark transition-all text-center shadow-soft-pink flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Take a Scenario Quiz</span>
              </Link>
              <Link
                to="/learn"
                className="px-5 py-3 rounded-2xl bg-white dark:bg-plum text-plum dark:text-pink-100 border border-petal hover:border-raspberry transition-all text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Articles</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
