import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import type { EducationalVideo } from '../data/videos';

interface VideoModalProps {
  video: EducationalVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  // Close on Escape key and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [video, onClose]);

  if (!video) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop Overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-plum/70 dark:bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white dark:bg-plum-deep rounded-3xl shadow-2xl border border-petal dark:border-pink-900/50 overflow-hidden z-10 my-auto flex flex-col max-h-[88vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar with Tag, Creator & Prominent Close Button */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-petal/50 dark:border-pink-900/40 bg-lavender/40 dark:bg-pink-950/50 shrink-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-raspberry text-white font-bold text-xs shadow-soft-pink">
                {video.tag}
              </span>
              <span className="text-xs font-semibold text-orchid dark:text-pink-300">
                {video.source}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-plum/70 dark:text-pink-200 hover:text-raspberry hover:bg-petal/50 dark:hover:bg-pink-900/50 transition-colors focus:outline-none focus:ring-2 focus:ring-raspberry"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Embedded YouTube Player (16:9 ratio) */}
          <div className="relative aspect-video w-full bg-black shrink-0">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Scrollable Content Body (Title, Full Description, Key Points) */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
            {/* Title & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-plum dark:text-pink-100 leading-snug">
                {video.title}
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-petal/40 dark:bg-pink-950/60 text-xs font-bold text-plum/80 dark:text-pink-200 self-start sm:self-auto shrink-0">
                <Clock className="w-3.5 h-3.5 text-raspberry" />
                <span>{video.duration}</span>
              </span>
            </div>

            {/* Description */}
            <div className="text-sm leading-relaxed text-plum/80 dark:text-pink-200/90 bg-blush/60 dark:bg-pink-950/20 p-4 rounded-2xl border border-petal/50 dark:border-pink-900/40">
              <p>{video.fullDescription}</p>
            </div>

            {/* Key Learnings */}
            {video.keyTakeaways && video.keyTakeaways.length > 0 && (
              <div className="space-y-2 pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-raspberry flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Key Educational Takeaways</span>
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {video.keyTakeaways.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-plum/85 dark:text-pink-200 bg-white/70 dark:bg-plum-night/70 p-2.5 rounded-xl border border-petal/40 dark:border-pink-900/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer with External Link */}
            <div className="pt-3 border-t border-petal/40 dark:border-pink-900/30 flex items-center justify-between text-xs">
              <span className="text-orchid dark:text-pink-300">
                Presented by <strong className="text-plum dark:text-pink-100">{video.source}</strong>
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-petal/50 dark:bg-pink-950/80 text-raspberry hover:bg-raspberry hover:text-white transition-all font-bold"
              >
                <span>Open in YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
