import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const HeroIllustration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants
  const breathing = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [0, -3, 0],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const }
        }
      };

  const breathingDelayed = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [0, -3, 0],
          transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.8 }
        }
      };

  const scarfSway = shouldReduceMotion
    ? {}
    : {
        animate: {
          rotate: [-1, 1.5, -1],
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const }
        }
      };

  const haloRotate = shouldReduceMotion
    ? {}
    : {
        animate: {
          rotate: 360,
          scale: [1, 1.03, 1],
          transition: {
            rotate: { duration: 65, repeat: Infinity, ease: 'linear' as const },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const }
          }
        }
      };

  const steamLoop = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: {
            y: [-2, -18],
            opacity: [0, 0.7, 0],
            scaleX: [0.8, 1.2],
            transition: { duration: 2.8, repeat: Infinity, ease: 'easeOut' as const, delay }
          }
        };

  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3.8] mx-auto flex items-center justify-center select-none">
      
      {/* Outer Soft Gradient Arch & Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-petal/40 via-lavender/50 to-blush/60 dark:from-plum-deep/60 dark:via-plum-night dark:to-plum/40 backdrop-blur-md border border-white/70 dark:border-pink-900/40 shadow-soft-purple -z-10" />

      {/* Marigold Corner Ribbon Accent (Echoing Pitch Deck) */}
      <div className="ribbon-marigold-tr rounded-tr-2xl" />

      {/* Floating Petals around the scene */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-6 left-10 text-xl pointer-events-none"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-16 right-8 text-lg pointer-events-none"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-12 right-16 text-sm pointer-events-none"
          >
            🍃
          </motion.div>
        </>
      )}

      {/* Main Layered SVG Scene */}
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-2 filter drop-shadow-sm"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="haloGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E4" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#EDE5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFF1F5" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="sofaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EDE5FA" />
            <stop offset="100%" stopColor="#DDD1F5" />
          </linearGradient>

          <linearGradient id="cushionGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E4" />
            <stop offset="100%" stopColor="#FCAFC8" />
          </linearGradient>

          <linearGradient id="mentorKurti" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B4F7E" />
            <stop offset="100%" stopColor="#6E3A63" />
          </linearGradient>

          <linearGradient id="mentorDupatta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDB650" />
            <stop offset="100%" stopColor="#D49B33" />
          </linearGradient>

          <linearGradient id="teenTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D6457F" />
            <stop offset="100%" stopColor="#B82E64" />
          </linearGradient>

          <linearGradient id="teenDupatta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9B7FD1" />
            <stop offset="100%" stopColor="#7D5EB8" />
          </linearGradient>

          <linearGradient id="mugGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF1F5" />
            <stop offset="100%" stopColor="#FFD6E4" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Large Pale Blooming Flower Halo */}
        <motion.g
          id="flower-halo"
          style={{ transformOrigin: '300px 240px' }}
          {...haloRotate}
        >
          <circle cx="300" cy="240" r="160" fill="url(#haloGrad)" />
          {/* 8 Soft Petals radiating behind */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="300"
              cy="90"
              rx="38"
              ry="75"
              fill="#FFF1F5"
              fillOpacity="0.45"
              transform={`rotate(${angle} 300 240)`}
            />
          ))}
        </motion.g>

        {/* 2. Background Decor: Potted Fiddle/Peace Plant */}
        <g id="potted-plant" transform="translate(60, 280)">
          {/* Plant Pot */}
          <path d="M20 70 L25 120 C25 125 45 125 45 120 L50 70 Z" fill="#D6457F" fillOpacity="0.3" />
          <ellipse cx="35" cy="70" rx="16" ry="6" fill="#8B4F7E" fillOpacity="0.5" />
          {/* Leaves */}
          <path d="M35 70 Q15 45 10 20 Q30 35 35 70" fill="#9B7FD1" fillOpacity="0.75" />
          <path d="M35 70 Q55 40 65 15 Q48 35 35 70" fill="#EDB650" fillOpacity="0.7" />
          <path d="M35 70 Q35 30 35 5 Q42 35 35 70" fill="#D6457F" fillOpacity="0.65" />
        </g>

        {/* 3. Cozy Sofa & Soft Cushions */}
        <g id="sofa-base">
          {/* Sofa Backrest Curved */}
          <path
            d="M130 370 C130 260, 470 260, 470 370 C470 410, 130 410, 130 370 Z"
            fill="url(#sofaGrad)"
            opacity="0.85"
          />
          {/* Left Cushion */}
          <path
            d="M140 330 C135 310 160 300 175 320 L185 365 C170 375 145 360 140 330 Z"
            fill="url(#cushionGrad)"
            opacity="0.9"
          />
          {/* Right Cushion */}
          <path
            d="M460 330 C465 310 440 300 425 320 L415 365 C430 375 455 360 460 330 Z"
            fill="#EDB650"
            opacity="0.8"
          />
          {/* Main Seating Base Cushion */}
          <rect x="140" y="360" width="320" height="42" rx="20" fill="#FFFFFF" fillOpacity="0.85" />
        </g>

        {/* 4. Older Woman / Mentor (Left Side - Listening & Guiding warmly) */}
        <motion.g id="mentor-woman" {...breathing}>
          {/* Torso / Kurti */}
          <path
            d="M210 270 Q240 265 265 270 L280 370 L195 370 Z"
            fill="url(#mentorKurti)"
          />
          {/* South-Asian Style Dupatta/Scarf Draped gracefully */}
          <motion.path
            d="M205 275 Q235 305 240 370 L260 370 Q250 295 220 270 Z"
            fill="url(#mentorDupatta)"
            {...scarfSway}
          />
          {/* Neck & Warm Skin Tone */}
          <rect x="232" y="240" width="16" height="24" rx="8" fill="#D89A7A" />
          {/* Head */}
          <ellipse cx="240" cy="225" rx="24" ry="28" fill="#D89A7A" />
          {/* Elegant Bun / Hair */}
          <circle cx="218" cy="215" r="16" fill="#3B1F3A" />
          <path
            d="M220 205 C235 190 265 200 264 228 C255 220 235 220 220 228 Z"
            fill="#3B1F3A"
          />
          {/* Small tasteful gold earring */}
          <circle cx="220" cy="226" r="2.5" fill="#EDB650" />
          {/* Gentle Bindi */}
          <circle cx="246" cy="216" r="1.8" fill="#D6457F" />
          {/* Soft Friendly Eyes (Gentle arc smile) */}
          <path d="M241 222 Q245 225 248 222" stroke="#3B1F3A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Gentle Smile */}
          <path d="M243 234 Q248 238 252 234" stroke="#8B4F7E" strokeWidth="1.8" strokeLinecap="round" />
          {/* Arm holding a warm cup */}
          <path
            d="M260 290 Q285 305 295 325 Q285 335 270 330 L255 300 Z"
            fill="#D89A7A"
          />
        </motion.g>

        {/* 5. Young Woman / Teen (Right Side - Leaning in, comfortable, engaged) */}
        <motion.g id="teen-woman" {...breathingDelayed}>
          {/* Torso / Top */}
          <path
            d="M330 275 Q355 270 385 275 L395 370 L320 370 Z"
            fill="url(#teenTop)"
          />
          {/* Scarf / Stole */}
          <motion.path
            d="M375 278 Q360 315 365 370 L345 370 Q342 305 360 275 Z"
            fill="url(#teenDupatta)"
            {...scarfSway}
          />
          {/* Neck & Warm Skin Tone */}
          <rect x="348" y="244" width="15" height="22" rx="7" fill="#E5A688" />
          {/* Head */}
          <ellipse cx="355" cy="228" rx="22" ry="26" fill="#E5A688" />
          {/* Modern Long Hair with gentle waves */}
          <path
            d="M338 215 C345 195 375 198 377 225 C377 250 382 280 375 295 C368 280 365 240 345 230 Z"
            fill="#231123"
          />
          {/* Left Hair Strand framing face */}
          <path d="M338 218 Q335 245 342 265" stroke="#231123" strokeWidth="6" strokeLinecap="round" />
          {/* Gentle Bindi */}
          <circle cx="350" cy="220" r="1.6" fill="#EDB650" />
          {/* Soft Inquiring Friendly Eyes */}
          <path d="M346 226 Q350 229 354 226" stroke="#231123" strokeWidth="1.8" strokeLinecap="round" />
          {/* Warm Grateful Smile */}
          <path d="M346 238 Q351 242 355 238" stroke="#D6457F" strokeWidth="1.8" strokeLinecap="round" />
          {/* Arms resting comfortably holding cushion */}
          <path
            d="M330 295 Q315 315 320 340 L340 340 Q345 315 345 295 Z"
            fill="#E5A688"
          />
        </motion.g>

        {/* 6. Steaming Tea Mug resting on a little wooden stool */}
        <g id="tea-and-stool" transform="translate(285, 335)">
          {/* Mini Table Stool */}
          <ellipse cx="25" cy="38" rx="28" ry="10" fill="#EDE5FA" />
          <path d="M12 38 L8 65 M38 38 L42 65" stroke="#9B7FD1" strokeWidth="3" strokeLinecap="round" />
          {/* Tea Mug */}
          <path d="M16 20 C16 35 34 35 34 20 Z" fill="url(#mugGrad)" stroke="#D6457F" strokeWidth="1.5" />
          {/* Handle */}
          <path d="M34 22 C39 22 39 30 34 30" stroke="#D6457F" strokeWidth="2" fill="none" />
          {/* Steaming Curves */}
          <motion.path
            d="M23 15 Q21 8 24 2"
            stroke="#D6457F"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            {...steamLoop(0)}
          />
          <motion.path
            d="M27 15 Q29 9 26 3"
            stroke="#8B4F7E"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            {...steamLoop(0.7)}
          />
        </g>

        {/* 7. Alternating Floating Speech Bubbles (Stigma-Free Dialogue) */}
        {/* Bubble A (Young woman asking about cycle/calendar) */}
        <motion.g
          id="speech-bubble-a"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1, 0, 0],
            opacity: [0, 1, 1, 0, 0],
            y: [5, 0, 0, -4, 5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.15, 0.45, 0.55, 1],
            ease: 'easeInOut' as const
          }}
          style={{ transformOrigin: '390px 145px' }}
        >
          {/* Bubble Pill */}
          <rect x="345" y="115" width="85" height="42" rx="10" fill="#FFFFFF" filter="url(#softGlow)" />
          <rect x="345" y="115" width="85" height="42" rx="10" fill="#FFFFFF" stroke="#FFD6E4" strokeWidth="1.5" />
          {/* Tail */}
          <path d="M370 157 L365 170 L378 156 Z" fill="#FFFFFF" stroke="#FFD6E4" strokeWidth="1.5" />
          {/* Icons: Calendar + Droplet */}
          <text x="362" y="142" fontSize="18">📅</text>
          <text x="390" y="142" fontSize="18">🩸</text>
        </motion.g>

        {/* Bubble B (Older woman reassuring with warmth & bloom) */}
        <motion.g
          id="speech-bubble-b"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 0, 1, 1, 0],
            opacity: [0, 0, 1, 1, 0],
            y: [5, 5, 0, 0, -4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.5, 0.65, 0.92, 1],
            ease: 'easeInOut' as const
          }}
          style={{ transformOrigin: '210px 140px' }}
        >
          {/* Bubble Pill */}
          <rect x="165" y="110" width="90" height="42" rx="10" fill="#FFFFFF" filter="url(#softGlow)" />
          <rect x="165" y="110" width="90" height="42" rx="10" fill="#FFFFFF" stroke="#EDE5FA" strokeWidth="1.5" />
          {/* Tail */}
          <path d="M230 152 L238 165 L222 152 Z" fill="#FFFFFF" stroke="#EDE5FA" strokeWidth="1.5" />
          {/* Icons: Flower + Heart */}
          <text x="182" y="137" fontSize="18">🌸</text>
          <text x="212" y="137" fontSize="18">💖</text>
        </motion.g>

        {/* 8. Floor Shadow */}
        <ellipse cx="300" cy="425" rx="190" ry="14" fill="#3B1F3A" fillOpacity="0.06" />

      </svg>

    </div>
  );
};
