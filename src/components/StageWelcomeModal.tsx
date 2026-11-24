import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const StageWelcomeModal: React.FC = () => {
  const { welcomingStage, setWelcomingStage } = useApp();
  const navigate = useNavigate();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setWelcomingStage(null);
      }
    };
    if (welcomingStage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [welcomingStage, setWelcomingStage]);

  if (!welcomingStage) return null;

  const handleExplore = () => {
    setWelcomingStage(null);
    navigate('/learn');
  };

  const handleDismiss = () => {
    setWelcomingStage(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Soft Dim Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleDismiss}
          className="absolute inset-0 bg-plum-night/50 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative w-full max-w-md rounded-3xl bg-white/95 dark:bg-plum-night/95 backdrop-blur-xl p-6 sm:p-8 border border-petal shadow-2xl text-center overflow-hidden z-10"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle Decorative Background Arches */}
          <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-petal/40 dark:bg-pink-900/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-lavender/40 dark:bg-violet-900/20 blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full text-plum/50 dark:text-pink-300/60 hover:text-raspberry hover:bg-petal/40 transition-colors"
            aria-label="Close welcome message"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Character Animation by Stage */}
          <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
            {welcomingStage === 'puberty' && <TeenGirlAnimation />}
            {welcomingStage === 'cycle' && <YoungAdultWomanAnimation />}
            {welcomingStage === 'menopause' && <MidAgeWomanAnimation />}
            {welcomingStage === 'educator' && <EducatorWomanAnimation />}
          </div>

          {/* Dynamic Content by Stage */}
          {welcomingStage === 'puberty' && (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-petal/60 dark:bg-pink-950/60 text-raspberry text-xs font-bold mb-2">
                <span>🌷 First Period / Puberty</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-plum dark:text-pink-100 mb-2">
                Welcome, young bloom!
              </h3>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 leading-relaxed mb-6">
                Starting your first period can feel like a big step, but you are never alone. No scary medical jargon, zero judgment, and no silly questions here!
              </p>
            </div>
          )}

          {welcomingStage === 'cycle' && (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender/60 dark:bg-plum/60 text-violet-dark dark:text-pink-200 text-xs font-bold mb-2">
                <span>🪷 Cycle & Period Care</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-plum dark:text-pink-100 mb-2">
                Tune into your rhythm!
              </h3>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 leading-relaxed mb-6">
                Your body shifts through 4 natural hormonal seasons every month. We've customized your guides for cramp relief, flow comfort, and cycle wisdom.
              </p>
            </div>
          )}

          {welcomingStage === 'menopause' && (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 text-xs font-bold mb-2">
                <span>🦋 Perimenopause & Menopause</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-plum dark:text-pink-100 mb-2">
                Embrace your next chapter!
              </h3>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 leading-relaxed mb-6">
                Navigating hormonal transitions deserves warmth, dignity, and real solutions. Explore cooling tips, sleep support, and calm reassurance.
              </p>
            </div>
          )}

          {welcomingStage === 'educator' && (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-100/70 dark:bg-violet-950/60 text-violet-800 dark:text-violet-200 text-xs font-bold mb-2">
                <span>🌟 Educators & Caregivers</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-plum dark:text-pink-100 mb-2">
                Welcome, guide & mentor!
              </h3>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 leading-relaxed mb-6">
                Thank you for fostering safe, shame-free spaces for young learners. We've brought together lesson frameworks, starter questions, and myth-busters for you.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-raspberry hover:bg-raspberry-dark text-white font-bold text-xs shadow-soft-pink transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore My Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-petal hover:border-violet/40 bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 font-bold text-xs transition-colors"
            >
              Got it, thanks!
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// 1. Very Young Woman / Teen Animation (Puberty)
const TeenGirlAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halo Glow */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute inset-2 rounded-full bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 dark:from-pink-900/40 dark:via-plum-deep dark:to-rose-950/40"
      />

      {/* Floating Flowers */}
      <motion.span
        animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        className="absolute -top-1 -right-1 text-xl select-none"
      >
        🌸
      </motion.span>
      <motion.span
        animate={{ y: [0, -5, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, delay: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-1 -left-1 text-lg select-none"
      >
        🌺
      </motion.span>

      <svg
        viewBox="0 0 160 160"
        className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair Back: Cute high twin side buns */}
        <circle cx="48" cy="46" r="14" fill="#6B3448" />
        <circle cx="112" cy="46" r="14" fill="#6B3448" />

        {/* Neck */}
        <path d="M74 96h12v18H74z" fill="#FAD1C0" />

        {/* Pastel Coral / Pink Hoodie Top */}
        <path
          d="M50 144c0-20 12-32 30-32s30 12 30 32v16H50v-16z"
          fill="#FFB6C1"
        />
        {/* Collar & Drawstrings */}
        <path d="M72 112c4 8 12 8 16 0" stroke="#E66A8A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M75 120v12M85 120v12" stroke="#E66A8A" strokeWidth="1.5" strokeLinecap="round" />

        {/* Face */}
        <ellipse cx="80" cy="74" rx="26" ry="28" fill="#FEE0D2" />

        {/* Rosy Blush Cheeks */}
        <ellipse cx="64" cy="82" rx="5" ry="3" fill="#FCA5A5" opacity="0.65" />
        <ellipse cx="96" cy="82" rx="5" ry="3" fill="#FCA5A5" opacity="0.65" />

        {/* Cute Freckles */}
        <circle cx="68" cy="80" r="0.8" fill="#D97706" opacity="0.7" />
        <circle cx="70" cy="82" r="0.8" fill="#D97706" opacity="0.7" />
        <circle cx="92" cy="80" r="0.8" fill="#D97706" opacity="0.7" />
        <circle cx="90" cy="82" r="0.8" fill="#D97706" opacity="0.7" />

        {/* Friendly Eyes: Happy Curls */}
        <path d="M66 70c2-3 8-3 10 0" stroke="#4A1E2C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M84 70c2-3 8-3 10 0" stroke="#4A1E2C" strokeWidth="2.5" strokeLinecap="round" />

        {/* Big Bright Smile */}
        <path d="M73 85c2 4 12 4 14 0" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M75 85c1 2 9 2 10 0" fill="#EF4444" opacity="0.3" />

        {/* Hair Front: Soft bangs & framing curls */}
        <path
          d="M54 62c4-14 20-22 26-22s22 8 26 22c-8-4-16-4-26 1-8-5-18-5-26-1z"
          fill="#833E56"
        />
        <path d="M54 64c-3 12-1 24 3 28M106 64c3 12 1 24-3 28" stroke="#833E56" strokeWidth="4" strokeLinecap="round" />

        {/* Waving Arm / Hand Animated */}
        <motion.g
          animate={{ rotate: [0, 18, -4, 18, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ transformOrigin: '110px 125px' }}
        >
          {/* Forearm & sleeve */}
          <path d="M106 122l16-16c2-2 5-2 7 0l4 4c2 2 2 5 0 7l-14 17" fill="#FFA4B5" />
          {/* Hand palm & fingers */}
          <circle cx="132" cy="110" r="6" fill="#FEE0D2" />
          <path d="M129 105c1-3 4-3 5 0M133 104c1-3 4-3 5 0M136 106c1-3 3-3 4 0" stroke="#FEE0D2" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
};

// 2. Young Adult Woman Animation (Cycle & Period Care)
const YoungAdultWomanAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halo Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute inset-2 rounded-full bg-gradient-to-tr from-emerald-100 via-teal-50 to-pink-100 dark:from-emerald-950/40 dark:via-plum-deep dark:to-teal-950/40"
      />

      {/* Floating Botanical Leaf */}
      <motion.span
        animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute -top-1 -right-1 text-xl select-none"
      >
        🌿
      </motion.span>
      <motion.span
        animate={{ y: [0, -5, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.4, delay: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-1 -left-1 text-lg select-none"
      >
        🌱
      </motion.span>

      <svg
        viewBox="0 0 160 160"
        className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair Back: Flowing long wavy chestnut hair */}
        <path
          d="M50 60c0 40 8 68 18 78 12-4 24-4 36 0 10-10 18-38 18-78 0-24-16-36-36-36s-36 12-36 36z"
          fill="#4A2810"
        />

        {/* Neck */}
        <path d="M74 94h12v20H74z" fill="#F7C8A9" />

        {/* Elegant Wrap Emerald / Teal Top */}
        <path
          d="M48 144c0-22 14-34 32-34s32 12 32 34v16H48v-16z"
          fill="#2D6A4F"
        />
        <path d="M68 110l12 18 12-18" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" />

        {/* Face */}
        <ellipse cx="80" cy="74" rx="25" ry="27" fill="#FCE0CB" />

        {/* Gentle Natural Blush */}
        <ellipse cx="65" cy="81" rx="5" ry="2.5" fill="#F43F5E" opacity="0.45" />
        <ellipse cx="95" cy="81" rx="5" ry="2.5" fill="#F43F5E" opacity="0.45" />

        {/* Peaceful Warm Eyes with soft mascara curve */}
        <path d="M66 70c2-2 7-2 9 0" stroke="#2D1500" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M85 70c2-2 7-2 9 0" stroke="#2D1500" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M75 68l1-1M94 68l1-1" stroke="#2D1500" strokeWidth="1.5" strokeLinecap="round" />

        {/* Calm Serene Smile */}
        <path d="M74 84c2 3 10 3 12 0" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" />

        {/* Front Hair Waves */}
        <path
          d="M55 58c6-14 20-20 25-20 18 0 26 12 26 24 0 16-6 28-6 32-4-10-8-18-18-20-10-2-18 2-27-16z"
          fill="#633718"
        />

        {/* Gentle Breathing & Holding Warm Cup Animation */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        >
          {/* Ceramic Cup */}
          <path d="M72 130h16a2 2 0 0 1 2 2v10a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-10a2 2 0 0 1 2-2z" fill="#E8D5B5" />
          <path d="M90 134h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3" stroke="#D4BE9B" strokeWidth="2" />
          {/* Warm Steam Lines */}
          <motion.path
            d="M77 126c-1-3 1-5 0-7M83 126c-1-3 1-5 0-7"
            stroke="#D4BE9B"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [-1, -3, -1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

// 3. Mid-Age Woman Animation (Perimenopause & Menopause)
const MidAgeWomanAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halo Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
        className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-100 via-orange-50 to-purple-100 dark:from-amber-950/40 dark:via-plum-night dark:to-purple-950/40"
      />

      {/* Floating Cooling Leaf / Wheat */}
      <motion.span
        animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        className="absolute -top-1 -right-1 text-xl select-none"
      >
        🌾
      </motion.span>
      <motion.span
        animate={{ y: [0, -4, 0], rotate: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-1 -left-1 text-lg select-none"
      >
        ❄️
      </motion.span>

      <svg
        viewBox="0 0 160 160"
        className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair Back: Chic layered silver-streaked bob */}
        <path
          d="M52 56c0 30 6 52 14 60 10-2 18-2 28 0 8-8 14-30 14-60 0-22-14-34-28-34s-28 12-28 34z"
          fill="#474554"
        />

        {/* Neck */}
        <path d="M74 94h12v20H74z" fill="#E8BFA8" />

        {/* Elegant Violet / Plum Silk Blouse */}
        <path
          d="M48 144c0-22 14-34 32-34s32 12 32 34v16H48v-16z"
          fill="#6B4668"
        />
        {/* Delicate gold pendant necklace */}
        <path d="M72 110c4 8 12 8 16 0" stroke="#EDB650" strokeWidth="1.5" />
        <circle cx="80" cy="116" r="2.5" fill="#EDB650" />

        {/* Face */}
        <ellipse cx="80" cy="74" rx="25" ry="27" fill="#F4CFBA" />

        {/* Warm Cheek Glow */}
        <ellipse cx="65" cy="80" rx="5" ry="3" fill="#FB7185" opacity="0.4" />
        <ellipse cx="95" cy="80" rx="5" ry="3" fill="#FB7185" opacity="0.4" />

        {/* Radiant, Confident Eyes with gentle joyful smile lines */}
        <path d="M66 69c2-2 7-2 9 0" stroke="#2B2129" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M85 69c2-2 7-2 9 0" stroke="#2B2129" strokeWidth="2.5" strokeLinecap="round" />
        {/* Gentle crinkles at outer corners */}
        <path d="M64 70l-2 1M96 70l2 1" stroke="#A7826F" strokeWidth="1.2" strokeLinecap="round" />

        {/* Confident, Warm Smile */}
        <path d="M73 84c3 3 11 3 14 0" stroke="#9A3412" strokeWidth="2.2" strokeLinecap="round" />

        {/* Hair Front: Silver-lavender highlights swept gracefully */}
        <path
          d="M52 56c4-16 18-24 28-24s26 8 28 22c-8-4-18-2-26 2-10 4-18 2-30 0z"
          fill="#8A859A"
        />
        <path
          d="M58 48c4-6 12-10 22-10"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Animated Hand with Cooling Gentle Breeze Fan */}
        <motion.g
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ transformOrigin: '115px 135px' }}
        >
          {/* Fan blades */}
          <path d="M106 124l16-16c4 4 10 10 12 16l-18 8z" fill="#EDB650" opacity="0.9" />
          <path d="M110 128l18-12M114 132l16-8" stroke="#FFFFFF" strokeWidth="1.2" />
        </motion.g>
      </svg>
    </div>
  );
};

// 4. Mentor / Educator Woman Animation (Educators & Caregivers)
const EducatorWomanAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halo Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        className="absolute inset-2 rounded-full bg-gradient-to-tr from-violet-100 via-indigo-50 to-pink-100 dark:from-violet-950/40 dark:via-plum-deep dark:to-indigo-950/40"
      />

      {/* Floating Sparkle-Free Academic & Heart Accents */}
      <motion.span
        animate={{ y: [0, -5, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute -top-1 -right-1 text-xl select-none"
      >
        📚
      </motion.span>
      <motion.span
        animate={{ y: [0, -5, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.4, ease: 'easeInOut' }}
        className="absolute bottom-1 -left-1 text-lg select-none"
      >
        💖
      </motion.span>

      <svg
        viewBox="0 0 160 160"
        className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair Back: Professional neat twist */}
        <circle cx="80" cy="46" r="16" fill="#3D2645" />

        {/* Neck */}
        <path d="M74 94h12v20H74z" fill="#F5CBA7" />

        {/* Warm Cardigan & Scarf */}
        <path
          d="M48 144c0-22 14-34 32-34s32 12 32 34v16H48v-16z"
          fill="#4338CA"
        />
        {/* Scarf draped warmly */}
        <path d="M68 110c4 10 20 10 24 0v18H68v-18z" fill="#A855F7" />

        {/* Face */}
        <ellipse cx="80" cy="74" rx="25" ry="27" fill="#FCE2CE" />

        {/* Kind Cheek Blush */}
        <ellipse cx="65" cy="80" rx="4.5" ry="2.5" fill="#F43F5E" opacity="0.4" />
        <ellipse cx="95" cy="80" rx="4.5" ry="2.5" fill="#F43F5E" opacity="0.4" />

        {/* Modern Round Glasses */}
        <circle cx="68" cy="71" r="7" stroke="#7C3AED" strokeWidth="2" fill="white" fillOpacity="0.25" />
        <circle cx="92" cy="71" r="7" stroke="#7C3AED" strokeWidth="2" fill="white" fillOpacity="0.25" />
        <path d="M75 71h10" stroke="#7C3AED" strokeWidth="2" />

        {/* Warm Encouraging Eyes behind glasses */}
        <path d="M65 71c1-1 4-1 6 0" stroke="#1E1B4B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M89 71c1-1 4-1 6 0" stroke="#1E1B4B" strokeWidth="2.2" strokeLinecap="round" />

        {/* Open, Inspiring Smile */}
        <path d="M73 85c2 4 12 4 14 0" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" />

        {/* Hair Front: Clean side parting */}
        <path
          d="M54 58c6-14 20-20 26-20 16 0 26 10 26 22-8-4-16-2-24 2-10 5-18 2-28-4z"
          fill="#53355C"
        />

        {/* Welcoming Waving Hand Gesture */}
        <motion.g
          animate={{ rotate: [0, 14, -6, 14, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          style={{ transformOrigin: '118px 125px' }}
        >
          <path d="M110 120l14-14c2-2 5-2 7 0l3 3c2 2 2 5 0 7l-12 16" fill="#F5CBA7" />
          <circle cx="128" cy="108" r="5" fill="#FCE2CE" />
          <path d="M125 104c1-2 3-2 4 0M128 103c1-2 3-2 4 0M131 105c1-2 3-2 4 0" stroke="#FCE2CE" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
};
