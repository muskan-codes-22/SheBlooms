import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Trash2, 
  Heart, 
  Info, 
  Clock, 
  ShieldCheck, 
  Utensils, 
  AlertCircle,
  Activity,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { 
  PAIN_TOOLKIT_ITEMS, 
  PRODUCTS_COMPARISON, 
  INDIAN_NUTRITION_FOODS, 
  CYCLE_TRIAGE_SCENARIOS, 
  PainToolkitItem 
} from '../../data/careGuides/cycle-care';

export const CyclePeriodCare: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'counter' | 'pain' | 'products' | 'plate' | 'triage'>('counter');

  // 1. Cycle Counter state (localStorage only)
  const [startDate, setStartDate] = useState<string>(() => {
    return localStorage.getItem('sheblooms_cycle_counter_date') || '';
  });
  const [cycleLength, setCycleLength] = useState<number>(28);

  // 2. Pain Toolkit state
  const [selectedPainId, setSelectedPainId] = useState<string>('heat');

  // 3. Products comparison filter
  const [productFilter, setProductFilter] = useState<'all' | 'reusable' | 'disposable'>('all');

  // 4. Build a Plate state
  const [selectedFoodIds, setSelectedFoodIds] = useState<string[]>(['palak']);

  // 5. Triage scenario state
  const [activeTriageId, setActiveTriageId] = useState<string>('tri-01');

  useEffect(() => {
    if (startDate) {
      localStorage.setItem('sheblooms_cycle_counter_date', startDate);
    } else {
      localStorage.removeItem('sheblooms_cycle_counter_date');
    }
  }, [startDate]);

  const handleClearCycleDate = () => {
    setStartDate('');
    localStorage.removeItem('sheblooms_cycle_counter_date');
  };

  // Calculate cycle day & phase
  const cycleInfo = React.useMemo(() => {
    if (!startDate) return null;
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    if (diffDays < 1) return { day: 1, phase: 'Menstrual Phase (Day 1)', details: 'Cycle Day 1 starts today.' };

    const currentDay = ((diffDays - 1) % cycleLength) + 1;

    if (currentDay <= 5) {
      return {
        day: currentDay,
        phase: 'Menstrual Phase',
        summary: 'Your uterine lining is shedding. Energy is naturally lower.',
        tip: 'Prioritize warmth, gentle movement, and iron-replenishing warm foods.'
      };
    } else if (currentDay <= 13) {
      return {
        day: currentDay,
        phase: 'Follicular Phase',
        summary: 'Estrogen is steadily rising as follicles mature in the ovaries. Energy and focus are increasing.',
        tip: 'Great time for workouts, school projects, and social activities.'
      };
    } else if (currentDay <= 16) {
      return {
        day: currentDay,
        phase: 'Ovulatory Phase',
        summary: 'Peak estrogen triggers LH surge and egg release. Cervical fluid is clear, stretchy, and slippery.',
        tip: 'Your body is at its peak energy window.'
      };
    } else {
      return {
        day: currentDay,
        phase: 'Luteal Phase',
        summary: 'Progesterone rises to nourish the uterine lining. Metabolism is slightly higher.',
        tip: 'Honor premenstrual cravings with nutrient-dense seeds, and get 8 hours of restorative sleep.'
      };
    }
  }, [startDate, cycleLength]);

  const activePainItem = PAIN_TOOLKIT_ITEMS.find(p => p.id === selectedPainId) || PAIN_TOOLKIT_ITEMS[0];

  const filteredProducts = PRODUCTS_COMPARISON.filter(p => {
    if (productFilter === 'reusable') return p.id.includes('cloth') || p.id.includes('cup') || p.id.includes('underwear');
    if (productFilter === 'disposable') return p.id.includes('pads') || p.id.includes('tampon');
    return true;
  });

  const toggleFoodItem = (id: string) => {
    setSelectedFoodIds(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const hasIron = selectedFoodIds.some(id => {
    const f = INDIAN_NUTRITION_FOODS.find(item => item.id === id);
    return f?.category === 'iron';
  });

  const hasVitC = selectedFoodIds.some(id => {
    const f = INDIAN_NUTRITION_FOODS.find(item => item.id === id);
    return f?.category === 'vit-c';
  });

  const activeTriage = CYCLE_TRIAGE_SCENARIOS.find(t => t.id === activeTriageId) || CYCLE_TRIAGE_SCENARIOS[0];

  return (
    <div className="space-y-6">
      
      {/* 5-Tab Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal shadow-2xs">
        {[
          { id: 'counter', label: '1. Cycle Day Counter' },
          { id: 'pain', label: '2. Pain & Comfort Toolkit' },
          { id: 'products', label: '3. Products Compared' },
          { id: 'plate', label: '4. Build an Iron Plate' },
          { id: 'triage', label: '5. Normal or See a Doctor?' },
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

      {/* Tab 1: Interactive Cycle Day Counter */}
      {activeTab === 'counter' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Private Tool • Cycle Day Counter
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Track Where You Are in Your Cycle
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Enter the first day of your last period. All data stays strictly inside your browser (zero tracking).
              </p>
            </div>

            {/* Date Input Card */}
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-lg mx-auto text-xs space-y-4">
              <div>
                <label className="font-bold text-plum block mb-1.5">
                  When did your last period start? (Day 1 of full red flow)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-petal bg-white dark:bg-plum-deep text-plum font-semibold text-xs focus:ring-2 focus:ring-raspberry"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-plum">
                    Typical Cycle Length (Default: 28 days)
                  </label>
                  <span className="font-extrabold text-raspberry">{cycleLength} days</span>
                </div>
                <input
                  type="range"
                  min="21"
                  max="45"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  className="w-full accent-raspberry cursor-pointer"
                />
                <span className="text-[10px] text-orchid block mt-0.5">
                  Adolescent cycles naturally range from 21 to 45 days in the first 2–3 years.
                </span>
              </div>

              {startDate && (
                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleClearCycleDate}
                    className="text-[11px] text-rose-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete my saved cycle date</span>
                  </button>
                </div>
              )}
            </div>

            {/* Cycle Output Presentation */}
            {cycleInfo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-petal/40 to-lavender/40 border border-petal text-center max-w-lg mx-auto"
              >
                <span className="px-3 py-1 rounded-full bg-white text-raspberry text-[11px] font-bold shadow-2xs mb-2 inline-block">
                  Current Phase: {cycleInfo.phase}
                </span>
                <h4 className="font-serif font-bold text-3xl text-plum my-1">
                  Day {cycleInfo.day} of {cycleLength}
                </h4>
                <p className="text-xs text-plum/90 font-medium max-w-sm mx-auto mt-2 leading-relaxed">
                  {cycleInfo.summary}
                </p>
                <div className="mt-4 p-3 rounded-xl bg-white/80 border border-petal text-[11px] text-plum text-left">
                  💡 <strong>Care Suggestion:</strong> {cycleInfo.tip}
                </div>
              </motion.div>
            )}

            {/* Medical Note */}
            <div className="mt-6 p-3 rounded-xl bg-petal/30 border border-petal/60 text-[11px] text-orchid text-center">
              ⚠️ <em>This counter is for learning and rhythm awareness, not contraception or medical diagnosis. Every body has its own natural pace.</em>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: Pain & Comfort Toolkit */}
      {activeTab === 'pain' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Evidence-Based Relief • Pain Toolkit
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Soothe Cramps & Body Aches
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Explore evidence-based comfort methods. Tap any category to discover how it physically soothes uterine contractions.
              </p>
            </div>

            {/* Category Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {PAIN_TOOLKIT_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPainId(item.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1 ${
                    selectedPainId === item.id
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal hover:border-raspberry/40'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="leading-tight">{item.name.split('(')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Item Deep Dive Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal text-xs leading-relaxed max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{activePainItem.icon}</span>
                <h4 className="font-bold text-base text-plum dark:text-pink-100">{activePainItem.name}</h4>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-petal/30 border border-petal/60">
                  <span className="font-bold text-plum block mb-1">How It Physically Helps</span>
                  <p className="text-plum/80 text-[11px] leading-relaxed">{activePainItem.howItWorks}</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-petal/60">
                  <span className="font-bold text-plum block mb-1">When to Use</span>
                  <p className="text-plum/80 text-[11px] leading-relaxed">{activePainItem.bestTiming}</p>
                </div>

                <div className="p-3 rounded-xl bg-lavender/40 border border-lavender">
                  <span className="font-bold text-plum block mb-1">Practical Recommendation</span>
                  <p className="text-plum/90 text-[11px] leading-relaxed">{activePainItem.practicalTip}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Products Compared */}
      {activeTab === 'products' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-petal/60">
              <div>
                <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                  Objective Matrix • Products Compared
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                  Find What Fits Your Body & Routine
                </h3>
                <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                  Side-by-side comparison of wear times, affordability, safety notes, and environmental impact.
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Products' },
                  { id: 'disposable', label: 'Disposable' },
                  { id: 'reusable', label: 'Reusable' },
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setProductFilter(f.id as any)}
                    className={`px-3 py-1 rounded-lg font-bold text-[11px] border transition-all ${
                      productFilter === f.id
                        ? 'bg-raspberry text-white border-raspberry'
                        : 'bg-white text-plum border-petal'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {filteredProducts.map(p => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal hover:border-raspberry transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{p.icon}</span>
                      <span className="px-2 py-0.5 rounded-md bg-petal/60 text-plum font-bold text-[10px]">
                        {p.ageFit}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-plum dark:text-pink-100 mb-2">
                      {p.name}
                    </h4>

                    <div className="space-y-2 mb-4 text-[11px]">
                      <div>
                        <span className="font-bold text-orchid block">Change Frequency:</span>
                        <span className="text-plum font-semibold">{p.wearTime}</span>
                      </div>
                      <div>
                        <span className="font-bold text-orchid block">Cost & Access:</span>
                        <span className="text-plum">{p.costRange}</span>
                      </div>
                      <div>
                        <span className="font-bold text-orchid block">Best Suited For:</span>
                        <span className="text-plum">{p.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-petal/60 text-[11px] text-plum/80">
                    <strong>Safety & Care:</strong> {p.safetyTips}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 4: Build an Iron Plate */}
      {activeTab === 'plate' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Interactive Nutrition • Anaemia Prevention
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Build an Iron-Absorption Plate
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Menstrual flow uses up iron. Tap Indian foods below to see how pairing Plant Iron with Vitamin C multiplies absorption 3x!
              </p>
            </div>

            {/* Food Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {INDIAN_NUTRITION_FOODS.map(food => {
                const isSelected = selectedFoodIds.includes(food.id);
                return (
                  <button
                    key={food.id}
                    onClick={() => toggleFoodItem(food.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300'
                        : 'bg-white/80 dark:bg-plum-deep border-petal text-plum hover:border-violet/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold">{food.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                        food.category === 'iron' 
                          ? 'bg-rose-100 text-rose-800' 
                          : food.category === 'vit-c'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-teal-100 text-teal-800'
                      }`}>
                        {food.category === 'iron' ? 'Iron' : food.category === 'vit-c' ? 'Vit C' : 'Magnesium'}
                      </span>
                    </div>
                    <span className="text-[11px] opacity-75 block italic">{food.hindiName}</span>
                    <p className="text-[10px] opacity-90 mt-1 leading-snug">{food.benefit}</p>
                  </button>
                );
              })}
            </div>

            {/* Absorption Feedback Meter */}
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-lg mx-auto text-xs">
              <div className="font-bold text-plum mb-2 flex items-center justify-between">
                <span>Iron Synergy Status:</span>
                <span className={hasIron && hasVitC ? 'text-emerald-700 font-extrabold' : 'text-orchid'}>
                  {hasIron && hasVitC ? '🌟 Supercharged (3x Absorption!)' : hasIron ? 'Good Iron Source' : 'Add an Iron Food'}
                </span>
              </div>

              {hasIron && hasVitC ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 leading-relaxed text-[11px]">
                  ✓ <strong>Winning Combination!</strong> You paired plant-based iron (non-heme) with Vitamin C. Ascorbic acid converts ferric iron to ferrous iron, which multiplies absorption into your bloodstream by 2 to 3 times!
                </div>
              ) : hasIron ? (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 leading-relaxed text-[11px]">
                  💡 <strong>Tip:</strong> You have an iron source selected! Now add a splash of <strong>Lemon (Nimbu)</strong> or <strong>Amla</strong> to unlock maximum absorption.
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-petal/40 border border-petal text-plum leading-relaxed text-[11px]">
                  Tap foods like <strong>Palak</strong> or <strong>Chana</strong> to start building your plate!
                </div>
              )}

              {/* The Chai Timing Rule */}
              <div className="mt-4 pt-3 border-t border-petal/60 text-[11px] text-orchid flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-raspberry" />
                <span>
                  <strong>The Chai Rule:</strong> Tannins in hot black tea and coffee block up to 60% of plant iron. Enjoy your chai at least 60 to 90 minutes before or after meals.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 5: Normal or See a Doctor? */}
      {activeTab === 'triage' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Symptom Triage • Red Flags Without Fear
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Is My Symptom Normal or Should I Ask a Doctor?
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Explore common scenarios to know what is standard biology and when to seek clinical care without panic.
              </p>
            </div>

            {/* Scenario Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CYCLE_TRIAGE_SCENARIOS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTriageId(t.id)}
                  className={`py-1.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                    activeTriageId === t.id
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal'
                  }`}
                >
                  {t.title.slice(0, 24)}...
                </button>
              ))}
            </div>

            {/* Active Triage Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-2xl mx-auto text-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold text-orchid uppercase block mb-1">Scenario</span>
                <h4 className="font-bold text-sm text-plum dark:text-pink-100">{activeTriage.scenario}</h4>
              </div>

              <div className={`p-3.5 rounded-xl border font-bold flex items-center gap-2 ${
                activeTriage.verdict === 'normal'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : activeTriage.verdict === 'worth-checking'
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                {activeTriage.verdict === 'normal' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                {activeTriage.verdict === 'worth-checking' && <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />}
                {activeTriage.verdict === 'see-doctor-soon' && <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                <span>
                  Clinical Verdict: {
                    activeTriage.verdict === 'normal' 
                      ? 'Usually Normal Biology' 
                      : activeTriage.verdict === 'worth-checking' 
                      ? 'Worth Having a Friendly Check' 
                      : 'Recommended to Consult a Gynaecologist Soon'
                  }
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-petal/30 border border-petal/60 text-plum leading-relaxed text-[11px]">
                <strong>Why:</strong> {activeTriage.explanation}
              </div>

              <div className="p-3 rounded-xl bg-lavender/40 border border-lavender text-[11px] text-plum font-semibold">
                👉 <strong>Action Step:</strong> {activeTriage.actionStep}
              </div>
            </div>

            {/* Diagnostic Disclaimer */}
            <div className="mt-6 p-3 rounded-xl bg-petal/30 border border-petal/60 text-[11px] text-orchid text-center">
              ⚠️ <em>This triage guide is for health education only, not diagnosis. If you ever experience extreme pain, fever, or dizziness, consult a qualified physician promptly.</em>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};
