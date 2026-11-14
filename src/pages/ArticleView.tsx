import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  MessageCircle, 
  CheckCircle2, 
  Share2, 
  Check, 
  ChevronDown,
  BookOpen
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { useApp } from '../context/AppContext';

export const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { markArticleRead } = useApp();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openMythIndex, setOpenMythIndex] = useState<number | null>(0);

  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];
  const currentIndex = ARTICLES.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  // Mark article read on visit
  useEffect(() => {
    if (article) {
      markArticleRead(article.id);
      window.scrollTo(0, 0);
    }
  }, [article?.id]);

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pb-24 relative">
      
      {/* Reading Progress Top Bar */}
      <div className="fixed top-[72px] left-0 right-0 h-1 bg-lavender/50 dark:bg-pink-950 z-30">
        <div
          className="h-full bg-gradient-to-r from-raspberry to-violet transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orchid hover:text-raspberry transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card hover:bg-white text-xs font-semibold text-plum/70 dark:text-pink-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied' : 'Share Guide'}</span>
          </button>
        </div>

        {/* Article Header Card */}
        <header className="rounded-3xl glass-card p-6 sm:p-10 border border-petal mb-8 relative overflow-hidden shadow-soft-pink">
          <div className="ribbon-marigold-tr" />

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-petal/60 text-raspberry font-bold">
              {article.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-plum/60 dark:text-pink-300 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] border border-emerald-200 dark:border-emerald-800">
              Evidence-informed
            </span>
          </div>

          <div className="text-4xl sm:text-5xl mb-3">{article.icon}</div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 leading-tight mb-2">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-orchid dark:text-pink-300 font-medium">
            {article.subtitle}
          </p>
        </header>

        {/* Key Takeaways Box */}
        <section className="mb-8 p-6 rounded-3xl bg-lavender/40 dark:bg-plum-deep border border-lavender space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-violet" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100">
              Key Takeaways
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-plum/80 dark:text-pink-100/90">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-raspberry font-bold">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Main Article Body Paragraphs */}
        <section className="space-y-5 text-sm sm:text-base text-plum/90 dark:text-pink-100/90 leading-relaxed font-normal">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="bg-white/40 dark:bg-plum-night/30 p-4 rounded-2xl border border-white/60">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Myth vs Fact Accordion (if present) */}
        {article.mythVsFact && article.mythVsFact.length > 0 && (
          <section className="my-10 space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💡</span>
              <h3 className="font-serif font-bold text-xl text-plum dark:text-pink-100">
                Myth vs. Fact Breakdown
              </h3>
            </div>

            <div className="space-y-3">
              {article.mythVsFact.map((item, idx) => {
                const isOpen = openMythIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl glass-card border border-petal overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenMythIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-petal/20 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 uppercase">
                          Myth
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-plum dark:text-pink-100">
                          "{item.myth}"
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-plum/50 transition-transform ${
                          isOpen ? 'rotate-180 text-raspberry' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-petal/40 bg-white/50 dark:bg-plum-night/40 text-xs sm:text-sm text-plum/80 dark:text-pink-100 leading-relaxed">
                        <div className="flex items-start gap-2 mt-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 uppercase shrink-0">
                            Clinical Fact
                          </span>
                          <p>{item.fact}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* When to See a Doctor Callout (Coral) */}
        {article.whenToSeeDoctor && (
          <section className="my-8 p-6 rounded-3xl bg-coral/10 dark:bg-coral/20 border-2 border-coral/30 text-coral-dark dark:text-coral-light space-y-2 shadow-xs">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-coral" />
              <h3 className="font-serif font-bold text-base sm:text-lg">
                When to Speak with a Doctor
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              {article.whenToSeeDoctor}
            </p>
          </section>
        )}

        {/* Sources & Further Reading Line as requested */}
        <section className="my-6 p-4 rounded-2xl bg-lavender/30 dark:bg-plum-deep/40 border border-petal/60 flex items-start gap-2.5 text-xs text-plum/70 dark:text-pink-200">
          <BookOpen className="w-4 h-4 text-orchid shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-plum dark:text-pink-100">Sources & Public Health Guidance: </span>
            <span>Educational guidance adapted from public health resources by the World Health Organization (WHO), UNICEF, ACOG, and NHS public patient guidelines.</span>
          </div>
        </section>

        {/* Ask SheBloom with context CTA */}
        <section className="my-10 p-6 rounded-3xl bg-gradient-to-r from-petal/40 via-lavender to-petal/40 dark:from-plum-deep dark:to-plum-night border border-petal flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider">
              Have a question about this topic?
            </span>
            <h4 className="font-serif font-bold text-base sm:text-lg text-plum dark:text-pink-100">
              "{article.suggestedQuestion}"
            </h4>
            <p className="text-xs text-orchid dark:text-pink-300">
              Ask SheBloom for gentle educational answers.
            </p>
          </div>

          <Link
            to={`/ask?q=${encodeURIComponent(article.suggestedQuestion)}`}
            className="px-5 py-2.5 rounded-xl bg-raspberry text-white text-xs font-bold shadow-soft-pink hover:bg-raspberry-dark transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask SheBloom</span>
          </Link>
        </section>

        {/* Next / Previous Article Navigation */}
        <nav className="mt-12 pt-6 border-t border-petal/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              to={`/learn/${prevArticle.id}`}
              className="p-4 rounded-2xl glass-card border border-petal hover:border-raspberry transition-all text-left flex items-center gap-3"
            >
              <ArrowLeft className="w-4 h-4 text-raspberry shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-orchid uppercase">Previous Guide</span>
                <div className="text-xs font-bold text-plum dark:text-pink-100 truncate max-w-[200px]">
                  {prevArticle.title}
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link
              to={`/learn/${nextArticle.id}`}
              className="p-4 rounded-2xl glass-card border border-petal hover:border-raspberry transition-all text-right flex items-center justify-end gap-3"
            >
              <div>
                <span className="text-[10px] font-bold text-orchid uppercase">Next Guide</span>
                <div className="text-xs font-bold text-plum dark:text-pink-100 truncate max-w-[200px]">
                  {nextArticle.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-raspberry shrink-0" />
            </Link>
          ) : <div />}
        </nav>

      </article>
    </div>
  );
};
