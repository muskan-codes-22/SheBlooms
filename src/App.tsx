import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { PetalBackground } from './components/PetalBackground';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

// Pages
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { ArticleView } from './pages/ArticleView';
import { CyclePage } from './pages/CyclePage';
import { AskAssistant } from './pages/AskAssistant';
import { CareGuides } from './pages/CareGuides';
import { Quizzes } from './pages/Quizzes';
import { Impact } from './pages/Impact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash if explicitly requested via ?splash=1
    const params = new URLSearchParams(window.location.search);
    return params.get('splash') === '1';
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Intro Splash with Blooming Flower (only if ?splash=1) */}
      {showSplash && <Splash onComplete={handleSplashComplete} />}

      {/* Floating Petal Particles & Ambient Glow */}
      <PetalBackground />

      {/* Top Navigation */}
      <Navbar />

      <ScrollToTop />

      {/* Main Routed Page Content with Smooth Transition between sections */}
      <main className="flex-1 relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:id" element={<ArticleView />} />
              <Route path="/cycle" element={<CyclePage />} />
              <Route path="/ask" element={<AskAssistant />} />
              <Route path="/care" element={<CareGuides />} />
              <Route path="/quiz" element={<Quizzes />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating AI Health Assistant Bubble (automatically hides on /ask) */}
      {location.pathname !== '/ask' && <ChatWidget />}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}
