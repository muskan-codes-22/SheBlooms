import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  MessageSquare, 
  HelpCircle, 
  RefreshCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STAGES } from '../data/stages';
import { StageCard } from '../components/StageCard';
import { HeroIllustration } from '../components/HeroIllustration';
import { BloomTipCard } from '../components/BloomTipCard';
import { JourneyStepper } from '../components/JourneyStepper';
import { PharmacyFinder } from '../components/PharmacyFinder';
import { ARTICLES } from '../data/articles';
import { FEATURES } from '../config/features';

export const Home: React.FC = () => {
  const { stage, setStage, stageInfo } = useApp();

  return (
    <div className="min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Text (~55%) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petal/50 dark:bg-pink-950/60 border border-petal dark:border-pink-900/50 text-xs font-bold text-raspberry">
              <ShieldCheck className="w-3.5 h-3.5 text-raspberry" />
              <span>Privacy-Conscious Menstrual Health Education</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight leading-[1.12]">
              Your body. <br />
              <span className="text-violet-dark dark:text-violet-light">Your questions.</span> <br />
              <span className="bg-gradient-to-r from-raspberry via-pink-500 to-orchid bg-clip-text text-transparent">
                Your learning space.
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-plum/80 dark:text-pink-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Reliable, stigma-free guidance across every life stage — from your first period to menopause. No account required, zero judgment, and based on public health guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#stages"
                className="px-6 py-3 rounded-xl bg-raspberry text-white font-bold text-sm shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center gap-2"
              >
                <span>Explore Guides</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/ask"
                className="px-6 py-3 rounded-xl glass-card hover:bg-white text-plum dark:text-pink-100 font-bold text-sm border border-petal hover:border-raspberry transition-all flex items-center gap-2"
              >
                <span>Ask SheBloom</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </Link>
            </div>

            {/* Truthful Trust Chips: Exactly 3 */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-orchid dark:text-pink-300 font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/70 dark:bg-plum/50 border border-petal">
                🔒 Private by design
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/70 dark:bg-plum/50 border border-petal">
                💬 Stigma-free learning
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/70 dark:bg-plum/50 border border-petal">
                🌿 Evidence-informed
              </span>
            </div>
          </motion.div>

          {/* Right Hero Animated Illustration (~45%) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </section>

      {/* Free Community Pharmacy & Period Care Finder */}
      <PharmacyFinder />

      {/* 2. "Where are you in your journey?" (4 stage cards) */}
      <section id="stages" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Selected Stage Banner (if any) */}
        {stageInfo && (
          <div className="mb-8 p-4 rounded-xl glass-card border border-raspberry/40 flex items-center justify-between gap-4 max-w-3xl mx-auto text-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stageInfo.icon}</span>
              <div>
                <span className="font-bold text-plum dark:text-pink-100">{stageInfo.name} active</span>
                <span className="text-orchid dark:text-pink-300 ml-2">({stageInfo.tagline})</span>
              </div>
            </div>
            <button
              onClick={() => setStage(null)}
              className="text-raspberry font-bold hover:underline flex items-center gap-1 shrink-0"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        )}

        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100">
            Where are you in your journey?
          </h2>
          <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
            Select a stage to personalize your learning — completely account-free.
          </p>
        </div>

        {/* 4 Stage Cards (Clean: icon + title + one short line) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.values(STAGES).map(s => (
            <StageCard
              key={s.id}
              stage={s}
              isSelected={stage === s.id}
              onSelect={(id) => setStage(id)}
            />
          ))}
        </div>
      </section>

      {/* Optional Stage Articles Grid (Feature Flagged) */}
      {FEATURES.showHomeStageArticles && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map(art => (
              <Link key={art.id} to={`/learn/${art.id}`} className="p-5 rounded-2xl glass-card border border-petal">
                <h4 className="font-bold">{art.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Optional Journey Stepper (Feature Flagged) */}
      {FEATURES.showHomeJourneyStepper && (
        <section className="py-16 bg-lavender/30 border-y border-petal/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JourneyStepper />
          </div>
        </section>
      )}

      {/* Optional Bloom Tip Card (Feature Flagged) */}
      {FEATURES.showHomeBloomTip && (
        <section className="py-12 max-w-2xl mx-auto px-4">
          <BloomTipCard />
        </section>
      )}

      {/* 3. "Learn · Ask · Quiz" (3 simple icon cards, one line each) */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100">
            Learn · Ask · Quiz
          </h2>
          <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
            Three simple ways to explore your body and build confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* 1. Learn */}
          <Link
            to="/learn"
            className="group p-6 rounded-2xl bg-white/70 dark:bg-plum-deep border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-petal/50 text-raspberry flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 group-hover:text-raspberry transition-colors mb-2">
                1. Learn
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed">
                Evidence-informed health guides for every cycle stage.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-petal/40 flex items-center justify-between text-xs font-bold text-raspberry">
              <span>Read Guides</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 2. Ask */}
          <Link
            to="/ask"
            className="group p-6 rounded-2xl bg-white/70 dark:bg-plum-deep border border-petal/80 hover:border-violet hover:shadow-soft-purple transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-lavender text-violet flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 group-hover:text-violet transition-colors mb-2">
                2. Ask
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed">
                Private AI assistant for instant, judgment-free answers.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-petal/40 flex items-center justify-between text-xs font-bold text-violet">
              <span>Ask a Question</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 3. Quiz */}
          <Link
            to="/quiz"
            className="group p-6 rounded-2xl bg-white/70 dark:bg-plum-deep border border-petal/80 hover:border-amber-600 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 group-hover:text-amber-700 transition-colors mb-2">
                3. Quiz
              </h3>
              <p className="text-xs text-plum/70 dark:text-pink-100/70 leading-relaxed">
                Myth-busting interactive quizzes to check your knowledge.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-petal/40 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
              <span>Test Knowledge</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
};
