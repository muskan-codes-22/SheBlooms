import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  CheckCircle2, 
  AlertCircle,
  AlertTriangle, 
  ShieldCheck, 
  Flame, 
  Moon, 
  Apple, 
  Activity,
  Check,
  RotateCcw
} from 'lucide-react';
import { 
  PRODUCT_GUIDES, 
  FIRST_PERIOD_CHECKLIST, 
  evaluatePainFlow, 
  ProductGuide 
} from '../data/careGuides';
import { useApp } from '../context/AppContext';
import { FEATURES } from '../config/features';

export const CareGuides: React.FC = () => {
  const { progress, toggleChecklistItem } = useApp();
  const [selectedProductId, setSelectedProductId] = useState<string>('pads');

  // Interactive Self-Assessment State (for feature flag)
  const [flowLevel, setFlowLevel] = useState<'light' | 'moderate' | 'heavy' | 'very-heavy'>('moderate');
  const [painLevel, setPainLevel] = useState<number>(3);
  const [hasClots, setHasClots] = useState<boolean>(false);
  const [evalResult, setEvalResult] = useState<any | null>(null);

  const selectedProduct: ProductGuide = 
    PRODUCT_GUIDES.find(p => p.id === selectedProductId) || PRODUCT_GUIDES[0];

  const totalChecklistItems = FIRST_PERIOD_CHECKLIST.length;
  const completedCount = FIRST_PERIOD_CHECKLIST.filter(item => 
    progress.completedChecklistIds?.includes(item.id)
  ).length;
  const completionPercentage = Math.round((completedCount / totalChecklistItems) * 100);

  const handleEvaluate = () => {
    const res = evaluatePainFlow(painLevel, flowLevel);
    setEvalResult(res);
  };

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Care & Product Guides
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-lg mx-auto">
          Clear, practical guidance on using menstrual products comfortably and hygienically.
        </p>
      </section>

      {/* Main Clean Product Guide (Tabs + 5 Steps) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
          
          {/* Product Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {PRODUCT_GUIDES.map(prod => {
              const active = prod.id === selectedProduct.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    active
                      ? 'bg-raspberry text-white shadow-soft-pink'
                      : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-violet/40'
                  }`}
                >
                  <span className="text-base">{prod.icon}</span>
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Product Clean View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* Product Header: Name + One Small Info Line (Change Frequency) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-petal/60 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="text-3xl">{selectedProduct.icon}</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-plum dark:text-pink-100">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs text-orchid dark:text-pink-300">
                      {selectedProduct.tagline}
                    </p>
                  </div>
                </div>

                {/* One small info line: Change Frequency */}
                <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-lavender/50 dark:bg-plum/60 border border-lavender text-xs">
                  <span className="text-orchid dark:text-pink-300 font-bold">Change frequency:</span>
                  <span className="text-plum dark:text-pink-100 font-bold">{selectedProduct.changeFrequency}</span>
                </div>
              </div>

              {/* 5 Step Walkthrough Cards: Each step is a short title + one short sentence */}
              <div className="my-8">
                <h3 className="font-serif font-bold text-base text-plum dark:text-pink-100 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-raspberry" />
                  <span>How to Use: 5 Simple Steps</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
                  {selectedProduct.howToUseSteps.map((s) => (
                    <div
                      key={s.step}
                      className="p-4 rounded-xl bg-white/60 dark:bg-plum-night/50 border border-petal/70 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold text-raspberry px-1.5 py-0.5 rounded bg-petal/60 mb-2 inline-block">
                          Step 0{s.step}
                        </span>
                        <h4 className="font-bold text-xs text-plum dark:text-pink-100 mb-1 leading-snug">
                          {s.title}
                        </h4>
                        <p className="text-[11px] text-plum/70 dark:text-pink-200/70 leading-relaxed">
                          {s.description.split('.')[0]}.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Dos & Don'ts (Feature Flagged) */}
              {FEATURES.showProductDosAndDonts && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-petal/60 text-xs">
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <h4 className="font-bold text-emerald-800 mb-2">Dos</h4>
                    <ul className="space-y-1">
                      {selectedProduct.dos.map((item, idx) => (
                        <li key={idx}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                    <h4 className="font-bold text-rose-800 mb-2">Don'ts</h4>
                    <ul className="space-y-1">
                      {selectedProduct.donts.map((item, idx) => (
                        <li key={idx}>✗ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Optional Feature: First Period Kit Interactive Checklist (Feature Flagged) */}
      {FEATURES.showFirstPeriodKit && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl glass-card p-6 border border-petal">
            <h3 className="font-serif font-bold text-xl text-plum mb-4">First Period Kit Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FIRST_PERIOD_CHECKLIST.map(item => (
                <div key={item.id} onClick={() => toggleChecklistItem(item.id)} className="p-3 rounded-xl border border-petal cursor-pointer flex items-center gap-2">
                  <Check className="w-4 h-4 text-raspberry" />
                  <span className="text-xs font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional Feature: Pain & Flow Check-in (Feature Flagged) */}
      {FEATURES.showPainFlowCheckin && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl glass-card p-6 border border-petal">
            <h3 className="font-serif font-bold text-xl text-plum mb-2">Pain & Flow Check-in</h3>
            <button onClick={handleEvaluate} className="px-4 py-2 rounded-xl bg-raspberry text-white text-xs font-bold">Check Guidance</button>
          </div>
        </section>
      )}

      {/* Optional Feature: Menopause Section (Feature Flagged) */}
      {FEATURES.showMenopauseSection && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl glass-card p-6 border border-petal">
            <h3 className="font-serif font-bold text-xl text-plum mb-2">Perimenopause & Menopause Comfort</h3>
          </div>
        </section>
      )}

    </div>
  );
};
