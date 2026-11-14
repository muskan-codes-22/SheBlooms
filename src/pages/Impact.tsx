import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Workflow, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  HelpCircle,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FEATURES } from '../config/features';

export const Impact: React.FC = () => {
  const { progress } = useApp();

  const totalQuizzesTaken = progress.quizResults.length;
  const avgQuizScore = totalQuizzesTaken > 0
    ? Math.round(progress.quizResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzesTaken)
    : 0;

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          About SheBlooms
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-lg mx-auto">
          Stigma-free menstrual health education for every stage of life.
        </p>
      </section>

      {/* Optional User Learning Dashboard (Feature Flagged) */}
      {FEATURES.showImpactDashboard && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="p-6 rounded-2xl glass-card border border-petal">
            <h3 className="font-serif font-bold text-lg text-plum mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-raspberry" />
              <span>Your Activity</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div className="p-3 bg-white/60 rounded-xl">
                <span className="font-bold text-lg text-raspberry">{progress.readArticleIds.length}</span>
                <div>Guides Read</div>
              </div>
              <div className="p-3 bg-white/60 rounded-xl">
                <span className="font-bold text-lg text-violet">{totalQuizzesTaken}</span>
                <div>Quizzes Taken</div>
              </div>
              <div className="p-3 bg-white/60 rounded-xl">
                <span className="font-bold text-lg text-orchid">{avgQuizScore}%</span>
                <div>Avg. Score</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Exactly 3 Clean, Spacious Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Who It Helps */}
          <div className="p-6 sm:p-7 rounded-2xl glass-card border border-petal flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-petal/50 text-raspberry flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 mb-2">
                Who It Helps
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed mb-4">
                Guidance tailored across biological stages:
              </p>
              <ul className="space-y-2 text-xs text-orchid dark:text-pink-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-raspberry font-bold">•</span>
                  <span><strong>Adolescents:</strong> Preparing for menarche without fear.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-raspberry font-bold">•</span>
                  <span><strong>Women:</strong> Cycle rhythm, cramp care, and menopause.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-raspberry font-bold">•</span>
                  <span><strong>Educators & Parents:</strong> Compassionate language for youth.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: How It Works */}
          <div className="p-6 sm:p-7 rounded-2xl glass-card border border-petal flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-lavender text-violet flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 mb-2">
                How It Works
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed mb-4">
                Simple, self-guided, and respectful:
              </p>
              <ul className="space-y-2 text-xs text-orchid dark:text-pink-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-violet font-bold">•</span>
                  <span><strong>No Accounts:</strong> Instant browser-based learning.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-violet font-bold">•</span>
                  <span><strong>Evidence-Informed:</strong> WHO and public health guidance.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-violet font-bold">•</span>
                  <span><strong>Interactive:</strong> Cycle wheel, quizzes, and AI chat.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Our Promise */}
          <div className="p-6 sm:p-7 rounded-2xl glass-card border border-petal flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 mb-2">
                Our Promise
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed mb-4">
                Private, simple, and judgment-free:
              </p>
              <ul className="space-y-2 text-xs text-orchid dark:text-pink-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">•</span>
                  <span><strong>Private:</strong> Data stays in your browser storage.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">•</span>
                  <span><strong>Simple:</strong> Plain language with zero gatekeeping.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">•</span>
                  <span><strong>Safe:</strong> Red-flag alerts gently prompt doctor care.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Tagline */}
        <div className="text-center mt-12">
          <p className="text-xs text-orchid dark:text-pink-300 italic">
            "More awareness. Less hesitation. Better-informed choices."
          </p>
        </div>
      </section>

    </div>
  );
};
