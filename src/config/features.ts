/**
 * SheBlooms Feature Flags Configuration
 * 
 * Supports both static feature toggles and dynamic per-stage feature maps.
 */

export interface StageFeatures {
  firstPeriodKit: boolean;
  painFlowCheckin: boolean;
  menopauseSection: boolean;
  dosAndDonts: boolean;
  commonMistakes: boolean;
  bestFor: boolean;
}

export type StageId = 'puberty' | 'cycle' | 'menopause' | 'educator';

export const STAGE_FEATURE_DEFAULTS: Record<StageId | 'default', StageFeatures> = {
  puberty: {
    firstPeriodKit: true,
    dosAndDonts: true,
    painFlowCheckin: false,
    menopauseSection: false,
    commonMistakes: false,
    bestFor: false
  },
  cycle: {
    firstPeriodKit: false,
    dosAndDonts: true,
    painFlowCheckin: true,
    menopauseSection: false,
    commonMistakes: false,
    bestFor: false
  },
  menopause: {
    firstPeriodKit: false,
    dosAndDonts: false,
    painFlowCheckin: true,
    menopauseSection: true,
    commonMistakes: false,
    bestFor: false
  },
  educator: {
    firstPeriodKit: true,
    dosAndDonts: true,
    painFlowCheckin: false,
    menopauseSection: false,
    commonMistakes: false,
    bestFor: false
  },
  default: {
    firstPeriodKit: true,
    dosAndDonts: true,
    painFlowCheckin: true,
    menopauseSection: false,
    commonMistakes: false,
    bestFor: false
  }
};

/**
 * Returns stage-specific feature flags based on the currently selected life stage.
 */
export function getFeatures(stage?: StageId | null): StageFeatures {
  if (stage && STAGE_FEATURE_DEFAULTS[stage]) {
    return STAGE_FEATURE_DEFAULTS[stage];
  }
  return STAGE_FEATURE_DEFAULTS.default;
}

export const FEATURES = {
  // Home page sections
  showHomeBloomTip: false,
  showHomeJourneyStepper: false,
  showHomeStageArticles: false,
  showHomeExtraBadges: false,

  // Learn page
  showLearnStageFilters: false,
  showArticlePreviewsOnCards: false,
  articlesPageSize: 6,

  // Care Guides page legacy fallback flags
  showFirstPeriodKit: false,
  showPainFlowCheckin: false,
  showMenopauseSection: false,
  showProductDosAndDonts: false,
  showProductCommonMistakes: false,
  showProductBestFor: false,

  // Quizzes page
  maxVisibleQuizzes: 3,

  // Impact page
  showImpactDashboard: false,
  showImpactMetrics: false,
};
