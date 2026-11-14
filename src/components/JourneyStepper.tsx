import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Compass, BookOpen, MessageSquare, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  id: number;
  label: string;
  sub: string;
  icon: any;
  actionText: string;
  linkTo: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    label: 'OPEN',
    sub: 'Frictionless & Private',
    icon: Lock,
    actionText: 'Instant Access',
    linkTo: '#stages',
    description: 'Enter freely with zero registration, zero phone numbers, and zero tracking. Your privacy is protected from your first click.'
  },
  {
    id: 2,
    label: 'GET STARTED',
    sub: 'Pick Your Life Stage',
    icon: Compass,
    actionText: 'Choose Interest',
    linkTo: '#stages',
    description: 'Whether preparing for a first period, tuning your regular cycle, or navigating menopause, tailor the guides instantly.'
  },
  {
    id: 3,
    label: 'EXPLORE',
    sub: 'Reviewed Health Guides',
    icon: BookOpen,
    actionText: 'Browse Hub',
    linkTo: '/learn',
    description: 'Read 12+ friendly, beautifully illustrated articles vetted by global clinical standards. Demystify pain, hygiene, and anatomy.'
  },
  {
    id: 4,
    label: 'ENGAGE',
    sub: 'Ask AI & Take Quizzes',
    icon: MessageSquare,
    actionText: 'Ask SheBloom',
    linkTo: '/ask',
    description: 'Submit your candid questions to SheBloom AI with real-time reviewed answers, and test your knowledge with interactive Myth or Fact swipe cards.'
  },
  {
    id: 5,
    label: 'EMPOWER',
    sub: 'Body Literacy & Calm',
    icon: Award,
    actionText: 'See Impact',
    linkTo: '/impact',
    description: 'Build lifelong confidence, make informed healthcare choices, and pass stigma-free knowledge on to family and peers.'
  }
];

export const JourneyStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="w-full py-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="px-3.5 py-1 rounded-full bg-petal/60 text-raspberry text-xs font-bold uppercase tracking-wider">
          The SheBlooms Flow
        </span>
        <h2 className="text-3xl font-serif font-bold text-plum dark:text-pink-100 mt-2">
          How SheBlooms Works
        </h2>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
          A seamless, stigma-free bridge from curiosity to empowered confidence.
        </p>
      </div>

      {/* Stepper Node Line */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-8 left-12 right-12 h-1 bg-lavender dark:bg-pink-950 -z-0">
          <motion.div
            className="h-full bg-gradient-to-r from-raspberry via-orchid to-marigold"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>

        {/* 5 Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
          {STEPS.map((s) => {
            const Icon = s.icon;
            const isCurrent = activeStep === s.id;
            const isCompleted = s.id < activeStep;

            return (
              <motion.div
                key={s.id}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(s.id)}
                className={`cursor-pointer rounded-3xl p-4 sm:p-5 flex flex-col items-center text-center transition-all border ${
                  isCurrent
                    ? 'glass-card border-raspberry shadow-soft-pink scale-105'
                    : isCompleted
                    ? 'bg-white/80 dark:bg-plum-deep border-petal/80 dark:border-pink-900/40'
                    : 'bg-white/40 dark:bg-plum/30 border-lavender dark:border-pink-950 opacity-80'
                }`}
              >
                {/* Node Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-sm transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-tr from-raspberry to-violet text-white ring-4 ring-petal'
                      : isCompleted
                      ? 'bg-petal text-raspberry'
                      : 'bg-lavender dark:bg-plum-night text-orchid'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </div>

                {/* Step indicator */}
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-raspberry">
                  Step 0{s.id}
                </span>

                <h3 className="font-serif font-bold text-sm text-plum dark:text-pink-100 mt-0.5">
                  {s.label}
                </h3>

                <span className="text-[11px] text-orchid dark:text-pink-300 font-medium">
                  {s.sub}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Active Step Detail Box */}
        <div className="mt-8 rounded-3xl glass-card p-6 border border-petal max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-xs font-bold text-raspberry uppercase tracking-wider">
                  Step 0{STEPS[activeStep - 1].id}: {STEPS[activeStep - 1].label}
                </span>
                <span className="text-xs text-orchid dark:text-pink-300">• {STEPS[activeStep - 1].sub}</span>
              </div>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-100 leading-relaxed">
                {STEPS[activeStep - 1].description}
              </p>
            </div>
            
            {STEPS[activeStep - 1].linkTo.startsWith('#') ? (
              <a
                href={STEPS[activeStep - 1].linkTo}
                className="shrink-0 px-4 py-2 rounded-full bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center gap-1.5"
              >
                <span>{STEPS[activeStep - 1].actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                to={STEPS[activeStep - 1].linkTo}
                className="shrink-0 px-4 py-2 rounded-full bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center gap-1.5"
              >
                <span>{STEPS[activeStep - 1].actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Pitch Outcome Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-petal/40 via-lavender/50 to-petal/40 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border border-petal/60 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-wide text-orchid dark:text-pink-200">
            BETTER AWARENESS <span className="text-raspberry">→</span> CLEARER UNDERSTANDING <span className="text-raspberry">→</span> INFORMED CHOICES
          </div>
          <div className="text-xs text-plum/70 dark:text-pink-300/80 italic mt-1">
            "More awareness. Less hesitation. Better-informed choices."
          </div>
        </div>
      </div>
    </div>
  );
};

