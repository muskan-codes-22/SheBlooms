import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  MessageCircleHeart, 
  HeartHandshake, 
  HelpCircle, 
  Newspaper, 
  Menu, 
  X,
  Home,
  Check,
  ChevronDown,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STAGES } from '../data/stages';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { stage, setStage, stageInfo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stagePopoverOpen, setStagePopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setStagePopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/learn', label: 'Learn', icon: BookOpen },
    { to: '/cycle', label: 'Cycle Wheel', icon: RotateCcw },
    { to: '/ask', label: 'Ask SheBloom', icon: MessageCircleHeart },
    { to: '/care', label: 'Care Guides', icon: HeartHandshake },
    { to: '/quiz', label: 'Quizzes', icon: HelpCircle },
    { to: '/articles', label: 'Latest Articles', icon: Newspaper },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/95 dark:bg-plum-night/95 border-b border-petal/60 dark:border-pink-900/30 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        
        {/* Left Zone: Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 mr-4 sm:mr-8 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-raspberry to-violet p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-plum-deep rounded-[14px] flex items-center justify-center text-xl">
              🌸
            </div>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">
            <span className="text-violet-dark dark:text-violet-light">She</span>
            <span className="bg-gradient-to-r from-raspberry to-pink-500 bg-clip-text text-transparent">
              Blooms
            </span>
          </span>
        </Link>

        {/* Center Zone: Nav Links (Desktop >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-1.5 xl:px-4 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-plum/80 dark:text-pink-100/80 hover:text-raspberry dark:hover:text-pink-300 hover:bg-petal/30 dark:hover:bg-pink-950/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-raspberry rounded-xl shadow-soft-pink -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Zone: Compact Stage Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Animated Arrow Badge pointing directly to the stage selector */}
          <button
            onClick={() => setStagePopoverOpen(!stagePopoverOpen)}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full bg-petal/60 dark:bg-pink-950/60 hover:bg-petal dark:hover:bg-pink-900/60 border border-petal dark:border-pink-900/50 text-[11px] font-bold text-raspberry dark:text-pink-300 transition-all shrink-0 cursor-pointer shadow-2xs group"
            title="Click to select or change life stage"
          >
            <span className="hidden sm:inline">{stage ? 'Switch stage' : 'Select stage'}</span>
            <span className="text-[10px] text-raspberry font-semibold sm:hidden">Stage</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform animate-pulse text-raspberry" />
          </button>

          {/* Stage Switcher Icon Popover */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setStagePopoverOpen(!stagePopoverOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lavender/60 dark:bg-plum-deep border border-petal dark:border-pink-900/40 text-xs font-semibold text-plum dark:text-pink-100 hover:border-raspberry transition-colors shadow-xs"
              aria-label="Select Life Stage"
              title="Change Life Stage"
            >
              <span className="text-base leading-none">
                {stageInfo ? stageInfo.icon : '🌸'}
              </span>
              <span className="hidden sm:inline font-medium">
                {stageInfo ? stageInfo.name.split('/')[0].trim() : 'Select Stage'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-plum/50 dark:text-pink-300 transition-transform ${stagePopoverOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Popover Menu */}
            <AnimatePresence>
              {stagePopoverOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#1f0b20] border-2 border-petal/80 dark:border-pink-900/70 shadow-2xl p-2.5 z-50 ring-1 ring-black/5 dark:ring-white/10"
                >
                  <div className="px-3 py-2 border-b border-petal/50 dark:border-pink-900/30 mb-1.5 bg-petal/20 dark:bg-pink-950/30 rounded-xl">
                    <div className="text-xs font-bold text-plum dark:text-pink-100">
                      Your Life Stage
                    </div>
                    <div className="text-[11px] text-orchid dark:text-pink-300">
                      Personalizes guides across the platform
                    </div>
                  </div>

                  <div className="space-y-1">
                    {Object.values(STAGES).map((s) => {
                      const isSelected = stage === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            setStage(s.id);
                            setStagePopoverOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-semibold transition-colors ${
                            isSelected
                              ? 'bg-petal/70 dark:bg-pink-950/80 text-raspberry shadow-xs'
                              : 'hover:bg-lavender/50 dark:hover:bg-plum-deep text-plum/90 dark:text-pink-100'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{s.icon}</span>
                            <div>
                              <div>{s.name}</div>
                              <div className="text-[10px] text-orchid/90 dark:text-pink-300/90 font-normal">
                                {s.tagline}
                              </div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-raspberry shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {stage && (
                    <div className="pt-2 mt-1.5 border-t border-petal/50 dark:border-pink-900/40 text-center">
                      <button
                        onClick={() => {
                          setStage(null);
                          setStagePopoverOpen(false);
                        }}
                        className="text-[11px] text-raspberry hover:underline font-semibold py-1 px-3 rounded-lg hover:bg-petal/30 transition-colors"
                      >
                        Reset Stage Filter
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Toggle (Visible on < 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-plum dark:text-pink-200 hover:bg-petal/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation (< 1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-petal/60 dark:border-pink-900/40 bg-white dark:bg-[#1f0b20] px-6 py-4 space-y-1 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-raspberry text-white shadow-soft-pink'
                      : 'text-plum/80 dark:text-pink-100/80 hover:bg-petal/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
