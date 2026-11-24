export type StageId = "puberty" | "cycle" | "menopause" | "educator";

export interface StageInfo {
  id: StageId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  icon: string;
  color: string;
  gradient: string;
  bgTint: string;
  recommendedArticleIds: string[];
  recommendedVideoIds?: string[];
  recommendedQuizId: string;
  greeting: string;
}

export const STAGES: Record<string, StageInfo> = {
  puberty: {
    id: "puberty",
    name: "First Period / Puberty",
    tagline: "Preparing, curious or just started",
    description:
      "Gentle, reassuring guidance on bodily changes, what a first period feels like, and how to feel ready with confidence.",
    badge: "🌷 Young Bloomers",
    icon: "🌷",
    color: "#D6457F",
    gradient: "from-pink-100 to-rose-50",
    bgTint: "rgba(214, 69, 127, 0.08)",
    recommendedArticleIds: [
      "first-period-expect",
      "period-emergency-at-school",
      "talk-to-someone-trust",
      "what-is-a-period",
      "period-stains-leaks-laundry",
      "teen-irregular-cycles",
      "first-period-kit-guide",
      "consent-and-boundaries",
      "period-myths-busted",
    ],
    recommendedVideoIds: [
      "DBe7-PHRav8",
      "kmWbOC8Fbb0",
      "iBvD3sACS4o",
      "ayzN5f3qN8g",
      "NOaeKRft-gc",
    ],
    recommendedQuizId: "first-period-ready",
    greeting: "Welcome, young bloom! There are no silly questions here",
  },
  cycle: {
    id: "cycle",
    name: "Cycle & Period Care",
    tagline: "Regular menstrual health & rhythm",
    description:
      "Understand the 4 phases of your monthly cycle, ease cramps, navigate PMS, and find menstrual products that match your lifestyle.",
    badge: "🪷 In Full Bloom",
    icon: "🪷",
    color: "#8B4F7E",
    gradient: "from-fuchsia-50 to-purple-50",
    bgTint: "rgba(139, 79, 126, 0.08)",
    recommendedArticleIds: [
      "cycle-in-4-phases",
      "pcos-pcod-management-guide",
      "workplace-college-period-care",
      "understanding-pms",
      "period-pain-normal",
      "food-movement-cramps",
      "contraception-and-pills",
      "pregnancy-and-ovulation",
      "consent-and-boundaries",
    ],
    recommendedVideoIds: [
      "Zx8zbTMTncs",
      "ayzN5f3qN8g",
      "NOaeKRft-gc",
      "raPPvnTtIdA",
      "cjbgZwgdY7Q",
      "iBvD3sACS4o",
    ],
    recommendedQuizId: "cycle-basics",
    greeting: "Welcome, bloom! Tune in to your rhythm and body wisdom",
  },
  menopause: {
    id: "menopause",
    name: "Perimenopause & Menopause",
    tagline: "Navigating hormonal transitions with grace",
    description:
      "Evidence-based insights into cycle shifts, hot flushes, mood changes, sleep quality, and long-term bone and heart wellness.",
    badge: "🦋 Golden Bloom",
    icon: "🦋",
    color: "#9B7FD1",
    gradient: "from-purple-50 to-amber-50",
    bgTint: "rgba(155, 127, 209, 0.08)",
    recommendedArticleIds: [
      "perimenopause-early-signs",
      "menopause-hot-flushes",
      "menopause-mood-brain-fog-sleep",
      "menopause-intimacy-pelvic-health",
      "menopause-hrt-natural-remedies",
      "warning-signs-doctor",
      "consent-and-boundaries",
    ],
    recommendedVideoIds: ["af-356SbCkY", "raPPvnTtIdA"],
    recommendedQuizId: "menopause-know-how",
    greeting: "Welcome! Embrace your next chapter with clarity and calm",
  },
  educator: {
    id: "educator",
    name: "Educators & Caregivers",
    tagline: "Supporting youth with stigma-free knowledge",
    description:
      "Empathetic conversation starters, lesson plans, myths debunking, and practical advice to guide daughters, sisters, and students.",
    badge: "🌟 Blossom Guide",
    icon: "🌟",
    color: "#EDB650",
    gradient: "from-amber-50 to-pink-50",
    bgTint: "rgba(237, 182, 80, 0.08)",
    recommendedArticleIds: [
      "talking-to-daughter-students",
      "consent-and-boundaries",
      "contraception-and-pills",
      "pregnancy-and-ovulation",
    ],
    recommendedVideoIds: [
      "DBe7-PHRav8",
      "iBvD3sACS4o",
      "Zx8zbTMTncs",
      "ayzN5f3qN8g",
      "kmWbOC8Fbb0",
    ],
    recommendedQuizId: "support-someone-else",
    greeting:
      "Welcome, educator! Thank you for fostering a safe, stigma-free space",
  },
};
