import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-petal/60 dark:border-pink-900/30 bg-lavender/30 dark:bg-plum-night py-8 text-plum/70 dark:text-pink-100/70 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Top: Logo & One Line on Left, 4 Links on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-1.5 font-serif font-bold text-lg text-plum dark:text-pink-100">
              <span>🌸</span>
              <span className="text-violet-dark dark:text-violet-light">She</span>
              <span className="text-raspberry">Blooms</span>
            </Link>
            <p className="text-xs text-orchid dark:text-pink-300 mt-0.5">
              Stigma-free menstrual health education for every stage of life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-plum/80 dark:text-pink-200">
            <Link to="/learn" className="hover:text-raspberry transition-colors">Learn</Link>
            <Link to="/cycle" className="hover:text-raspberry transition-colors">Cycle Wheel</Link>
            <Link to="/ask" className="hover:text-raspberry transition-colors">Ask SheBloom</Link>
            <Link to="/quiz" className="hover:text-raspberry transition-colors">Quizzes</Link>
            <Link to="/privacy" className="hover:text-raspberry transition-colors">Privacy</Link>
          </div>
        </div>

        {/* Short One-Line Medical Disclaimer */}
        <p className="text-[11px] text-plum/50 dark:text-pink-300/50 leading-relaxed border-t border-petal/40 pt-3">
          Disclaimer: SheBlooms provides educational guidance only and is not a substitute for clinical medical diagnosis, advice, or treatment.
        </p>

        {/* Bottom © line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-plum/40 dark:text-pink-300/40">
          <span>© 2026 SheBlooms. All rights reserved.</span>
          <Link to="/terms" className="hover:underline">Terms of Use</Link>
        </div>

      </div>
    </footer>
  );
};
