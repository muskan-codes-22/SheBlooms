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
  stage?: 'puberty' | 'cycle' | 'menopause' | 'educator';
  sourceArticleId: string;
  followUps: string[];
}

export const QA_DATABASE: QAEntry[] = [
  {
    id: 'pain-normal',
    keywords: ['pain', 'cramps', 'hurts', 'cramping', 'ache', 'dysmenorrhea'],
    question: 'Is period pain normal?',
    answer: {
      opener: 'Hello bloom! 🌸 It is very common to feel mild cramping, especially during the first day or two of bleeding.',
      explanation: 'Mild cramps happen because your body produces natural substances called prostaglandins that help your uterus gently contract to shed its lining. However, excruciating or disabling pain that makes you throw up or miss school/work is NOT normal.',
      tips: [
        'Place a warm water bottle or heating pad over your lower abdomen.',
        'Sip warm chamomile or fresh ginger tea to naturally calm uterine muscle contractions.',
        'Try gentle pelvic stretches like Child’s Pose (Balasana).',
        'Over-the-counter anti-inflammatories like ibuprofen can help when taken with food.'
      ],
      doctorAlert: 'If your pain is severe, keeps worsening, causes fainting or nausea, or does not improve with basic pain relievers, please speak with a doctor or gynecologist.'
    },
    category: 'medical',
    sourceArticleId: 'period-pain-normal',
    followUps: ['Which foods help with cramps?', 'How do I know if I have endometriosis?', 'Can exercise reduce cramps?']
  },
  {
    id: 'cycle-length',
    keywords: ['cycle', 'length', 'days', 'normal cycle', 'how long', 'frequency'],
    question: 'What is a normal cycle length?',
    answer: {
      opener: 'Great question! Every body has its own unique monthly rhythm 🌿',
      explanation: 'A typical menstrual cycle lasts between 21 and 35 days in adults, counted from Day 1 of bleeding to Day 1 of your next period. For teenagers during the first 2 to 3 years after menarche, cycles can naturally range anywhere from 21 to 45 days.',
      tips: [
        'Track your Day 1 in a calendar or private note to discover your personal rhythm.',
        'Bleeding itself usually lasts between 2 to 7 days.',
        'Stress, changes in sleep, travel, or exams can temporarily delay your period by a few days.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'what-is-a-period',
    followUps: ['What are the 4 phases of the cycle?', 'Why is my period late?', 'How much blood do you lose?']
  },
  {
    id: 'use-tampon',
    keywords: ['tampon', 'how to use tampon', 'insert tampon', 'applicator', 'tampons swim'],
    question: 'How do I use a tampon safely?',
    answer: {
      opener: 'Using a tampon can feel a little intimidating the first time, but you\'ve got this! 🌸',
      explanation: 'Tampons are small cylinders of absorbent cotton inserted into the vagina to absorb menstrual fluid before it exits. The vagina angles naturally towards your lower back, not straight up.',
      tips: [
        'Always wash your hands thoroughly with soap before and after handling a tampon.',
        'Get into a comfortable position — either sitting on the toilet with knees wide or standing with one foot on the toilet rim.',
        'Gently insert the applicator pointing towards your lower spine until your fingers touch your skin, then push the plunger in.',
        'Always change your tampon every 4 to 8 hours — never leave one in for longer than 8 hours to prevent Toxic Shock Syndrome (TSS).'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'first-period-kit-guide',
    followUps: ['Can a tampon get lost inside me?', 'Can I swim with a tampon?', 'What is Toxic Shock Syndrome?']
  },
  {
    id: 'tampon-lost',
    keywords: ['lost', 'stuck', 'tampon lost', 'can tampon get lost', 'inside body'],
    question: 'Can a tampon get lost inside my body?',
    answer: {
      opener: 'Here is total peace of mind: it is anatomically impossible for a tampon to get lost inside you! 💖',
      explanation: 'Your vagina is a closed muscular tube that ends at your cervix (the tiny neck of your uterus). The opening in the cervix is pinhead-small — only fluids and microscopic sperm can pass through, never a tampon.',
      tips: [
        'If a string feels out of reach, take a slow deep breath to relax your pelvic muscles.',
        'Squat down and gently insert two clean fingers to reach the base of the tampon.',
        'If you still cannot remove it, a doctor or clinic nurse can easily and painlessly assist you.'
      ]
    },
    category: 'myths',
    sourceArticleId: 'period-myths-busted',
    followUps: ['How often should I change a tampon?', 'What are menstrual cups?', 'Can I use pads instead?']
  },
  {
    id: 'first-period-signs',
    keywords: ['first period', 'menarche', 'signs', 'puberty', 'when will i get', 'starter'],
    question: 'What are the signs that my first period is coming?',
    answer: {
      opener: 'Welcome, young bloom! Your body is growing in wonderful ways 🌱',
      explanation: 'Most girls experience menarche between ages 9 and 15, usually about 1.5 to 2 years after breast buds first develop. Your body will give gentle clues beforehand.',
      tips: [
        'You may notice clear, whitish, or pale discharge in your underwear for several months prior.',
        'Growth of soft pubic hair and underarm hair is a common earlier milestone.',
        'A sudden growth spurt often happens shortly before your first period.',
        'Keep a small pouch in your school bag with a pad and spare undies so you feel completely prepared.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'first-period-expect',
    followUps: ['What does a first period look like?', 'What should go in a first period kit?', 'What is discharge?']
  },
  {
    id: 'perimenopause-definition',
    keywords: ['perimenopause', 'menopause', 'hot flush', 'flashes', 'night sweats', '40s'],
    question: 'What is perimenopause and what are the early signs?',
    answer: {
      opener: 'Warm greetings! Navigating your 40s comes with natural hormonal calibration 🌾',
      explanation: 'Perimenopause is the transition phase leading to menopause, typically beginning in your early-to-mid 40s. Estrogen and progesterone fluctuate rather than drop abruptly.',
      tips: [
        'Changes in cycle length (shorter or longer gaps between periods) is the most common early sign.',
        'Occasional night warmth or hot flushes during temperature changes.',
        'Mild brain fog, temporary sleep awakenings, or fluctuating moods.',
        'Remember that pregnancy is still biologically possible during perimenopause.'
      ],
      doctorAlert: 'Any sudden heavy bleeding, or bleeding after 12 full months without a period, should always be checked by your gynecologist.'
    },
    category: 'basics',
    sourceArticleId: 'perimenopause-early-signs',
    followUps: ['How do I manage hot flushes?', 'What is the average age for menopause?', 'Does perimenopause affect sleep?']
  },
  {
    id: 'heavy-bleeding-alert',
    keywords: ['heavy', 'bleeding', 'clots', 'soaking', 'flooding', 'too much blood', 'menorrhagia'],
    question: 'How do I know if my period is too heavy?',
    answer: {
      opener: 'Thank you for asking this vital health question 🩺',
      explanation: 'While period flow varies from day to day (usually heaviest on days 1 and 2), bleeding should never overwhelm your ability to go about your day safely.',
      tips: [
        'Soaking through one or more regular pads or tampons every hour for 2+ consecutive hours is considered heavy.',
        'Passing blood clots larger than a coin (about 2.5 cm or an Indian 1-rupee/quarter coin) is a signal.',
        'Waking up multiple times at night to change protection or bleeding through clothes.',
        'Feeling dizzy, lightheaded, abnormally fatigued, or short of breath.'
      ],
      doctorAlert: 'If you are soaking a pad every hour or passing large clots, please visit a doctor or healthcare clinic. Treatments like tranexamic acid, iron support, or hormonal care make a huge difference!'
    },
    category: 'medical',
    sourceArticleId: 'warning-signs-doctor',
    followUps: ['What causes heavy bleeding?', 'Can low iron make me tired during periods?', 'What questions should I ask my doctor?']
  },
  {
    id: 'discharge-normal',
    keywords: ['discharge', 'white', 'clear', 'fluid', 'wet', 'cervical mucus'],
    question: 'Is vaginal discharge normal?',
    answer: {
      opener: 'Yes, absolutely! Vaginal discharge is your body’s magnificent self-cleaning system 🫧',
      explanation: 'The cervix and vaginal walls constantly produce a natural fluid that carries away old cells and bacteria, keeping your reproductive tract clean, acidic, and healthy.',
      tips: [
        'Normal discharge is typically clear, milky white, or pale cream, with little to no scent.',
        'During ovulation (mid-cycle), discharge becomes slippery, stretchy, and clear like raw egg whites.',
        'Before or after your period, it may look thicker or slightly brownish.',
        'Wash only the external vulva with warm water — avoid douching!'
      ],
      doctorAlert: 'Contact a doctor if discharge is clumpy like cottage cheese, greenish-yellow, smells fishy, or causes burning/itching.'
    },
    category: 'hygiene',
    sourceArticleId: 'hygiene-dos-donts',
    followUps: ['Why should I never douche?', 'What does healthy vulva care look like?', 'How do I know if I have a yeast infection?']
  },
  {
    id: 'swimming-exercise',
    keywords: ['swim', 'swimming', 'exercise', 'gym', 'workout', 'sports', 'run'],
    question: 'Can I exercise and swim during my period?',
    answer: {
      opener: 'Yes, absolutely! Movement can actually be your greatest ally 🏊‍♀️',
      explanation: 'There is zero medical reason to stop exercising or swimming. In fact, moderate exercise releases endorphins — your body’s natural painkillers that reduce cramp intensity and uplift mood.',
      tips: [
        'For swimming: Use an internal product (tampon or menstrual cup) or leak-proof swim period underwear.',
        'Water pressure gently slows outward flow while submerged, but once you exit, gravity resumes, so internal protection is best.',
        'For workouts: Choose what feels good! Gentle yoga, walking, and swimming are wonderful on heavier days; you can resume weight training when energy rebounds.'
      ]
    },
    category: 'myths',
    sourceArticleId: 'period-myths-busted',
    followUps: ['Can period water hurt others in the pool?', 'Which yoga poses ease cramps?', 'Is it safe to run on Day 1?']
  },
  {
    id: 'missed-period',
    keywords: ['missed', 'late', 'skipped', 'no period', 'amenorrhea', 'delayed'],
    question: 'Why is my period late or missed?',
    answer: {
      opener: 'A late period can feel worrisome, but our cycles are sensitive to life changes 🌸',
      explanation: 'Occasional cycle delays happen because ovulation was delayed. The menstrual cycle is directed by the brain (hypothalamus), which responds sensitively to stress, travel, illness, and nutrition.',
      tips: [
        'High stress or exam pressure is a very frequent cause of temporary ovulation delays.',
        'Sudden weight changes, intense athletic training, or illness (like a fever/flu) can shift your cycle.',
        'If you are sexually active, taking an over-the-counter home pregnancy test is a prudent first step.',
        'In teenagers, the hormonal axis takes 2 to 3 years to become fully regular.'
      ],
      doctorAlert: 'If you have missed periods for 3 consecutive months (and you are not pregnant), consult a healthcare provider to check thyroid hormones, PCOS, or prolactin.'
    },
    category: 'medical',
    sourceArticleId: 'warning-signs-doctor',
    followUps: ['What is PCOS?', 'How does stress affect periods?', 'When should I see a doctor for irregular periods?']
  },
  {
    id: 'pms-mood-swings',
    keywords: ['pms', 'mood', 'crying', 'angry', 'irritated', 'sad', 'pmdd'],
    question: 'Why do I get so emotional or irritated before my period?',
    answer: {
      opener: 'You are not imagining it, and you are definitely not alone 💭',
      explanation: 'In the week before bleeding (the late luteal phase), estrogen and progesterone drop rapidly. This drop directly influences serotonin, a neurotransmitter that regulates calm and happiness.',
      tips: [
        'Notice your calendar: when you recognize emotional waves as hormonal shifts, it reduces self-criticism.',
        'Keep caffeine and excessive sugary treats moderate, as they can amplify anxiety and energy crashes.',
        'Carve out restorative downtime — an early bedtime, a warm bath, or an honest chat with a close friend.',
        'If mood swings feel unbearable or include deep despair, look into PMDD with a caring doctor.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'understanding-pms',
    followUps: ['What is the difference between PMS and PMDD?', 'Which supplements support mood?', 'Why do I crave chocolate before periods?']
  },
  {
    id: 'menstrual-cup-how',
    keywords: ['cup', 'menstrual cup', 'silicone', 'fold', 'insert cup', 'sanitize'],
    question: 'How does a menstrual cup work and how do I insert it?',
    answer: {
      opener: 'Menstrual cups are an eco-friendly, comfortable choice loved by millions 🌿',
      explanation: 'A menstrual cup is a flexible bell made of medical-grade silicone that collects menstrual fluid instead of absorbing it. It creates a gentle suction seal against the vaginal walls.',
      tips: [
        'Sanitize: Boil the cup in hot water for 3 to 5 minutes before your cycle begins.',
        'Fold: Use the "C-fold" or "Punch-down fold" to make the cup rim as small as a tampon.',
        'Insert: Relax, separate your labia, and slide the folded cup back towards your tailbone. Let it pop open.',
        'Empty: Gently pinch the base to release the suction seal before sliding it out. Wash and reinsert!'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'first-period-kit-guide',
    followUps: ['How often do I empty a menstrual cup?', 'Can a cup leak?', 'How do I choose the right cup size?']
  },
  {
    id: 'hot-flushes-tips',
    keywords: ['hot flush', 'hot flashes', 'sweat', 'night sweat', 'cooling', 'menopause cooling'],
    question: 'What can I do to cool down during hot flushes?',
    answer: {
      opener: 'Hot flushes can be startling, but there are proven ways to stay cool and comfortable 🍵',
      explanation: 'During perimenopause and menopause, lower estrogen narrows your brain\'s thermo-neutral zone, causing sudden heat waves, flushed skin, and sweating.',
      tips: [
        'Dress in breathable layers of cotton, linen, or bamboo so you can adjust easily.',
        'Keep ice water nearby and sip it slowly the moment you feel a warmth wave starting.',
        'Lower bedroom temperature to 65°F (18°C) and use layered bedsheets instead of heavy duvets.',
        'Common triggers: spicy foods, red wine, caffeine, and hot showers before bed.'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'menopause-hot-flushes',
    followUps: ['What foods trigger hot flushes?', 'Can HRT help with menopause symptoms?', 'Why does menopause affect bone density?']
  },
  {
    id: 'talking-to-kids',
    keywords: ['talk to daughter', 'teach students', 'educator', 'parent', 'period talk', 'first talk'],
    question: 'How can I comfortably talk to my daughter or students about periods?',
    answer: {
      opener: 'Thank you for stepping up to guide the next generation with warmth and openness 🤝',
      explanation: 'Children absorb attitudes before words. Presenting menstruation as a healthy, normal milestone rather than a secret taboo creates life-long confidence.',
      tips: [
        'Use accurate anatomical terms: uterus, vagina, vulva, menstruation.',
        'Start around age 8 to 10 with short, positive conversations rather than one intimidating marathon talk.',
        'Show real pads and explain how they stick to underwear; demystifying the supplies eliminates anxiety.',
        'Educate boys as well — normalizing periods in schools drastically reduces teasing.'
      ]
    },
    category: 'myths',
    sourceArticleId: 'talking-to-daughter-students',
    followUps: ['What should go into a school period kit?', 'What age should boys learn about periods?', 'How do teachers support menstruating students?']
  },
  {
    id: 'food-for-cramps',
    keywords: ['food', 'diet', 'nutrition', 'eat', 'chocolate', 'tea', 'cramp relief food'],
    question: 'What foods and drinks help reduce menstrual cramps?',
    answer: {
      opener: 'Nourishing your body with anti-inflammatory foods makes a wonderful difference 🥑',
      explanation: 'Certain nutrients naturally relax smooth uterine muscles and block inflammatory prostaglandin pathways.',
      tips: [
        'Magnesium rich: Pumpkin seeds, spinach, bananas, and dark chocolate (70%+) help relax muscles.',
        'Herbal teas: Warm ginger tea, peppermint tea, and chamomile tea ease cramping and calm digestion.',
        'Omega-3 fatty acids: Walnuts, chia seeds, flaxseeds, and salmon reduce systemic inflammation.',
        'Drink lots of warm water to reduce fluid retention and bloating.'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'food-movement-cramps',
    followUps: ['Should I avoid caffeine on my period?', 'Why do I crave sugar before bleeding?', 'Can magnesium prevent cramps?']
  },
  {
    id: 'blood-color',
    keywords: ['color', 'brown blood', 'black blood', 'pink blood', 'dark blood', 'clots color'],
    question: 'Why is my period blood brown, dark, or pink?',
    answer: {
      opener: 'Color changes are completely normal throughout your period! 🎨',
      explanation: 'Period blood changes color as it reacts with oxygen in the air (a natural process called oxidation).',
      tips: [
        'Bright Red: Fresh, active blood moving quickly out of the uterus (typical on days 1–3).',
        'Dark Red or Brown: Blood that took a little longer to leave the uterus and had time to oxidize (normal on light days).',
        'Pinkish: Blood diluted with natural cervical fluid (often at the very start or end of your period).',
        'Small Clots: Natural clotting proteins help manage flow; jelly-like clots smaller than a coin are normal.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'what-is-a-period',
    followUps: ['What size clot is too big?', 'Why does blood smell metallic?', 'Is brown spotting a period?']
  },
  {
    id: 'hygiene-washing',
    keywords: ['wash', 'soap', 'clean', 'smell', 'odor', 'douche', 'hygiene'],
    question: 'How should I clean my intimate area during my period?',
    answer: {
      opener: 'Gentle simplicity is the golden rule of intimate hygiene 🫧',
      explanation: 'The vagina (inside canal) is completely self-cleaning. You only ever need to clean the vulva (the outside skin and folds).',
      tips: [
        'Use plain warm water to wash the vulva. If using soap, use an unscented, mild, gentle cleanser on the outer skin only.',
        'Never douche or spray perfumes inside or on your vulva; this destroys protective acid-producing bacteria.',
        'Always wipe gently from front to back after using the restroom.',
        'Change pads every 4 to 6 hours to prevent bacterial buildup and keep skin dry.'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'hygiene-dos-donts',
    followUps: ['Why does my period have an odor?', 'What underwear material is healthiest?', 'Can scented pads cause irritation?']
  }
];

export const RED_FLAG_TRIGGERS = [
  'fainted', 'fainting', 'blacked out', 'unconscious',
  'severe bleeding', 'soaking pad every hour', 'soaked through clothes',
  'huge blood clot', 'large clot', 'clot bigger than golf ball',
  'bleeding after menopause', 'postmenopausal bleeding',
  'pregnant and bleeding', 'miscarriage', 'severe fever with tampon',
  'vomiting from cramps', 'unbearable pain', 'chest pain'
];

export const CRISIS_TRIGGERS = [
  'kill myself', 'suicide', 'self harm', 'hurt myself', 'want to die',
  'hopeless', 'end my life', 'cut myself'
];

