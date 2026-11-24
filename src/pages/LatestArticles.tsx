import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  ExternalLink, 
  Check, 
  Newspaper, 
  Flame 
} from 'lucide-react';
import { LATEST_NEWS, NewsArticle } from '../data/newsArticles';
import { STAGES } from '../data/stages';

export const LatestArticles: React.FC = () => {
  const [stageFilter, setStageFilter] = useState<string>('all');

  // Stage filters matching SheBlooms stage switcher
  const stageFilters = [
    { id: 'all', label: 'All Topics', icon: '🌸' },
    { id: 'puberty', label: 'First Period / Puberty', icon: '🌷' },
    { id: 'cycle', label: 'Cycle & Period Care', icon: '🪷' },
    { id: 'menopause', label: 'Perimenopause & Menopause', icon: '🦋' },
    { id: 'educator', label: 'Educators & Parents', icon: '🌱' }
  ];

  // Filtered news articles by stage
  const filteredNews = useMemo(() => {
    return LATEST_NEWS.filter((article) => {
      if (stageFilter !== 'all') {
        return article.targetStages.includes(stageFilter as any);
      }
      return true;
    });
  }, [stageFilter]);

  // Featured / breaking news story (first matching or breaking)
  const featuredArticle: NewsArticle | undefined = 
    filteredNews.find(a => a.isBreaking) || filteredNews[0];
  const regularArticles = filteredNews.filter(a => a.id !== featuredArticle?.id);

  const activeStageInfo = stageFilter !== 'all' ? STAGES[stageFilter] : null;

  return (
    <div className="min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="pt-10 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petal/60 dark:bg-pink-950/40 border border-petal dark:border-pink-900/50 text-raspberry dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Curated Health News & Landmark Policies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Latest Health News & Breakthroughs
        </h1>
        <p className="text-sm sm:text-base text-orchid dark:text-pink-300 mt-2.5 max-w-2xl mx-auto">
          {activeStageInfo ? (
            <>
              Real news, medical studies, and legal updates regarding <span className="font-semibold text-raspberry dark:text-pink-200">{activeStageInfo.name}</span> from trusted journalism outlets.
            </>
          ) : (
            'Real reporting, Supreme Court directives, and scientific breakthroughs in menstrual and reproductive health.'
          )}
        </p>
      </section>

      {/* Stage Selector Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {stageFilters.map((stg) => {
            const isActive = stageFilter === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setStageFilter(stg.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-raspberry text-white border-raspberry shadow-sm'
                    : 'bg-white/80 dark:bg-plum-deep text-plum/80 dark:text-pink-200 border-petal hover:border-raspberry/50'
                }`}
              >
                <span>{stg.icon}</span>
                <span>{stg.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl glass-card border border-petal max-w-xl mx-auto">
            <div className="text-4xl mb-3">📰</div>
            <h3 className="text-lg font-serif font-bold text-plum dark:text-pink-100">
              No news articles found
            </h3>
            <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-1 mb-4">
              We couldn't find any articles for this specific topic right now.
            </p>
            <button
              onClick={() => {
                setStageFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-raspberry text-white text-xs font-bold hover:bg-raspberry-dark transition-colors"
            >
              View All Topics
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Featured / Spotlight News Card */}
            {featuredArticle && (
              <div className="rounded-2xl glass-card border border-petal dark:border-pink-900/50 shadow-soft-purple overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-white/95 via-blush/25 to-white/90 dark:from-plum-deep dark:to-plum-night transition-all hover:shadow-lg">
                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {featuredArticle.isBreaking && (
                        <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold tracking-wide uppercase flex items-center gap-1 shadow-xs">
                          <Flame className="w-3 h-3" />
                          <span>Landmark Ruling</span>
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-raspberry/10 text-raspberry dark:text-pink-200 text-xs font-bold">
                        {featuredArticle.source}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-petal/60 dark:bg-pink-900/40 text-orchid dark:text-pink-300 text-xs font-medium">
                        {featuredArticle.categoryLabel}
                      </span>
                      <span className="text-xs text-plum/60 dark:text-pink-300/70 font-medium">
                        📅 {featuredArticle.publishedDate}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-plum dark:text-pink-100 leading-tight">
                      <a
                        href={featuredArticle.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-raspberry transition-colors no-underline"
                      >
                        {featuredArticle.headline}
                      </a>
                    </h2>
                    <p className="text-sm sm:text-base text-plum/80 dark:text-pink-200/90 leading-relaxed max-w-4xl">
                      {featuredArticle.summary}
                    </p>

                    {/* Key highlights from journalism coverage */}
                    <div className="pt-3 border-t border-petal/50 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-orchid dark:text-pink-300">
                        Key Directives & Takeaways:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-plum/80 dark:text-pink-100/90">
                        {featuredArticle.keyHighlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-raspberry font-bold shrink-0 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Row - Moved to bottom right */}
                  <div className="pt-4 border-t border-petal/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-orchid dark:text-pink-300">
                      Primary verified reporting from {featuredArticle.source}
                    </span>
                    <div className="flex items-center justify-end gap-4 ml-auto">
                      <span className="text-xs text-orchid dark:text-pink-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                      <a
                        href={featuredArticle.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl bg-raspberry hover:bg-raspberry-dark text-white font-bold text-sm shadow-soft-pink hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        <span>Read on {featuredArticle.source}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* News Articles Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-plum dark:text-pink-100 flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-raspberry" />
                  <span>Recent Reports & Policy Updates</span>
                </h3>
                <span className="text-xs text-orchid dark:text-pink-300">
                  Showing {filteredNews.length} verified {filteredNews.length === 1 ? 'article' : 'articles'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regularArticles.map((article) => (
                  <div
                    key={article.id}
                    className="group rounded-2xl glass-card border border-petal dark:border-pink-900/40 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between hover:-translate-y-0.5 bg-white/70 dark:bg-plum-deep/80"
                  >
                    <div className="space-y-3">
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{article.icon}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-raspberry/10 text-raspberry dark:text-pink-200 text-[11px] font-bold">
                            {article.source}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-petal/50 dark:bg-pink-900/40 text-orchid dark:text-pink-300 text-[10px] font-medium">
                            {article.publishedDate}
                          </span>
                        </div>
                      </div>

                      {/* Headline & Summary */}
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-orchid dark:text-pink-300 mb-1 block">
                          {article.categoryLabel}
                        </span>
                        <h4 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100 leading-snug">
                          <a
                            href={article.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-raspberry transition-colors no-underline block"
                          >
                            {article.headline}
                          </a>
                        </h4>
                        <p className="text-xs text-plum/70 dark:text-pink-200/70 mt-2 line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="pt-2 border-t border-petal/30 space-y-1">
                        {article.keyHighlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="text-[11px] text-plum/70 dark:text-pink-200/80 flex items-start gap-1.5">
                            <span className="text-raspberry font-bold">•</span>
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Outbound Link */}
                    <div className="pt-4 mt-4 border-t border-petal/40 flex items-center justify-between text-xs">
                      <span className="text-orchid dark:text-pink-300 flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-raspberry font-bold flex items-center gap-1 hover:text-raspberry-dark transition-colors group-hover:translate-x-0.5 text-xs"
                      >
                        <span>Read on {article.source}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journalism and Credibility Disclaimer Banner */}
            <div className="p-5 rounded-2xl bg-lavender/30 dark:bg-plum-night/60 border border-petal/60 dark:border-pink-900/40 text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-plum/70 dark:text-pink-200">
                📰 All news items, clinical consensus rulings, and policy directives are verified from primary sources including The Hindu, The Lancet, WHO, and Ministry publications.
              </span>
            </div>

          </div>
        )}
      </section>

    </div>
  );
};
