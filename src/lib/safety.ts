// SheBlooms Central Medical Safety & Guardrails Layer
// Privacy-first, local, deterministic health safety governance across life stages.

export type NormalizedStage = 'puberty' | 'cycle' | 'menopause' | 'educator' | 'unknown';

export type UrgentSymptomType = 
  | 'HEAVY_BLEEDING_FAINTING'
  | 'SEVERE_PELVIC_PAIN'
  | 'FEVER_TAMPON_TSS'
  | 'POSTMENOPAUSAL_BLEEDING'
  | 'PREGNANCY_BLEEDING'
  | 'CRISIS_SELF_HARM';

export type MedicalInterventionType = 
  | 'PERMANENT_PERIOD_STOPPAGE'
  | 'MEDICATION_DOSAGE_OVERDOSE'
  | 'PERIOD_DELAY_OR_INDUCTION'
  | 'SURGICAL_INTERVENTION'
  | 'HORMONE_THERAPY_REQUEST'
  | 'CONTRACEPTION_INSTRUCTION_YOUTH';

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
  urgentType?: UrgentSymptomType;
  interventionType?: MedicalInterventionType;
  normalizedStage: NormalizedStage;
  overrideAnswer?: StructuredAnswer;
  followUps?: string[];
  sourceArticleId?: string;
  doctorRecommendation?: string;
  message?: string;
}

/**
 * Normalizes user-selected life stage into one of the 4 strict categories or 'unknown'.
 * The selected life stage is contextual information, NOT proof of exact age.
 */
export function normalizeStage(stage?: string | null): NormalizedStage {
  if (!stage) return 'unknown';
  const s = stage.trim().toLowerCase();
  if (['puberty', 'bloomer', 'young-bloomers', 'young bloomers', 'teens', 'teen', 'adolescent'].includes(s)) {
    return 'puberty';
  }
  if (['cycle', 'adult', 'period-care', 'cycle-care', 'reproductive'].includes(s)) {
    return 'cycle';
  }
  if (['menopause', 'perimenopause', 'postmenopause', 'midlife'].includes(s)) {
    return 'menopause';
  }
  if (['educator', 'caregiver', 'parent', 'teacher', 'mentor', 'counselor'].includes(s)) {
    return 'educator';
  }
  return 'unknown';
}

/**
 * Pre-cleans text for robust typo-tolerant pattern matching.
 */
export function sanitizeQuery(text: string): string {
  let cleaned = text.toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Normalize character repeats (e.g. "dizzzzy" -> "dizzy", "bleeeed" -> "bleed")
  cleaned = cleaned.replace(/([a-z])\1{2,}/g, '$1$1');

  // Normalize common phonetic typos and Indian colloquial terms
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
 * Red Flag / Urgent Symptom Detection
 * Detects severe, dangerous, or emergency presentations resiliently.
 */
export function detectUrgentSymptoms(query: string): UrgentSymptomType | null {
  const q = sanitizeQuery(query);

  // 1. Crisis takes absolute first priority
  if (detectCrisis(query)) {
    return 'CRISIS_SELF_HARM';
  }

  // 2. Toxic Shock Syndrome / Tampon fever
  const hasTampon = q.includes('tampon') || q.includes('cup');
  const hasTssSymptom = q.includes('fever') || q.includes('vomit') || q.includes('rash') || q.includes('shiver') || q.includes('toxic shock') || q.includes('chills');
  if (hasTampon && hasTssSymptom) {
    return 'FEVER_TAMPON_TSS';
  }

  // 3. Post-menopausal bleeding
  const isPostMeno = q.includes('after menopause') || q.includes('postmenopause') || q.includes('post menopausal') || q.includes('stopped 1 year') || q.includes('stopped a year') || q.includes('12 months no period') || q.includes('menopause for a year');
  const hasBleeding = q.includes('bleed') || q.includes('blood') || q.includes('spotting') || q.includes('period returned');
  if (isPostMeno && hasBleeding) {
    return 'POSTMENOPAUSAL_BLEEDING';
  }

  // 4. Pregnancy with bleeding / severe pain
  const isPreg = q.includes('pregnant') || q.includes('pregnancy');
  const pregRisk = q.includes('bleed') || q.includes('blood') || q.includes('severe pain') || q.includes('miscarriage') || q.includes('cramping severely');
  if (isPreg && pregRisk) {
    return 'PREGNANCY_BLEEDING';
  }

  // 5. Heavy Bleeding combined with Fainting / Dizziness
  const hasHeavyFlow = (
    q.includes('bleeding heavily') || 
    q.includes('heavy bleeding') || 
    q.includes('bleeding very heavy') ||
    q.includes('period is very heavy') ||
    q.includes('bleed so much') || 
    q.includes('bleeding so much') || 
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

  // Standalone rapid soak rate or fainting from period
  if (
    q.includes('soaking a pad every hour') ||
    q.includes('soaking pad every hour') ||
    q.includes('soaking pads very quickly') ||
    q.includes('soak pad hourly') ||
    q.includes('soak a pad hourly') ||
    q.includes('bleed non stop') ||
    (q.includes('passed out') && (q.includes('period') || q.includes('cramp') || q.includes('bleed'))) ||
    (q.includes('fainted') && (q.includes('period') || q.includes('cramp') || q.includes('bleed')))
  ) {
    return 'HEAVY_BLEEDING_FAINTING';
  }

  // 6. Severe or sudden abdominal / pelvic pain
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

  // Direct phrasing checks for permanent stoppage
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

  // 2. Medication dosage alterations, doubling dose, or overdose
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
    (hasDoseAction && hasMed && (q.includes('take') || q.includes('swallow') || q.includes('drink') || q.includes('have')))
  ) {
    return 'MEDICATION_DOSAGE_OVERDOSE';
  }

  // 3. Period delay or artificial induction
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
    q.includes('make period come early')
  ) {
    return 'PERIOD_DELAY_OR_INDUCTION';
  }

  // 4. Surgical interventions (Hysterectomy, Ablation)
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

  // 5. Hormone therapy self-administration
  if (
    q.includes('hrt') ||
    q.includes('hormone replacement therapy') ||
    q.includes('take estrogen pills') ||
    q.includes('prescribe estrogen') ||
    q.includes('self prescribe')
  ) {
    return 'HORMONE_THERAPY_REQUEST';
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
      opener: 'Dear bloom, please take a gentle, deep breath 🌸',
      explanation: 'You are deeply valued, and whatever pain or distress you are carrying right now, you do not have to carry it alone. Caring support is available immediately.',
      tips: [
        'Speak right now with a parent, trusted family member, teacher, or doctor.',
        'Call a free, confidential 24/7 helpline: In India, call 14416 (Tele-MANAS) or 1098 (Childline); in the US call/text 988; in the UK call 111.',
        'If you are in immediate physical danger, please call your local emergency medical service right away.',
        'Your health, feelings, and life truly matter.'
      ],
      doctorAlert: 'Crisis Support: Please reach out for caring, professional help immediately.'
    };
  }

  // Heavy bleeding with fainting / dizziness
  if (urgentType === 'HEAVY_BLEEDING_FAINTING') {
    if (stage === 'puberty') {
      return {
        opener: '⚠️ Important Safety Notice: Please tell a trusted adult right now.',
        explanation: 'Feeling dizzy, faint, or unusually weak while bleeding heavily means your body is losing fluids and iron too quickly. This is not something you should try to manage alone in your room or at school.',
        tips: [
          'Tell a parent, guardian, school nurse, or teacher immediately: "I am bleeding very heavily and feeling dizzy, and I need a doctor."',
          'Lie down flat with your legs elevated on a pillow to help blood flow to your brain and avoid fainting.',
          'Drink water or an electrolyte drink (like ORS, nimbu pani, or coconut water) in small sips.',
          'Do NOT take extra pain pills on your own. A doctor needs to check your blood count and give you safe medicine.'
        ],
        doctorAlert: '⚠️ Medical Priority: Seek prompt medical attention today at a nearby clinic or hospital.'
      };
    }

    return {
      opener: '⚠️ Urgent Clinical Guidance: Medical Evaluation Needed',
      explanation: 'Soaking through pads or tampons rapidly combined with dizziness, fainting, or severe weakness suggests significant acute blood volume loss and possible anemia. This requires prompt clinical evaluation.',
      tips: [
        'Go to your nearest urgent care centre, primary health centre (PHC), or emergency department today.',
        'Lie down with your legs raised above heart level to prevent passing out and maintain blood pressure.',
        'Keep track of pad count (e.g. soaking 1+ pad per hour for 2 consecutive hours) and clot size to report to the doctor.',
        'Have someone accompany you to the clinic so you do not drive or travel alone while feeling faint.'
      ],
      doctorAlert: '⚠️ Clinical Red Flag: Rapid blood loss with dizziness or fainting requires prompt physician assessment.'
    };
  }

  // Severe pelvic pain / vomiting
  if (urgentType === 'SEVERE_PELVIC_PAIN') {
    if (stage === 'puberty') {
      return {
        opener: '⚠️ We hear you, and intense pain should never be suffered in silence.',
        explanation: 'Mild cramps are common, but severe, unbearable pain that makes you vomit, cry, or unable to stand is NOT normal and is your body telling you it needs medical care.',
        tips: [
          'Tell a parent, school nurse, or trusted adult right away so they can take you to a doctor.',
          'Do NOT take extra or unprescribed pain tablets without adult or medical guidance.',
          'Lie down with your knees curled to your chest or place a warm water bag on your lower tummy while you get ready to see a doctor.',
          'Doctors have safe, gentle medications that relieve severe cramps quickly.'
        ],
        doctorAlert: '⚠️ Medical Care Needed: Severe debilitating pain requires evaluation by a doctor or paediatrician.'
      };
    }

    return {
      opener: '⚠️ Severe Pelvic Pain Notice: Clinical Assessment Recommended',
      explanation: 'Sudden, severe, or agonizing pelvic pain—especially accompanied by vomiting, fever, or inability to perform daily tasks—can indicate conditions such as ovarian torsion, ruptured cyst, severe endometriosis, or pelvic infection.',
      tips: [
        'Seek urgent medical care if pain is sudden, sharply escalating, or accompanied by vomiting or fever.',
        'Avoid taking excessive doses of over-the-counter painkillers, as this can irritate the stomach or mask critical diagnostic signs.',
        'Rest in a comfortable position and apply moderate heat to the lower abdomen while arranging care.',
        'Consult a gynaecologist for a thorough pelvic ultrasound and pain management plan.'
      ],
      doctorAlert: '⚠️ Seek Prompt Medical Care: Severe agonizing pain requires clinical examination.'
    };
  }

  // Toxic Shock Syndrome / Tampon fever
  if (urgentType === 'FEVER_TAMPON_TSS') {
    return {
      opener: '🚨 Urgent Warning: Possible Toxic Shock Syndrome (TSS)',
      explanation: 'Developing a sudden high fever, vomiting, diarrhea, dizziness, or a sunburn-like rash while using a tampon or menstrual cup is a potential medical emergency.',
      tips: [
        'Remove your tampon or menstrual cup IMMEDIATELY and switch to a pad.',
        'Seek emergency medical care right away at the nearest hospital or emergency room.',
        'Tell the medical staff immediately: "I was using a tampon/cup and developed a sudden fever and symptoms."',
        'Do NOT wait to see if symptoms improve on their own.'
      ],
      doctorAlert: '🚨 EMERGENCY: Remove tampon/cup immediately and go to the nearest emergency clinic.'
    };
  }

  // Post-menopausal bleeding
  if (urgentType === 'POSTMENOPAUSAL_BLEEDING') {
    return {
      opener: '⚠️ Important Health Guideline: Post-Menopausal Bleeding',
      explanation: 'Any vaginal bleeding, spotting, or pinkish discharge that occurs after 12 full continuous months without a period is medically considered post-menopausal bleeding. While frequently caused by benign conditions like vaginal atrophy or polyps, it must always be clinically checked to rule out endometrial abnormalities.',
      tips: [
        'Schedule an appointment with a gynaecologist promptly for an ultrasound and evaluation.',
        'Do NOT assume it is "just a period returning" or an accidental cycle.',
        'Note the date, duration, color, and whether bleeding followed intimacy or occurred spontaneously.',
        'Never take herbal or hormonal remedies to stop or manage the bleeding without an examination.'
      ],
      doctorAlert: '⚠️ Gynaecological Priority: Any bleeding after 12 months without periods requires clinical assessment.'
    };
  }

  // Pregnancy with bleeding
  return {
    opener: '⚠️ Urgent Pregnancy Notice: Medical Check Needed',
    explanation: 'Any bleeding or severe cramping during pregnancy warrants immediate medical evaluation by your obstetrician or nearest maternity emergency ward.',
    tips: [
      'Contact your obstetrician, midwife, or local hospital maternity unit right now.',
      'Rest comfortably and avoid using tampons or inserting anything into the vagina.',
      'Wear a clean pad to monitor the color, amount, and consistency of the bleeding.',
      'Seek emergency hospital care immediately if bleeding is heavy or accompanied by severe pain, chills, or fainting.'
    ],
    doctorAlert: '⚠️ Immediate Clinical Attention: Pregnancy with bleeding requires urgent obstetric assessment.'
  };
}

/**
 * Builds dedicated stage-tailored responses for sensitive medical intervention questions.
 * Strictly prevents irresponsible drug dosage instructions, surgical promotion, or youth hormonal manipulation.
 */
export function buildInterventionResponse(
  intervention: MedicalInterventionType,
  stage: NormalizedStage
): StructuredAnswer {
  // 1. PERMANENT PERIOD STOPPAGE
  if (intervention === 'PERMANENT_PERIOD_STOPPAGE') {
    if (stage === 'puberty') {
      return {
        opener: 'Hello bloom, please take a gentle breath. We hear you, and your feelings are completely valid 🌸',
        explanation: 'Periods can feel overwhelming, messy, or worrying when you are growing up, but having a period is a normal, healthy part of puberty and reproductive development. There is no safe, healthy way to turn off periods permanently on your own, and irreversible surgical procedures are not done for healthy growing bodies.',
        tips: [
          'Are your periods causing severe pain, heavy leaks, or fear? Those specific issues can be treated and made much easier with a doctor’s help.',
          'Talk openly with a parent, school nurse, older sister, or doctor you trust. You never have to handle distressing feelings alone.',
          'Doctors have safe, gentle treatments (like heating pads, iron support, and mild medications) to make periods comfortable and predictable.',
          'Always remember: growing up happens at your own pace, and your body is doing natural, healthy work.'
        ],
        doctorAlert: 'If your period is causing you intense pain, distress, or worry, please talk to a parent or doctor today so they can help you feel better.',
      };
    }

    if (stage === 'cycle') {
      return {
        opener: 'Thank you for asking. It is helpful to understand the difference between temporary cycle management and permanent changes 🌿',
        explanation: 'There is a major medical difference between menstrual suppression (temporarily lightening or pausing bleeding under medical supervision) and permanent cessation (which naturally happens at menopause or through major surgical procedures like a hysterectomy). Permanent surgical options are major, irreversible operations reserved for serious clinical conditions (such as severe fibroids or cancer), not routine convenience.',
        tips: [
          'Menstrual suppression options: Gynaecologists can safely prescribe continuous hormonal methods (like low-dose pills, hormonal IUDs, or injections) to reduce or skip bleeds.',
          'Clinical assessment is essential: Every hormonal option has unique contraindications, side effects, and benefits that require individual medical history review.',
          'Never self-medicate: Altering pill schedules or attempting unverified methods without physician oversight can trigger unpredictable breakthrough bleeding and health risks.',
          'Discuss your goals openly with a gynaecologist: they can design a safe, reversible management plan suited to your lifestyle.'
        ],
        doctorAlert: 'Consult a qualified gynaecologist to discuss safe, evidence-based cycle management tailored to your health history.'
      };
    }

    if (stage === 'menopause') {
      return {
        opener: 'Warm greetings. Menstrual changes are a natural part of this life transition 🌾',
        explanation: 'During perimenopause, periods naturally become irregular, lighter or heavier, and eventually cease permanently on their own as ovarian hormone production declines. Full menopause is medically confirmed only after 12 consecutive months with zero bleeding. We cannot assume every irregular or missed period is normal menopause without considering your full health picture.',
        tips: [
          'Natural timeline: In India, natural menopause typically occurs between ages 45 and 50 (median ~46.2 years).',
          'Monitor your pattern: Keep a brief record of cycle gaps, flow intensity, and any spotting between periods.',
          'Never take unprescribed hormonal drugs: Hormone therapy requires individual clinical evaluation for cardiovascular, breast, and uterine suitability.',
          'Discuss bothersome symptoms (like hot flushes or sleep disruption) with your gynaecologist for safe relief options.'
        ],
        doctorAlert: '⚠️ Important: Any sudden flooding, or ANY vaginal bleeding after 12 months without a period, requires prompt gynaecological evaluation.'
      };
    }

    if (stage === 'educator') {
      return {
        opener: 'Thank you for supporting others with thoughtful, health-literate guidance 🤝',
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
      opener: 'Thank you for asking this important health question 🌸',
      explanation: 'Menstrual cycles are a natural biological sign of reproductive health. There is a fundamental difference between medical menstrual suppression (temporarily pausing or lightening bleeds under doctor supervision) and permanent surgical cessation (which is irreversible and reserved for serious medical conditions).',
      tips: [
        'Safe suppression: Licensed doctors can prescribe approved hormonal methods (such as continuous low-dose pills or hormonal IUDs) to safely manage difficult bleeding.',
        'Never self-medicate: Attempting to stop bleeding using unprescribed pills or high doses carries serious cardiovascular and hormonal risks.',
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
      opener: '🛑 Critical Medication Safety Rule: Never Change or Double Doses',
      explanation: 'Never take extra, double, or unprescribed doses of birth control pills, painkillers, or any other medication. Taking extra pills does NOT stop a period faster or provide extra protection—it can cause severe medical harm.',
      tips: [
        'Dangers of extra birth control pills: Taking multiple pills at once causes severe nausea, vomiting, dangerous blood pressure spikes, and increases blood clot risks.',
        'Dangers of extra painkillers: Doubling medications like paracetamol or mefenamic acid (Meftal) can cause acute liver toxicity or severe stomach bleeding.',
        isYouth 
          ? 'Always tell a parent, guardian, or school nurse before taking any medicine. They will make sure you take the exact safe dose.'
          : 'Follow the exact package leaflet and physician prescription. If you missed a pill, consult the leaflet or your pharmacist for the exact single-pill protocol.',
        'If extra pills were already taken: Contact a doctor, hospital emergency room, or poison control helpline immediately.'
      ],
      doctorAlert: '🛑 Medication Warning: Never exceed prescribed doses. If an accidental overdose occurred, seek urgent emergency medical advice.'
    };
  }

  // 3. PERIOD DELAY OR INDUCTION
  if (intervention === 'PERIOD_DELAY_OR_INDUCTION') {
    if (stage === 'puberty') {
      return {
        opener: 'Hello bloom! It is very natural to wonder about timing when special events come up 🌸',
        explanation: 'In the first few years of puberty, your natural hormones are still learning their rhythm. You should NOT take pills or remedies to delay or force your period to start. Using hormone pills without a doctor can make your cycle irregular for months.',
        tips: [
          'Talk to a parent or trusted adult about the event (like a sports day, trip, or exam): they can help you pack supplies and feel confident.',
          'Pack an emergency pouch with 2–3 pads, tissues, and spare underwear so you are prepared no matter what day your period arrives.',
          'Home remedies (like raw papaya, excessive jaggery, or spices) do NOT safely change period dates and can upset your stomach.',
          'Remember: having your period during an exam or celebration is completely okay, and you can participate fully with comfortable protection.'
        ],
        doctorAlert: 'Never take hormone-altering tablets without an examination by a qualified doctor.'
      };
    }

    return {
      opener: 'Thank you for asking about cycle timing and period delay 🌿',
      explanation: 'Prescription medications (such as specific progestin tablets like norethisterone) can temporarily postpone menstrual bleeding for significant events, but they are prescription-only medications requiring clinical assessment.',
      tips: [
        'Must be prescribed by a doctor: A gynaecologist must verify that you have no risk factors for blood clots, liver disease, or unexplained bleeding.',
        'Timing is critical: Delay tablets usually need to be started 3 to 4 days before your expected period; they cannot stop bleeding once it has already started.',
        'Possible side effects include bloating, breast tenderness, headache, and temporary cycle irregularity in the following month.',
        'Never take extra oral contraceptive pills or unverified online remedies to delay bleeding.'
      ],
      doctorAlert: 'Visit a doctor or gynaecologist at least 1–2 weeks before your event if you wish to discuss safe prescription cycle delay.'
    };
  }

  // 4. SURGICAL INTERVENTION (Hysterectomy, Ablation)
  if (intervention === 'SURGICAL_INTERVENTION') {
    return {
      opener: 'Medical Overview: Reproductive Surgical Procedures',
      explanation: 'Surgeries involving the uterus or ovaries (such as hysterectomy or endometrial ablation) are major, irreversible surgical procedures performed only for serious, diagnosed gynecological conditions (e.g. cancer, intractable hemorrhage, or severe refractory fibroids).',
      tips: [
        'They are never routine or first-line solutions for ordinary period discomfort.',
        'Procedures permanently affect fertility, and removal of ovaries can trigger surgical menopause.',
        'A comprehensive evaluation, including pelvic imaging, biopsy, and trial of conservative medical therapies, is standard clinical practice before considering surgery.',
        'Consult with a specialist gynaecological surgeon to discuss clinical indications and conservative treatment pathways.'
      ],
      doctorAlert: 'Major gynecological surgery requires comprehensive specialist consultation and individual diagnostic evaluation.'
    };
  }

  // 5. HORMONE THERAPY (HRT / MHT)
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
 * Builds an age-adapted, safe fallback answer when no Q&A entry safely reaches the confidence threshold.
 * Never fabricates medical advice or forces an irrelevant answer.
 */
export function buildSafeFallback(stage: NormalizedStage, userQuery?: string): StructuredAnswer {
  if (stage === 'puberty') {
    return {
      opener: 'Thank you for asking! We want to make sure you get safe, clear answers 🌸',
      explanation: 'Every body develops on its own unique biological timeline, and we want to be very careful to give you reliable, gentle guidance. We may not have understood your exact question, and we never want to guess about your health.',
      tips: [
        'Could you try asking your question with simpler words? For example: "Is period pain normal?", "What does discharge look like?", or "How do I use a pad?".',
        'If you are feeling pain, unusual bleeding, or worry, please talk to a parent, school nurse, or doctor you trust right away.',
        'Explore our Young Bloomers guides for step-by-step checklists and reassuring facts about growing up.',
        'Remember: no question about your body is silly or awkward.'
      ],
      doctorAlert: 'If you have pain, heavy bleeding, or feel unwell, please speak with a trusted adult or doctor.'
    };
  }

  if (stage === 'menopause') {
    return {
      opener: 'Warm greetings. We want to ensure you receive accurate, stage-appropriate information 🌾',
      explanation: 'Menopausal journeys involve diverse hormonal, physical, and emotional transitions. Because individual health backgrounds differ significantly, we want to provide only verified educational guidance rather than guessing.',
      tips: [
        'Try searching for specific symptoms: e.g. "What are hot flushes?", "Can periods skip months in your 40s?", or "How does sleep change?".',
        'Review our Perimenopause & Menopause guides for evidence-informed milestones and health check roadmaps.',
        'Keep a brief symptom diary of dates, sleep, and cycle changes to discuss with your healthcare provider.',
        'Always consult your gynaecologist for personalized advice regarding hormones, bone health, or unusual bleeding.'
      ],
      doctorAlert: '⚠️ Any unexpected heavy bleeding, or bleeding after 12 months without a period, requires prompt clinical evaluation.'
    };
  }

  if (stage === 'educator') {
    return {
      opener: 'Thank you for your commitment to thoughtful, stigma-free health education 🤝',
      explanation: 'Guiding learners, students, or family members requires medically accurate, age-appropriate language. While we didn\'t find an exact pre-approved match for this specific phrasing, we can direct you to our verified educational toolkits.',
      tips: [
        'Explore our Educator Care Guides for scripted conversations by age tier (8–10, 11–13, 14–17).',
        'Check out our 30-minute classroom session planners and WASH bathroom setup checklists.',
        'Try asking: "How do I explain periods to a 12-year-old?", "What Indian foods help with cramps?", or "What are the rules of personal boundaries?".',
        'For individual medical concerns or severe student distress, always refer to a qualified paediatrician or adolescent health specialist.'
      ]
    };
  }

  // Cycle care & general / unknown fallback
  return {
    opener: 'Thank you for asking. We want to be sure you receive safe, reliable health information 🌸',
    explanation: 'Menstrual cycles and reproductive wellness are deeply individual. To protect your safety, SheBloom only shares verified clinical educational content and will never guess or fabricate medical advice.',
    tips: [
      'Could you rephrase your question? Try asking about: "normal cycle length", "cramp relief", "hygiene rules", or "menstrual cups".',
      'Visit our Learning Hub to browse reviewed articles on cycle phases, nutrition, and wellness.',
      'Track your symptoms on a calendar: noting Day 1, flow levels, and cramp intensity provides clarity.',
      'Always consult a qualified doctor or gynaecologist for diagnosis, medical treatment, or sudden changes in your body.'
    ],
    doctorAlert: 'If you are experiencing severe pain, rapid heavy bleeding, or feel faint, please consult a healthcare professional promptly.'
  };
}

/**
 * Main Central Medical Safety Evaluation Layer
 * Runs BEFORE any answer is selected or returned.
 */
export function checkSafety(query: string, rawStage?: string | null): SafetyCheckResult {
  const normalizedStage = normalizeStage(rawStage);

  // 1. Check Urgent Symptoms / Crisis
  const urgentType = detectUrgentSymptoms(query);
  if (urgentType) {
    const isCrisis = urgentType === 'CRISIS_SELF_HARM';
    const overrideAnswer = buildUrgentResponse(urgentType, normalizedStage);
    return {
      isCrisis,
      isRedFlag: true,
      isMedicalIntervention: false,
      urgentType,
      normalizedStage,
      overrideAnswer,
      followUps: isCrisis 
        ? ['How do I talk to my family?', 'What are healthy coping strategies?']
        : ['What questions should I ask my doctor?', 'When is period pain an emergency?', 'How much bleeding is too much?'],
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
      interventionType,
      normalizedStage,
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

  return {
    isCrisis: false,
    isRedFlag: false,
    isMedicalIntervention: false,
    normalizedStage
  };
}
