import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto complete after 2.8 seconds if not skipped
    const timer = setTimeout(() => {
      handleSkip();
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400); // Allow exit animation to complete
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blush via-lavender-light to-petal-light dark:from-plum-night dark:via-plum-deep dark:to-plum overflow-hidden px-4"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-petal/40 dark:bg-pink-900/20 blur-3xl -z-10 animate-pulse-subtle" />

          {/* Blooming Flower Animation */}
          <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
            {/* Center pistil */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-marigold to-amber-300 shadow-glow-orchid z-20 flex items-center justify-center"
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </motion.div>

            {/* Petals that bloom outward in circular sequence */}
            {[0, 60, 120, 180, 240, 300].map((deg, index) => (
              <motion.div
                key={deg}
                initial={{ scale: 0, opacity: 0, rotate: deg }}
                animate={{
                  scale: [0, 1.15, 1],
                  opacity: 1,
                  rotate: deg,
                }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                className="absolute origin-center w-12 h-20"
                style={{
                  transformOrigin: '50% 85%',
                  bottom: '50%',
                  left: 'calc(50% - 24px)',
                }}
              >
                <div
                  className="w-full h-full rounded-t-full rounded-b-lg shadow-sm"
                  style={{
                    background:
                      index % 2 === 0
                        ? 'linear-gradient(180deg, #FFD6E4 0%, #D6457F 100%)'
                        : 'linear-gradient(180deg, #EDE5FA 0%, #9B7FD1 100%)',
                    opacity: 0.9,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Logo Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">
              <span className="text-violet-dark dark:text-violet-light">She</span>
              <span className="bg-gradient-to-r from-raspberry to-pink-500 bg-clip-text text-transparent ml-1">
                Blooms
              </span>
            </h1>
          </motion.div>

          {/* Tagline letter/word reveal */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-base md:text-lg text-plum/80 dark:text-pink-100/90 font-medium italic text-center max-w-sm"
          >
            Your body. Your questions. Your learning space.
          </motion.p>

          {/* Privacy badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-plum/60 border border-petal dark:border-pink-900/50 text-xs font-semibold text-orchid dark:text-pink-300"
          >
            <span>🔒</span>
            <span>Private by design • No account required</span>
          </motion.div>

          {/* Skip Button */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-6 right-6 px-4 py-2 rounded-full glass-card hover:bg-white text-xs font-semibold text-plum/70 dark:text-pink-200 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

