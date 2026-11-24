import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  CheckCircle2, 
  AlertCircle,
  AlertTriangle, 
  ShieldCheck, 
  Check, 
  ChevronDown,
  Moon,
  Sun,
  Flame,
  Activity,
  Heart,
  Pill,
  Sparkles,
  Info,
  Clock,
  Shield
} from 'lucide-react';
import { 
  PRODUCT_GUIDES, 
  FIRST_PERIOD_CHECKLIST, 
  evaluatePainFlow, 
  ProductGuide,
  PainFlowSuggestion,
  CONTRACEPTION_GUIDES,
  CONSENT_STAGE_GUIDES,
  PREGNANCY_STAGE_GUIDES 
} from '../data/careGuides';
import { FirstPeriodVisualGuide } from '../components/FirstPeriodVisualGuide';
import { useApp } from '../context/AppContext';
import { getFeatures } from '../config/features';
import { getStageContent } from '../data/stageContent';

export const CareGuides: React.FC = () => {
  const { stage, stageInfo, progress, toggleChecklistItem } = useApp();
  const features = getFeatures(stage);
  const stageContent = getStageContent(stage);

  const [selectedProductId, setSelectedProductId] = useState<string>('pads');
  const [showMoreGuides, setShowMoreGuides] = useState<boolean>(false);

  // Interactive Self-Assessment State
  const [flowLevel, setFlowLevel] = useState<'light' | 'moderate' | 'heavy' | 'very-heavy'>('moderate');
  const [painLevel, setPainLevel] = useState<number>(3);
  const [evalResult, setEvalResult] = useState<PainFlowSuggestion | null>(null);

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

  // Section 1: Product Guides
  const renderProductGuides = () => (
    <div key="product-guides" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
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

          {/* Dos & Don'ts (Rendered when stage enables it, e.g. cycle or puberty) */}
          {features.dosAndDonts && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-petal/60 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 text-emerald-900 dark:text-emerald-200">
                <h4 className="font-bold mb-2">Best Practices (Dos)</h4>
                <ul className="space-y-1.5">
                  {selectedProduct.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 text-rose-900 dark:text-rose-200">
                <h4 className="font-bold mb-2">Common Pitfalls (Don'ts)</h4>
                <ul className="space-y-1.5">
                  {selectedProduct.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Section 2: First Period Kit Checklist
  const renderFirstPeriodKit = () => (
    <div key="first-period-kit" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-petal/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
            <span>🎒 School & Emergency Readiness</span>
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
            First Period Emergency Kit Checklist
          </h3>
          <p className="text-xs text-orchid dark:text-pink-300 mt-1">
            Pack these simple essentials into a discreet pouch for school or travel peace of mind.
          </p>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-xs font-bold text-raspberry">
            {completedCount} of {totalChecklistItems} ready ({completionPercentage}%)
          </span>
          <div className="w-36 h-2 rounded-full bg-petal/60 mt-1 overflow-hidden">
            <div 
              className="h-full bg-raspberry transition-all duration-300 rounded-full"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {FIRST_PERIOD_CHECKLIST.map(item => {
          const isDone = progress.completedChecklistIds?.includes(item.id);
          return (
            <div 
              key={item.id} 
              onClick={() => toggleChecklistItem(item.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                isDone
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                  : 'bg-white/70 dark:bg-plum-night/50 border-petal hover:border-raspberry/50'
              }`}
            >
              <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 ${
                isDone ? 'bg-emerald-600 text-white' : 'border border-petal bg-white dark:bg-plum-deep'
              }`}>
                {isDone && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <h4 className={`text-xs font-bold ${isDone ? 'line-through text-plum/60 dark:text-pink-300/60' : 'text-plum dark:text-pink-100'}`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-orchid dark:text-pink-300 mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Section 3: Pain & Flow Check-in
  const renderPainFlowCheckin = () => (
    <div key="pain-flow" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="mb-6 pb-4 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
          <span>🩺 Self-Care Assessment</span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
          Pain & Flow Comfort Check-in
        </h3>
        <p className="text-xs text-orchid dark:text-pink-300 mt-1">
          Select your current symptoms for evidence-based self-care guidance and doctor check-in thresholds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-plum dark:text-pink-100 mb-2">
            Flow Level Today:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['light', 'moderate', 'heavy', 'very-heavy'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setFlowLevel(lvl)}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  flowLevel === lvl
                    ? 'bg-raspberry text-white shadow-soft-pink'
                    : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal'
                }`}
              >
                {lvl.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-plum dark:text-pink-100">
              <span>Cramp / Discomfort Scale:</span>
              <span className="text-raspberry font-bold">{painLevel} / 10</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={painLevel}
              onChange={(e) => setPainLevel(Number(e.target.value))}
              className="w-full accent-raspberry cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-orchid dark:text-pink-300 mt-1">
              <span>0 (None)</span>
              <span>5 (Moderate)</span>
              <span>10 (Severe)</span>
            </div>
          </div>

          <button
            onClick={handleEvaluate}
            className="mt-6 px-6 py-2.5 rounded-xl bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark transition-all"
          >
            Check Guidance
          </button>
        </div>

        {/* Evaluation Output */}
        <div>
          {evalResult ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal"
            >
              <h4 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mb-1">
                {evalResult.title}
              </h4>
              <p className="text-xs text-orchid dark:text-pink-300 mb-3">
                {evalResult.summary}
              </p>

              <ul className="space-y-1.5 text-xs text-plum/80 dark:text-pink-200 mb-4">
                {evalResult.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-raspberry font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>

              {evalResult.doctorAlert && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{evalResult.doctorAlert}</span>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="h-full flex items-center justify-center p-6 rounded-2xl border border-dashed border-petal text-xs text-orchid text-center">
              Select your flow and discomfort level, then click "Check Guidance" for private, on-device tips.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Section 4: Menopause Comfort Section
  const renderMenopauseSection = () => (
    <div key="menopause-section" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="mb-6 pb-4 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
          <span>🌾 Midlife Transition & Comfort</span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
          Perimenopause & Menopause Guidance
        </h3>
        <p className="text-xs text-orchid dark:text-pink-300 mt-1">
          Evidence-informed relief for hot flushes, fluctuating cycles, and long-term vitality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal">
          <div className="text-2xl mb-2">❄️</div>
          <h4 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mb-1.5">
            Cooling Hot Flush Relief
          </h4>
          <p className="text-plum/80 dark:text-pink-200/80 leading-relaxed">
            Dress in breathable bamboo or cotton layers. Keep ice water nearby and practice slow 4-7-8 diaphragmatic breathing during warmth waves.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal">
          <div className="text-2xl mb-2">🌙</div>
          <h4 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mb-1.5">
            Restful Sleep Strategies
          </h4>
          <p className="text-plum/80 dark:text-pink-200/80 leading-relaxed">
            Keep your bedroom well ventilated and cool (about 18°C to 20°C). Drink water, reduce tea/coffee after late afternoon, and wear light cotton nightwear.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal">
          <div className="text-2xl mb-2">🥗</div>
          <h4 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mb-1.5">
            Bone & Heart Nourishment
          </h4>
          <p className="text-plum/80 dark:text-pink-200/80 leading-relaxed">
            Support your bones with calcium-rich foods (milk, curd, paneer, ragi, til), green vegetables, daily sunlight for vitamin D3, and regular brisk walking.
          </p>
        </div>
      </div>
    </div>
  );

  // Section 5: First Period Visual Guide (with real images)
  const renderFirstPeriodVisualGuide = () => (
    <FirstPeriodVisualGuide key="first-period-visual" />
  );

  // States for new guides
  const [selectedContraceptionId, setSelectedContraceptionId] = useState<string>('daily-pills');
  const [selectedConsentStage, setSelectedConsentStage] = useState<'puberty' | 'cycle' | 'menopause' | 'educator'>(
    stage || 'cycle'
  );
  const [selectedPregnancyStage, setSelectedPregnancyStage] = useState<'puberty' | 'cycle' | 'menopause' | 'educator'>(
    stage || 'cycle'
  );

  const selectedContraception = 
    CONTRACEPTION_GUIDES.find(c => c.id === selectedContraceptionId) || CONTRACEPTION_GUIDES[0];

  const effectiveConsentStage = stage || selectedConsentStage;
  const activeConsentGuide = 
    CONSENT_STAGE_GUIDES.find(c => c.stageId === effectiveConsentStage) || CONSENT_STAGE_GUIDES[0];

  const effectivePregnancyStage = stage || selectedPregnancyStage;
  const activePregnancyGuide = 
    PREGNANCY_STAGE_GUIDES.find(p => p.stageId === effectivePregnancyStage) || PREGNANCY_STAGE_GUIDES[0];

  // Section 6: Contraception & Pills Guide
  const renderContraceptionGuide = () => (
    <div id="contraception-guide" key="contraception-guide" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="mb-6 pb-4 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
          <span>💊 Reproductive Health & Planning</span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
          Contraception & Birth Control Guide
        </h3>
        <p className="text-xs text-orchid dark:text-pink-300 mt-1 max-w-2xl">
          Scientific, stigma-free guidance on daily oral contraceptive pills, emergency contraception, condoms, and long-acting methods across all life stages.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {CONTRACEPTION_GUIDES.map(method => {
          const active = method.id === selectedContraception.id;
          return (
            <button
              key={method.id}
              onClick={() => setSelectedContraceptionId(method.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                active
                  ? 'bg-raspberry text-white shadow-soft-pink'
                  : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-raspberry/50'
              }`}
            >
              <span>{method.icon}</span>
              <span>{method.name.split(' (')[0]}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedContraception.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedContraception.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100">
                    {selectedContraception.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded-md bg-petal/60 text-raspberry font-bold text-[10px]">
                    {selectedContraception.typeBadge}
                  </span>
                </div>
                <p className="text-xs text-orchid dark:text-pink-300">
                  {selectedContraception.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-lavender/40 border border-lavender text-xs">
                <span className="text-orchid font-bold">Effectiveness: </span>
                <span className="text-plum dark:text-pink-100 font-semibold">{selectedContraception.effectiveness}</span>
              </div>
              <div className={`px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 font-bold border ${
                selectedContraception.stiProtection
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-200'
              }`}>
                <span>{selectedContraception.stiProtection ? '🛡️ STI Protection: YES' : '⚠️ STI Protection: No (Use Condoms)'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/60 dark:bg-plum-night/40 border border-petal">
              <h5 className="font-bold text-xs text-raspberry uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>How It Works Biologically</span>
              </h5>
              <p className="text-xs text-plum/80 dark:text-pink-200 leading-relaxed">
                {selectedContraception.howItWorks}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/60 dark:bg-plum-night/40 border border-petal">
              <h5 className="font-bold text-xs text-violet-dark dark:text-pink-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet" />
                <span>How to Use / What to Know</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-plum/80 dark:text-pink-200">
                {selectedContraception.howToUse.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-raspberry font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-lavender/30 dark:bg-plum-deep/40 border border-lavender/80">
            <h5 className="font-bold text-xs text-plum dark:text-pink-100 mb-1.5 flex items-center gap-1.5">
              <span>{stageInfo?.icon || '🌸'}</span>
              <span>Guidance for {stageInfo?.name || 'Your Selected Stage'}:</span>
            </h5>
            <p className="text-xs text-plum/80 dark:text-pink-200 leading-relaxed">
              {selectedContraception.stageRelevance[stage || 'cycle']}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Medical guidance note: </span>
              <span>{selectedContraception.medicalCaution}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Section 7: Consent & Personal Boundaries Guide
  const renderConsentGuide = () => (
    <div id="consent-guide" key="consent-guide" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="mb-6 pb-4 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
          <span>🤝 Bodily Autonomy & Boundaries</span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
          Consent & Personal Boundaries Guide
        </h3>
        <p className="text-xs text-orchid dark:text-pink-300 mt-1 max-w-2xl">
          Your body belongs completely to you. Learn healthy communication, personal space, and mutual respect across every life stage.
        </p>
      </div>

      {!stage && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {CONSENT_STAGE_GUIDES.map(cg => {
            const active = cg.stageId === selectedConsentStage;
            return (
              <button
                key={cg.stageId}
                onClick={() => setSelectedConsentStage(cg.stageId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-raspberry text-white shadow-soft-pink'
                    : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-raspberry/50'
                }`}
              >
                <span>{cg.icon}</span>
                <span>{cg.stageName}</span>
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeConsentGuide.stageId}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-petal/60 to-lavender/40 dark:from-plum-deep/80 dark:to-pink-950/60 border border-petal flex items-start gap-3">
            <Heart className="w-5 h-5 text-raspberry shrink-0 mt-0.5 fill-raspberry/20" />
            <div>
              <div className="font-bold text-xs text-raspberry uppercase tracking-wider mb-1">
                {activeConsentGuide.badge}
              </div>
              <p className="text-xs sm:text-sm font-serif font-bold text-plum dark:text-pink-100 leading-relaxed">
                "{activeConsentGuide.keyMessage}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeConsentGuide.corePrinciples.map((cp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/70 dark:bg-plum-night/50 border border-petal/70">
                <h5 className="font-bold text-xs text-plum dark:text-pink-100 mb-1 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-petal text-raspberry text-[11px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{cp.title}</span>
                </h5>
                <p className="text-xs text-plum/80 dark:text-pink-200/90 leading-relaxed pl-6.5">
                  {cp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-lavender/30 dark:bg-plum-deep/40 border border-lavender">
            <h5 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mb-3 flex items-center gap-2">
              <span>💬</span>
              <span>Real-Life Scenarios: How to Set Healthy Boundaries</span>
            </h5>
            <div className="space-y-3 text-xs">
              {activeConsentGuide.realLifeScenarios.map((sc, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/80 dark:bg-plum-night/70 border border-petal/60 space-y-1.5">
                  <div className="font-semibold text-orchid dark:text-pink-300">
                    <span className="text-raspberry font-bold">Situation: </span>
                    <span>{sc.scenario}</span>
                  </div>
                  <div className="text-plum dark:text-pink-100 pl-3 border-l-2 border-raspberry font-medium">
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">Healthy Boundary: </span>
                    <span>{sc.healthyBoundary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Section 8: Pregnancy & Ovulation Awareness Guide
  const renderPregnancyGuide = () => (
    <div id="pregnancy-guide" key="pregnancy-guide" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      <div className="mb-6 pb-4 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/50 text-raspberry text-xs font-bold mb-2">
          <span>🤰 Conception Science & Fertility</span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
          Pregnancy & Ovulation Awareness Guide
        </h3>
        <p className="text-xs text-orchid dark:text-pink-300 mt-1 max-w-2xl">
          Understanding the fertile window, biological conception, early signs, testing, and stage-specific realities.
        </p>
      </div>

      {!stage && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PREGNANCY_STAGE_GUIDES.map(pg => {
            const active = pg.stageId === selectedPregnancyStage;
            return (
              <button
                key={pg.stageId}
                onClick={() => setSelectedPregnancyStage(pg.stageId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-raspberry text-white shadow-soft-pink'
                    : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-raspberry/50'
                }`}
              >
                <span>{pg.icon}</span>
                <span>{pg.stageName}</span>
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activePregnancyGuide.stageId}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            <div className="md:col-span-7 p-5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{activePregnancyGuide.icon}</span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100">
                    {activePregnancyGuide.title}
                  </h4>
                </div>
                <p className="text-xs text-plum/80 dark:text-pink-200/90 leading-relaxed mb-4">
                  {activePregnancyGuide.summary}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-lavender/40 dark:bg-plum-deep/60 border border-lavender text-xs space-y-1">
                <div className="font-bold text-violet-dark dark:text-pink-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>The 6-Day Fertile Window:</span>
                </div>
                <p className="text-plum/80 dark:text-pink-100 text-[11px] leading-relaxed">
                  The egg lives 12 to 24 hours. Sperm survives up to 5 days inside the womb. Intimacy in the 5 days before ovulation or on ovulation day itself can result in pregnancy.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 flex flex-col justify-between text-xs">
              <div>
                <span className="font-extrabold text-[10px] text-rose-700 dark:text-rose-300 uppercase tracking-wider block mb-1">
                  Common Cultural Myth
                </span>
                <p className="font-serif font-bold text-xs sm:text-sm text-rose-950 dark:text-rose-100 mb-3">
                  "{activePregnancyGuide.commonMythVsFact.myth}"
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-plum-night/80 border border-emerald-300 dark:border-emerald-800 text-xs text-plum dark:text-pink-100">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">Scientific Fact:</span>
                <span className="text-[11px] leading-relaxed">{activePregnancyGuide.commonMythVsFact.fact}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal">
            <h5 className="font-bold text-xs text-raspberry uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-raspberry" />
              <span>Key Biological Facts for {activePregnancyGuide.stageName}</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {activePregnancyGuide.keyPoints.map((pt, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-petal/20 dark:bg-plum-deep/50 border border-petal/60 flex items-start gap-2">
                  <span className="text-raspberry font-bold">•</span>
                  <span className="text-plum/80 dark:text-pink-200 leading-relaxed text-[11px]">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Purely stage-based guide selection (No cross-stage contamination)
  const getStageGuides = () => {
    switch (stage) {
      case 'puberty':
        return [
          renderFirstPeriodVisualGuide(), 
          renderFirstPeriodKit(), 
          renderProductGuides(),
          renderConsentGuide(), 
          renderPregnancyGuide()
        ];
      case 'cycle':
        return [
          renderProductGuides(), 
          renderContraceptionGuide(), 
          renderPregnancyGuide(), 
          renderConsentGuide(), 
          renderPainFlowCheckin()
        ];
      case 'menopause':
        return [
          renderMenopauseSection(), 
          renderConsentGuide(), 
          renderContraceptionGuide(), 
          renderPregnancyGuide(), 
          renderPainFlowCheckin(),
          renderProductGuides()
        ];
      case 'educator':
        return [
          renderConsentGuide(), 
          renderContraceptionGuide(), 
          renderPregnancyGuide(), 
          renderFirstPeriodKit(), 
          renderProductGuides()
        ];
      default:
        return [
          renderProductGuides(), 
          renderFirstPeriodVisualGuide(), 
          renderPainFlowCheckin()
        ];
    }
  };

  const activeGuides = getStageGuides();

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {stageContent?.careEmphasis && (
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-petal/50 dark:bg-pink-950/60 border border-petal text-xs font-bold text-raspberry">
            <span>{stageInfo?.icon}</span>
            <span>{stageContent.careEmphasis.badge}: {stageContent.careEmphasis.title}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          {stageInfo ? `${stageInfo.name} Care Guides` : 'Care & Product Guides'}
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-lg mx-auto">
          {stageContent?.careEmphasis ? stageContent.careEmphasis.description : 'Practical, stigma-free guidance tailored specifically to your life stage.'}
        </p>

        {/* Stage-Filtered Quick Section Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-1">
          {stage === 'puberty' && (
            <>
              <a
                href="#visual-guide"
                className="px-3.5 py-1.5 rounded-full bg-petal/60 hover:bg-petal dark:bg-pink-950/60 text-raspberry text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🌸</span>
                <span>Visual First Period Guide</span>
              </a>
              <a
                href="#first-period-kit"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🎒</span>
                <span>Emergency School Kit</span>
              </a>
              <a
                href="#product-guides"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩸</span>
                <span>Pads & Products</span>
              </a>
              <a
                href="#consent-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤝</span>
                <span>Personal Boundaries</span>
              </a>
              <a
                href="#pregnancy-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🌱</span>
                <span>Conception Myths & Facts</span>
              </a>
            </>
          )}

          {stage === 'cycle' && (
            <>
              <a
                href="#product-guides"
                className="px-3.5 py-1.5 rounded-full bg-petal/60 hover:bg-petal dark:bg-pink-950/60 text-raspberry text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩸</span>
                <span>Period Products</span>
              </a>
              <a
                href="#contraception-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>💊</span>
                <span>Contraception & Pills</span>
              </a>
              <a
                href="#pregnancy-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤰</span>
                <span>Fertile Window & Testing</span>
              </a>
              <a
                href="#consent-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤝</span>
                <span>Consent & Respect</span>
              </a>
              <a
                href="#pain-flow"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩺</span>
                <span>Pain & Flow Check-in</span>
              </a>
            </>
          )}

          {stage === 'menopause' && (
            <>
              <a
                href="#menopause-section"
                className="px-3.5 py-1.5 rounded-full bg-petal/60 hover:bg-petal dark:bg-pink-950/60 text-raspberry text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🌾</span>
                <span>Menopause Wellness</span>
              </a>
              <a
                href="#consent-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤝</span>
                <span>Midlife Intimacy & Comfort</span>
              </a>
              <a
                href="#pregnancy-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤰</span>
                <span>Perimenopause Pregnancy Truth</span>
              </a>
              <a
                href="#contraception-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>💊</span>
                <span>Midlife Contraception</span>
              </a>
              <a
                href="#pain-flow"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩺</span>
                <span>Bleeding & Symptom Check-in</span>
              </a>
            </>
          )}

          {stage === 'educator' && (
            <>
              <a
                href="#consent-guide"
                className="px-3.5 py-1.5 rounded-full bg-petal/60 hover:bg-petal dark:bg-pink-950/60 text-raspberry text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤝</span>
                <span>Teaching Consent</span>
              </a>
              <a
                href="#pregnancy-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🤰</span>
                <span>Teaching Conception</span>
              </a>
              <a
                href="#contraception-guide"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>💊</span>
                <span>Explaining Contraception</span>
              </a>
              <a
                href="#first-period-kit"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🎒</span>
                <span>Student Emergency Kit</span>
              </a>
              <a
                href="#product-guides"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩸</span>
                <span>Product Demonstrations</span>
              </a>
            </>
          )}

          {!stage && (
            <>
              <a
                href="#visual-guide"
                className="px-3.5 py-1.5 rounded-full bg-petal/60 hover:bg-petal dark:bg-pink-950/60 text-raspberry text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🌸</span>
                <span>First Period Visual Guide</span>
              </a>
              <a
                href="#product-guides"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩸</span>
                <span>Product Guides</span>
              </a>
              <a
                href="#pain-flow"
                className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white dark:bg-plum-deep/80 text-plum dark:text-pink-100 text-xs font-bold border border-petal transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>🩺</span>
                <span>Pain & Flow Check-in</span>
              </a>
            </>
          )}
        </div>
      </section>

      {/* Primary Stage-Filtered Guides Only (No Irrelevant Stage Leaks) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeGuides}
      </section>

    </div>
  );
};
