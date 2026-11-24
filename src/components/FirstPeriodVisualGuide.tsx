import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Eye, 
  HelpCircle, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Info,
  Calendar,
  Smile,
  ShieldCheck,
  ZoomIn
} from 'lucide-react';

interface VisualTab {
  id: 'spotting' | 'colors' | 'flow' | 'full';
  title: string;
  imageSrc: string;
  caption: string;
  description: string;
  keyTakeaway: string;
}

const VISUAL_TABS: VisualTab[] = [
  {
    id: 'spotting',
    title: '1. Spotting vs. Period Flow',
    imageSrc: '/images/spotting-vs-flow.jpg',
    caption: 'Left: Light spotting (a few drops/streaks) • Right: Active period flow on a pad',
    description: 'First periods frequently begin with tiny reddish, brownish, or pinkish spots rather than an instant gush of blood. Spotting may last a day or two before steady bleeding starts.',
    keyTakeaway: 'Spotting is very light and only marks small parts of the pad. Active flow is continuous and fills the center.'
  },
  {
    id: 'colors',
    title: '2. Blood Color Shades',
    imageSrc: '/images/blood-colors-pad.jpg',
    caption: 'Pad showing pinkish/brownish spotting with normal color spectrum dots',
    description: 'Period blood changes color across your cycle! Pinkish/peach means light bleeding mixed with normal discharge. Bright red means fresh flow moving quickly. Dark red or brown is older blood that oxidized on its way out.',
    keyTakeaway: 'Brown blood is 100% normal. It simply took longer to leave the uterus and had contact with oxygen.'
  },
  {
    id: 'flow',
    title: '3. Pad Flow Levels (Light to Heavy)',
    imageSrc: '/images/flow-levels-pad.jpg',
    caption: 'Progression from a clean pad to spotting, light flow, medium flow, and heavy soak',
    description: 'Your flow will naturally vary from day to day. Days 1 and 2 are often the heaviest, while later days taper off to light spots. Total blood loss over all days is only about 30 to 60 ml (2 to 4 small spoons).',
    keyTakeaway: 'Change your pad every 4 to 6 hours even if it is only lightly soaked, to stay fresh and prevent skin rashes.'
  },
  {
    id: 'full',
    title: '4. Full Visual Pad Guide',
    imageSrc: '/images/pad-flow-guide.jpg',
    caption: 'Side-by-side comparison of spotting, color variations, and flow volume',
    description: 'Seeing real visual representations helps take away the mystery and fear. Every body has its own normal pattern.',
    keyTakeaway: 'Always remember: what you see on a pad looks like much more than it actually is because blood spreads quickly on absorbent cotton.'
  }
];

export const FirstPeriodVisualGuide: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<'spotting' | 'colors' | 'flow' | 'full'>('spotting');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1); // 1 = physical by default
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);

  const activeTab = VISUAL_TABS.find(t => t.id === activeTabId) || VISUAL_TABS[0];

  return (
    <div id="visual-guide" className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple mb-8">
      
      {/* 1. Welcoming Header */}
      <div className="mb-6 pb-5 border-b border-petal/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petal/60 text-raspberry text-xs font-bold mb-2">
          <Eye className="w-3.5 h-3.5" />
          <span>Real Visual Guide</span>
        </div>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-plum dark:text-pink-100">
          What Will Your First Period Look & Feel Like?
        </h3>
        <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 mt-2 leading-relaxed max-w-3xl">
          Your first period might feel a little strange, uncomfortable, or surprising, but don't worry. ❤️ It is a completely natural process, and it usually isn’t as scary as people imagine. Let us walk you through what you might experience with real visual illustrations.
        </p>
      </div>

      {/* 2. Visual Pad Gallery with Real Images */}
      <div className="mb-10 bg-white/70 dark:bg-plum-night/50 rounded-2xl p-4 sm:p-6 border border-petal/70">
        
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-4 justify-start sm:justify-center">
          {VISUAL_TABS.map(tab => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-raspberry text-white shadow-soft-pink'
                    : 'bg-white/80 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-raspberry/50'
                }`}
              >
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Visual Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Image Preview Box */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div 
                onClick={() => setSelectedZoomImage(activeTab.imageSrc)}
                className="group relative w-full max-w-md h-52 sm:h-64 rounded-2xl overflow-hidden bg-petal/20 dark:bg-plum-deep border border-petal shadow-xs cursor-pointer flex items-center justify-center"
              >
                <img
                  src={activeTab.imageSrc}
                  alt={activeTab.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-plum-night/70 text-white text-[11px] font-bold flex items-center gap-1 backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Tap to view full</span>
                </div>
              </div>
              <p className="text-[11px] text-orchid dark:text-pink-300 italic text-center mt-2.5">
                {activeTab.caption}
              </p>
            </div>

            {/* Explanation & Key Takeaway */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-lavender/50 text-violet-dark dark:text-pink-200 text-xs font-bold">
                <span>Illustration Breakdown</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-plum dark:text-pink-100">
                {activeTab.title}
              </h4>
              <p className="text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 leading-relaxed">
                {activeTab.description}
              </p>
              
              <div className="p-3.5 rounded-xl bg-petal/40 dark:bg-pink-950/40 border border-petal flex items-start gap-2.5 text-xs">
                <Sparkles className="w-4 h-4 text-raspberry shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-raspberry">Key reassurance: </span>
                  <span className="text-plum/80 dark:text-pink-100">{activeTab.keyTakeaway}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. The 5 Experience Pillars (Accordion Cards) */}
      <div className="space-y-3">
        <h4 className="font-serif font-bold text-lg text-plum dark:text-pink-100 mb-2">
          5 Common Things You Might Experience
        </h4>

        {/* 1. What will it physically feel like? */}
        <div className="rounded-xl border border-petal/70 bg-white/60 dark:bg-plum-night/40 overflow-hidden">
          <button
            onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
            className="w-full px-5 py-3.5 text-left font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100 flex items-center justify-between hover:text-raspberry transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-petal text-raspberry text-xs flex items-center justify-center font-sans font-bold">1</span>
              <span>What will it physically feel like?</span>
            </span>
            <span className="text-xs font-sans text-orchid font-semibold">
              {activeAccordion === 1 ? '−' : '+'}
            </span>
          </button>
          {activeAccordion === 1 && (
            <div className="px-5 pb-5 text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 space-y-2 border-t border-petal/40 pt-3">
              <p>There isn't one universal feeling, but here are common experiences:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Lower abdominal cramps:</strong> A mild dull ache or gentle squeezing in your lower belly, similar to an upset tummy.</li>
                <li><strong>Lower backache:</strong> Some girls feel a mild aching sensation in their lower back.</li>
                <li><strong>Heaviness:</strong> Your lower tummy may feel slightly bloated or full.</li>
                <li><strong>Wet sensation:</strong> You might feel a warm wetness in your underwear, like a little discharge.</li>
                <li><strong>Spotting:</strong> A few reddish, brownish, or pinkish spots before active bleeding begins.</li>
              </ul>
              <p className="text-raspberry font-semibold pt-1">
                🌸 Interestingly, you might not feel anything at all before your first period! Many girls simply discover it when visiting the bathroom.
              </p>
            </div>
          )}
        </div>

        {/* 2. What will the blood look like? */}
        <div className="rounded-xl border border-petal/70 bg-white/60 dark:bg-plum-night/40 overflow-hidden">
          <button
            onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
            className="w-full px-5 py-3.5 text-left font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100 flex items-center justify-between hover:text-raspberry transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-petal text-raspberry text-xs flex items-center justify-center font-sans font-bold">2</span>
              <span>What will the blood look like?</span>
            </span>
            <span className="text-xs font-sans text-orchid font-semibold">
              {activeAccordion === 2 ? '−' : '+'}
            </span>
          </button>
          {activeAccordion === 2 && (
            <div className="px-5 pb-5 text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 space-y-2 border-t border-petal/40 pt-3">
              <p>Your first period might look like:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Brownish or pinkish discharge</strong> on your underwear.</li>
                <li><strong>Bright or dark red blood</strong> as the flow establishes.</li>
                <li><strong>Very light volume:</strong> often just a few drops or light smears on the first day.</li>
                <li><strong>Duration:</strong> It usually lasts anywhere from 2 to 7 days.</li>
              </ul>
              <div className="p-3 rounded-xl bg-lavender/40 border border-lavender text-xs">
                <strong>Why is period blood sometimes brown?</strong> Don't be alarmed if it looks brown or rusty. Brown blood is simply older blood that took longer to leave the uterus and reacted with oxygen. It is completely normal and healthy.
              </div>
            </div>
          )}
        </div>

        {/* 3. What might you feel emotionally? */}
        <div className="rounded-xl border border-petal/70 bg-white/60 dark:bg-plum-night/40 overflow-hidden">
          <button
            onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
            className="w-full px-5 py-3.5 text-left font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100 flex items-center justify-between hover:text-raspberry transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-petal text-raspberry text-xs flex items-center justify-center font-sans font-bold">3</span>
              <span>What might you feel emotionally?</span>
            </span>
            <span className="text-xs font-sans text-orchid font-semibold">
              {activeAccordion === 3 ? '−' : '+'}
            </span>
          </button>
          {activeAccordion === 3 && (
            <div className="px-5 pb-5 text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 space-y-2 border-t border-petal/40 pt-3">
              <p>Hormone shifts can bring emotional changes. You might experience:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Mood changes or irritability:</strong> getting easily annoyed with little things.</li>
                <li><strong>Feeling emotional or teary:</strong> feeling sensitive or wanting a hug.</li>
                <li><strong>Tiredness or low energy:</strong> wanting to take an afternoon nap or rest.</li>
                <li><strong>No emotional changes whatsoever:</strong> feeling completely your usual happy self!</li>
              </ul>
              <p className="text-orchid dark:text-pink-300 italic">
                Everyone's experience is different. All of these reactions are completely normal.
              </p>
            </div>
          )}
        </div>

        {/* 4. How will you know your first period is coming? */}
        <div className="rounded-xl border border-petal/70 bg-white/60 dark:bg-plum-night/40 overflow-hidden">
          <button
            onClick={() => setActiveAccordion(activeAccordion === 4 ? null : 4)}
            className="w-full px-5 py-3.5 text-left font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100 flex items-center justify-between hover:text-raspberry transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-petal text-raspberry text-xs flex items-center justify-center font-sans font-bold">4</span>
              <span>How will you know your first period is coming? (Body Clues)</span>
            </span>
            <span className="text-xs font-sans text-orchid font-semibold">
              {activeAccordion === 4 ? '−' : '+'}
            </span>
          </button>
          {activeAccordion === 4 && (
            <div className="px-5 pb-5 text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 space-y-2 border-t border-petal/40 pt-3">
              <p>Your body gives natural clues months before your first period:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Breast development:</strong> Small breast buds or mild tenderness usually appear 1 to 2 years before menarche.</li>
                <li><strong>White or clear discharge:</strong> Stains in your underwear can appear 6 to 12 months before your first period. This is a very reliable sign that your ovaries are waking up.</li>
                <li><strong>Body hair:</strong> Growth of pubic and underarm hair.</li>
                <li><strong>Occasional mild twinges:</strong> Light cramping feelings in your lower belly.</li>
              </ul>
            </div>
          )}
        </div>

        {/* 5. What should you do when it happens? */}
        <div className="rounded-xl border border-petal/70 bg-white/60 dark:bg-plum-night/40 overflow-hidden">
          <button
            onClick={() => setActiveAccordion(activeAccordion === 5 ? null : 5)}
            className="w-full px-5 py-3.5 text-left font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100 flex items-center justify-between hover:text-raspberry transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-petal text-raspberry text-xs flex items-center justify-center font-sans font-bold">5</span>
              <span>What should you do when it happens? (Simple Action Plan)</span>
            </span>
            <span className="text-xs font-sans text-orchid font-semibold">
              {activeAccordion === 5 ? '−' : '+'}
            </span>
          </button>
          {activeAccordion === 5 && (
            <div className="px-5 pb-5 text-xs sm:text-sm text-plum/80 dark:text-pink-200/90 space-y-2.5 border-t border-petal/40 pt-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Don't panic.</strong> Take a deep breath. You are safe, and your body is doing what it is designed to do.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Wear a sanitary pad:</strong> Peel the adhesive backing and stick it firmly in the center of your underwear.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Change it every 4–6 hours</strong> (or sooner if it feels damp).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Keep a spare pad in your school bag:</strong> Keep 2 pads and a clean spare underwear in a small pouch.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Note the date:</strong> Mark Day 1 on a calendar or diary so you can notice your cycle pattern.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Warm comfort:</strong> A hot water bag (garam paani ki thaili) or warm cloth soothes cramps quickly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-raspberry font-bold">✓</span>
                  <span><strong>Talk to a trusted adult:</strong> Tell your mom, elder sister, school teacher, or ASHA didi. They will gladly help you.</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* 4. Safety & Red Flags Alert Box */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 text-xs sm:text-sm text-rose-900 dark:text-rose-200 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div>
          <h5 className="font-bold text-rose-950 dark:text-rose-100 mb-1">
            When Should You See a Doctor?
          </h5>
          <p className="leading-relaxed">
            Severe pain that stops you from walking, attending school, or causes fainting or vomiting is <strong>not normal</strong> and deserves doctor attention. Similarly, bleeding so heavy that it completely soaks through a pad every hour for 2 consecutive hours requires a check-up at a clinic or Primary Health Centre (PHC).
          </p>
        </div>
      </div>

      {/* Modal Zoom Viewer for full image viewing */}
      {selectedZoomImage && (
        <div 
          onClick={() => setSelectedZoomImage(null)}
          className="fixed inset-0 z-50 bg-plum-night/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl w-full bg-white dark:bg-plum-deep rounded-2xl p-4 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedZoomImage(null)}
              className="absolute top-3 right-3 px-3 py-1 bg-petal text-raspberry rounded-lg text-xs font-bold"
            >
              Close ✕
            </button>
            <img
              src={selectedZoomImage}
              alt="Zoomed pad guide"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl mt-6"
            />
          </div>
        </div>
      )}

    </div>
  );
};
