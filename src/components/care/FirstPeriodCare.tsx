import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  RotateCcw, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  HelpCircle,
  Clock,
  Heart,
  Droplet
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  FLOW_LEVELS, 
  BLOOD_COLORS, 
  HOW_IT_MIGHT_FEEL, 
  FIRST_PERIOD_KIT_ITEMS, 
  SCHOOL_SCENARIO_STEPS, 
  PAD_STEPS, 
  BOUNDARY_SCENARIOS, 
  BODY_MYTHS_DATA 
} from '../../data/careGuides/first-period';

interface FirstPeriodCareProps {
  completedChecklistIds: string[];
  onToggleChecklist: (id: string) => void;
}

export const FirstPeriodCare: React.FC<FirstPeriodCareProps> = ({
  completedChecklistIds,
  onToggleChecklist
}) => {
  const [activeTab, setActiveTab] = useState<'look-feel' | 'kit' | 'pads' | 'safety' | 'myths'>('look-feel');

  // 1. Look & Feel states
  const [selectedFlowLevel, setSelectedFlowLevel] = useState<'spotting' | 'light' | 'medium' | 'heavy'>('light');
  const [selectedColorId, setSelectedColorId] = useState<string>('light-pink');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  // 2. School Emergency Stepper state
  const [currentScenarioStepIdx, setCurrentScenarioStepIdx] = useState(0);
  const [selectedScenarioChoice, setSelectedScenarioChoice] = useState<number | null>(null);

  // 3. Pad Step Stepper state
  const [currentPadStep, setCurrentPadStep] = useState(1);

  // 4. Boundary Scenario state
  const [activeBoundaryIdx, setActiveBoundaryIdx] = useState(0);
  const [selectedBoundaryChoice, setSelectedBoundaryChoice] = useState<number | null>(null);

  // 5. Myth tier filter
  const [mythAgeFilter, setMythAgeFilter] = useState<'all' | '9-12' | '13-17'>('all');
  const [revealedMyths, setRevealedMyths] = useState<string[]>([]);

  const activeFlow = FLOW_LEVELS.find(f => f.level === selectedFlowLevel) || FLOW_LEVELS[1];
  const activeColor = BLOOD_COLORS.find(c => c.id === selectedColorId) || BLOOD_COLORS[0];

  // Checklist calculations
  const totalKitItems = FIRST_PERIOD_KIT_ITEMS.length;
  const completedKitCount = FIRST_PERIOD_KIT_ITEMS.filter(item => 
    completedChecklistIds.includes(item.id)
  ).length;
  const kitPercentage = Math.round((completedKitCount / totalKitItems) * 100);

  const triggerConfetti = () => {
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

  const handleToggleKitItem = (id: string) => {
    const willComplete = !completedChecklistIds.includes(id);
    onToggleChecklist(id);
    if (willComplete && completedKitCount + 1 === totalKitItems) {
      triggerConfetti();
    }
  };

  const handleResetKit = () => {
    FIRST_PERIOD_KIT_ITEMS.forEach(item => {
      if (completedChecklistIds.includes(item.id)) {
        onToggleChecklist(item.id);
      }
    });
  };

  const toggleMythReveal = (id: string) => {
    setRevealedMyths(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const filteredMyths = BODY_MYTHS_DATA.filter(m => 
    mythAgeFilter === 'all' || m.ageTier === mythAgeFilter
  );

  return (
    <div className="space-y-6">
      
      {/* 5-Tab Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal shadow-2xs">
        {[
          { id: 'look-feel', label: '1. What It Looks & Feels Like' },
          { id: 'kit', label: '2. School Emergency Kit' },
          { id: 'pads', label: '3. Pads & Products' },
          { id: 'safety', label: '4. Staying Safe & Boundaries' },
          { id: 'myths', label: '5. Body Facts & Myths' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-raspberry text-white shadow-soft-pink'
                : 'text-plum/80 dark:text-pink-200 hover:bg-petal/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: What Will It Look & Feel Like? */}
      {activeTab === 'look-feel' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Component 1A: Flow Explorer */}
          <div className="rounded-2xl glass-card p-6 border border-petal shadow-soft-purple">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Interactive Tool • Flow Explorer
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100">
                Understand Your Flow Levels
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Drag or tap below to see how flow changes from day to day, and what to expect on each level.
              </p>
            </div>

            {/* Segmented Level Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {FLOW_LEVELS.map(f => (
                <button
                  key={f.level}
                  onClick={() => setSelectedFlowLevel(f.level)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedFlowLevel === f.level
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum dark:text-pink-200 border-petal hover:border-raspberry/40'
                  }`}
                >
                  {f.label.split('(')[0]}
                </button>
              ))}
            </div>

            {/* Animated UI Fill Meter (CSS Shape - NO IMAGES) */}
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal">
              <div className="flex items-center justify-between text-xs font-bold text-plum dark:text-pink-100 mb-2">
                <span>Pad Fill Level Representation</span>
                <span className="text-raspberry">{activeFlow.fillPercentage}% Absorption</span>
              </div>
              
              <div className="w-full h-4 rounded-full bg-lavender/60 dark:bg-plum-deep overflow-hidden p-0.5 border border-petal/60">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-400 to-raspberry transition-all duration-500"
                  style={{ width: `${activeFlow.fillPercentage}%` }}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-petal/30 border border-petal/60">
                  <span className="font-bold text-plum block mb-1">What It Means</span>
                  <p className="text-plum/80 leading-relaxed text-[11px]">{activeFlow.description}</p>
                </div>
                <div className="p-3 rounded-xl bg-petal/30 border border-petal/60">
                  <span className="font-bold text-plum block mb-1">Pad Routine</span>
                  <p className="text-plum/80 leading-relaxed text-[11px]">{activeFlow.padUsage}</p>
                </div>
                <div className="p-3 rounded-xl bg-petal/30 border border-petal/60">
                  <span className="font-bold text-plum block mb-1">Comfort Care</span>
                  <p className="text-plum/80 leading-relaxed text-[11px]">{activeFlow.comfortTip}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 1B: Blood Colour Guide */}
          <div className="rounded-2xl glass-card p-6 border border-petal shadow-soft-purple">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Interactive Palette • Blood Color Shades
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100">
                Decoding Period Blood Colors
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Period blood naturally changes color from day to day. Tap any color chip to learn the simple science.
              </p>
            </div>

            {/* Interactive Color Chips (CSS Shapes with Text Labels) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
              {BLOOD_COLORS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColorId(c.id)}
                  className={`p-3 rounded-xl border transition-all text-left flex items-center gap-2.5 ${
                    selectedColorId === c.id
                      ? 'bg-petal/70 border-raspberry ring-2 ring-raspberry/30 text-plum'
                      : 'bg-white/80 dark:bg-plum-deep border-petal text-plum/70 hover:border-violet/40'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full shrink-0 shadow-2xs border border-white"
                    style={{ backgroundColor: c.dotColor }}
                  />
                  <span className="text-xs font-bold leading-tight">{c.label}</span>
                </button>
              ))}
            </div>

            {/* Active Color Meaning Card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-plum-night/60 border border-petal text-xs leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-plum dark:text-pink-100 mb-1">
                <span
                  className="w-3.5 h-3.5 rounded-full inline-block"
                  style={{ backgroundColor: activeColor.dotColor }}
                />
                <span>{activeColor.label}: What This Means</span>
              </div>
              <p className="text-plum/80 dark:text-pink-200 mb-2">{activeColor.meaning}</p>
              <p className="text-[11px] text-orchid dark:text-pink-300">
                <strong>Why it happens:</strong> {activeColor.whyItHappens}
              </p>

              {activeColor.doctorFlag && (
                <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-[11px] flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                  <span>{activeColor.doctorFlag}</span>
                </div>
              )}
            </div>
          </div>

          {/* Component 1C: "How It Might Feel" Flip Cards */}
          <div className="rounded-2xl glass-card p-6 border border-petal shadow-soft-purple">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Comfort Toolkit • How It Might Feel
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100">
                Body Signals & Soothing Tips
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Tap any card to flip and discover simple ways to feel comfortable right now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {HOW_IT_MIGHT_FEEL.map(item => {
                const isFlipped = flippedCardId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setFlippedCardId(isFlipped ? null : item.id)}
                    className="p-4 rounded-xl border border-petal/80 bg-white/80 dark:bg-plum-night/50 hover:border-raspberry transition-all cursor-pointer flex flex-col justify-between min-h-[160px] text-xs"
                  >
                    {!isFlipped ? (
                      <div>
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-plum dark:text-pink-100 mb-1">{item.title}</h4>
                        <p className="text-[11px] text-plum/70 dark:text-pink-200 leading-snug">{item.whatItFeelsLike}</p>
                        <span className="text-[10px] text-raspberry font-bold mt-3 block">Tap for comfort tip →</span>
                      </div>
                    ) : (
                      <div className="text-[11px] leading-relaxed">
                        <span className="font-bold text-raspberry block mb-1">Comfort Tip:</span>
                        <p className="text-plum/90 dark:text-pink-100 mb-2">{item.simpleComfortTip}</p>
                        <span className="text-[10px] text-orchid dark:text-pink-300 block border-t border-petal/60 pt-1">
                          <strong>Why:</strong> {item.whyItHappens}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: School Emergency Kit */}
      {activeTab === 'kit' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Animated Checklist with SVG Progress Ring */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-petal/60">
              <div>
                <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                  Checklist • School & Travel Readiness
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                  Pack Your First Period Kit
                </h3>
                <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                  Keep these items in a small pouch in your school bag so you always feel calm and prepared.
                </p>
              </div>

              {/* Progress Ring */}
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-petal/60"
                      fill="transparent"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-raspberry transition-all duration-500"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 22}
                      strokeDashoffset={2 * Math.PI * 22 * (1 - kitPercentage / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[11px] font-bold text-plum">{kitPercentage}%</span>
                </div>

                <div className="text-left text-xs">
                  <span className="font-bold text-plum block">{completedKitCount} of {totalKitItems} packed</span>
                  {completedKitCount > 0 && (
                    <button
                      onClick={handleResetKit}
                      className="text-[11px] text-raspberry hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {FIRST_PERIOD_KIT_ITEMS.map(item => {
                const isDone = completedChecklistIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleKitItem(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isDone
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-white/80 dark:bg-plum-night/50 border-petal hover:border-raspberry/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 ${
                      isDone ? 'bg-emerald-600 text-white' : 'border border-plum/30 bg-white'
                    }`}>
                      {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-xs">
                      <h4 className={`font-bold ${isDone ? 'line-through text-plum/60' : 'text-plum dark:text-pink-100'}`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-plum/70 dark:text-pink-200 mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decision Tree: "It Started at School, What Now?" */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Interactive Decision Stepper • What Now?
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100">
                "My Period Started at School: What Do I Do?"
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Walk through this calm step-by-step scenario to know exactly how to handle it smoothly.
              </p>
            </div>

            {/* Stepper Card */}
            {(() => {
              const currentStep = SCHOOL_SCENARIO_STEPS[currentScenarioStepIdx];
              return (
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal text-xs">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-bold text-orchid dark:text-pink-300">
                    <span>{currentStep.title}</span>
                    <span>Step {currentScenarioStepIdx + 1} of {SCHOOL_SCENARIO_STEPS.length}</span>
                  </div>

                  <h4 className="font-bold text-sm text-plum dark:text-pink-100 mb-4 leading-snug">
                    {currentStep.prompt}
                  </h4>

                  <div className="space-y-2.5 mb-4">
                    {currentStep.options.map((opt, optIdx) => {
                      const isSelected = selectedScenarioChoice === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => setSelectedScenarioChoice(optIdx)}
                          className={`w-full p-3.5 rounded-xl border text-left font-medium transition-all ${
                            isSelected
                              ? opt.isRecommended
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300'
                                : 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-white/70 dark:bg-plum-deep border-petal hover:border-violet/40 text-plum dark:text-pink-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Box */}
                  {selectedScenarioChoice !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-petal/40 border border-petal text-plum leading-relaxed text-[11px] mb-4"
                    >
                      <span className="font-bold text-raspberry mr-1">Didi's Tip:</span>
                      {currentStep.options[selectedScenarioChoice].feedback}
                    </motion.div>
                  )}

                  {/* Next Step Button */}
                  {selectedScenarioChoice !== null && currentScenarioStepIdx < SCHOOL_SCENARIO_STEPS.length - 1 && (
                    <button
                      onClick={() => {
                        setCurrentScenarioStepIdx(prev => prev + 1);
                        setSelectedScenarioChoice(null);
                      }}
                      className="py-2 px-4 rounded-xl bg-raspberry text-white font-bold text-xs shadow-soft-pink flex items-center gap-1.5"
                    >
                      <span>Continue to Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {currentScenarioStepIdx === SCHOOL_SCENARIO_STEPS.length - 1 && selectedScenarioChoice !== null && (
                    <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 font-bold text-center">
                      🌟 You are completely prepared to handle any school period with peace of mind!
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </motion.div>
      )}

      {/* Tab 3: Pads & Products */}
      {activeTab === 'pads' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Pad Step Stepper */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Visual Stepper • 5 Steps
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                How to Wear a Sanitary Pad (Step-by-Step)
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Clear, simple instructions for placing and wearing your pad cleanly and securely.
              </p>
            </div>

            {/* Stepper Dots (UI Progress Bar) */}
            <div className="flex items-center justify-between gap-1 mb-6 max-w-md mx-auto">
              {PAD_STEPS.map(s => (
                <button
                  key={s.step}
                  onClick={() => setCurrentPadStep(s.step)}
                  className={`flex-1 py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all text-center border ${
                    currentPadStep === s.step
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : s.step < currentPadStep
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                      : 'bg-white/80 dark:bg-plum-deep text-plum/60 border-petal'
                  }`}
                >
                  Step {s.step}
                </button>
              ))}
            </div>

            {/* Active Step Presentation Card */}
            {(() => {
              const activeStep = PAD_STEPS[currentPadStep - 1];
              return (
                <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-lg mx-auto text-center text-xs">
                  <span className="px-3 py-1 rounded-full bg-petal/60 text-raspberry font-extrabold text-[11px] mb-2 inline-block">
                    Step {activeStep.step} of 5
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100 mb-2">
                    {activeStep.title}
                  </h4>
                  <p className="text-plum/80 dark:text-pink-200 leading-relaxed mb-4 text-xs sm:text-sm">
                    {activeStep.instruction}
                  </p>
                  
                  <div className="p-3 rounded-xl bg-petal/30 border border-petal/60 text-[11px] text-plum text-left mb-5">
                    <strong>💡 Pro Tip:</strong> {activeStep.tip}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      disabled={currentPadStep === 1}
                      onClick={() => setCurrentPadStep(prev => prev - 1)}
                      className="px-3 py-1.5 rounded-xl border border-petal text-plum disabled:opacity-30 font-bold"
                    >
                      ← Previous
                    </button>
                    <button
                      disabled={currentPadStep === PAD_STEPS.length}
                      onClick={() => setCurrentPadStep(prev => prev + 1)}
                      className="px-4 py-1.5 rounded-xl bg-raspberry text-white font-bold shadow-soft-pink disabled:opacity-30"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Mini Timer & 4–6 Hour Explainer */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-900 block mb-0.5">
                  The Golden 4 to 6 Hour Change Rule
                </span>
                <p className="leading-relaxed text-[11px]">
                  Always change your pad every 4 to 6 hours—even on very light spotting days. Warmth and moisture trapped in pads allow skin bacteria to multiply, causing chafing and rashes. Regular changes keep your vulva dry, fresh, and happy.
                </p>
              </div>
            </div>

            {/* Safe Cloth Care Guidelines */}
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950">
              <span className="font-bold text-emerald-900 block mb-1">
                🌿 Safe Care for Reusable Cloth Pads
              </span>
              <p className="leading-relaxed text-[11px] text-emerald-900/90">
                If your family uses reusable cotton cloth: wash thoroughly with clean tap water and soap, and hang to dry in <strong>direct sunlight</strong> (nature's UV disinfectant). Store only when completely dry in a clean pouch. Never hide damp cloth in dark indoor corners.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 4: Personal Boundaries & Staying Safe */}
      {activeTab === 'safety' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Safety & Bodily Autonomy • What Would You Do?
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Personal Boundaries & Staying Safe
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Your body belongs solely to you. Learn how to say no, recognize unsafe situations, and know who to tell.
              </p>
            </div>

            {/* Scenario Navigation Tabs */}
            <div className="flex gap-2 mb-4">
              {BOUNDARY_SCENARIOS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveBoundaryIdx(idx);
                    setSelectedBoundaryChoice(null);
                  }}
                  className={`py-1.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                    activeBoundaryIdx === idx
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal'
                  }`}
                >
                  Scenario {idx + 1}
                </button>
              ))}
            </div>

            {/* Active Boundary Scenario Card */}
            {(() => {
              const currentScenario = BOUNDARY_SCENARIOS[activeBoundaryIdx];
              return (
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal text-xs">
                  <p className="font-bold text-plum dark:text-pink-100 mb-4 text-xs sm:text-sm leading-relaxed">
                    {currentScenario.situation}
                  </p>

                  <div className="space-y-2.5 mb-4">
                    {currentScenario.choices.map((choice, cIdx) => {
                      const isChosen = selectedBoundaryChoice === cIdx;
                      return (
                        <button
                          key={cIdx}
                          onClick={() => setSelectedBoundaryChoice(cIdx)}
                          className={`w-full p-3.5 rounded-xl border text-left font-medium transition-all ${
                            isChosen
                              ? choice.isEmpowering
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300'
                                : 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-white/70 dark:bg-plum-deep border-petal text-plum'
                          }`}
                        >
                          {choice.text}
                        </button>
                      );
                    })}
                  </div>

                  {selectedBoundaryChoice !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-petal/40 border border-petal text-plum text-[11px] leading-relaxed mb-4"
                    >
                      <span className="font-bold text-raspberry mr-1">Guidance:</span>
                      {currentScenario.choices[selectedBoundaryChoice].guidance}
                    </motion.div>
                  )}

                  <div className="p-3 rounded-xl bg-lavender/50 border border-lavender text-[11px] text-plum font-semibold">
                    🛡️ {currentScenario.keyTakeaway}
                  </div>
                </div>
              );
            })()}

            {/* Helpline Callout Banner */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-emerald-900 block text-xs">
                  India National Child Emergency Support: 1098
                </span>
                <p className="text-[11px] text-emerald-900/80 mt-0.5">
                  Toll-free, 24/7 child distress helpline under the Ministry of Women & Child Development. If anyone crosses a boundary or makes you feel unsafe, calling 1098 connects you to caring protection.
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold text-xs shrink-0 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Call 1098</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 5: Body Facts & Myths */}
      {activeTab === 'myths' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-petal/60">
              <div>
                <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                  Myth Busters • Flip Cards
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                  Body Facts vs Old Superstitions
                </h3>
                <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                  Tap any card to reveal the biological truth and bust old taboos.
                </p>
              </div>

              {/* Age Tier Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-bold text-plum/70 mr-1">Filter:</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: '9-12', label: 'Ages 9–12' },
                  { id: '13-17', label: 'Ages 13–17' },
                ].map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setMythAgeFilter(filter.id as any)}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] border transition-all ${
                      mythAgeFilter === filter.id
                        ? 'bg-raspberry text-white border-raspberry'
                        : 'bg-white text-plum border-petal hover:border-raspberry/50'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Flip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {filteredMyths.map(item => {
                const isRevealed = revealedMyths.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleMythReveal(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] text-xs ${
                      isRevealed
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                        : 'bg-white/80 dark:bg-plum-night/50 border-petal hover:border-raspberry/50 text-plum'
                    }`}
                  >
                    {!isRevealed ? (
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-petal/60 text-raspberry mb-2 inline-block">
                          Myth to Bust
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-plum dark:text-pink-100 mb-2 leading-snug">
                          "{item.myth}"
                        </h4>
                        <span className="text-[10px] text-raspberry font-bold mt-3 block">
                          Tap to reveal the scientific truth →
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-900 mb-2 inline-block">
                          Scientific Truth ✓
                        </span>
                        <h4 className="font-bold text-xs text-emerald-950 mb-1 leading-snug">
                          {item.fact}
                        </h4>
                        <p className="text-[11px] text-emerald-900/80 leading-relaxed mt-1">
                          {item.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};
