import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Trash2, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Privacy: React.FC = () => {
  const { resetAllData } = useApp();
  const [clearedMessage, setClearedMessage] = useState(false);

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear your local SheBlooms reading history and quiz records?')) {
      resetAllData();
      setClearedMessage(true);
      setTimeout(() => setClearedMessage(false), 3000);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <section className="pt-8 pb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-petal/60 text-raspberry text-xs font-bold uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Psychological Safety & Trust</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-plum dark:text-pink-100">
            Privacy Commitment
          </h1>
          <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
            Your body is your personal sanctuary. SheBlooms was built with privacy by design so you can learn without hesitation.
          </p>
        </div>

        {/* Core Promises Card */}
        <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple space-y-6 mb-8">
          
          <div className="flex items-center gap-3 pb-4 border-b border-petal/60">
            <div className="w-12 h-12 rounded-xl bg-petal/50 text-raspberry flex items-center justify-center text-2xl">
              🔒
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-plum dark:text-pink-100">
                Our Privacy Principles
              </h2>
              <span className="text-xs text-orchid dark:text-pink-300">
                Zero tracking • Zero selling • Client-Side Storage
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white/70 dark:bg-plum-deep border border-petal space-y-1.5">
              <div className="font-bold text-sm text-raspberry flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Mandatory Account</span>
              </div>
              <p className="text-plum/70 dark:text-pink-200 leading-relaxed">
                You never need to provide your name, email, phone number, or social media profile to read articles or ask questions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 dark:bg-plum-deep border border-petal space-y-1.5">
              <div className="font-bold text-sm text-raspberry flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>On-Device Storage</span>
              </div>
              <p className="text-plum/70 dark:text-pink-200 leading-relaxed">
                Life stage selection, checklist progress, and quiz badges live only in your personal browser's local memory (`localStorage`).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 dark:bg-plum-deep border border-petal space-y-1.5">
              <div className="font-bold text-sm text-raspberry flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>AI Chat Discretion</span>
              </div>
              <p className="text-plum/70 dark:text-pink-200 leading-relaxed">
                Questions asked to SheBloom are matched in your browser session. No query logs are sold or connected to your identity.
              </p>
            </div>
          </div>

          {/* Clear My Data Tool */}
          <div className="p-5 rounded-xl bg-lavender/50 dark:bg-plum-night/60 border border-petal flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <h4 className="font-bold text-plum dark:text-pink-100 text-sm flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-raspberry" />
                <span>Wipe Local Device Data</span>
              </h4>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Remove all saved stage preferences, quiz scores, and reading progress from this browser in one click.
              </p>
            </div>
            <button
              onClick={handleClearData}
              className="px-4 py-2 rounded-xl border border-raspberry text-raspberry hover:bg-petal/30 font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear My Data</span>
            </button>
          </div>

          {clearedMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold text-center"
            >
              ✓ All local device data cleared successfully!
            </motion.div>
          )}

        </div>

      </section>
    </div>
  );
};
