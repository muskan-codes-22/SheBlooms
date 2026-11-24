import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { FEATURES } from '../config/features';
import { useApp } from '../context/AppContext';

export const Learn: React.FC = () => {
  const { stage, stageInfo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAllStages, setShowAllStages] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(FEATURES.articlesPageSize);

  const personalized = Boolean(stage && !showAllStages);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'basics', label: 'Basics' },
    { id: 'myths', label: 'Myths' },
    { id: 'hygiene', label: 'Hygiene' },
    { id: 'medical', label: 'Safety' },
  ];

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    let list = ARTICLES.filter(art => {
      // Stage check when personalized
      if (personalized && stage && !art.targetStages.includes(stage)) {
        return false;
      }
      // Category check
      if (selectedCategory !== 'all' && art.category !== selectedCategory) {
        return false;
      }
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = art.title.toLowerCase().includes(q);
        const inSummary = art.summary.toLowerCase().includes(q);
        const inCategory = art.categoryLabel.toLowerCase().includes(q);
        return inTitle || inSummary || inCategory;
      }
      return true;
    });

    // When personalized, sort so articles in stageInfo.recommendedArticleIds come first in curated order
    if (personalized && stageInfo?.recommendedArticleIds) {
      const recIds = stageInfo.recommendedArticleIds;
      list = [...list].sort((a, b) => {
        const idxA = recIds.indexOf(a.id);
        const idxB = recIds.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        return 0;
      });
    }

    return list;
  }, [searchQuery, selectedCategory, personalized, stage, stageInfo]);

  const visibleArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  return (
    <div className="min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="pt-10 pb-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Learning Hub
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2 max-w-lg mx-auto">
          Evidence-informed, stigma-free guides on menstrual health and cycle care.
        </p>

        {/* Compact Search & Simple Category Chips */}
        <div className="mt-6 max-w-md mx-auto space-y-3">
          {/* Small Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-plum/40 dark:text-pink-300/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(FEATURES.articlesPageSize);
              }}
              placeholder="Search guides..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/80 dark:bg-plum-deep text-xs text-plum dark:text-pink-100 border border-petal focus:outline-none focus:border-raspberry shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-plum/40 hover:text-raspberry font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Simple Category Chips: All, Basics, Myths, Hygiene, Safety */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setVisibleCount(FEATURES.articlesPageSize);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-raspberry text-white shadow-soft-pink'
                      : 'bg-white/70 dark:bg-plum-deep text-plum/70 dark:text-pink-200 border border-petal hover:border-violet/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slim Personalization Banner (Shown only when a stage is selected) */}
      {stage && stageInfo && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="rounded-xl bg-petal/40 dark:bg-pink-950/40 px-4 py-2 border border-petal dark:border-pink-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-plum dark:text-pink-100">
              <span className="text-base">{stageInfo.icon}</span>
              <span>
                {personalized ? (
                  <>Showing guides for <strong>{stageInfo.name}</strong></>
                ) : (
                  <>Showing all guides (filter paused for <strong>{stageInfo.name}</strong>)</>
                )}
              </span>
            </div>
            <button
              onClick={() => {
                setShowAllStages(!showAllStages);
                setVisibleCount(FEATURES.articlesPageSize);
              }}
              className="px-3 py-1 rounded-lg bg-white/80 dark:bg-plum-deep hover:bg-white text-raspberry dark:text-pink-200 border border-petal font-semibold transition-colors text-xs self-start sm:self-auto shadow-xs"
            >
              {personalized ? 'Show all guides' : 'Show only for me'}
            </button>
          </div>
        </section>
      )}

      {/* Slim Single-Line Strip: Interactive Cycle Wheel */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="rounded-xl bg-lavender/40 dark:bg-plum-deep/80 px-4 py-2 border border-petal flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-plum dark:text-pink-100">
            <span>🌓</span>
            <span><strong>Cycle Wheel:</strong> Explore the 4 hormonal phases and body rhythms.</span>
          </div>
          <Link
            to="/cycle"
            className="text-xs font-bold text-raspberry hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Minimal Article Grid (Max 3 per row) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 rounded-2xl glass-card border border-petal">
            <span className="text-3xl">🌸</span>
            <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 mt-2">
              No matching guides found
            </h3>
            <p className="text-xs text-orchid dark:text-pink-300 mt-1 max-w-sm mx-auto">
              Try adjusting your category or resetting your filters to explore all guides.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowAllStages(true);
                setVisibleCount(FEATURES.articlesPageSize);
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-raspberry text-white text-xs font-bold shadow-soft-pink"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {visibleArticles.map(article => {
                const isRecommended = Boolean(stageInfo?.recommendedArticleIds?.includes(article.id));

                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/learn/${article.id}`}
                      id={article.id}
                      className="group h-full rounded-2xl glass-card p-5 border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Top icon, category chip, and optional "For you" badge */}
                        <div className="flex items-center justify-between mb-3 text-xs">
                          <span className="text-xl">{article.icon}</span>
                          <div className="flex items-center gap-1.5">
                            {isRecommended && (
                              <span className="px-2 py-0.5 rounded-md bg-raspberry text-white font-bold text-[10px] shadow-xs">
                                For you
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded-md bg-petal/50 dark:bg-pink-950/60 text-orchid dark:text-pink-300 font-bold text-[10px]">
                              {article.categoryLabel}
                            </span>
                          </div>
                        </div>

                        {/* Title (max 2 lines) */}
                        <h3 className="font-serif font-bold text-base text-plum dark:text-pink-100 group-hover:text-raspberry transition-colors line-clamp-2 leading-snug mb-3">
                          {article.title}
                        </h3>
                      </div>

                      {/* Bottom: Read time and arrow */}
                      <div className="pt-3 border-t border-petal/40 flex items-center justify-between text-xs text-plum/60 dark:text-pink-300">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </span>
                        <span className="text-raspberry font-bold group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* "Show more" button only if more articles are available */}
        {filteredArticles.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(c => c + 6)}
              className="px-5 py-2 rounded-xl glass-card border border-petal text-xs font-bold text-plum dark:text-pink-100 hover:border-raspberry transition-all shadow-xs"
            >
              Show more guides ({filteredArticles.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>

    </div>
  );
};
