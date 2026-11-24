import {
  MenopauseStageInfo,
  MenopauseSymptomToolkit,
  HealthCheckItem
} from './types';

export const MENOPAUSE_TIMELINE: MenopauseStageInfo[] = [
  {
    id: 'late-reproductive',
    title: '1. Late Reproductive Phase',
    ageRange: 'Late 30s to early 40s',
    biologicalChange: 'Ovarian follicle reserve gradually decreases. Menstrual cycles remain mostly regular, but cycle length may shorten by 2 to 4 days (e.g., from 28 to 25 days).',
    symptoms: ['Slightly shorter cycle intervals', 'Mild premenstrual breast tenderness', 'Occasional sleep lighter than usual'],
    whatHelps: ['Nutrient-dense diet with calcium and magnesium', 'Regular strength and aerobic exercise', 'Consistent sleep hygiene']
  },
  {
    id: 'perimenopause',
    title: '2. Perimenopause (The Transition)',
    ageRange: 'Early to mid-40s (Indian median onset ~46.2 years)',
    biologicalChange: 'Estrogen and progesterone fluctuate widely and unpredictably. Ovulation becomes erratic (some cycles ovulatory, some anovulatory). Cycles vary by 7+ days or skip months.',
    symptoms: ['Hot flushes & night sweats', 'Irregular cycle frequency or flow changes', 'Brain fog and mood swings', 'Vaginal dryness (GSM)'],
    whatHelps: ['Dressing in breathable cotton layers', 'Paced diaphragmatic breathing', 'Consulting a doctor about Menopausal Hormone Therapy (MHT)', 'Avoiding caffeine/alcohol triggers']
  },
  {
    id: 'menopause',
    title: '3. Menopause (The Milestone)',
    ageRange: 'Diagnosed after 12 consecutive months of zero bleeding',
    biologicalChange: 'Ovaries have stopped releasing eggs and significantly reduced estrogen production. Menopause is confirmed in hindsight after 1 full year without a single period.',
    symptoms: ['Cessation of menstrual periods', 'Vasomotor symptom peaks', 'Shifts in cholesterol and lipid profiles', 'Accelerated bone demineralization'],
    whatHelps: ['Annual cardiovascular and bone density checks', 'Weight-bearing exercises to protect bone matrix', 'Pelvic floor physical therapy (Kegels)']
  },
  {
    id: 'post-menopause',
    title: '4. Post-Menopause (Golden Years)',
    ageRange: 'All years following menopause confirmation',
    biologicalChange: 'Hormones stabilize at a new baseline. Vasomotor hot flushes typically decline over 3 to 5 years, though genitourinary symptoms (dryness) require ongoing hydration and care.',
    symptoms: ['Gradual fading of hot flushes', 'Dryness of skin and intimate tissues', 'Risk of osteopenia if inactive'],
    whatHelps: ['Daily brisk walking and light resistance bands', 'Adequate dietary calcium and Vitamin D3', 'Low-dose local vaginal estrogen or moisturizers if indicated by gynaecologist']
  }
];

export const MENOPAUSE_SYMPTOMS_TOOLKIT: MenopauseSymptomToolkit[] = [
  {
    id: 'hot-flushes',
    title: 'Hot Flushes & Night Sweats',
    icon: '🔥',
    mechanism: 'Dropping estrogen narrows the thermoneutral comfort zone in the hypothalamus, triggering false overheating alarms that cause sudden sweating and flushing.',
    selfCareOptions: [
      'Dress in breathable cotton or linen layers that you can easily take off',
      'Keep your bedroom temperature cool (around 18°C to 20°C) with a well-ventilated fan',
      'Practice slow, paced abdominal breathing (6 breaths per minute) when a flush begins',
      'Cut down on common flush triggers like smoking, alcohol, and very spicy foods'
    ],
    whenToConsultDoctor: 'If night sweats disrupt your sleep almost every night, or if day flushes severely interfere with work meetings. A gynaecologist can discuss evidence-based Menopausal Hormone Therapy (MHT) or non-hormonal prescription options.'
  },
  {
    id: 'sleep-mood',
    title: 'Sleep Fragmentation & Brain Fog',
    icon: '🌙',
    mechanism: 'Nighttime heat spikes combined with low progesterone and shifting brain serotonin cause frequent awakenings and temporary cognitive lapses.',
    selfCareOptions: [
      'Establish a strict, calming bedtime routine (dim warm lighting 1 hour before sleep)',
      'Keep a notepad by your bed to write down to-do items and clear mental clutter',
      'Engage in daily morning sunlight exposure to anchor your circadian rhythm',
      'Engage in light morning walking to support restful restorative nighttime sleep'
    ],
    whenToConsultDoctor: 'If experiencing prolonged clinical insomnia, overwhelming panic attacks, or persistent depressive mood drops.'
  },
  {
    id: 'gsm-dryness',
    title: 'Intimate Dryness & Bladder Sensitivity (GSM)',
    icon: '💧',
    mechanism: 'Vulvovaginal and urethral tissues have rich estrogen receptors. Estrogen depletion thins mucosa, leading to dryness, irritation, and recurrent urinary burning.',
    selfCareOptions: [
      'Use water-based or silicone-based intimate lubricants during intimacy',
      'Apply non-hormonal hyaluronic acid vaginal moisturizers 2 to 3 times weekly',
      'Wear loose cotton undergarments and avoid perfumed washes or bubble baths',
      'Stay well hydrated with plain water and tender coconut water'
    ],
    whenToConsultDoctor: 'GSM does not heal on its own with time. A gynaecologist can prescribe local, low-dose vaginal estrogen creams that are highly effective and safe for long-term comfort.'
  },
  {
    id: 'joint-aches',
    title: 'Joint Stiffness & Muscle Fatigue',
    icon: '🦴',
    mechanism: 'Estrogen acts as a mild anti-inflammatory agent throughout synovial joint capsules; its decline can cause morning finger and knee stiffness.',
    selfCareOptions: [
      'Perform gentle daily joint rotations and low-impact morning stretching',
      'Incorporate anti-inflammatory foods like turmeric (haldi) milk, ginger, and walnuts',
      'Maintain adequate hydration to support joint cartilage lubrication'
    ],
    whenToConsultDoctor: 'If joint stiffness lasts longer than 1 hour each morning or shows visible red swelling, consult a rheumatologist to differentiate from arthritis.'
  }
];

export const HEALTH_CHECKS_ROADMAP: HealthCheckItem[] = [
  {
    id: 'dexa',
    name: 'Dual-Energy X-ray Absorptiometry (DEXA Scan)',
    targetOrgans: 'Lumbar Spine & Femoral Hip Bones',
    frequencyGuidance: 'Recommended for women aged 65+, or postmenopausal women under 65 with clinical risk factors (fracture history, family history, low body weight) [VERIFY: screening schedules per Indian Menopause Society & ISBMR guidelines]',
    whyItMatters: 'Measures bone mineral density (T-score) to detect silent osteopenia or osteoporosis before a fracture occurs.'
  },
  {
    id: 'cardio',
    name: 'Cardiovascular & Lipid Panel Screening',
    targetOrgans: 'Heart, Arterial Elasticity, Blood Vessels',
    frequencyGuidance: 'Annual check of blood pressure, fasting blood glucose, and lipid profile (Total Cholesterol, HDL, LDL, Triglycerides) [VERIFY: Indian cardiometabolic guidelines]',
    whyItMatters: 'Loss of estrogen removes natural protection against LDL buildup and arterial stiffness, making cardiovascular monitoring essential in midlife.'
  },
  {
    id: 'mammogram',
    name: 'Mammography & Clinical Breast Examination',
    targetOrgans: 'Breast Tissue Density & Glands',
    frequencyGuidance: 'Routine screening typically recommended every 1 to 2 years for women aged 40 to 74, tailored to individual risk factors [VERIFY: national cancer screening recommendations]',
    whyItMatters: 'Detects microscopic microcalcifications and tissue anomalies years before they become palpable masses.'
  },
  {
    id: 'cervical',
    name: 'Cervical Cancer Screening (Pap Smear & HPV DNA)',
    targetOrgans: 'Cervix & Endocervical Canal',
    frequencyGuidance: 'Every 3 to 5 years depending on whether cytology (Pap) or high-risk HPV DNA testing is used, usually up to age 65 if previous tests were normal [VERIFY: WHO/FOGSI guidelines]',
    whyItMatters: 'Identifies precancerous dysplasia caused by high-risk HPV strains; highly preventable with timely screening.'
  }
];

export const DOCTOR_QUESTIONS: string[] = [
  'Based on my symptoms and personal health history, am I a suitable candidate for Menopausal Hormone Therapy (MHT)?',
  'What non-hormonal treatment options exist for my hot flushes and sleep disruption?',
  'Given my family history, when do you recommend I schedule my baseline DEXA bone density scan?',
  'What local topical treatments (like low-dose vaginal estrogen) can help with intimate dryness and urinary comfort?',
  'Which cardiovascular screenings (lipid panel, fasting blood sugar, BP) should we track this year?'
];
