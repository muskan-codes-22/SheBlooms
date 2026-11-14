import { RED_FLAG_TRIGGERS, CRISIS_TRIGGERS } from '../data/qa';

export interface SafetyCheckResult {
  isRedFlag: boolean;
  isCrisis: boolean;
  message?: string;
  doctorRecommendation?: string;
}

export function checkSafety(query: string): SafetyCheckResult {
  const normalized = query.toLowerCase();

  // 1. Check crisis / self-harm triggers
  for (const trigger of CRISIS_TRIGGERS) {
    if (normalized.includes(trigger)) {
      return {
        isRedFlag: false,
        isCrisis: true,
        message: '🌸 You are valued, loved, and deserve compassionate support. If you are feeling overwhelmed, please know you do not have to carry this alone. Please reach out right now to a trusted family member, doctor, or a free crisis lifeline: In India, call 14416 (Tele-MANAS) or 9152987821 (iCall); in the US call/text 988; in the UK call 111.'
      };
    }
  }

  // 2. Check clinical red flag triggers
  for (const trigger of RED_FLAG_TRIGGERS) {
    if (normalized.includes(trigger)) {
      return {
        isRedFlag: true,
        isCrisis: false,
        doctorRecommendation: '⚠️ Please talk with a doctor or gynecologist promptly. Symptoms like soaking pads hourly, passing large coin-sized blood clots, fainting, severe agonizing pain, or any bleeding after menopause require clinical evaluation.'
      };
    }
  }

  return { isRedFlag: false, isCrisis: false };
}

