// SheBloom User Intent Classification Layer
// Deterministic, offline classification of user intent using whole-phrase and question-type cues.

export type UserIntent =
  | 'date_prediction'
  | 'how_to'
  | 'symptom_check'
  | 'emotional_support'
  | 'definition_or_science'
  | 'myth_or_fact'
  | 'safety_or_boundaries'
  | 'product_use'
  | 'out_of_scope'
  | 'unclear';

export interface IntentResult {
  intent: UserIntent;
  confidence: number;
  extractedDateStr?: string;
  isHindiDevanagari?: boolean;
  isHinglish?: boolean;
  matchedCues: string[];
}

/**
 * Detects whether the query is written in Devanagari script.
 */
export function containsDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}

/**
 * Detects common Hinglish phrase structures.
 */
export function isHinglishText(text: string): boolean {
  const lower = text.toLowerCase();
  const hinglishTokens = [
    'meri', 'mera', 'mujhe', 'kya', 'kab', 'kyun', 'kaise', 'hoga', 'aayega',
    'aata', 'aati', 'hai', 'hain', 'ho', 'gaya', 'gayi', 'nahi', 'kare', 'karein',
    'dard', 'mahina', 'mahine', 'khoon', 'pet'
  ];
  return hinglishTokens.some(token => new RegExp(`\\b${token}\\b`, 'i').test(lower));
}

/**
 * Extract potential date substrings like "2 nov", "nov 2", "2nd nov", "2/11", "last monday", etc.
 */
export function extractDateString(text: string): string | undefined {
  const lower = text.toLowerCase();
  
  // Pattern 1: "2 nov", "2nd november", "2nd nov", "02 nov", "2 november"
  const dayMonthMatch = lower.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec|january|february|march|april|june|july|august|september|october|november|december)(?:\s+\d{2,4})?\b/i);
  if (dayMonthMatch) {
    return dayMonthMatch[0];
  }

  // Pattern 2: "nov 2", "november 2nd", "nov 02"
  const monthDayMatch = lower.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec|january|february|march|april|june|july|august|september|october|november|december)\s+(\d{1,2})(?:st|nd|rd|th)?(?:\s+\d{2,4})?\b/i);
  if (monthDayMatch) {
    return monthDayMatch[0];
  }

  // Pattern 3: "2/11", "02/11", "2-11", "02-11" (with optional year)
  const slashDateMatch = lower.match(/\b(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?\b/);
  if (slashDateMatch) {
    return slashDateMatch[0];
  }

  // Pattern 4: Relative dates like "last monday", "yesterday", "last week"
  const relativeMatch = lower.match(/\b(last\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week)|yesterday|today)\b/i);
  if (relativeMatch) {
    return relativeMatch[0];
  }

  return undefined;
}

/**
 * Classifies the high-level intent of the user message.
 */
export function classifyIntent(query: string): IntentResult {
  const raw = query.trim();
  const lower = raw.toLowerCase();

  // 1. Script & Language Checks
  const isHindiDevanagari = containsDevanagari(raw);
  const isHinglish = isHinglishText(raw);

  if (isHindiDevanagari) {
    return {
      intent: 'unclear',
      confidence: 0.9,
      isHindiDevanagari: true,
      matchedCues: ['devanagari_script']
    };
  }

  // 2. Gibberish / Keyboard Mash Check
  const cleanedAlpha = lower.replace(/[^a-z]/g, '');
  const words = lower.split(/\s+/).filter(Boolean);
  const hasKeyboardMash = words.some(w => /asdf|qwerty|zxcv|ghjk|jkl;/.test(w) || (w.length > 7 && !/[aeiouy]/.test(w)));
  
  if (hasKeyboardMash || (cleanedAlpha.length > 0 && cleanedAlpha.length < 3 && words.length === 1)) {
    return {
      intent: 'unclear',
      confidence: 0.95,
      matchedCues: ['keyboard_mash_or_too_short']
    };
  }

  // 3. Clear Out-of-Scope Detection
  // Queries completely unrelated to body, health, puberty, reproduction, hygiene, or safety.
  const domainHealthTerms = [
    'period', 'periods', 'cycle', 'bleed', 'bleeding', 'blood', 'cramp', 'cramps',
    'pain', 'pad', 'pads', 'tampon', 'tampons', 'cup', 'cups', 'vagina', 'vaginal',
    'vulva', 'uterus', 'ovary', 'ovaries', 'ovulation', 'ovulating', 'discharge',
    'pms', 'puberty', 'breast', 'breasts', 'bra', 'pregnant', 'pregnancy', 'menopause',
    'perimenopause', 'pcos', 'endometriosis', 'hygiene', 'bath', 'wash', 'stain',
    'spotting', 'flow', 'leak', 'clot', 'clots', 'mood', 'hormone', 'hormones',
    'body', 'menarche', 'growing up', 'underwear', 'panties', 'consent', 'private parts',
    'touch', 'pill', 'contraceptive', 'birth control', 'late', 'delay'
  ];

  const hasHealthKeyword = domainHealthTerms.some(term => {
    return new RegExp(`\\b${term}s?\\b`, 'i').test(lower);
  });

  const outOfScopePatterns = [
    /\bcapital of\b/i,
    /\bpresident of\b/i,
    /\bprime minister\b/i,
    /\bwho is\b/i,
    /\bweather in\b/i,
    /\bwrite (?:a|me) (?:poem|essay|code|program|story|song)\b/i,
    /\b(crypto|bitcoin|stock market|ipl|cricket score|movie|actor|actress|minecraft|roblox|fortnite)\b/i,
    /\bhow to (?:code|program|hack|build a website|drive a car)\b/i,
    /\btranslate\b/i,
    /\bmath\b/i,
    /^\s*\d+\s*[\+\-\*\/]\s*\d+\s*$/ // Math equations like "2 + 2"
  ];

  const matchesOutOfScopePattern = outOfScopePatterns.some(pat => pat.test(lower));
  if (matchesOutOfScopePattern && !hasHealthKeyword) {
    return {
      intent: 'out_of_scope',
      confidence: 0.95,
      matchedCues: ['out_of_scope_pattern']
    };
  }

  // If query has at least 3 words and absolutely no domain health words, and is not a greeting
  const isGreeting = /^(hi|hello|hey|namaste|good\s*(morning|afternoon|evening)|hola|yo)\b/i.test(lower) && words.length <= 3;
  if (!isGreeting && words.length >= 3 && !hasHealthKeyword && !isHinglish) {
    // Check if it's general knowledge or random banter
    return {
      intent: 'out_of_scope',
      confidence: 0.85,
      matchedCues: ['no_health_terms_detected']
    };
  }

  // 4. Emotional Support Detection (STRICT)
  // ONLY triggers when the user explicitly expresses subjective emotional distress or feelings.
  // Never trigger for purely factual/biological questions like "why do periods happen".
  const emotionalFeelingsPatterns = [
    /\b(?:i hate|i really hate|hate having|hate getting)\s+(?:my\s+)?periods?\b/i,
    /\b(?:i am|i'm|im|feeling)\s+(?:so\s+)?(?:scared|afraid|terrified|freaking out)\b/i,
    /\b(?:i am|i'm|im|feeling)\s+(?:embarrassed|ashamed|disgusted|gross|dirty)\b/i,
    /\b(?:i am|i'm|im|feeling)\s+(?:overwhelmed|crying|depressed|so sad)\b/i,
    /\b(?:why is this happening to me|i can't take this anymore|hate my body)\b/i
  ];

  const hasEmotionalCue = emotionalFeelingsPatterns.some(pat => pat.test(lower));
  if (hasEmotionalCue) {
    return {
      intent: 'emotional_support',
      confidence: 0.95,
      matchedCues: ['explicit_emotional_distress']
    };
  }

  // 5. Date Prediction Intent
  // Cues: "when will my next period come", "when will i get my next period", "when is my period due",
  // "when do i ovulate", "is my period late", "my period is 10 days late", or date phrase combined with period/cycle.
  const extractedDate = extractDateString(lower);
  const datePredictionPatterns = [
    /\bwhen will (?:i|my)\s+(?:get|have|start)\s+(?:my\s+)?(?:next\s+)?periods?\b/i,
    /\bwhen is (?:my\s+)?period\s+(?:due|coming|expected)\b/i,
    /\bwhen (?:should|will)\s+(?:my\s+)?next period\s+(?:come|be|start)\b/i,
    /\bwhen do i ovulate\b/i,
    /\bwhen will i ovulate\b/i,
    /\bovulation (?:date|day|window|time)\b/i,
    /\bhow to recognize my ovulation\b/i,
    /\bmy period is (\d+)\s*days?\s*late\b/i,
    /\bis my period late\b/i,
    /\bperiod (?:is\s+)?late\b/i,
    /\bhow many days until (?:my\s+)?period\b/i,
    /\bcalculate (?:my\s+)?(?:next\s+)?period\b/i,
    /\bcycle calculator\b/i
  ];

  const hasDatePredictionCue = datePredictionPatterns.some(pat => pat.test(lower));
  if (hasDatePredictionCue || (extractedDate && (lower.includes('period') || lower.includes('cycle') || lower.includes('next')))) {
    return {
      intent: 'date_prediction',
      confidence: 0.95,
      extractedDateStr: extractedDate,
      isHinglish,
      matchedCues: [hasDatePredictionCue ? 'date_prediction_pattern' : 'extracted_date_with_cycle_context']
    };
  }

  // 6. Safety or Boundaries
  const safetyPatterns = [
    /\b(?:good touch|bad touch|private parts?|safe touch|unsafe touch)\b/i,
    /\b(?:consent|boundaries|boundary|someone touched|touched me)\b/i,
    /\b(?:is it okay if someone|uncomfortable with (?:an adult|a relative))\b/i
  ];
  if (safetyPatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'safety_or_boundaries',
      confidence: 0.9,
      matchedCues: ['safety_boundaries_pattern']
    };
  }

  // 7. Product Use & How-To
  const howToPatterns = [
    /\bhow (?:do i|to|can i)\s+(?:use|wear|put on|insert|apply|change)\s+(?:a\s+)?(?:pad|tampon|menstrual cup|cup|pantyliner)\b/i,
    /\bhow (?:do i|to)\s+(?:track|start tracking)\s+(?:my\s+)?cycle\b/i,
    /\bhow (?:do i|to)\s+(?:clean|wash)\s+(?:my\s+)?(?:intimate|vagina|vulva|cup)\b/i
  ];
  if (howToPatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'how_to',
      confidence: 0.9,
      matchedCues: ['how_to_instructions']
    };
  }

  const productPatterns = [
    /\b(?:can a tampon get lost|tampon stuck|lost inside)\b/i,
    /\b(?:how often|how long)\s+(?:should|can)\s+(?:i\s+)?(?:wear|change)\s+(?:a\s+)?(?:pad|tampon|cup)\b/i,
    /\b(?:which pad is best|pad vs tampon|reusable pads|period underwear)\b/i
  ];
  if (productPatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'product_use',
      confidence: 0.9,
      matchedCues: ['product_use_pattern']
    };
  }

  // 8. Myth or Fact
  const mythPatterns = [
    /\b(?:can i|is it okay to)\s+(?:wash (?:my\s+)?hair|take a bath|shower|exercise|swim|run|play sports)\s+during\s+(?:my\s+)?periods?\b/i,
    /\b(?:is period blood dirty|impure|bad blood|toxins)\b/i,
    /\b(?:can i enter (?:the\s+)?kitchen|touch (?:plants|pickle))\b/i,
    /\b(?:myth or fact|is it true that)\b/i
  ];
  if (mythPatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'myth_or_fact',
      confidence: 0.9,
      matchedCues: ['myth_or_fact_pattern']
    };
  }

  // 9. Symptom Check
  const symptomPatterns = [
    /\b(?:is period pain normal|cramps normal|why do cramps hurt)\b/i,
    /\b(?:severe pain|bad cramps|unbearable pain|cramp relief|foods for cramps)\b/i,
    /\b(?:heavy bleeding|bleeding too much|blood clots|soaking pads)\b/i,
    /\b(?:white discharge|vaginal discharge|smelly discharge|itching|burning)\b/i,
    /\b(?:brown blood|pink blood|black blood|blood color)\b/i,
    /\b(?:pms|mood swings|irritated before period|bloating|hot flushes)\b/i,
    /\b(?:missed period|period late|period delay|irregular period)\b/i,
    /\b(?:am i pregnant|early signs of pregnancy|pregnancy test)\b/i
  ];
  if (symptomPatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'symptom_check',
      confidence: 0.85,
      matchedCues: ['symptom_check_pattern']
    };
  }

  // 10. Definition or Science
  const sciencePatterns = [
    /\b(?:what is a period|what are periods|what is menstruation)\b/i,
    /\b(?:why do periods happen|why do we get periods|why do girls get periods)\b/i,
    /\b(?:purpose of period|why does my body do this|why menstruate)\b/i,
    /\b(?:what is a normal cycle length|cycle length|average cycle)\b/i,
    /\b(?:what is ovulation|how does ovulation work|ovulation window)\b/i,
    /\b(?:what is perimenopause|what is menopause)\b/i,
    /\b(?:first period signs|signs of puberty|when will i get my first period)\b/i
  ];
  if (sciencePatterns.some(pat => pat.test(lower))) {
    return {
      intent: 'definition_or_science',
      confidence: 0.9,
      matchedCues: ['definition_or_science_pattern']
    };
  }

  // Default fallback if health words were present
  if (hasHealthKeyword) {
    return {
      intent: 'definition_or_science',
      confidence: 0.6,
      matchedCues: ['general_health_keyword_fallback']
    };
  }

  return {
    intent: 'unclear',
    confidence: 0.5,
    matchedCues: ['fallback_unclear']
  };
}
