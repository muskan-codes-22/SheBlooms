import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sun, Heart, Activity, Apple, ShieldCheck, Info } from 'lucide-react';

interface PhaseDetail {
  id: string;
  name: string;
  season: string;
  days: string;
  color: string;
  bgGradient: string;
  hormones: string;
  bodyChanges: string;
  energyMood: string;
  nutritionTips: string;
  selfCareAdvice: string;
  icon: string;
}

const PHASES: PhaseDetail[] = [
  {
    id: 'menstrual',
    name: 'Menstrual Phase',
    season: 'Winter ❄️',
    days: 'Days 1 – 5',
    color: '#D6457F',
    bgGradient: 'from-pink-100 to-rose-50',
    hormones: 'Estrogen & Progesterone at baseline lowest levels',
    bodyChanges: 'The uterus gently sheds its endometrial cushion lining as menstrual fluid.',
    energyMood: 'Quiet, introspective, lower physical stamina. Deep desire for warmth and cocooning.',
    nutritionTips: 'Iron-rich foods (spinach, lentils, dark chocolate), bone broths, warm ginger tea, and hydrating fruits.',
    selfCareAdvice: 'Gentle stretching, restorative child’s pose, hot water bottles, and permission to say no to heavy social plans.',
    icon: '🩸'
  },
  {
    id: 'follicular',
    name: 'Follicular Phase',
    season: 'Spring 🌱',
    days: 'Days 6 – 13',
    color: '#9B7FD1',
    bgGradient: 'from-purple-100 to-indigo-50',
    hormones: 'FSH stimulates follicle growth; Estrogen steadily ascends',
    bodyChanges: 'A new egg matures in the ovary; the uterine lining begins rebuilding with fresh blood vessels.',
    energyMood: 'Renewed vitality, creative sparks, curiosity, mental clarity, and sociable optimism.',
    nutritionTips: 'Fermented foods (kimchi, kefir), sprouted salads, fresh greens, lean proteins, and citrus.',
    selfCareAdvice: 'Start new creative projects, schedule brainstorming sessions, and enjoy cardio, cycling or dance classes.',
    icon: '🌱'
  },
  {
    id: 'ovulatory',
    name: 'Ovulatory Phase',
    season: 'Summer ☀️',
    days: 'Days 14 – 16',
    color: '#EDB650',
    bgGradient: 'from-amber-100 to-yellow-50',
    hormones: 'Luteinizing Hormone (LH) surge triggers egg release; Estrogen peaks',
    bodyChanges: 'The mature follicle ruptures, releasing an egg into the fallopian tube. Cervical fluid becomes stretchy like raw egg whites.',
    energyMood: 'Peak confidence, magnetic charisma, elevated libido, and high social stamina.',
    nutritionTips: 'Fiber-rich foods to help the liver metabolize peak estrogen (berries, quinoa, broccoli, chia seeds).',
    selfCareAdvice: 'Public speaking, big meetings, connection with friends, high-intensity workouts or strength training.',
    icon: '☀️'
  },
  {
    id: 'luteal',
    name: 'Luteal Phase',
    season: 'Autumn 🍂',
    days: 'Days 17 – 28',
    color: '#8B4F7E',
    bgGradient: 'from-fuchsia-100 to-purple-50',
    hormones: 'Progesterone takes center stage; drops if fertilization doesn’t occur',
    bodyChanges: 'Metabolism increases slightly (+100–300 kcal/day). Body temperature rises by ~0.5°F.',
    energyMood: 'Detail-oriented, organizing impulse early on; later on, mood softens and PMS cravings may arise.',
    nutritionTips: 'Magnesium-rich foods (roasted pumpkin seeds, bananas, dark chocolate), sweet potatoes, and herbal teas.',
    selfCareAdvice: 'Declutter your space, finish checklists, reduce excess caffeine, and take epsom salt warm baths.',
    icon: '🍂'
  }
];

export const CycleWheel: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<PhaseDetail>(PHASES[0]);
  
  // Interactive period estimator state
  const [lastPeriodDate, setLastPeriodDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() - 14);
    return today.toISOString().split('T')[0];
  });
  const [cycleLength, setCycleLength] = useState<number>(28);

  // Compute estimated next period
  const calculateNextPeriod = () => {
    if (!lastPeriodDate) return null;
    const base = new Date(lastPeriodDate);
    const nextDate = new Date(base.getTime() + cycleLength * 24 * 60 * 60 * 1000);
    const ovulationDate = new Date(nextDate.getTime() - 14 * 24 * 60 * 60 * 1000);
    return {
      nextDate: nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      ovulationDate: ovulationDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      daysUntil: Math.ceil((nextDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    };
  };

  const estimate = calculateNextPeriod();

  return (
    <div className="w-full space-y-10">
      
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-petal/60 text-raspberry text-xs font-bold uppercase tracking-wider">
          Interactive Inner Seasons
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 mt-2">
          The 4 Phases of Your Cycle
        </h2>
        <p className="text-sm text-orchid dark:text-pink-300 mt-2">
          Your cycle is a continuous, intelligent rhythm. Tap each phase to explore how your body, mood, and nutrition shift through the monthly seasons.
        </p>
      </div>

      {/* Cycle Wheel & Interactive Phase Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Circular Petal Wheel SVG */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88">
            
            {/* Center Decorative Circle */}
            <div className="absolute inset-16 sm:inset-20 rounded-full bg-white dark:bg-plum-deep border-4 border-petal/60 shadow-xl flex flex-col items-center justify-center text-center p-3 z-20">
              <span className="text-2xl sm:text-3xl animate-bounce">{selectedPhase.icon}</span>
              <span className="font-serif font-bold text-xs sm:text-sm text-plum dark:text-pink-100 mt-1">
                {selectedPhase.name.replace(' Phase', '')}
              </span>
              <span className="text-[11px] text-raspberry font-semibold">
                {selectedPhase.days}
              </span>
              <span className="text-[10px] text-orchid dark:text-pink-300 font-medium">
                {selectedPhase.season}
              </span>
            </div>

            {/* Circular Petal Slices */}
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-45">
              {/* Slices: 4 quadrants */}
              {[
                { phase: PHASES[0], d: "M 100 100 L 100 15 A 85 85 0 0 1 185 100 Z" },
                { phase: PHASES[1], d: "M 100 100 L 185 100 A 85 85 0 0 1 100 185 Z" },
                { phase: PHASES[2], d: "M 100 100 L 100 185 A 85 85 0 0 1 15 100 Z" },
                { phase: PHASES[3], d: "M 100 100 L 15 100 A 85 85 0 0 1 100 15 Z" },
              ].map(({ phase, d }, i) => {
                const isSelected = selectedPhase.id === phase.id;
                return (
                  <path
                    key={phase.id}
                    d={d}
                    fill={phase.color}
                    fillOpacity={isSelected ? 0.9 : 0.4}
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300 hover:fill-opacity-80"
                    onClick={() => setSelectedPhase(phase)}
                  />
                );
              })}
            </svg>

            {/* Outer Day Marker Labels */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-plum/60 dark:text-pink-300">
              Day 1 (Bleed)
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-plum/60 dark:text-pink-300">
              Day 7 (Rise)
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-plum/60 dark:text-pink-300">
              Day 14 (Ovulation)
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-plum/60 dark:text-pink-300">
              Day 21 (Luteal)
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {PHASES.map(p => {
              const active = selectedPhase.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPhase(p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-raspberry text-white shadow-soft-pink scale-105'
                      : 'bg-white/80 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-raspberry'
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.name.replace(' Phase', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Phase Details Card with Smooth Framer Motion Transition */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPhase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl glass-card p-6 sm:p-8 border border-petal/70 relative overflow-hidden shadow-soft-purple"
            >
              {/* Marigold Corner Ribbon */}
              <div className="ribbon-marigold-tr" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                    style={{ backgroundColor: `${selectedPhase.color}25` }}
                  >
                    {selectedPhase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum dark:text-pink-100">
                      {selectedPhase.name}
                    </h3>
                    <div className="text-xs font-semibold text-orchid dark:text-pink-300">
                      {selectedPhase.days} • Season: {selectedPhase.season}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hormonal Blueprint */}
              <div className="mb-4 p-3 rounded-xl bg-lavender/40 dark:bg-plum/50 border border-lavender flex items-start gap-2.5">
                <Activity className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-orchid dark:text-pink-200">Hormonal Profile: </span>
                  <span className="text-plum/80 dark:text-pink-100">{selectedPhase.hormones}</span>
                </div>
              </div>

              {/* 3 Detail Blocks */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-raspberry flex items-center gap-1.5 mb-1">
                    <span>🌸</span> What is happening in your body:
                  </h4>
                  <p className="text-plum/80 dark:text-pink-100/90 leading-relaxed pl-5">
                    {selectedPhase.bodyChanges}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-orchid dark:text-pink-300 flex items-center gap-1.5 mb-1">
                    <Heart className="w-3.5 h-3.5" /> Natural Energy & Mood:
                  </h4>
                  <p className="text-plum/80 dark:text-pink-100/90 leading-relaxed pl-5">
                    {selectedPhase.energyMood}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-marigold-dark flex items-center gap-1.5 mb-1">
                    <Apple className="w-3.5 h-3.5" /> Nourishing Nutrition:
                  </h4>
                  <p className="text-plum/80 dark:text-pink-100/90 leading-relaxed pl-5">
                    {selectedPhase.nutritionTips}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-violet flex items-center gap-1.5 mb-1">
                    <Sun className="w-3.5 h-3.5" /> Gentle Self-Care Tip:
                  </h4>
                  <p className="text-plum/80 dark:text-pink-100/90 leading-relaxed pl-5">
                    {selectedPhase.selfCareAdvice}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Educational Next Period Estimator Mini-Tool */}
      <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal/70 max-w-4xl mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-petal/50">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-raspberry" />
              <h3 className="text-xl font-serif font-bold text-plum dark:text-pink-100">
                Educational Cycle Estimator
              </h3>
            </div>
            <p className="text-xs text-orchid dark:text-pink-300 mt-1">
              Visualize when your next period and ovulation may gently arrive based on your typical rhythm.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs font-semibold text-emerald-700 dark:text-emerald-300 self-start">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>On-Device Calculation • Zero Server Storage</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <div>
            <label className="block text-xs font-bold text-plum dark:text-pink-200 mb-2">
              First day of last period:
            </label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-plum-deep border border-petal text-sm font-semibold text-plum dark:text-pink-100 focus:outline-none focus:border-raspberry"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-plum dark:text-pink-200 mb-2">
              Average cycle length: <span className="text-raspberry font-extrabold">{cycleLength} days</span>
            </label>
            <input
              type="range"
              min="21"
              max="40"
              value={cycleLength}
              onChange={(e) => setCycleLength(parseInt(e.target.value))}
              className="w-full accent-raspberry cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-plum/50 dark:text-pink-300/50 mt-1">
              <span>21 days</span>
              <span>28 days (avg)</span>
              <span>40 days</span>
            </div>
          </div>
        </div>

        {/* Highlight Result Cards */}
        {estimate && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-petal/30 dark:bg-pink-950/30 border border-petal text-center">
              <span className="text-xs font-semibold text-orchid dark:text-pink-300">
                Estimated Next Period
              </span>
              <div className="text-lg font-serif font-bold text-raspberry mt-1">
                {estimate.nextDate}
              </div>
              <span className="text-[11px] text-plum/60 dark:text-pink-200/60 font-medium">
                {estimate.daysUntil > 0 ? `In approximately ${estimate.daysUntil} days` : 'Expected around now'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 text-center">
              <span className="text-xs font-semibold text-marigold-dark">
                Estimated Ovulation Window
              </span>
              <div className="text-lg font-serif font-bold text-amber-700 dark:text-amber-300 mt-1">
                Around {estimate.ovulationDate}
              </div>
              <span className="text-[11px] text-plum/60 dark:text-pink-200/60 font-medium">
                Peak energy & cervical fluid changes
              </span>
            </div>

            <div className="p-4 rounded-xl bg-lavender/40 dark:bg-purple-950/30 border border-lavender text-center">
              <span className="text-xs font-semibold text-violet">
                Preparedness Tip
              </span>
              <div className="text-xs font-medium text-plum/80 dark:text-pink-100 mt-1 leading-snug">
                Pop 2 pads and your favorite soothing tea in your pouch 2 days before {estimate.nextDate}.
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 flex items-start gap-2 text-[11px] text-plum/60 dark:text-pink-300/60 italic">
          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-orchid" />
          <span>
            Disclaimer: This is an educational calculation based on average biological timing. Natural cycles regularly fluctuate due to stress, travel, illness, and sleep. Not intended for contraception.
          </span>
        </div>
      </div>

    </div>
  );
};

