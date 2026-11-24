export type ReviewStatus = 'draft' | 'verified';

export interface HealthClaim {
  fact: string;
  source: string; // e.g. "WHO", "UNICEF", "MoHFW", "ACOG", "AIMS"
  reviewStatus: ReviewStatus;
  verifyNote?: string;
}

export interface FlowLevelInfo {
  level: 'spotting' | 'light' | 'medium' | 'heavy';
  label: string;
  fillPercentage: number;
  description: string;
  padUsage: string;
  whatToDo: string;
  comfortTip: string;
}

export interface BloodColorInfo {
  id: 'light-pink' | 'bright-red' | 'dark-red' | 'brown-rust';
  label: string;
  dotColor: string; // CSS color string (never reliance on color alone)
  meaning: string;
  whyItHappens: string;
  doctorFlag?: string;
}

export interface SymptomCardInfo {
  id: string;
  title: string;
  icon: string;
  whatItFeelsLike: string;
  simpleComfortTip: string;
  whyItHappens: string;
}

export interface EmergencyKitItem {
  id: string;
  title: string;
  description: string;
  essential: boolean;
}

export interface ScenarioStep {
  id: string;
  title: string;
  prompt: string;
  options: {
    label: string;
    feedback: string;
    isRecommended: boolean;
    nextStepId?: string;
  }[];
}

export interface PadStep {
  step: number;
  title: string;
  instruction: string;
  tip: string;
}

export interface BoundaryScenario {
  id: string;
  situation: string;
  choices: {
    text: string;
    guidance: string;
    isEmpowering: boolean;
  }[];
  keyTakeaway: string;
}

export interface BodyMythCard {
  id: string;
  myth: string;
  fact: string;
  explanation: string;
  ageTier: '9-12' | '13-17' | 'all';
}

export interface ProductComparison {
  id: string;
  name: string;
  icon: string;
  wearTime: string;
  costRange: string;
  ecoRating: string;
  bestFor: string;
  safetyTips: string;
  ageFit: string;
}

export interface IndianFoodItem {
  id: string;
  name: string;
  category: 'iron' | 'vit-c' | 'magnesium';
  hindiName: string;
  benefit: string;
}

export interface TriageScenario {
  id: string;
  title: string;
  scenario: string;
  verdict: 'normal' | 'worth-checking' | 'see-doctor-soon';
  explanation: string;
  actionStep: string;
}

export interface MenopauseStageInfo {
  id: 'late-reproductive' | 'perimenopause' | 'menopause' | 'post-menopause';
  title: string;
  ageRange: string;
  biologicalChange: string;
  symptoms: string[];
  whatHelps: string[];
}

export interface MenopauseSymptomToolkit {
  id: string;
  title: string;
  icon: string;
  mechanism: string;
  selfCareOptions: string[];
  whenToConsultDoctor: string;
}

export interface HealthCheckItem {
  id: string;
  name: string;
  targetOrgans: string;
  frequencyGuidance: string;
  whyItMatters: string;
  verifyFlag?: string;
}

export interface ScriptedConversation {
  id: string;
  ageGroup: '8-10' | '11-13' | '14-17';
  context: string;
  starterPhrase: string;
  dos: string[];
  donts: string[];
}
