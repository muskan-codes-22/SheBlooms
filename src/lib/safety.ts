// SheBlooms Central Medical Safety & Response Guardrails Layer
// Privacy-conscious, local, deterministic health safety governance across life stages.

export type NormalizedStage = 'puberty' | 'cycle' | 'menopause' | 'educator' | 'unknown';

export type UrgentSymptomType = 
  | 'CRISIS_SELF_HARM'
  | 'ABUSE_COERCION_DISCLOSURE'
  | 'HEAVY_BLEEDING_FAINTING'
  | 'SEVERE_PELVIC_PAIN'
  | 'FEVER_TAMPON_TSS'
  | 'POSTMENOPAUSAL_BLEEDING'
  | 'PREGNANCY_BLEEDING';

export type MedicalInterventionType = 
  | 'PERMANENT_PERIOD_STOPPAGE'
  | 'MEDICATION_DOSAGE_OVERDOSE'
  | 'STOP_PRESCRIBED_MEDICATION'
  | 'PERIOD_DELAY_OR_INDUCTION'
  | 'SURGICAL_INTERVENTION'
  | 'HORMONE_THERAPY_REQUEST'
  | 'CONTRACEPTION_INSTRUCTION_YOUTH';

export type SensitiveHealthTopicType =
  | 'PREGNANCY_INQUIRY'
  | 'INFECTION_BURNING_ITCHING'
  | 'CONDITION_DIAGNOSIS_REQUEST'
  | 'BODY_IMAGE_DISORDERED_EATING'
  | 'EMOTIONAL_BODY_SHAME'
  | 'VULNERABLE_PERIOD_FRUSTRATION';

export interface StructuredAnswer {
  opener: string;
  explanation: string;
  tips: string[];
  doctorAlert?: string;
}

export interface SafetyCheckResult {
  isCrisis: boolean;
  isRedFlag: boolean;
  isMedicalIntervention: boolean;
  isSensitiveTopic: boolean;
  urgentType?: UrgentSymptomType;
  interventionType?: MedicalInterventionType;
  sensitiveTopicType?: SensitiveHealthTopicType;
  normalizedStage: NormalizedStage;
  explicitYoungAgeDetected?: boolean;
  overrideAnswer?: StructuredAnswer;
  followUps?: string[];
  sourceArticleId?: string;
  doctorRecommendation?: string;
  message?: string;
  isFallback?: boolean;
  isWeirdOrUnrelated?: boolean;
}

/**
 * Detects whether the user explicitly stated they are younger (<= 16 years old)
 * or if a young child/daughter/student is the subject.
 */
export function detectExplicitYoungAge(query: string): boolean {
  const q = query.toLowerCase();

  // "i am 12", "i'm 13", "im 14", "am 11", "age 13", "12yo", "14 yo", "13 yr old"
  const selfAgeMatch = q.match(/\b(?:i(?:'m|\s+am)?|age|aged|am)\s+(\d{1,2})\b|\b(\d{1,2})\s*(?:years?\s*old|yo|yr|yrs?\s*old)\b/);
  if (selfAgeMatch) {
    const age = parseInt(selfAgeMatch[1] || selfAgeMatch[2], 10);
    if (!isNaN(age) && age >= 5 && age <= 16) {
      return true;
    }
  }

  // "for a 12 year old", "my 11 year old daughter", "student is 13"
  const thirdPartyMatch = q.match(/\b(?:daughter|sister|student|niece|girl|child)\s+(?:is\s+)?(\d{1,2})\b|\bfor\s+(?:a\s+)?(\d{1,2})\s*(?:year\s*old|yo|yr)/);
  if (thirdPartyMatch) {
    const age = parseInt(thirdPartyMatch[1] || thirdPartyMatch[2], 10);
    if (!isNaN(age) && age >= 5 && age <= 16) {
      return true;
    }
  }

  if (q.includes('in middle school') || q.includes('class 6') || q.includes('class 7') || q.includes('class 8')) {
    return true;
  }

  return false;
}

/**
 * Normalizes user-selected life stage into one of the 4 strict categories or 'unknown'.
 * If the user explicitly states they are 16 or younger, downgrades to 'puberty' (Young Bloomers).
 */
export function normalizeStage(stage?: string | null, query?: string): { stage: NormalizedStage; explicitYoungAge: boolean } {
  let explicitYoungAge = false;
  if (query && detectExplicitYoungAge(query)) {
    explicitYoungAge = true;
    return { stage: 'puberty', explicitYoungAge: true };
  }

  if (!stage) {
    return { stage: 'unknown', explicitYoungAge: false };
  }

  const s = stage.trim().toLowerCase();
  if (['puberty', 'bloomer', 'young-bloomers', 'young bloomers', 'teens', 'teen', 'adolescent'].includes(s)) {
    return { stage: 'puberty', explicitYoungAge: false };
  }
  if (['cycle', 'adult', 'period-care', 'cycle-care', 'reproductive'].includes(s)) {
    return { stage: 'cycle', explicitYoungAge: false };
  }
  if (['menopause', 'perimenopause', 'postmenopause', 'midlife'].includes(s)) {
    return { stage: 'menopause', explicitYoungAge: false };
  }
  if (['educator', 'caregiver', 'parent', 'teacher', 'mentor', 'counselor'].includes(s)) {
    return { stage: 'educator', explicitYoungAge: false };
  }

  return { stage: 'unknown', explicitYoungAge: false };
}

/**
 * Pre-cleans text for robust, typo-tolerant pattern matching.
 */
export function sanitizeQuery(text: string): string {
  let cleaned = text.toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Normalize character repeats (e.g. "dizzzzy" -> "dizzy", "bleeeed" -> "bleed")
  cleaned = cleaned.replace(/([a-z])\1{2,}/g, '$1$1');

  // Normalize common phonetic typos and colloquial terms
  cleaned = cleaned
    .replace(/\bunberable\b|\bunbearble\b|\bunbarable\b/g, 'unbearable')
    .replace(/\bdizy\b|\bdizzi\b|\bdizzey\b|\blightheaded\b/g, 'dizzy')
    .replace(/\bfaintng\b|\bfaintin\b|\bfented\b|\bfeint\b/g, 'faint')
    .replace(/\bsoking\b|\bsoack\b|\bsoakng\b/g, 'soak')
    .replace(/\bbled\b|\bbledin\b|\bbleding\b|\bbleedng\b|\bbleting\b/g, 'bleeding')
    .replace(/\bpermenant\b|\bpermanet\b|\bpermanantly\b|\bpermanetly\b/g, 'permanent')
    .replace(/\bhysterectmy\b|\bhisterectomy\b/g, 'hysterectomy')
    .replace(/\bmedisin\b|\bmedecine\b|\bmedcine\b/g, 'medicine');

  return cleaned;
}

/**
 * Crisis / Self-Harm Detection
 */
export const CRISIS_PATTERNS = [
  'kill myself', 'suicide', 'self harm', 'hurt myself', 'want to die',
  'hopeless', 'end my life', 'cut myself', 'take my life'
];

export function detectCrisis(query: string): boolean {
  const q = sanitizeQuery(query);
  return CRISIS_PATTERNS.some(trigger => q.includes(trigger));
}

/**
 * Abuse, Coercion, or Child Safety Threat Disclosure Detection
 */
export function detectAbuseOrSafetyThreat(query: string): boolean {
  const q = sanitizeQuery(query);
  return (
    q.includes('forcing me to') ||
    q.includes('forced me to') ||
    q.includes('dont feel safe') ||
    q.includes('do not feel safe') ||
    q.includes('not feeling safe') ||
    q.includes('scared to tell anyone') ||
    q.includes('afraid to tell anyone') ||
    q.includes('someone touched me') ||
    q.includes('touching my private') ||
    q.includes('threatened me')
  );
}

/**
 * Detects whether a query is weird, bizarre, surreal, nonsensical, or about non-human entities.
 * Prevents giving unrelated or unuseful clinical answers to questions about aliens, cars, computers, or gibberish.
 */
export function isWeirdOrUnrelatedQuery(query: string): boolean {
  const q = sanitizeQuery(query);

  // Inanimate, mechanical, or non-human entities that make a health query weird/unrelated
  const NON_HUMAN_ENTITIES = [
    'alien', 'spaceship', 'ufo', 'robot', 'cyborg', 'zombie', 'vampire', 'ghost', 'dinosaur', 'monster', 'dragon',
    'car', 'engine', 'vehicle', 'tire', 'motor', 'truck', 'airplane', 'rocket', 'mars',
    'computer', 'laptop', 'screen', 'keyboard', 'server', 'software', 'code',
    'dog', 'cat', 'puppy', 'kitten', 'horse', 'cow', 'pet',
    'table', 'chair', 'furniture', 'building', 'wall', 'roof',
    'crypto', 'bitcoin', 'stock market',
    'minecraft', 'fortnite', 'roblox'
  ];

  const hasNonHumanEntity = NON_HUMAN_ENTITIES.some(entity => {
    const regex = new RegExp(`\\b${entity}s?\\b`, 'i');
    return regex.test(q);
  });

  if (hasNonHumanEntity) {
    return true;
  }

  // Check for random gibberish or keyboard mashing (e.g. "asdfghjk", "qwertyuiop", "zxcvbnm", or words with no vowels > 6 letters)
  const tokens = q.split(' ').filter(t => t.length > 0);
  const hasGibberish = tokens.some(t => {
    if (t.length > 6 && !/[aeiouy]/.test(t)) return true;
    if (/asdf|qwerty|zxcv|ghjk|jkl;/.test(t)) return true;
    return false;
  });

  if (hasGibberish) {
    return true;
  }

  return false;
}

/**
 * Builds a clear, honest fallback when a user asks a weird or unrelated question.
 * Simply and respectfully admits SheBloom cannot understand, rather than giving unrelated medical lectures.
 */
export function buildWeirdQuestionFallback(): StructuredAnswer {
  return {
    opener: "I didn't quite understand that question 🌸",
    explanation: "SheBloom is an educational platform dedicated to menstrual and reproductive health. I want to make sure I only give you safe, relevant, and verified guidance, and I couldn't understand how your question relates to your body or cycle.",
    tips: [
      "Could you try asking your question using clear, everyday words about your body or period?",
      "For example, try asking: 'How do I know if my period is too heavy?', 'Is period pain normal?', or 'What does discharge look like?'.",
      "If you or someone else is experiencing an actual physical emergency or sudden severe illness, please contact local emergency medical services or consult a doctor immediately."
    ]
  };
}

/**
 * Red Flag / Urgent Symptom Detection
 */
export function detectUrgentSymptoms(query: string): UrgentSymptomType | null {
  const q = sanitizeQuery(query);

  // 1. Crisis takes absolute first priority
  if (detectCrisis(query)) {
    return 'CRISIS_SELF_HARM';
  }

  // 2. Abuse / Physical Safety Threat
  if (detectAbuseOrSafetyThreat(query)) {
    return 'ABUSE_COERCION_DISCLOSURE';
  }

  // 3. Weird / Non-Human Queries should NOT trigger human medical red flags!
  if (isWeirdOrUnrelatedQuery(query)) {
    return null;
  }

  // 4. Toxic Shock Syndrome / Tampon fever
  const hasTampon = q.includes('tampon') || q.includes('cup');
  const hasTssSymptom = q.includes('fever') || q.includes('vomit') || q.includes('rash') || q.includes('shiver') || q.includes('toxic shock') || q.includes('chills');
  if (hasTampon && hasTssSymptom) {
    return 'FEVER_TAMPON_TSS';
  }

  // 5. Post-menopausal bleeding
  const isPostMeno = q.includes('after menopause') || q.includes('postmenopause') || q.includes('post menopausal') || q.includes('stopped 1 year') || q.includes('stopped a year') || q.includes('12 months no period') || q.includes('menopause for a year');
  const hasBleeding = q.includes('bleed') || q.includes('blood') || q.includes('spotting') || q.includes('period returned');
  if (isPostMeno && hasBleeding) {
    return 'POSTMENOPAUSAL_BLEEDING';
  }

  // 6. Pregnancy with bleeding / severe pain
  const isPreg = q.includes('pregnant') || q.includes('pregnancy');
  const pregRisk = q.includes('bleed') || q.includes('blood') || q.includes('severe pain') || q.includes('miscarriage') || q.includes('cramping severely');
  if (isPreg && pregRisk) {
    return 'PREGNANCY_BLEEDING';
  }

  // 7. Heavy / Severe Bleeding combined with Fainting / Dizziness or Standalone Severe Bleeding
  const hasHeavyFlow = (
    q.includes('bleeding heavily') || 
    q.includes('heavy bleeding') || 
    q.includes('bleeding very heavy') ||
    q.includes('period is very heavy') ||
    q.includes('bleed so much') || 
    q.includes('bleeding so much') || 
    q.includes('severe bleeding') ||
    q.includes('bleeding severely') ||
    q.includes('soak pad') || 
    q.includes('soaking pad') || 
    q.includes('soaked through') || 
    q.includes('soaking through') || 
    q.includes('flooding') ||
    q.includes('blood running down') ||
    q.includes('clots bigger than') ||
    q.includes('huge clot')
  );

  const hasFaintingDizzy = (
    q.includes('faint') || 
    q.includes('fainting') || 
    q.includes('fainted') || 
    q.includes('pass out') || 
    q.includes('passed out') || 
    q.includes('passing out') || 
    q.includes('black out') || 
    q.includes('blacked out') || 
    q.includes('blacking out') || 
    q.includes('dizzy') || 
    q.includes('dizziness') || 
    q.includes('weak and breathless') ||
    q.includes('cannot stand')
  );

  if (hasHeavyFlow && hasFaintingDizzy) {
    return 'HEAVY_BLEEDING_FAINTING';
  }

  // Standalone rapid soak rate, severe bleeding, or fainting from period
  if (
    q.includes('soaking a pad every hour') ||
    q.includes('soaking pad every hour') ||
    q.includes('soaking pads very quickly') ||
    q.includes('soak pad hourly') ||
    q.includes('soak a pad hourly') ||
    q.includes('severe bleeding') ||
    q.includes('bleeding severely') ||
    q.includes('bleed non stop') ||
    (q.includes('passed out') && (q.includes('period') || q.includes('cramp') || q.includes('bleed'))) ||
    (q.includes('fainted') && (q.includes('period') || q.includes('cramp') || q.includes('bleed')))
  ) {
    return 'HEAVY_BLEEDING_FAINTING';
  }

  // 8. Severe or sudden abdominal / pelvic pain
  if (
    q.includes('cramps are unbearable') ||
    q.includes('unbearable cramps') ||
    q.includes('unbearable pain') ||
    q.includes('sudden severe pain') ||
    q.includes('severe sudden pain') ||
    q.includes('agonizing pain') ||
    q.includes('excruciating pain') ||
    q.includes('excruciating cramps') ||
    q.includes('vomiting from cramps') ||
    q.includes('vomiting from pain') ||
    q.includes('cannot walk from pain') ||
    q.includes('crying from pain')
  ) {
    return 'SEVERE_PELVIC_PAIN';
  }

  return null;
}

/**
 * Detects sensitive medical-intervention intents that require strict guardrails.
 */
export function detectMedicalIntervention(query: string): MedicalInterventionType | null {
  const q = sanitizeQuery(query);

  // 1. Permanent period stoppage
  const stopKeywords = ['stop', 'end', 'cancel', 'prevent', 'get rid of', 'kill', 'pause', 'eliminate', 'terminate'];
  const periodKeywords = ['period', 'periods', 'menstruation', 'menses', 'bleeding', 'monthly bleed'];
  const permanentKeywords = ['permanently', 'permanent', 'forever', 'for good', 'never again', 'for life', 'entirely', 'completely', 'always'];

  const hasStop = stopKeywords.some(w => q.includes(w));
  const hasPeriod = periodKeywords.some(w => q.includes(w));
  const hasPermanent = permanentKeywords.some(w => q.includes(w));

  if (hasStop && hasPeriod && hasPermanent) {
    return 'PERMANENT_PERIOD_STOPPAGE';
  }

  if (
    q.includes('stop my period forever') ||
    q.includes('stop my period permanently') ||
    q.includes('stop periods permanently') ||
    q.includes('stop bleeding forever') ||
    q.includes('never have a period again') ||
    q.includes('get rid of my period forever') ||
    q.includes('make my period go away forever')
  ) {
    return 'PERMANENT_PERIOD_STOPPAGE';
  }

  // 2. Stopping prescribed medication
  if (
    (q.includes('stop') || q.includes('quit') || q.includes('discontinue')) &&
    (q.includes('prescribed medication') || q.includes('prescription') || q.includes('my medicine') || q.includes('my pills') || q.includes('thyroid pill') || q.includes('blood pressure'))
  ) {
    return 'STOP_PRESCRIBED_MEDICATION';
  }

  // 3. Medication dosage alterations, doubling dose, or overdose
  const doseKeywords = ['extra', 'double', '2 ', 'two ', 'triple', '3 ', 'more', 'too much', 'too many', 'overdose', 'increase'];
  const medKeywords = ['pill', 'pills', 'tablet', 'tablets', 'birth control', 'medicine', 'medication', 'dose', 'paracetamol', 'meftal', 'ibuprofen', 'painkiller'];

  const hasDoseAction = doseKeywords.some(w => q.includes(w));
  const hasMed = medKeywords.some(w => q.includes(w));

  if (
    q.includes('take extra birth-control pills') ||
    q.includes('take extra birth control') ||
    q.includes('take double the medicine dose') ||
    q.includes('take double the dose') ||
    q.includes('double the medicine dose') ||
    q.includes('double dose') ||
    q.includes('take extra pills') ||
    q.includes('take extra medicine') ||
    q.includes('what dose should i take') ||
    q.includes('how many pills should i take') ||
    (hasDoseAction && hasMed && (q.includes('take') || q.includes('swallow') || q.includes('drink') || q.includes('have')))
  ) {
    return 'MEDICATION_DOSAGE_OVERDOSE';
  }

  // 4. Period delay or artificial induction
  if (
    q.includes('delay my period') ||
    q.includes('delay period') ||
    q.includes('postpone my period') ||
    q.includes('postpone period') ||
    q.includes('stop my period for an event') ||
    q.includes('pills to delay period') ||
    q.includes('induce my period') ||
    q.includes('prepone period') ||
    q.includes('make my period come early') ||
    q.includes('make period come early') ||
    q.includes('medicine to start my period') ||
    q.includes('pills to start period')
  ) {
    return 'PERIOD_DELAY_OR_INDUCTION';
  }

  // 5. Surgical interventions (Hysterectomy, Ablation)
  if (
    q.includes('hysterectomy') ||
    q.includes('remove my uterus') ||
    q.includes('remove my womb') ||
    q.includes('remove uterus') ||
    q.includes('endometrial ablation') ||
    q.includes('uterine ablation') ||
    q.includes('uterine artery embolization') ||
    q.includes('surgery to stop period')
  ) {
    return 'SURGICAL_INTERVENTION';
  }

  // 6. Hormone therapy self-administration
  if (
    q.includes('hrt') ||
    q.includes('hormone replacement therapy') ||
    q.includes('take estrogen pills') ||
    q.includes('prescribe estrogen') ||
    q.includes('should i take hormone medication') ||
    q.includes('self prescribe')
  ) {
    return 'HORMONE_THERAPY_REQUEST';
  }

  return null;
}

/**
 * Detects sensitive medical questions that require careful, non-diagnostic guardrails.
 */
export function detectSensitiveHealthTopic(query: string): SensitiveHealthTopicType | null {
  const q = sanitizeQuery(query);

  // 1. Pregnancy inquiries ("Am I pregnant?", "Can I get pregnant on period?")
  if (
    q.includes('am i pregnant') ||
    q.includes('could i be pregnant') ||
    q.includes('can pregnancy happen during a period') ||
    q.includes('can i get pregnant during my period') ||
    q.includes('can you get pregnant on period') ||
    q.includes('positive pregnancy test mean') ||
    q.includes('what does positive test mean')
  ) {
    return 'PREGNANCY_INQUIRY';
  }

  // 2. Burning urination, infection, unusual odor, itching
  if (
    q.includes('burns when i urinate') ||
    q.includes('burns when i pee') ||
    q.includes('burning when peeing') ||
    q.includes('discharge smells unusual') ||
    q.includes('discharge smells bad') ||
    q.includes('itching and irritation') ||
    q.includes('itchy vagina') ||
    q.includes('do i have an infection') ||
    q.includes('do i have yeast infection') ||
    q.includes('do i have uti')
  ) {
    return 'INFECTION_BURNING_ITCHING';
  }

  // 3. Condition diagnosis requests (PCOS, Endometriosis)
  if (
    q.includes('do i have pcos') ||
    q.includes('could i have pcos') ||
    q.includes('does this mean i have endometriosis') ||
    q.includes('do i have endometriosis') ||
    q.includes('diagnose my period') ||
    q.includes('why am i missing periods')
  ) {
    return 'CONDITION_DIAGNOSIS_REQUEST';
  }

  // 4. Body image, starvation, weight loss to fix periods
  if (
    q.includes('lose weight to fix my periods') ||
    q.includes('stop eating to regulate my cycle') ||
    q.includes('stop eating to fix my period') ||
    q.includes('need to be thinner') ||
    q.includes('starve myself') ||
    q.includes('is my body abnormal')
  ) {
    return 'BODY_IMAGE_DISORDERED_EATING';
  }

  // 5. Emotional body shame
  if (
    q.includes('i hate my body') ||
    q.includes('ashamed of my period') ||
    q.includes('disgusted by my period') ||
    q.includes('feel dirty on my period') ||
    q.includes('ashamed of bleeding') ||
    q.includes('embarrassed of my period') ||
    q.includes('embarrassed about my period')
  ) {
    return 'EMOTIONAL_BODY_SHAME';
  }

  // 6. Vulnerable period frustration, annoyance, or explicit emotional venting about periods
  // Exclude queries that clearly ask about physical genital itching or infection
  const hasInfectionKeywords = q.includes('burn') || q.includes('itch') || q.includes('smell') || q.includes('odor') || q.includes('yeast') || q.includes('uti');
  if (!hasInfectionKeywords) {
    if (
      q.includes('irritating') ||
      q.includes('irritated') ||
      q.includes('annoying') ||
      q.includes('annoyed') ||
      q.includes('hate my period') ||
      q.includes('hate periods') ||
      q.includes('hate having periods') ||
      q.includes('hate getting my period') ||
      q.includes('dont want my period') ||
      q.includes("don't want my period") ||
      q.includes('dont want to have periods') ||
      q.includes("don't want to have periods") ||
      q.includes('dont want periods') ||
      q.includes('tired of having periods') ||
      q.includes('tired of bleeding') ||
      q.includes('tired of my period') ||
      q.includes('sick of periods') ||
      q.includes('sick of having periods') ||
      q.includes('why is it so unfair') ||
      q.includes('why is period so annoying') ||
      q.includes('why do i suffer every month') ||
      q.includes('suffer every month') ||
      q.includes('periods are irritating') ||
      q.includes('period is irritating') ||
      q.includes('its irritating') ||
      q.includes('it is irritating') ||
      q.includes('so irritating')
    ) {
      return 'VULNERABLE_PERIOD_FRUSTRATION';
    }
  }

  return null;
}

/**
 * Builds an immediate, priority emergency safety response.
 * Safety responses strictly override regular Q&A matching.
 */
export function buildUrgentResponse(
  urgentType: UrgentSymptomType, 
  stage: NormalizedStage
): StructuredAnswer {
  // Crisis / Self-harm
  if (urgentType === 'CRISIS_SELF_HARM') {
    return {
      opener: 'You are valued, and caring support is available right now 🌸',
      explanation: 'Whatever emotional weight or distress you are experiencing, please know that you do not have to carry this alone. There are free, confidential support services ready to listen and help.',
      tips: [
        'Reach out to a trusted family member, close friend, school counselor, or doctor immediately.',
        'In India: Call 14416 (Tele-MANAS, 24/7 mental health helpline) or 9152987821 (iCall).',
        'In the US: Call or text 988 (Suicide & Crisis Lifeline). In the UK: Call 111 or 999 in an emergency.',
        'If you feel in immediate danger of hurting yourself, go to your nearest hospital emergency room.'
      ],
      doctorAlert: 'Immediate Support: Please connect with a trusted person or free crisis helpline right away.'
    };
  }

  // Abuse / Coercion / Safety Threat
  if (urgentType === 'ABUSE_COERCION_DISCLOSURE') {
    return {
      opener: 'Your safety is the absolute priority, and you did nothing wrong 🛡️',
      explanation: 'No one has the right to force you into any physical action, touch your body without your consent, or threaten you to keep secrets. You deserve to be protected and supported.',
      tips: [
        'In India: Call 1098 (Childline / Mission Vatsalya) for free, 24/7 emergency child safety support, or call 112 (National Emergency Number).',
        'Tell an adult you trust completely: a parent, school counselor, favorite teacher, or doctor.',
        'Do not stay alone with someone who makes you feel unsafe or uncomfortable.',
        'You have the full right to say "No" and seek protection.'
      ],
      doctorAlert: 'Safety Priority: Please contact child protection authorities (1098 in India) or emergency services (112) immediately.'
    };
  }

  // Heavy bleeding with fainting / dizziness / severe flow concerns
  if (urgentType === 'HEAVY_BLEEDING_FAINTING') {
    if (stage === 'puberty') {
      return {
        opener: "Let's check in on your symptoms together 🌸 Period bleeding can look like a lot when you're a beginner!",
        explanation: "Because period bleeding is new to you, it is very common to feel worried or wonder if it's 'too much.' A young girl can easily mistake normal flow for severe bleeding because blood spreads out quickly on a cotton pad.\n\nBefore worrying, ask yourself these 3 check-in questions:\n1. Pad change speed: Are you completely soaking front-to-back through a full regular pad every hour for 2 hours in a row? Or does your pad last 3 to 5 hours?\n2. Blood clots: Are you seeing dark clots larger than a coin (like a 5-rupee coin) or a lemon? (Tiny jelly-like specks are completely normal).\n3. How your body feels: Do you feel dizzy, lightheaded, pale, or too weak to stand? Or do you feel generally fine aside from seeing the blood?",
        tips: [
          "Why it looks like so much: Blood spreads out quickly on cotton pads and can look like a huge puddle, but most people only lose about 2 to 3 tablespoons (30–45 ml) of blood during their entire 4–7 day period.",
          "Day 1 and Day 2 are naturally the heaviest: It is completely normal to have stronger flow on the first two days and much lighter flow by Days 4, 5, and 6.",
          "When to tell an adult or doctor right away: If you answered YES to soaking a pad completely every hour for 2 hours, seeing large coin-sized clots, or feeling dizzy and faint, tell a parent, guardian, or school nurse immediately: 'I am bleeding very heavily and feeling dizzy, and I need a doctor.' They will help you get checked safely.",
          "Lie down and rest: Lie down flat with your legs elevated on pillows to keep blood circulating to your brain, and sip water or an electrolyte drink while someone arranges to take you to a clinic. Do NOT take extra pain medicine on your own."
        ],
        doctorAlert: 'Medical Priority: If you are bleeding heavily and feeling dizzy, or soaking a full pad every hour for 2 hours, tell a parent, trusted adult, or doctor right away.'
      };
    }

    if (stage === 'menopause') {
      return {
        opener: 'Evaluating Bleeding Changes in Midlife and Menopause 🌾',
        explanation: 'Bleeding patterns change significantly during perimenopause and menopause. To determine the right next steps, consider these essential diagnostic check-in questions:\n\n1. Stage of transition: Are your periods becoming irregular with skipped months (perimenopause), or have you had 12 full continuous months without any periods (postmenopause)?\n2. Flow pattern: Is this a sudden heavy "flooding" episode during an irregular cycle, or continuous prolonged bleeding exceeding 7 days?\n3. Systemic symptoms: Are you feeling lightheaded, short of breath, or unusually weak?',
        tips: [
          'Perimenopausal flow shifts: Fluctuating estrogen levels without regular ovulation can cause the uterine lining to build up thicker, resulting in occasional very heavy flow.',
          'Postmenopausal bleeding rule: Any bleeding, spotting, or pinkish discharge occurring after 12 full months without a period is NOT a normal period returning and must be evaluated.',
          'When to see a doctor: All postmenopausal bleeding requires prompt gynaecological assessment and pelvic ultrasound. For perimenopausal flooding, consult a doctor if bleeding lasts over 7 days or soaks a pad hourly.',
          'Lie down with legs elevated if feeling faint, and keep a log of pad changes to report to your doctor.'
        ],
        doctorAlert: 'Clinical Alert: Any bleeding after 12 months without a period, or heavy bleeding with dizziness, warrants prompt clinical evaluation.'
      };
    }

    return {
      opener: 'Evaluating Menstrual Flow: Clinical Check-in Questions 🩺',
      explanation: 'Menstrual volume varies from cycle to cycle, but true clinical menorrhagia (abnormally heavy bleeding) has clear criteria. Let\'s evaluate your symptoms with these diagnostic check-in questions:\n\n1. Product saturation: Are you soaking through 1 or more full regular pads or tampons every hour for 2 or more consecutive hours?\n2. Clot size: Are you passing blood clots larger than a coin (1 inch / 2.5 cm)?\n3. Bleeding duration: Has your bleeding lasted continuously for more than 7 full days?\n4. Systemic symptoms: Are you experiencing dizziness, shortness of breath, sudden paleness, or extreme fatigue?',
      tips: [
        'Peak flow vs. excessive loss: Days 1 and 2 often represent 70% of total menstrual loss. However, bleeding should never interfere with routine activities or leave you feeling faint.',
        'Track pad changes and clot sizes: Logging exact pad counts and duration gives your physician essential diagnostic information.',
        'When to see a doctor: If you meet any of the criteria above, consult a gynaecologist for a complete blood count (CBC) and pelvic ultrasound to check for iron deficiency, fibroids, or hormonal imbalances.',
        'Emergency red flag: Seek immediate clinical or emergency medical care if heavy bleeding is accompanied by fainting, severe shortness of breath, or uncontrollable flooding.'
      ],
      doctorAlert: 'Clinical Alert: Rapid blood loss combined with dizziness or fainting requires prompt physician assessment.'
    };
  }

  // Severe pelvic pain / vomiting
  if (urgentType === 'SEVERE_PELVIC_PAIN') {
    if (stage === 'puberty') {
      return {
        opener: "Let's check in on your pain together 🌸 Severe cramps should not be endured alone.",
        explanation: "Mild or moderate cramps can happen when you are growing up, but severe, debilitating pain is an important sign that your body needs medical care.\n\nLet's check your symptoms:\n1. Pain severity: Does the pain stop you from walking, going to school, or sleeping?\n2. Accompanying signs: Are you experiencing vomiting, severe nausea, fever, or dizziness along with cramps?\n3. Warmth relief: Does gentle warmth (a warm water bottle or heating pad) help at all?",
        tips: [
          'Mild cramping is common on Days 1 and 2, but vomiting or crying from pain is NOT normal.',
          'Tell a parent, guardian, or school nurse right now so they can take you to a doctor.',
          'Do not take extra or unprescribed pain tablets without adult or doctor approval.',
          'Lie down with your knees bent and place a warm water bottle (garam paani ki thaili) on your lower belly while getting ready to see a doctor.',
          'Doctors can provide safe, effective relief suited to your age.'
        ],
        doctorAlert: 'Medical Care Needed: Severe debilitating cramps require evaluation by a doctor or paediatrician.'
      };
    }

    return {
      opener: 'Severe Pelvic Pain: Clinical Evaluation Recommended',
      explanation: 'Sudden, severe, or agonizing pelvic pain—especially accompanied by vomiting, fever, or inability to walk—can indicate conditions such as ovarian torsion, ruptured ovarian cyst, or severe endometriosis.',
      tips: [
        'Seek urgent medical care if pain is sudden, escalating sharply, or accompanied by vomiting or fever.',
        'Avoid taking excessive doses of painkillers, which can irritate the stomach lining or mask clinical signs.',
        'Rest in a comfortable position with moderate heat on the lower abdomen while arranging care.',
        'Consult a gynaecologist for pelvic ultrasound imaging and clinical examination.'
      ],
      doctorAlert: 'Clinical Alert: Severe, agonizing pelvic pain warrants prompt clinical examination.'
    };
  }

  // Toxic Shock Syndrome / Tampon fever
  if (urgentType === 'FEVER_TAMPON_TSS') {
    return {
      opener: 'Urgent Notice: Possible Toxic Shock Syndrome (TSS)',
      explanation: 'Developing a sudden high fever, vomiting, dizziness, diarrhea, or a sunburn-like rash while using a tampon or menstrual cup requires immediate medical attention.',
      tips: [
        'Remove your tampon or menstrual cup immediately and switch to a pad.',
        'Go to the nearest hospital emergency room or urgent clinic right now.',
        'Tell the medical staff: "I was using a tampon/cup and developed a sudden fever and symptoms."',
        'Do not wait to see if symptoms improve on their own.'
      ],
      doctorAlert: 'Emergency: Remove tampon/cup immediately and proceed to the nearest emergency medical centre.'
    };
  }

  // Post-menopausal bleeding
  if (urgentType === 'POSTMENOPAUSAL_BLEEDING') {
    return {
      opener: 'Important Health Guideline: Bleeding After Menopause',
      explanation: 'Any vaginal bleeding, spotting, or pinkish discharge occurring after 12 full months without a period is medically considered post-menopausal bleeding. While frequently caused by benign changes like tissue thinning (atrophy) or polyps, it must always be evaluated by a gynaecologist to rule out endometrial abnormalities.',
      tips: [
        'Schedule an evaluation with a gynaecologist promptly for pelvic ultrasound imaging.',
        'Do not assume this is an accidental period returning.',
        'Note the date, duration, color, and whether bleeding occurred spontaneously or after intercourse.',
        'Never take herbal or hormonal remedies without clinical examination.'
      ],
      doctorAlert: 'Gynaecological Assessment Needed: Any bleeding after 12 months without periods requires clinical evaluation.'
    };
  }

  // Pregnancy with bleeding
  return {
    opener: 'Medical Alert: Pregnancy with Bleeding',
    explanation: 'Any bleeding or severe cramping during pregnancy warrants prompt clinical evaluation by an obstetrician or emergency maternity service.',
    tips: [
      'Contact your obstetrician, maternity clinic, or local emergency hospital right away.',
      'Rest comfortably and do not insert tampons or any internal products.',
      'Wear a clean pad to monitor the color and amount of bleeding.',
      'Seek immediate hospital emergency care if bleeding is heavy, clotting, or accompanied by severe pain.'
    ],
    doctorAlert: 'Immediate Assessment: Pregnancy with bleeding requires clinical evaluation by an obstetrician.'
  };
}

/**
 * Builds dedicated stage-tailored responses for sensitive medical intervention questions.
 */
export function buildInterventionResponse(
  intervention: MedicalInterventionType,
  stage: NormalizedStage
): StructuredAnswer {
  // 1. PERMANENT PERIOD STOPPAGE
  if (intervention === 'PERMANENT_PERIOD_STOPPAGE') {
    if (stage === 'puberty') {
      return {
        opener: 'Periods are a natural part of growing up, and your feelings are completely valid 🌸',
        explanation: 'Starting periods can feel messy, stressful, or uncomfortable, but having a period is a healthy part of puberty. There is no safe, healthy way to turn off periods permanently on your own, and major surgeries are not done for healthy growing bodies.',
        tips: [
          'Are your periods causing severe pain, heavy leaking, or fear? Those specific issues can be treated and made much better with a doctor’s help.',
          'Talk openly with a parent, guardian, school nurse, or doctor. You do not have to manage uncomfortable feelings alone.',
          'Doctors can help make periods light, manageable, and comfortable using gentle, safe steps.',
          'Growing up takes time, and your body is doing natural, healthy work.'
        ],
        doctorAlert: 'If your period is causing intense pain, distress, or worry, talk to a parent or healthcare professional so they can help you feel comfortable.'
      };
    }

    if (stage === 'cycle') {
      return {
        opener: 'Understanding Menstrual Suppression vs. Permanent Cessation 🌿',
        explanation: 'There is a major medical difference between menstrual suppression (safely reducing or pausing bleeds under medical supervision) and permanent cessation (which naturally happens at menopause or via major surgeries like a hysterectomy). Permanent surgery is an irreversible procedure reserved for serious clinical conditions (such as severe fibroids or cancer), not routine convenience.',
        tips: [
          'Menstrual suppression options: Gynaecologists can safely prescribe continuous hormonal methods (like low-dose pills, hormonal IUDs, or injections) to manage difficult bleeding.',
          'Individual assessment is essential: Every hormonal option has unique contraindications and side effects that require medical history review.',
          'Never self-medicate: Altering pill schedules or attempting unverified methods without doctor oversight can trigger irregular bleeding and health risks.',
          'Discuss your goals openly with a gynaecologist to design a safe, reversible management plan suited to your health history.'
        ],
        doctorAlert: 'Consult a qualified gynaecologist to discuss safe, evidence-based cycle management tailored to your needs.'
      };
    }

    if (stage === 'menopause') {
      return {
        opener: 'Menstrual Changes During the Menopause Transition 🌾',
        explanation: 'During perimenopause, periods naturally become irregular and eventually stop permanently as ovarian hormone production declines. Full menopause is medically confirmed only after 12 consecutive months with zero bleeding. We cannot assume every irregular or missed period is normal menopause without considering your full health picture.',
        tips: [
          'Natural timeline: In India, natural menopause typically occurs between ages 45 and 50 (median ~46.2 years).',
          'Monitor your pattern: Keep a brief record of cycle gaps, flow intensity, and any spotting between periods.',
          'Never take unprescribed hormonal drugs: Hormone therapy requires individual clinical evaluation for cardiovascular, breast, and uterine suitability.',
          'Discuss bothersome symptoms (like hot flushes or sleep disruption) with your gynaecologist for safe relief options.'
        ],
        doctorAlert: 'Important: Any sudden flooding, or ANY vaginal bleeding after 12 months without a period, requires prompt gynaecological evaluation.'
      };
    }

    if (stage === 'educator') {
      return {
        opener: 'Guidance for Educators and Caregivers 🤝',
        explanation: 'When a learner or young person asks about permanently stopping periods, it almost always signals distress: severe cramps, fear of bleeding through clothes, sensory overload, gender dysphoria, or anxiety. Medically, periods are a healthy vital sign, and permanent surgical cessation is an irreversible procedure not performed for healthy young people.',
        tips: [
          'Explore the underlying concern: Ask gently, "Are you worried about pain, heavy bleeding, or managing supplies at school?"',
          'Provide non-judgmental reassurance: Explain that modern medical care can make periods light, manageable, and pain-free without dangerous self-treatment.',
          'Encourage professional clinical support: Guide the learner and their family to a compassionate gynaecologist or adolescent health specialist.',
          'Reinforce body neutrality and dignity: Normalize cycle care supplies and safe bathroom access at home and in school.'
        ],
        doctorAlert: 'If a student or dependent is experiencing debilitating symptoms, support them in scheduling an adolescent health consultation.'
      };
    }

    // Unknown or missing stage: safest general educational response
    return {
      opener: 'Educational Overview: Menstrual Management and Biology 🌸',
      explanation: 'Menstrual cycles are a natural biological sign of reproductive health. There is a fundamental difference between medical menstrual suppression (temporarily pausing or lightening bleeds under doctor supervision) and permanent surgical cessation (which is irreversible and reserved for serious medical conditions).',
      tips: [
        'Safe suppression: Licensed doctors can prescribe approved hormonal methods (such as continuous low-dose pills or hormonal IUDs) to safely manage difficult bleeding.',
        'Never self-medicate: Attempting to stop bleeding using unprescribed pills carries serious cardiovascular and hormonal risks.',
        'Permanent surgery (like hysterectomy) is a major, irreversible procedure with permanent consequences and is never a routine solution.',
        'Speak with a qualified healthcare professional or gynaecologist to discuss safe, individual options for cycle comfort.'
      ],
      doctorAlert: 'Consult a qualified doctor or gynaecologist to discuss safe menstrual management suited to your health needs.'
    };
  }

  // 2. MEDICATION DOSAGE / OVERDOSE / EXTRA PILLS
  if (intervention === 'MEDICATION_DOSAGE_OVERDOSE') {
    const isYouth = stage === 'puberty' || stage === 'unknown';
    return {
      opener: 'Critical Medication Safety Rule: Never Change or Double Doses 🛑',
      explanation: 'Never take extra, double, or unprescribed doses of birth control pills, painkillers, or any other medication. Taking extra pills does not stop a period faster or provide extra protection; it can cause severe medical harm.',
      tips: [
        'Dangers of extra birth control pills: Taking multiple pills at once causes severe nausea, vomiting, dizziness, and increases blood clot risks.',
        'Dangers of extra painkillers: Doubling medications like paracetamol or mefenamic acid (Meftal) can cause acute liver toxicity or stomach bleeding.',
        isYouth 
          ? 'Always tell a parent, guardian, or school nurse before taking any medicine. They will make sure you take the safe, correct dose.'
          : 'Follow the exact package leaflet and physician prescription. If you missed a pill, consult the package leaflet or a pharmacist.',
        'If extra pills were already taken: Contact a doctor, hospital emergency room, or poison control helpline immediately.'
      ],
      doctorAlert: 'Medication Warning: Never exceed prescribed doses. If an accidental overdose occurred, seek urgent emergency medical advice.'
    };
  }

  // 3. STOPPING PRESCRIBED MEDICATION
  if (intervention === 'STOP_PRESCRIBED_MEDICATION') {
    return {
      opener: 'Prescription Medication Safety Guideline 🛑',
      explanation: 'You should never stop, pause, or change the dose of any prescribed medication (including hormone pills, thyroid medication, or blood pressure drugs) without consulting your prescribing healthcare provider.',
      tips: [
        'Abruptly stopping certain medications can cause rebound symptoms, sudden hormonal fluctuations, or withdrawal effects.',
        'If you are experiencing unpleasant side effects, tell your doctor: they can adjust the dosage or switch you to a better-tolerated alternative.',
        'Schedule a follow-up appointment or call your clinic before making any changes.',
        'Always take medications exactly as instructed on the pharmacy label.'
      ],
      doctorAlert: 'Medical Notice: Consult your prescribing doctor before altering or stopping prescribed medication.'
    };
  }

  // 4. PERIOD DELAY OR INDUCTION
  if (intervention === 'PERIOD_DELAY_OR_INDUCTION') {
    if (stage === 'puberty') {
      return {
        opener: 'Cycle Timing and Growing Up 🌸',
        explanation: 'In the first few years of puberty, your natural hormones are still learning their rhythm. You should not take pills or home concoctions to delay or force your period to start. Using hormone pills without a doctor can make your cycle irregular for months.',
        tips: [
          'Talk to a parent or trusted adult about the event (like a sports day, trip, or exam): they can help you pack supplies and feel confident.',
          'Pack an emergency pouch with 2–3 pads, tissues, and spare underwear so you are prepared no matter what day your period arrives.',
          'Home concoctions (like excessive raw papaya or high-dose spices) do not safely change period dates and can upset your stomach.',
          'Having your period during an exam or celebration is normal, and you can participate comfortably with proper supplies.'
        ],
        doctorAlert: 'Never take hormone-altering tablets without an examination by a qualified doctor.'
      };
    }

    return {
      opener: 'Cycle Timing and Period Delay Information 🌿',
      explanation: 'Prescription medications (such as specific progestin tablets like norethisterone) can temporarily postpone menstrual bleeding for significant events, but they are prescription-only medications requiring clinical assessment.',
      tips: [
        'Must be prescribed by a doctor: A gynaecologist must verify that you have no risk factors for blood clots, liver disease, or unexplained bleeding.',
        'Timing is critical: Delay tablets usually need to be started 3 to 4 days before your expected period; they cannot stop bleeding once it has already started.',
        'Possible side effects include bloating, breast tenderness, headache, and temporary cycle irregularity in the following month.',
        'Never take extra oral contraceptive pills or unverified remedies to delay bleeding.'
      ],
      doctorAlert: 'Visit a doctor or gynaecologist at least 1–2 weeks before your event if you wish to discuss safe prescription cycle delay.'
    };
  }

  // 5. SURGICAL INTERVENTION (Hysterectomy, Ablation)
  if (intervention === 'SURGICAL_INTERVENTION') {
    return {
      opener: 'Medical Overview: Reproductive Surgical Procedures',
      explanation: 'Surgeries involving the uterus or ovaries (such as hysterectomy or endometrial ablation) are major, irreversible surgical procedures performed only for serious, diagnosed gynecological conditions (e.g. cancer, intractable hemorrhage, or severe refractory fibroids).',
      tips: [
        'They are never routine or first-line solutions for ordinary period discomfort.',
        'Procedures permanently affect fertility, and removal of ovaries triggers surgical menopause.',
        'A comprehensive evaluation, including pelvic imaging, biopsy, and trial of conservative medical therapies, is standard clinical practice before considering surgery.',
        'Consult with a specialist gynaecological surgeon to discuss clinical indications and conservative treatment pathways.'
      ],
      doctorAlert: 'Major gynecological surgery requires comprehensive specialist consultation and individual diagnostic evaluation.'
    };
  }

  // 6. HORMONE THERAPY (HRT / MHT)
  return {
    opener: 'Medical Overview: Menopausal Hormone Therapy (MHT / HRT)',
    explanation: 'Hormone therapy involves prescribing estrogen and progesterone to relieve significant perimenopausal and menopausal symptoms. Because hormones act throughout the body, treatment must be medically prescribed and monitored.',
    tips: [
      'Personalized risk-benefit profile: Suitability depends on age, time since menopause, cardiovascular health, and personal or family breast history.',
      'Never self-prescribe or purchase hormones online: Improper hormone use without a balancing progestin can cause abnormal uterine lining growth.',
      'Consult a gynaecologist for a pre-treatment baseline checkup, including blood pressure, lipid profile, and mammogram.',
      'Non-hormonal evidence-based treatments and lifestyle adjustments are also widely available.'
    ],
    doctorAlert: 'Hormone therapy requires physician prescription, clinical risk assessment, and periodic monitoring.'
  };
}

/**
 * Builds dedicated guardrail answers for sensitive health topics.
 */
export function buildSensitiveTopicResponse(
  topic: SensitiveHealthTopicType,
  stage: NormalizedStage
): StructuredAnswer {
  // 1. PREGNANCY INQUIRIES
  if (topic === 'PREGNANCY_INQUIRY') {
    const isYouth = stage === 'puberty';
    return {
      opener: 'Educational Information on Pregnancy and Cycle Timing 🌸',
      explanation: 'No digital platform or questionnaire can determine whether someone is pregnant. The only reliable ways to know are a validated home urine pregnancy test or a clinical blood hCG test administered by a healthcare provider.',
      tips: [
        'Timing of tests: Home urine pregnancy tests are most accurate when taken using first morning urine on or after the first day of an expected, missed period.',
        'Cycle biology: Conception requires an egg (ovulation) and sperm. While pregnancy during bleeding is less common, it can happen if cycles are short or irregular.',
        isYouth
          ? 'If you are worried about pregnancy or something that happened, please talk to a parent, school counselor, or doctor right away. They can help you access safe, private medical care.'
          : 'If your period is more than a week late and you are sexually active, taking a home test or visiting a clinic is the recommended next step.',
        'A healthcare professional can discuss safe contraception, emergency contraception timelines, and reproductive wellness in complete confidentiality.'
      ],
      doctorAlert: 'A licensed healthcare professional or clinic can provide confidential pregnancy testing and guidance.'
    };
  }

  // 2. INFECTION, BURNING URINATION, ITCHING, UNUSUAL DISCHARGE
  if (topic === 'INFECTION_BURNING_ITCHING') {
    return {
      opener: 'Educational Overview: Intimate Discomfort and Infections',
      explanation: 'While natural vaginal discharge is normal and varies across your cycle, symptoms like burning when urinating, strong fishy odors, thick clumpy discharge, or intense vulvar itching indicate a condition that needs clinical evaluation rather than self-treatment.',
      tips: [
        'Common possible causes: Urinary Tract Infections (UTIs), yeast infections (thrush), or bacterial vaginosis (BV). We cannot diagnose which condition you have.',
        'Do not take leftover antibiotics or over-the-counter creams without a doctor: using the wrong medication can make infections worse.',
        'Drink plenty of plain water to help flush the urinary tract, and avoid perfumed washes, tight synthetic underwear, or douching.',
        'Visit a doctor or clinic: a simple urine test or swab takes only a few minutes and ensures you get the exact right treatment.'
      ],
      doctorAlert: 'Clinical Evaluation Needed: Burning urination, severe itching, or foul-smelling discharge should be evaluated by a healthcare professional.'
    };
  }

  // 3. CONDITION DIAGNOSIS REQUESTS (PCOS, ENDOMETRIOSIS)
  if (topic === 'CONDITION_DIAGNOSIS_REQUEST') {
    return {
      opener: 'Understanding Irregular Cycles and Conditions Like PCOS 🌿',
      explanation: 'We cannot diagnose PCOS, endometriosis, or any reproductive condition. Irregular cycles can stem from many everyday causes—such as adolescent hormone calibration (normal in the first 2–3 years), high stress, weight changes, or thyroid imbalances—as well as clinical conditions.',
      tips: [
        'PCOS criteria: Medically diagnosing PCOS requires clinical assessment of at least two factors: irregular ovulation, elevated androgens (e.g. excess facial hair, severe acne), and polycystic ovaries on ultrasound.',
        'Endometriosis signs: Suspected when period pain is severe, progressively worsening, or accompanied by deep pelvic pain during bowel movements or intimacy.',
        'Keep a symptom log: Record your bleeding dates, pain levels, and any skin or hair changes to show your doctor.',
        'Schedule a clinical consultation: A gynaecologist can run appropriate blood tests and pelvic ultrasound imaging to give you an accurate diagnosis.'
      ],
      doctorAlert: 'Diagnostic Notice: A formal diagnosis of PCOS or endometriosis requires evaluation by a gynaecologist.'
    };
  }

  // 4. BODY IMAGE & DISORDERED EATING
  if (topic === 'BODY_IMAGE_DISORDERED_EATING') {
    return {
      opener: 'Nourishment, Body Diversity, and Cycle Health 🌿',
      explanation: 'Never starve yourself, skip meals, or engage in extreme dieting to regulate your periods. Severe calorie restriction and rapid weight loss deprive your brain (hypothalamus) of essential energy, which actually causes menstrual periods to stop entirely (hypothalamic amenorrhea).',
      tips: [
        'Bodies come in diverse, natural shapes and sizes. Period health is supported by balanced nourishment, adequate iron, and stable energy—not extreme thinness.',
        'Eat regular, wholesome meals containing proteins, whole grains, vegetables, and healthy fats that support hormone production.',
        'Weight loss is never a universal cure for cycle irregularities; underlying hormonal balances must be assessed by a physician.',
        'If you find yourself struggling with body anxiety, restricting food, or feeling guilty after eating, please speak with a doctor, counselor, or nutritionist for caring support.'
      ],
      doctorAlert: 'Supportive Care: If you are experiencing food distress or severe weight loss, please consult a healthcare professional.'
    };
  }

  // 5. EMOTIONAL BODY SHAME
  if (topic === 'EMOTIONAL_BODY_SHAME') {
    return {
      opener: 'You are never alone, and your body is completely normal, clean, and worthy of care 🌸',
      explanation: 'It is completely understandable if you feel overwhelmed, self-conscious, or down about your body right now. Many young girls and women go through moments of feeling uncomfortable or frustrated with physical changes.\n\nMenstrual blood is not dirty, impure, or full of toxins—it is simply clean blood and a natural tissue lining that your body prepared. There is zero reason to feel ashamed, dirty, or embarrassed about a healthy biological process that billions of people experience.',
      tips: [
        'Your body is doing natural, healthy work: Every person grows at their own pace, and having a period is a sign of your body\'s strength and vitality, never a flaw.',
        'Stay fresh and comfortable: A warm shower, changing your pad regularly (every 4–6 hours), and wearing loose cotton clothes can help you feel refreshed and relaxed.',
        'Speak to someone who cares: Sharing how you feel with an older sister, mom, teacher, or counselor often shows you that almost everyone has had these exact same feelings.',
        'What is making you feel the most down or uncomfortable right now? Is it changes in your body, worrying about what others think, or feeling uncomfortable in your clothes? Let\'s talk through it together 💖'
      ]
    };
  }

  // 6. VULNERABLE PERIOD FRUSTRATION & EMOTIONAL DISCOMFORT
  return {
    opener: 'Feeling frustrated or uncomfortable with periods is completely natural and widely experienced 🌸',
    explanation: 'Having to bleed every month, manage pads, and deal with cramps or fatigue can feel exhausting. You are not alone—almost everyone who menstruates feels annoyed or overwhelmed by it at times.\n\nInside your body, hormones prepare a soft cushion of blood and tissue each month, and when there is no pregnancy, it clears this lining away to keep your reproductive system healthy and fresh.\n\nWhile it feels messy and inconvenient on the outside, gentle self-care and warmth can make a huge difference in your day.',
    tips: [
      'Wear your softest, coziest clothes: Pick loose track pants, soft cotton underwear, and pads that feel gentle against your skin.',
      'Soothe the ache with gentle warmth: A warm water bottle (garam paani ki thaili) or heating pad across your lower tummy relaxes muscles and melts away the tension.',
      'Give yourself permission to slow down: You don\'t have to be at 100% energy right now. Resting, reading, listening to music, or taking a nap is healthy self-care.',
      'Enjoy a soothing comfort treat: A warm cup of herbal tea, turmeric milk with jaggery, or a piece of dark chocolate can feel so comforting.',
      'If you have severe pain or heavy bleeding, talking with a parent, trusted adult, or doctor is always a safe next step.'
    ]
  };
}

/**
 * Builds an age-adapted, safe fallback answer when no Q&A entry safely reaches the confidence threshold.
 */
export function buildSafeFallback(stage: NormalizedStage, userQuery?: string): StructuredAnswer {
  // Check if user specifically mentioned severe physical warning signs in fallback query
  const cleanQ = userQuery ? sanitizeQuery(userQuery) : '';
  const mentionsPhysicalAlarm = cleanQ.includes('faint') || cleanQ.includes('vomit') || cleanQ.includes('unbearable') || cleanQ.includes('soak');

  if (stage === 'puberty') {
    return {
      opener: "I'm not sure I understood that. Could you tell me a bit more? 🌸",
      explanation: 'I want to make sure I give you reliable, clear guidance. Every body develops on its own timeline, and no question about your body is silly or awkward.',
      tips: [
        'Could you try asking with simpler words? For example: "Why do periods happen?", "Is period pain normal?", or "How do I use a pad?".',
        'If something is hurting or making you feel worried, speaking with a parent, school nurse, or doctor is always a safe choice.',
        'Explore our Young Bloomers guides for step-by-step checklists and reassuring facts about growing up.',
        'What would you like to know more about? You can ask about pads, cramps, mood changes, or what to expect!'
      ],
      ...(mentionsPhysicalAlarm ? { doctorAlert: 'If you have severe pain, heavy bleeding, or feel unwell, please speak with a trusted adult or doctor.' } : {})
    };
  }

  if (stage === 'menopause') {
    return {
      opener: 'Navigating Menopausal Health with Accurate Information 🌾',
      explanation: 'Menopausal journeys involve diverse hormonal, physical, and emotional transitions. Because individual health backgrounds differ significantly, we provide only verified educational guidance rather than guessing.',
      tips: [
        'Try searching for specific symptoms: e.g. "What are hot flushes?", "Can periods skip months in your 40s?", or "How does sleep change?".',
        'Review our Perimenopause & Menopause guides for evidence-informed milestones and health check roadmaps.',
        'Keep a brief symptom diary of dates, sleep, and cycle changes to discuss with your healthcare provider.',
        'Consult your gynaecologist for personalized advice regarding hormones, bone health, or unusual bleeding.'
      ],
      ...(mentionsPhysicalAlarm ? { doctorAlert: 'Any unexpected heavy bleeding, or bleeding after 12 months without a period, requires prompt clinical evaluation.' } : {})
    };
  }

  if (stage === 'educator') {
    return {
      opener: 'Educator and Caregiver Guidance 🤝',
      explanation: 'Guiding learners, students, or family members requires medically accurate, age-appropriate language. While we didn\'t find an exact pre-approved match for this specific phrasing, we can direct you to our verified educational toolkits.',
      tips: [
        'Explore our Educator Care Guides for scripted conversations by age tier (8–10, 11–13, 14–17).',
        'Check out our 30-minute classroom session planners and WASH bathroom setup checklists.',
        'Try asking: "How do I explain periods to a 12-year-old?", "What Indian foods help with cramps?", or "What are the rules of personal boundaries?".',
        'For individual medical concerns or severe student distress, refer to a qualified paediatrician or adolescent health specialist.'
      ]
    };
  }

  // Cycle care & general / unknown fallback
  return {
    opener: 'Reliable Educational Information 🌸',
    explanation: 'Menstrual cycles and reproductive wellness are deeply individual. To protect your safety, SheBloom only shares verified clinical educational content and will never guess or fabricate medical advice.',
    tips: [
      'Could you rephrase your question? Try asking about: "normal cycle length", "cramp relief", "hygiene rules", or "menstrual cups".',
      'Visit our Learning Hub to browse reviewed articles on cycle phases, nutrition, and wellness.',
      'Track your symptoms on a calendar: noting Day 1, flow levels, and cramp intensity provides clarity.',
      'Consult a qualified doctor or gynaecologist for diagnosis, medical treatment, or sudden changes in your body.'
    ],
    ...(mentionsPhysicalAlarm ? { doctorAlert: 'If you are experiencing severe pain, rapid heavy bleeding, or feel faint, please consult a healthcare professional promptly.' } : {})
  };
}

/**
 * Main Central Medical Safety Evaluation Layer
 * Runs BEFORE any answer is selected or returned.
 */
export function checkSafety(query: string, rawStage?: string | null): SafetyCheckResult {
  const { stage: normalizedStage, explicitYoungAge } = normalizeStage(rawStage, query);

  // 1. Check Crisis & Abuse First (Highest Priority)
  if (detectCrisis(query)) {
    const overrideAnswer = buildUrgentResponse('CRISIS_SELF_HARM', normalizedStage);
    return {
      isCrisis: true,
      isRedFlag: true,
      isMedicalIntervention: false,
      isSensitiveTopic: false,
      urgentType: 'CRISIS_SELF_HARM',
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps: ['How do I talk to my family?', 'What are healthy coping strategies?'],
      sourceArticleId: 'warning-signs-doctor',
      doctorRecommendation: overrideAnswer.doctorAlert
    };
  }

  if (detectAbuseOrSafetyThreat(query)) {
    const overrideAnswer = buildUrgentResponse('ABUSE_COERCION_DISCLOSURE', normalizedStage);
    return {
      isCrisis: false,
      isRedFlag: true,
      isMedicalIntervention: false,
      isSensitiveTopic: false,
      urgentType: 'ABUSE_COERCION_DISCLOSURE',
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps: ['What questions should I ask my doctor?', 'When is period pain an emergency?'],
      sourceArticleId: 'warning-signs-doctor',
      doctorRecommendation: overrideAnswer.doctorAlert
    };
  }

  // 2. Weird, Incoherent, or Non-Human Query Guardrail
  // For weird queries containing red flag or symptom words, DO NOT give unrelated or unuseful answers.
  // Simply and honestly admit you cannot understand.
  if (isWeirdOrUnrelatedQuery(query)) {
    const overrideAnswer = buildWeirdQuestionFallback();
    return {
      isCrisis: false,
      isRedFlag: false,
      isMedicalIntervention: false,
      isSensitiveTopic: false,
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps: [
        'How do I know if my period is too heavy?',
        'Is period pain normal?',
        'What is a normal cycle length?'
      ],
      isFallback: true,
      isWeirdOrUnrelated: true
    };
  }

  // 3. Check Urgent Symptoms / Red Flags (with stage-aware questions, guidance, and doctor advice)
  const urgentType = detectUrgentSymptoms(query);
  if (urgentType) {
    const isCrisis = urgentType === 'CRISIS_SELF_HARM';
    const overrideAnswer = buildUrgentResponse(urgentType, normalizedStage);
    return {
      isCrisis,
      isRedFlag: true,
      isMedicalIntervention: false,
      isSensitiveTopic: false,
      urgentType,
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps: [
        'What questions should I ask my doctor?',
        'When is period pain an emergency?',
        'How much bleeding is too much?'
      ],
      sourceArticleId: 'warning-signs-doctor',
      doctorRecommendation: overrideAnswer.doctorAlert
    };
  }

  // 2. Check Sensitive Medical Intervention Intents
  const interventionType = detectMedicalIntervention(query);
  if (interventionType) {
    const overrideAnswer = buildInterventionResponse(interventionType, normalizedStage);
    return {
      isCrisis: false,
      isRedFlag: false,
      isMedicalIntervention: true,
      isSensitiveTopic: false,
      interventionType,
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps: [
        'Is period pain normal?',
        'What is a normal cycle length?',
        'What questions should I ask my doctor?'
      ],
      sourceArticleId: interventionType === 'PERIOD_DELAY_OR_INDUCTION' || interventionType === 'MEDICATION_DOSAGE_OVERDOSE'
        ? 'contraception-and-pills'
        : 'what-is-a-period',
      doctorRecommendation: overrideAnswer.doctorAlert
    };
  }

  // 3. Check Sensitive Non-Diagnostic Health Topics
  const sensitiveTopicType = detectSensitiveHealthTopic(query);
  if (sensitiveTopicType) {
    const overrideAnswer = buildSensitiveTopicResponse(sensitiveTopicType, normalizedStage);
    const followUps = sensitiveTopicType === 'VULNERABLE_PERIOD_FRUSTRATION'
      ? [
          'How can I make cramps less painful?',
          'Tips for managing periods at school',
          'Why do I feel so tired during my period?',
          'What comfort foods help during periods?'
        ]
      : sensitiveTopicType === 'EMOTIONAL_BODY_SHAME'
      ? [
          'Is period blood dirty or bad?',
          'How do I talk to my mom or sister about my period?',
          'How do I feel more confident during my period?'
        ]
      : sensitiveTopicType === 'PREGNANCY_INQUIRY'
      ? [
          'What are early signs of pregnancy?',
          'When can a pregnancy test show accurate results?',
          'Can you get pregnant on your period?'
        ]
      : [
          'What are early signs of pregnancy?',
          'Is period pain normal?',
          'When should I see a doctor for irregular periods?'
        ];

    const sourceArticleId = sensitiveTopicType === 'PREGNANCY_INQUIRY'
      ? 'pregnancy-and-ovulation'
      : sensitiveTopicType === 'INFECTION_BURNING_ITCHING'
      ? 'hygiene-dos-donts'
      : sensitiveTopicType === 'VULNERABLE_PERIOD_FRUSTRATION' || sensitiveTopicType === 'EMOTIONAL_BODY_SHAME'
      ? 'what-is-a-period'
      : 'warning-signs-doctor';

    return {
      isCrisis: false,
      isRedFlag: false,
      isMedicalIntervention: false,
      isSensitiveTopic: true,
      sensitiveTopicType,
      normalizedStage,
      explicitYoungAgeDetected: explicitYoungAge,
      overrideAnswer,
      followUps,
      sourceArticleId,
      doctorRecommendation: overrideAnswer.doctorAlert
    };
  }

  return {
    isCrisis: false,
    isRedFlag: false,
    isMedicalIntervention: false,
    isSensitiveTopic: false,
    normalizedStage,
    explicitYoungAgeDetected: explicitYoungAge
  };
}
