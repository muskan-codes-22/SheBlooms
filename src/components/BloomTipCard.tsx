import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RefreshCw, Share2, Check, Lightbulb } from 'lucide-react';
import { BLOOM_TIPS, BloomTip } from '../data/tips';
import { useApp } from '../context/AppContext';

export const BloomTipCard: React.FC = () => {
  const { progress, toggleSaveTip } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTip: BloomTip = BLOOM_TIPS[currentIndex % BLOOM_TIPS.length];
  const isSaved = progress.savedTipIds.includes(currentTip.id);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % BLOOM_TIPS.length);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`🌸 Daily Bloom Tip from SheBlooms: "${currentTip.text}" — (${currentTip.source})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl glass-card p-6 sm:p-7 border border-petal overflow-hidden shadow-soft-pink">
      {/* Marigold Accent Ribbon */}
      <div className="ribbon-marigold-tr" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-petal/50 text-raspberry">
            <Lightbulb className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-raspberry">
              Daily Bloom Tip
            </span>
            <div className="text-xs text-orchid dark:text-pink-300 font-semibold">
              {currentTip.category} • {currentTip.stageTag}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => toggleSaveTip(currentTip.id)}
            className={`p-2 rounded-xl transition-all ${
              isSaved
                ? 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400 scale-105'
                : 'text-plum/40 hover:text-raspberry dark:text-pink-300/40 hover:bg-petal/30'
            }`}
            title={isSaved ? 'Tip Saved' : 'Save Tip'}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl text-plum/40 hover:text-raspberry dark:text-pink-300/40 hover:bg-petal/30 transition-colors"
            title="Copy Tip"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-xl text-plum/40 hover:text-raspberry dark:text-pink-300/40 hover:bg-petal/30 transition-colors"
            title="Next Bloom Tip"
          >
            <RefreshCw className="w-4 h-4 hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Tip Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTip.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="space-y-3"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl shrink-0">{currentTip.icon}</span>
            <p className="font-serif italic text-base sm:text-lg text-plum dark:text-pink-100 leading-snug">
              "{currentTip.text}"
            </p>
          </div>

          <div className="text-right text-[11px] text-orchid dark:text-pink-300 font-medium">
            — {currentTip.source}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

