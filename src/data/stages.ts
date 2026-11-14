export interface StageInfo {
  id: 'puberty' | 'cycle' | 'menopause' | 'educator';
  name: string;
  tagline: string;
  description: string;
  badge: string;
  icon: string;
  color: string;
  gradient: string;
  bgTint: string;
  recommendedArticleIds: string[];
  recommendedQuizId: string;
  greeting: string;
}

export const STAGES: Record<string, StageInfo> = {
  puberty: {
    id: 'puberty',
    name: 'First Period / Puberty',
    tagline: 'Preparing, curious or just started',
    description: 'Gentle, reassuring guidance on bodily changes, what a first period feels like, and how to feel ready with confidence.',
    badge: '🌱 Young Bloomers',
    icon: '🌱',
    color: '#D6457F',
    gradient: 'from-pink-100 to-rose-50',
    bgTint: 'rgba(214, 69, 127, 0.08)',
    recommendedArticleIds: ['first-period-expect', 'what-is-a-period', 'period-myths-busted', 'first-period-kit-guide'],
    recommendedQuizId: 'first-period-ready',
    greeting: 'Welcome, young bloom! There are no silly questions here 🌸'
  },
  cycle: {
    id: 'cycle',
    name: 'Cycle & Period Care',
    tagline: 'Regular menstrual health & rhythm',
    description: 'Understand the 4 phases of your monthly cycle, ease cramps, navigate PMS, and find menstrual products that match your lifestyle.',
    badge: '🌸 In Full Bloom',
    icon: '🌸',
    color: '#8B4F7E',
    gradient: 'from-fuchsia-50 to-purple-50',
    bgTint: 'rgba(139, 79, 126, 0.08)',
    recommendedArticleIds: ['cycle-in-4-phases', 'period-pain-normal', 'hygiene-dos-donts', 'food-movement-cramps'],
    recommendedQuizId: 'cycle-basics',
    greeting: 'Welcome, bloom! Tune in to your rhythm and body wisdom 🌿'
  },
  menopause: {
    id: 'menopause',
    name: 'Perimenopause & Menopause',
    tagline: 'Navigating hormonal transitions with grace',
    description: 'Evidence-based insights into cycle shifts, hot flushes, mood changes, sleep quality, and long-term bone and heart wellness.',
    badge: '🍂 Golden Bloom',
    icon: '🍂',
    color: '#9B7FD1',
    gradient: 'from-purple-50 to-amber-50',
    bgTint: 'rgba(155, 127, 209, 0.08)',
    recommendedArticleIds: ['perimenopause-early-signs', 'menopause-hot-flushes', 'warning-signs-doctor', 'understanding-pms'],
    recommendedQuizId: 'menopause-know-how',
    greeting: 'Welcome! Embrace your next chapter with clarity and calm 🌾'
  },
  educator: {
    id: 'educator',
    name: 'Educators & Caregivers',
    tagline: 'Supporting youth with stigma-free knowledge',
    description: 'Empathetic conversation starters, lesson plans, myths debunking, and practical advice to guide daughters, sisters, and students.',
    badge: '🤝 Blossom Guide',
    icon: '🤝',
    color: '#EDB650',
    gradient: 'from-amber-50 to-pink-50',
    bgTint: 'rgba(237, 182, 80, 0.08)',
    recommendedArticleIds: ['talking-to-daughter-students', 'hygiene-dos-donts', 'period-myths-busted', 'warning-signs-doctor'],
    recommendedQuizId: 'myth-or-fact',
    greeting: 'Welcome, educator! Thank you for fostering a safe, stigma-free space 💫'
  }
};

