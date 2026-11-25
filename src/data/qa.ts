import { UserIntent } from '../lib/intent';

export interface QAEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: {
    opener: string;
    explanation: string;
    tips: string[];
    doctorAlert?: string;
  };
  category: 'basics' | 'myths' | 'hygiene' | 'medical';
  intent?: UserIntent;
  stage?: 'puberty' | 'cycle' | 'menopause' | 'educator';
  allowedStages?: ('puberty' | 'cycle' | 'menopause' | 'educator')[];
  minAgeTier?: 'all' | '13+' | 'adult';
  sourceArticleId: string;
  sourceReference: string;
  lastReviewed: string;
  safetyClassification: 'general-educational' | 'clinical-guidance';
  followUps: string[];
}

export const QA_DATABASE: QAEntry[] = [
  {
    id: 'period-short-duration',
    keywords: [
      'only last 2 days',
      'only lasts 2 days',
      'period only 2 days',
      '2 days',
      'two days',
      'period 2 days',
      'period lasted 2 days',
      'short period',
      'period so short',
      'bleeding only 2 days',
      'period lasts two days',
      'period only last 2 days'
    ],
    question: 'Is it normal for my period to only last 2 days?',
    answer: {
      opener: 'A period lasting 2 days can be completely normal depending on your individual cycle 🌸',
      explanation: 'Normal menstrual bleeding typically ranges anywhere between 2 and 7 days. If your period lasts 2 days with steady flow on Day 1 and Day 2 before tapering off, this can be your body’s healthy natural baseline.\n\nFor young bloomers in the first 2 to 3 years after starting periods, hormone levels are still calibrating, which often leads to shorter or lighter cycles. Shorter bleeds can also happen due to birth control, stress, changes in nutrition, or light flow patterns.',
      tips: [
        'Track your flow: Record how many days you bleed across 3 to 4 months to learn if 2 days is your consistent personal pattern.',
        'Flow vs. spotting: Notice whether you had real menstrual flow (requiring pads) or just light pink/brown spotting.',
        'When to check with a doctor: If your periods used to last 5–6 days and suddenly dropped to 2 days without reason, or if periods are skipping months, a gentle consult with a doctor can give you clarity.'
      ]
    },
    category: 'basics',
    stage: 'puberty',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'what-is-a-period',
    sourceReference: 'ACOG Menstrual Health Guidelines in Adolescents',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: [
      'What is a normal cycle length?',
      'What is the difference between spotting and a period?',
      'Why does period flow change from month to month?'
    ]
  },
  {
    id: 'why-periods-exist',
    keywords: [
      'why do i have to go through periods',
      'why do i have to get periods',
      'why do girls get periods',
      'why do women get periods',
      'why do we get periods',
      'why bleeding every month',
      'purpose of period',
      'why do i have periods',
      'why menstruate',
      'why only girls bleed',
      'why does my body do this',
      'why do we have periods'
    ],
    question: 'Why do I have to get periods, and why does my body do this?',
    answer: {
      opener: 'Periods happen because your uterus prepares a soft lining each month and clears it out when no pregnancy occurs 🌸',
      explanation: 'Every month, reproductive hormones signal your uterus to build a soft, nutrient-rich lining of blood and tissue. If an egg released during ovulation is not fertilized, hormone levels shift, signaling your uterus to gently shed this lining. This clearing out is what we experience as menstrual bleeding.\n\nWhile bleeding can feel messy and inconvenient, it is a healthy sign that your endocrine and reproductive systems are communicating properly.',
      tips: [
        'Wear comfortable, breathable cotton underwear and pads that feel gentle against your skin.',
        'Soothe mild cramps with a warm water bottle (garam paani ki thaili) or heating pad across your lower tummy.',
        'Give yourself permission to slow down: resting, reading, or taking a short nap helps when energy dips.',
        'Stay hydrated with warm water or herbal tea and eat nourishing, balanced meals.'
      ]
    },
    category: 'basics',
    intent: 'definition_or_science',
    stage: 'puberty',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'what-is-a-period',
    sourceReference: 'WHO / ACOG Committee Opinion No. 651 (Menstruation in Adolescents)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: [
      'How can I make cramps less painful?',
      'Tips for managing periods at school',
      'Why do I feel so tired during my period?',
      'What comfort foods help during periods?'
    ]
  },
  {
    id: 'periods-irritating-comfort',
    keywords: [
      'irritating',
      'annoying',
      'its irritating',
      'periods are irritating',
      'hate periods',
      'hate having periods',
      'tired of periods',
      'why is it so annoying',
      'why is it irritating',
      'frustrated with periods',
      'sick of periods',
      'why do i have to suffer every month'
    ],
    question: 'Why are periods so uncomfortable, and how can I feel more comfortable?',
    answer: {
      opener: 'Period discomfort is very common and mainly caused by natural hormone shifts and muscle contractions 🌸',
      explanation: 'Menstrual discomfort happens when body chemicals called prostaglandins cause the uterine muscles to contract to shed the lining. These contractions can cause cramping in your lower belly or back, while shifting hormones can leave you feeling bloated or drained.\n\nSimple practical comfort habits like warmth, gentle stretching, and comfortable clothing can make a big difference in how you feel.',
      tips: [
        'Apply soothing warmth: A warm water bottle (garam paani ki thaili) relaxes uterine muscles and melts tension.',
        'Wear loose clothes: Pick soft track pants or loose cotton pyjamas that do not put pressure on your stomach.',
        'Stay nourished: Warm turmeric milk with jaggery, ginger tea, or light dal-rice can feel very soothing.',
        'When to seek help: If cramps or pain are severe enough that you cannot attend class or keep food down, consult a doctor or trusted adult for proper medical relief.'
      ]
    },
    category: 'basics',
    intent: 'symptom_check',
    stage: 'puberty',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'what-is-a-period',
    sourceReference: 'ACOG Menstrual Health Clinical Reference',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: [
      'How can I make cramps less painful?',
      'Tips for managing periods at school',
      'What Indian foods help with cramps?'
    ]
  },
  {
    id: 'how-to-use-pad',
    keywords: [
      'how do i use a pad',
      'how to use a pad',
      'how to wear a pad',
      'how to put on a pad',
      'use a sanitary pad',
      'how to stick pad',
      'steps to use pad',
      'first time using a pad',
      'pad change time'
    ],
    question: 'How do I use a sanitary pad?',
    answer: {
      opener: 'Using a sanitary pad is simple once you know the 4 basic steps 🌸',
      explanation: 'A sanitary pad is an absorbent pad that sticks directly onto the inside of your underwear to catch menstrual flow. Always wash your hands with soap before and after handling a pad, and remember to change your pad every 4 to 6 hours to stay fresh and prevent skin irritation.',
      tips: [
        'Unwrap the pad: Remove the outer wrapper and peel off the long paper backing covering the sticky strip.',
        'Stick it to your underwear: Place the sticky side down in the center of your underwear crotch, so the wider end points toward your back.',
        'Secure the wings (if present): Wrap the adhesive side wings around the underside of your underwear to keep the pad firmly in place.',
        'Change every 4 to 6 hours: Roll up your used pad in newspaper or its wrapper and toss it in a dustbin—never flush a pad down the toilet!'
      ]
    },
    category: 'hygiene',
    intent: 'how_to',
    stage: 'puberty',
    allowedStages: ['puberty', 'cycle', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'products-guide',
    sourceReference: 'UNICEF Menstrual Hygiene Management Guidelines',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: [
      'How often should I change my sanitary pad?',
      'How do I dispose of a used pad?',
      'What goes in a school period kit?'
    ]
  },
  {
    id: 'ovulation-window-signs',
    keywords: [
      'ovulation window',
      'recognize ovulation',
      'signs of ovulation',
      'when do i ovulate',
      'how to know if ovulating',
      'fertile window',
      'ovulation signs',
      'cervical mucus',
      'recognize my ovulation window'
    ],
    question: 'How do I recognize my ovulation window and what are the signs?',
    answer: {
      opener: 'Ovulation typically happens about 12 to 16 days before your next period begins 🌸',
      explanation: 'Ovulation is the point in your cycle when one of your ovaries releases a mature egg. In a typical 28-day cycle, ovulation usually occurs around Day 14. Your fertile window includes the 5 days before ovulation plus the day of ovulation itself.\n\nYou can recognize this window by watching for natural body signals: cervical fluid that becomes clear, slippery, and stretchy (like raw egg whites), a subtle rise in resting body temperature, or light lower-belly twinges on one side (mittelschmerz).',
      tips: [
        'Check discharge texture: Clear, stretchy, slippery discharge is the body’s natural sign of peak fertility.',
        'Count from your next period: Ovulation usually happens about 14 days before the first day of your next bleed.',
        'Track physical cues: Mild breast tenderness, increased energy, or light pelvic twinges can signal ovulation.',
        'Adolescent note: In the first 2 to 3 years of periods, some cycles are anovulatory (no egg released), which is why teen cycles fluctuate between 21 and 45 days.'
      ]
    },
    category: 'basics',
    intent: 'definition_or_science',
    stage: 'cycle',
    allowedStages: ['puberty', 'cycle', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'pregnancy-and-ovulation',
    sourceReference: 'ACOG Clinical Reference: Menstrual Cycle Physiology and Ovulation',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: [
      'What is a normal cycle length?',
      'Is vaginal discharge normal?',
      'Why do periods skip months in teens?'
    ]
  },
  {
    id: 'pain-normal',
    keywords: ['pain', 'cramps', 'hurts', 'cramping', 'ache', 'dysmenorrhea', 'pet dard', 'mild cramps'],
    question: 'Is period pain normal?',
    answer: {
      opener: 'Mild cramping is very common during menstruation, especially on Day 1 or 2 🌸',
      explanation: 'Mild cramps happen when natural body chemicals called prostaglandins cause uterine muscles to gently squeeze to shed the lining. However, severe, debilitating pain that causes vomiting or forces you to miss school or work is NOT normal.',
      tips: [
        'Place a warm water bottle (garam paani ki thaili) or heating pad across your lower abdomen.',
        'Sip warm herbal drinks like fresh ginger (adrak) water or ajwain tea to soothe abdominal spasms.',
        'Gentle physical stretches, such as Child’s Pose (Balasana) or lying down with knees bent, can ease tension.',
        'If cramps interfere with daily activities, consult a healthcare provider or pharmacist about safe relief suited to your age and health history.'
      ],
      doctorAlert: 'Is your pain severe, worsening over time, or causing vomiting or fainting? Please consult a doctor or gynaecologist for a clinical evaluation.'
    },
    category: 'medical',
    stage: 'cycle',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'period-pain-normal',
    sourceReference: 'ACOG Practice Bulletin No. 219 (Dysmenorrhea)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Which foods help with cramps?', 'How do I know if I have endometriosis?', 'Can exercise reduce cramps?']
  },
  {
    id: 'cycle-length',
    keywords: ['cycle', 'length', 'days', 'normal cycle', 'how long', 'frequency', 'gap', 'cycle length'],
    question: 'What is a normal cycle length?',
    answer: {
      opener: 'Every body has its own individual monthly rhythm 🌿',
      explanation: 'In healthy adults, a normal menstrual cycle typically ranges between 21 and 35 days, counted from Day 1 of bleeding to Day 1 of the next period. For adolescents during the first 2 to 3 years after menarche, cycles commonly range between 21 and 45 days while the hormonal axis matures.',
      tips: [
        'Record Day 1 of bleeding on a calendar or tracking diary to learn your natural pattern.',
        'Active bleeding typically lasts between 2 and 7 days.',
        'Physical illness, travel, exam stress, or sleep changes can temporarily alter cycle timing by a few days.'
      ]
    },
    category: 'basics',
    stage: 'cycle',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'what-is-a-period',
    sourceReference: 'WHO / ACOG Committee Opinion No. 651 (Menstruation in Adolescents)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What are the 4 phases of the cycle?', 'Why is my period late?', 'How much blood do you lose?']
  },
  {
    id: 'use-tampon',
    keywords: ['tampon', 'how to use tampon', 'insert tampon', 'applicator', 'tampons swim', 'use tampon safely'],
    question: 'How do I use a tampon safely?',
    answer: {
      opener: 'Using a tampon is simple with proper hygiene and practice 🌸',
      explanation: 'A tampon is an internal menstrual product inserted into the vagina to absorb period fluid. The vaginal canal angles naturally toward your lower back, not straight upward.',
      tips: [
        'Always wash hands thoroughly with soap and clean water before and after handling a tampon.',
        'Squat comfortably or sit on the toilet with knees relaxed and apart.',
        'Gently slide the tampon toward your lower spine until it sits comfortably without friction.',
        'Change tampons every 4 to 8 hours. Never leave a single tampon inside for longer than 8 hours to prevent infection risks.'
      ]
    },
    category: 'hygiene',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: '13+',
    sourceArticleId: 'first-period-kit-guide',
    sourceReference: 'US FDA Menstrual Tampons Safety Guidelines',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Can a tampon get lost inside me?', 'Can I swim with a tampon?', 'What is Toxic Shock Syndrome?']
  },
  {
    id: 'tampon-lost',
    keywords: ['lost', 'stuck', 'tampon lost', 'can tampon get lost', 'inside body', 'tampon stuck'],
    question: 'Can a tampon get lost inside my body?',
    answer: {
      opener: 'It is anatomically impossible for a tampon to get lost inside your body 💖',
      explanation: 'The vagina is a closed muscular canal approximately 7 to 10 cm deep. It ends at the cervix, which has a tiny pinhole opening that allows only menstrual fluid and sperm to pass. A tampon cannot travel into your abdomen or stomach.',
      tips: [
        'If the removal string feels hard to find, sit or squat down and take slow deep breaths to relax your pelvic muscles.',
        'Use two clean fingers to reach the base of the tampon gently.',
        'If you cannot remove it, visit a doctor, clinic nurse, or healthcare worker who can remove it painlessly in moments.'
      ]
    },
    category: 'myths',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'period-myths-busted',
    sourceReference: 'ACOG Patient Education: Using Tampons and Menstrual Cups',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['How often should I change a tampon?', 'What are menstrual cups?', 'Can I use pads instead?']
  },
  {
    id: 'first-period-signs',
    keywords: ['first period', 'menarche', 'signs', 'puberty', 'when will i get', 'starter', 'pehli baar', 'signs of first period'],
    question: 'What are the signs that my first period is coming?',
    answer: {
      opener: 'Welcome! Your body grows in healthy, natural stages during puberty 🌷',
      explanation: 'Most girls get their first period (menarche) between ages 9 and 15 (median ~12–13 years). Menarche usually arrives about 1 to 2 years after breast buds begin developing.',
      tips: [
        'You may notice clear or whitish fluid (discharge) on your underwear for several months before bleeding begins.',
        'Soft hair starts growing under your arms and in your pubic area.',
        'A noticeable growth spurt in height typically happens shortly before your first period.',
        'Keep 2–3 sanitary pads and spare clean underwear in a pouch in your school bag so you feel confident and prepared.'
      ]
    },
    category: 'basics',
    stage: 'puberty',
    allowedStages: ['puberty', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'first-period-expect',
    sourceReference: 'Indian Academy of Pediatrics (IAP) Guidelines on Adolescent Health',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What does a first period look like?', 'What should go in a first period kit?', 'What is discharge?']
  },
  {
    id: 'perimenopause-definition',
    keywords: ['perimenopause', 'menopause', 'hot flush', 'flashes', 'night sweats', '40s', 'irregular', 'periods becoming irregular', 'irregular periods', 'why are my periods becoming irregular', 'periods irregular'],
    question: 'What is perimenopause and why do periods become irregular?',
    answer: {
      opener: 'Hormonal shifts in your 40s are a natural biological bridge toward menopause 🌾',
      explanation: 'Perimenopause is the natural transition leading up to menopause. In your 40s, ovarian estrogen and progesterone production naturally fluctuate, which often causes cycle lengths to vary (early, late, lighter, or heavier).',
      tips: [
        'Cycle changes: Gaps between periods can lengthen or shorten from month to month.',
        'Vasomotor symptoms: Occasional sudden sensations of heat (hot flushes) or night sweats may occur.',
        'Sleep and mood: Fluctuating hormone levels can temporarily affect sleep quality or energy.',
        'Contraception note: Pregnancy remains biologically possible during perimenopause until 12 continuous months without a bleed have elapsed.'
      ],
      doctorAlert: 'Any sudden flooding, or bleeding after 12 full continuous months without a period, requires evaluation by a gynaecologist.'
    },
    category: 'basics',
    stage: 'menopause',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'perimenopause-early-signs',
    sourceReference: 'Indian Menopause Society (IMS) Clinical Guidelines / NAMS',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['How do I manage hot flushes?', 'What is the average age for menopause?', 'Does perimenopause affect sleep?']
  },
  {
    id: 'heavy-bleeding-alert',
    keywords: [
      'heavy',
      'bleeding',
      'severe bleeding',
      'clots',
      'soaking',
      'flooding',
      'too much blood',
      'menorrhagia',
      'soak pad',
      'is my bleeding normal',
      'bleeding so much',
      'heavy period'
    ],
    question: 'How do I know if my period bleeding is too heavy or severe?',
    answer: {
      opener: 'Checking your flow: Symptoms, questions, and guidance 🩺',
      explanation: 'Because period blood spreads out quickly on a pad, it is common to wonder if you have "too much bleeding." A young beginner can easily mistake normal flow for severe bleeding.\n\nAsk yourself these 3 check-in questions first:\n1. Pad change speed: Are you completely soaking front-to-back through 1 full pad every hour for 2 hours in a row? Or does a pad last 3 to 6 hours?\n2. Clot size: Are you seeing dark clots larger than a coin (1 inch / 2.5 cm)? (Small jelly-like bits are normal).\n3. How your body feels: Do you feel dizzy, lightheaded, pale, or unusually weak?',
      tips: [
        'Guidance on flow: An entire normal period is only about 2 to 3 tablespoons (30–45 ml) of total fluid across 4 to 7 days, even though it spreads and looks like a cupful on cotton.',
        'Day 1 and Day 2 are naturally the heaviest: A stronger flow on the first two days is completely normal before tapering off.',
        'When to see a doctor or tell an adult: If you are soaking through a full pad every hour for 2 consecutive hours, passing large coin-sized clots, or feeling dizzy/faint, tell a parent or doctor right away.',
        'Keep a flow log: Noting how many pads you change each day and showing your notes to a doctor helps them give you personalized care.'
      ],
      doctorAlert: 'If you are soaking a pad every hour for 2 hours, seeing large coin-sized clots, or feeling dizzy/faint, consult a doctor or speak with a trusted adult immediately.'
    },
    category: 'medical',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'warning-signs-doctor',
    sourceReference: 'NICE Guidelines on Heavy Menstrual Bleeding (NG88)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'clinical-guidance',
    followUps: ['What causes heavy bleeding?', 'Can low iron make me tired during periods?', 'What questions should I ask my doctor?']
  },
  {
    id: 'discharge-normal',
    keywords: ['discharge', 'white', 'clear', 'fluid', 'wet', 'cervical mucus', 'safed paani', 'white discharge', 'why do i have white discharge', 'leukorrhea'],
    question: 'Is vaginal discharge normal and why do I have white discharge?',
    answer: {
      opener: 'Clear or whitish discharge is a normal, healthy part of female biology 🫧',
      explanation: 'The cervix and vaginal walls constantly produce clear or milky fluid to carry away old cells and maintain a healthy, acidic bacterial balance that protects against infection.',
      tips: [
        'Normal fluid: Clear, milky white, or pale cream with no foul or fishy odor.',
        'Mid-cycle changes: Around ovulation, fluid naturally becomes stretchy and clear, similar to raw egg whites.',
        'Hygiene: Wash only the external skin (the vulva) with plain clean water; the internal vagina cleans itself naturally.',
        'Avoid perfumed washes: Chemical douches and scented soaps disrupt natural acidity and cause irritation.'
      ],
      doctorAlert: 'Consult a healthcare provider if discharge is clumpy like cottage cheese, greenish-yellow, has a strong fishy odor, or causes burning or itching.'
    },
    category: 'hygiene',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'hygiene-dos-donts',
    sourceReference: 'CDC Vaginal Discharge & Vaginitis Clinical Guidance',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Why should I never douche?', 'What does healthy vulva care look like?', 'How do I know if I have a yeast infection?']
  },
  {
    id: 'swimming-exercise',
    keywords: ['swim', 'swimming', 'exercise', 'gym', 'workout', 'sports', 'run', 'yoga', 'can i exercise'],
    question: 'Can I exercise and walk during my period?',
    answer: {
      opener: 'Light to moderate movement during menstruation is safe and often beneficial 🏃‍♀️',
      explanation: 'There is no medical requirement to stay in bed unless you feel exhausted. Gentle physical activity stimulates natural endorphin release, which can help relax cramped muscles and uplift mood.',
      tips: [
        'Walking and daily activities: A standard sanitary pad or clean cotton cloth pad is comfortable.',
        'Swimming: Internal products like a menstrual cup or tampon collect fluid securely inside.',
        'Gentle yoga: Poses like Child’s Pose (Balasana) or gentle pelvic stretches help relieve lower back tightness.',
        'Listen to your body: On heavy flow days, give yourself permission to rest if you feel low on energy.'
      ]
    },
    category: 'myths',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'period-myths-busted',
    sourceReference: 'ACOG Clinical Guidelines: Physical Activity and Exercise During Menstruation',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Can period water hurt others in the pool?', 'Which yoga poses ease cramps?', 'Is it safe to run on Day 1?']
  },
  {
    id: 'missed-period',
    keywords: ['missed', 'late', 'skipped', 'no period', 'amenorrhea', 'delayed', 'period late'],
    question: 'Why is my period late or missed?',
    answer: {
      opener: 'Menstrual cycles are sensitive to everyday biological and lifestyle changes 🌸',
      explanation: 'A period delay happens when ovulation is postponed. The brain’s hypothalamus coordinates menstrual hormones and responds readily to emotional stress, travel, illness, or nutritional changes.',
      tips: [
        'Stress and illness: School exams, high work stress, or acute fever are common causes of temporary delay.',
        'Nutritional factors: Rapid weight loss, strict calorie restriction, or intense athletic training can pause periods.',
        'Pregnancy consideration: If there is any possibility of pregnancy, taking a home urine test on or after your expected period date is recommended.',
        'Adolescents: Irregular cycles are typical in the first 2 to 3 years as hormones mature.'
      ],
      doctorAlert: 'If your period is absent for 3 consecutive months (and you are not pregnant), consult a doctor to evaluate thyroid function or PCOS.'
    },
    category: 'medical',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'warning-signs-doctor',
    sourceReference: 'Endocrine Society Clinical Practice Guidelines on Amenorrhea',
    lastReviewed: '2026-11-25',
    safetyClassification: 'clinical-guidance',
    followUps: ['What is PCOS?', 'How does stress affect periods?', 'When should I see a doctor for irregular periods?']
  },
  {
    id: 'pms-mood-swings',
    keywords: ['pms', 'mood', 'crying', 'angry', 'irritated', 'sad', 'pmdd', 'chidhchidhapan', 'mood swings'],
    question: 'Why do I get irritated or emotional before my period?',
    answer: {
      opener: 'Premenstrual emotional shifts are biological and widely experienced 💭',
      explanation: 'In the week before menstruation, levels of estrogen and progesterone drop sharply. This hormonal transition interacts with brain neurotransmitters like serotonin, which regulate mood and emotional stability.',
      tips: [
        'Track your cycle: Recognizing premenstrual days helps you anticipate and understand emotional shifts.',
        'Balanced meals: Complex carbohydrates and proteins (dal, vegetables, whole grains) help stabilize blood sugar.',
        'Hydration and rest: Drink adequate water, reduce excess salt, and prioritize 7 to 9 hours of sleep.',
        'Seek support if severe: If premenstrual sadness or anger significantly disrupts your life or relationships, consult a doctor or counselor to discuss Premenstrual Dysphoric Disorder (PMDD).'
      ]
    },
    category: 'basics',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'understanding-pms',
    sourceReference: 'ACOG Practice Bulletin No. 15 (Premenstrual Syndrome / PMDD)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What is the difference between PMS and PMDD?', 'Which foods help with mood?', 'Why do I crave sweets before periods?']
  },
  {
    id: 'menstrual-cup-how',
    keywords: ['cup', 'menstrual cup', 'silicone', 'fold', 'insert cup', 'sanitize', 'use cup'],
    question: 'How does a menstrual cup work and how do I use it?',
    answer: {
      opener: 'Menstrual cups are reusable, medical-grade silicone collection devices 🌿',
      explanation: 'Unlike pads or tampons that absorb flow, a menstrual cup is a flexible bell inserted into the vagina that sits beneath the cervix to collect menstrual fluid.',
      tips: [
        'Boil before use: Sterilize the cup in boiling water for 3 to 5 minutes before your monthly cycle begins.',
        'Fold to insert: Fold the rim flat and bend in half (C-fold or punch-down fold) so it is compact for insertion.',
        'Insertion angle: Relax your pelvic muscles, sit or squat, and guide the folded cup toward your lower back. It opens to create a gentle seal.',
        'Emptying: After 8 to 12 hours (depending on flow), pinch the base to release suction, empty into the toilet, rinse with clean water, and reinsert.'
      ]
    },
    category: 'hygiene',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: '13+',
    sourceArticleId: 'first-period-kit-guide',
    sourceReference: 'Lancet Public Health: Menstrual Cup Usage and Safety Review',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['How often do I empty a menstrual cup?', 'Can a cup leak?', 'How do I choose the right cup size?']
  },
  {
    id: 'hot-flushes-tips',
    keywords: ['hot flush', 'hot flashes', 'sweat', 'night sweat', 'cooling', 'menopause cooling', 'manage hot flushes'],
    question: 'What can I do to cool down during hot flushes?',
    answer: {
      opener: 'Everyday lifestyle adjustments can provide relief during hot flushes 🍵',
      explanation: 'During perimenopause and menopause, declining estrogen affects the brain’s thermoregulatory center (hypothalamus), triggering sudden vascular dilation, warmth, and perspiration.',
      tips: [
        'Layer breathable clothing: Wear lightweight cotton layers that can be adjusted as temperature fluctuates.',
        'Cool hydration: Keep cool water nearby and sip slowly when a flush begins.',
        'Bedroom environment: Keep sleeping areas cool (around 18–20°C) with breathable cotton bedding.',
        'Notice triggers: Highly spicy foods, hot caffeinated beverages, and alcohol can stimulate hot flushes.'
      ]
    },
    category: 'hygiene',
    stage: 'menopause',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'menopause-hot-flushes',
    sourceReference: 'NAMS Position Statement: Management of Vasomotor Symptoms',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What foods trigger hot flushes?', 'Can HRT help with menopause symptoms?', 'Why does menopause affect bone density?']
  },
  {
    id: 'talking-to-kids',
    keywords: ['talk to daughter', 'teach students', 'educator', 'parent', 'period talk', 'first talk', 'explain menstruation to', 'explain to a 12-year-old', 'explain to a 12 year old', '12-year-old', '12 year old', 'explain menstruation'],
    question: 'How can I comfortably talk to my daughter or students about periods?',
    answer: {
      opener: 'Clear, open conversations normalize menstrual health and eliminate fear 🤝',
      explanation: 'Children absorb attitudes before details. Presenting menstruation as a healthy biological milestone fosters lifelong body confidence and body neutrality.',
      tips: [
        'Use accurate anatomical terms: Words like uterus, vulva, and period provide clear, shame-free clarity.',
        'Start early: Introduce concepts around ages 8 to 10 with short, everyday conversations before menarche occurs.',
        'Show real supplies: Familiarize children with sanitary pads and clean underwear so practical changing is familiar.',
        'Include boys: Teaching boys about menstruation in school reduces playground teasing and stigma.'
      ]
    },
    category: 'myths',
    stage: 'educator',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'talking-to-daughter-students',
    sourceReference: 'UNESCO International Technical Guidance on Sexuality Education',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What should go into a school period kit?', 'What age should boys learn about periods?', 'How do teachers support menstruating students?']
  },
  {
    id: 'food-for-cramps',
    keywords: ['food', 'diet', 'nutrition', 'eat', 'tea', 'cramp relief food', 'khana', 'indian foods help cramps'],
    question: 'What Indian foods and drinks help reduce menstrual cramps?',
    answer: {
      opener: 'Nutritious foods and warm drinks support natural comfort during menstruation 🫖',
      explanation: 'Nutrient-dense foods providing iron, magnesium, and hydration support muscle relaxation and replenish menstrual nutrient loss.',
      tips: [
        'Iron & green foods: Spinach (palak), methi, roasted chana, rajma, and dates or jaggery (gud) in moderation.',
        'Warm sips: Fresh ginger (adrak) water, ajwain tea, or saunf (fennel) water can soothe abdominal tightness.',
        'Bedtime comfort: Warm turmeric milk (haldi doodh) provides soothing bedtime hydration.',
        'Hydration: Drink room-temperature water, lemon water (nimbu pani), or coconut water (nariyal pani) to ease fluid retention.'
      ]
    },
    category: 'hygiene',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'food-movement-cramps',
    sourceReference: 'ICMR National Institute of Nutrition Dietary Guidelines',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Should I avoid cold water on my period?', 'Why do I crave sweets before bleeding?', 'Can jaggery help with period cramps?']
  },
  {
    id: 'blood-color',
    keywords: ['color', 'brown blood', 'black blood', 'pink blood', 'dark blood', 'clots color', 'blood color'],
    question: 'Why is my period blood brown, dark, or pink?',
    answer: {
      opener: 'Color variations throughout menstruation are normal biological occurrences 🎨',
      explanation: 'Menstrual fluid changes color when it reacts with oxygen in the air (oxidation). Faster bleeding appears brighter red, while slower flow oxidizes into deeper shades.',
      tips: [
        'Bright Red: Fresh blood moving rapidly through the canal (typical on Days 1 to 3).',
        'Dark Brown / Rust: Blood that moved slowly and contacted air (common on lighter days or at the start/end).',
        'Pinkish: Menstrual blood mixed with natural cervical fluid (typical at the onset or taper of a bleed).',
        'Small clots: Jelly-like clots smaller than a coin are a normal part of endometrial tissue shedding.'
      ]
    },
    category: 'basics',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'what-is-a-period',
    sourceReference: 'ACOG Menstrual Health Clinical Reference',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['What size clot is too big?', 'Why does blood smell metallic?', 'Is brown spotting a period?']
  },
  {
    id: 'hygiene-washing',
    keywords: ['wash', 'soap', 'clean', 'smell', 'odor', 'douche', 'hygiene', 'safai', 'clean intimate area'],
    question: 'How should I clean my intimate area during my period?',
    answer: {
      opener: 'Gentle simplicity is the core rule for intimate menstrual hygiene 🫧',
      explanation: 'The internal vagina is self-cleaning and maintains an acidic bacterial balance. Cleaning is only necessary for the external area (the vulva).',
      tips: [
        'Use plain clean warm water to wash the external vulva during your daily bath.',
        'Never douche or wash inside the vaginal canal, and avoid perfumed washes, talcum powders, or harsh chemical soaps.',
        'Always wash or wipe gently from front to back after using the washroom to prevent bacterial transfer.',
        'Change sanitary pads every 4 to 6 hours to remain clean, dry, and rash-free.'
      ]
    },
    category: 'hygiene',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'hygiene-dos-donts',
    sourceReference: 'WHO Guidelines on Menstrual Hygiene Management (MHM)',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['Why does my period have an odor?', 'What underwear material is healthiest?', 'Can scented pads cause irritation?']
  },
  {
    id: 'contraceptive-pills-how',
    keywords: ['pill', 'birth control', 'oral contraceptive', 'contraceptive pills', 'mala d', 'chhaya', 'garbhnirodhak'],
    question: 'How do birth control pills work and how are they taken?',
    answer: {
      opener: 'Contraceptive pills are prescription medications used for family planning and cycle management 💊',
      explanation: 'Combined oral contraceptives work primarily by preventing ovulation (egg release) and thickening cervical mucus. They are prescription-only medications requiring individual health assessment.',
      tips: [
        'Physician assessment: A doctor must check your blood pressure and cardiovascular history before prescribing.',
        'Daily consistency: Pills are taken at the same time each day according to the prescription protocol.',
        'Missed pill protocol: If a dose is missed, consult the specific package leaflet or speak to a pharmacist.',
        'STI protection: Oral pills do not protect against Sexually Transmitted Infections (STIs); barrier methods (condoms) are necessary for infection prevention.'
      ]
    },
    category: 'medical',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'contraception-and-pills',
    sourceReference: 'WHO Medical Eligibility Criteria for Contraceptive Use',
    lastReviewed: '2026-11-25',
    safetyClassification: 'clinical-guidance',
    followUps: ['What happens if I miss a birth control pill?', 'Do contraceptive pills cause weight gain?', 'Can pills help reduce heavy period flow?']
  },
  {
    id: 'emergency-pill-guide',
    keywords: ['emergency pill', 'morning after', 'i-pill', '72 hours', 'unprotected', 'e-pill'],
    question: 'What is an emergency contraceptive pill and when should it be used?',
    answer: {
      opener: 'Emergency contraception is an occasional post-intercourse safety measure ⚡',
      explanation: 'An emergency contraceptive pill delays ovulation to reduce the chance of pregnancy following unprotected intercourse or contraceptive failure. It is intended for backup situations, not as regular ongoing contraception.',
      tips: [
        'Time sensitivity: Emergency pills are most effective the sooner they are taken (ideally within 12 to 24 hours, up to a maximum of 72 hours).',
        'Mechanism: It works by delaying egg release. It does NOT terminate or interrupt an established pregnancy and is not an abortion pill.',
        'Follow-up: If your subsequent menstrual bleed is delayed by more than 7 days, take a home urine pregnancy test.',
        'Consultation: A doctor or clinic can help you select reliable regular contraception.'
      ]
    },
    category: 'medical',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'contraception-and-pills',
    sourceReference: 'WHO Fact Sheet: Emergency Contraception',
    lastReviewed: '2026-11-25',
    safetyClassification: 'clinical-guidance',
    followUps: ['How often can you take an emergency pill?', 'Does the morning after pill delay your period?', 'Where can I get emergency pills in India?']
  },
  {
    id: 'consent-boundaries-how',
    keywords: ['consent', 'boundary', 'boundaries', 'say no', 'relationship respect', 'autonomy', 'touch'],
    question: 'What does consent mean and how do I set personal boundaries?',
    answer: {
      opener: 'Your body belongs entirely to you, and your boundaries must always be respected 🤝',
      explanation: 'Consent means clear, voluntary, and enthusiastic agreement from all parties. You have the absolute right to say "No" to any physical touch, request, or situation that makes you uncomfortable.',
      tips: [
        'Freely given: Consent given under pressure, guilt, or fear is never true consent.',
        'Reversible: You can change your mind, pause, or stop any interaction at any moment.',
        'Digital boundaries: You never have to share private photos or passwords under peer pressure.',
        'Support networks: If someone violates your boundaries or makes you feel unsafe, reach out to trusted adults or child protection services.'
      ]
    },
    category: 'basics',
    allowedStages: ['puberty', 'cycle', 'menopause', 'educator'],
    minAgeTier: 'all',
    sourceArticleId: 'consent-and-boundaries',
    sourceReference: 'UN Women / POCSO Act Guidelines on Bodily Autonomy & Child Safety',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['How do I say no politely but firmly?', 'What is reproductive consent?', 'Who can I talk to if someone violates my boundaries?']
  },
  {
    id: 'pregnancy-early-signs',
    keywords: ['pregnant', 'pregnancy signs', 'missed period pregnancy', 'conception', 'pregnancy test', 'pregnant symptoms', 'early pregnancy signs'],
    question: 'What are the earliest signs of pregnancy?',
    answer: {
      opener: 'Early pregnancy signs vary significantly among individuals 🤰',
      explanation: 'The most consistent early physical sign of pregnancy is a missed menstrual period. Physical hormonal symptoms may emerge over the subsequent weeks.',
      tips: [
        'Common early symptoms: Tender or swollen breasts, nausea (morning sickness), heightened fatigue, or frequent urination.',
        'Testing: Take a home urine pregnancy test using first morning urine on the day after an expected missed period.',
        'Clinical confirmation: A healthcare professional can perform a clinical blood test or pelvic ultrasound to confirm pregnancy accurately.'
      ]
    },
    category: 'basics',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: '13+',
    sourceArticleId: 'pregnancy-and-ovulation',
    sourceReference: 'ACOG Patient Education: Knowing If You Are Pregnant',
    lastReviewed: '2026-11-25',
    safetyClassification: 'general-educational',
    followUps: ['How early can a pregnancy test show positive?', 'Can you bleed while pregnant?', 'What is the fertile window?']
  },
  {
    id: 'perimenopause-pregnancy-risk',
    keywords: ['pregnant perimenopause', 'can i get pregnant at 45', 'menopause pregnancy', 'late pregnancy', 'pregnant at 45'],
    question: 'Can I get pregnant during perimenopause?',
    answer: {
      opener: 'Pregnancy remains biologically possible throughout perimenopause 🌾',
      explanation: 'Even when periods become irregular or skip months in your 40s, an ovary can still spontaneously release an egg (ovulate).',
      tips: [
        'Contraception continuation: Medical guidelines recommend continuing contraception until menopause is clinically confirmed.',
        'Definition of menopause: Full menopause is medically confirmed only after 12 consecutive months with zero menstrual bleeding.',
        'Midlife options: Discuss low-dose options, barrier methods, or non-hormonal IUDs with your gynaecologist.',
        'Postmenopausal warning: Any bleeding that occurs after 12 continuous months of menopause requires prompt clinical evaluation.'
      ]
    },
    category: 'medical',
    stage: 'menopause',
    allowedStages: ['cycle', 'menopause', 'educator'],
    minAgeTier: 'adult',
    sourceArticleId: 'pregnancy-and-ovulation',
    sourceReference: 'Faculty of Sexual and Reproductive Healthcare (FSRH) Guideline: Contraception for Women Aged over 40',
    lastReviewed: '2026-11-25',
    safetyClassification: 'clinical-guidance',
    followUps: ['What birth control is safest in perimenopause?', 'What causes postmenopausal bleeding?', 'How long does perimenopause last?']
  }
];

export const RED_FLAG_TRIGGERS = [
  'fainted', 'fainting', 'blacked out', 'unconscious',
  'severe bleeding', 'soaking pad every hour', 'soaked through clothes',
  'huge blood clot', 'large clot', 'clot bigger than coin',
  'bleeding after menopause', 'postmenopausal bleeding',
  'pregnant and bleeding', 'miscarriage', 'severe fever with tampon',
  'vomiting from cramps', 'unbearable pain', 'chest pain'
];

export const CRISIS_TRIGGERS = [
  'kill myself', 'suicide', 'self harm', 'hurt myself', 'want to die',
  'hopeless', 'end my life', 'cut myself'
];
