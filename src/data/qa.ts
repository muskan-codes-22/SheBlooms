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
    keywords: ['pain', 'cramps', 'hurts', 'cramping', 'ache', 'dysmenorrhea', 'pet dard'],
    question: 'Is period pain normal?',
    answer: {
      opener: 'Hello bloom! 🌸 It is very common to feel mild cramping, especially on day 1 or 2 of your period.',
      explanation: 'Mild cramps happen when natural body chemicals called prostaglandins make the womb squeeze gently to shed its lining. But severe pain that makes you vomit or miss school or work is NOT normal.',
      tips: [
        'Place a hot water bag (garam paani ki thaili) or a warm cloth over your lower belly.',
        'Sip warm ginger (adrak) tea or ajwain water to soothe tummy spasms naturally.',
        'Try gentle body stretches like Child’s Pose (Balasana) or lie down with knees bent.',
        'If pain continues, ask a doctor or pharmacist for safe pain relief (like paracetamol).'
      ],
      doctorAlert: 'Is your pain severe or causing vomiting or fainting? Please see a doctor or gynaecologist at your nearest primary health centre (PHC).'
    },
    category: 'medical',
    sourceArticleId: 'period-pain-normal',
    followUps: ['Which foods help with cramps?', 'How do I know if I have endometriosis?', 'Can exercise reduce cramps?']
  },
  {
    id: 'cycle-length',
    keywords: ['cycle', 'length', 'days', 'normal cycle', 'how long', 'frequency', 'gap'],
    question: 'What is a normal cycle length?',
    answer: {
      opener: 'Great question! Every body has its own unique monthly rhythm 🌿',
      explanation: 'A normal menstrual cycle lasts between 21 and 35 days in healthy adults. You count from Day 1 of bleeding to Day 1 of your next period. For teenagers in the first 2 to 3 years, gaps up to 45 days are normal.',
      tips: [
        'Mark your Day 1 on a calendar or diary to know your rhythm.',
        'Bleeding itself usually lasts between 2 to 7 days.',
        'School exam stress, travel, or illness can temporarily delay your period by a few days.'
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
      opener: 'Using a tampon can feel new at first, but with a little practice it is simple! 🌸',
      explanation: 'A tampon is a small cotton plug inserted into the vagina to soak period fluid inside. The canal angles gently towards your lower back, not straight up.',
      tips: [
        'Always wash your hands thoroughly with soap and clean water first.',
        'Squat comfortably or sit on the toilet with knees wide apart.',
        'Gently slide the tampon towards your lower spine until it sits comfortably inside.',
        'Always change your tampon every 4 to 8 hours. Never leave it in longer than 8 hours.'
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
      opener: 'Here is complete peace of mind: it is anatomically impossible for a tampon to get lost inside you! 💖',
      explanation: 'Your vagina is a closed canal about 7 to 10 cm deep. It ends at your cervix, which has a tiny pinhead opening. Nothing like a tampon can pass through into your stomach.',
      tips: [
        'If the removal string feels hard to find, take a slow deep breath to relax your muscles.',
        'Squat down and gently use two clean fingers to reach the base of the tampon.',
        'If you still cannot remove it, visit a female doctor or ASHA didi who can remove it painlessly in a minute.'
      ]
    },
    category: 'myths',
    sourceArticleId: 'period-myths-busted',
    followUps: ['How often should I change a tampon?', 'What are menstrual cups?', 'Can I use pads instead?']
  },
  {
    id: 'first-period-signs',
    keywords: ['first period', 'menarche', 'signs', 'puberty', 'when will i get', 'starter', 'pehli baar'],
    question: 'What are the signs that my first period is coming?',
    answer: {
      opener: 'Welcome, young bloom! Your body is growing in healthy and natural ways 🌱',
      explanation: 'Most girls get their first period (menarche) between ages 9 and 15 (Class 6 to 10). It usually starts about 1 to 2 years after breast buds begin growing.',
      tips: [
        'You may notice clear or whitish fluid (discharge) on your underwear for a few months before.',
        'Soft hair starts growing under your arms and around your private area.',
        'A sudden growth in height often happens shortly before your first period.',
        'Keep 2 pads and spare underwear in a pouch in your school bag so you feel confident.'
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
      opener: 'Warm greetings! Navigating your 40s comes with natural body wisdom 🌾',
      explanation: 'Perimenopause is the natural bridge leading to menopause. It usually begins in your early-to-mid 40s as hormones naturally rise and fall irregularly.',
      tips: [
        'Changing gaps between periods (early, late, lighter, or heavier) is the most common early sign.',
        'Occasional sudden heat waves (hot flushes) on your face or neck, especially at night.',
        'Light sleep, mild forgetfulness, or mood shifts.',
        'Remember: pregnancy is still biologically possible during perimenopause.'
      ],
      doctorAlert: 'Any sudden very heavy bleeding, or bleeding after 12 full months without a period, must be checked by a gynaecologist.'
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
      opener: 'Thank you for asking this important health question 🩺',
      explanation: 'Period flow is usually heavier on days 1 and 2. But bleeding should never stop you from working or make you feel weak and breathless.',
      tips: [
        'Soaking 1 or more regular pads completely every hour for 2 hours in a row is too heavy.',
        'Passing blood clots bigger than an Indian ₹5 coin (about 2.5 cm) is an important sign.',
        'Waking up multiple times at night to change pads, or bleeding through clothing.',
        'Feeling dizzy, abnormally tired, pale, or breathless.'
      ],
      doctorAlert: 'If you are soaking a pad every hour or passing large clots, visit a primary health centre (PHC) or doctor. Treatments like iron support and medical tablets provide quick relief!'
    },
    category: 'medical',
    sourceArticleId: 'warning-signs-doctor',
    followUps: ['What causes heavy bleeding?', 'Can low iron make me tired during periods?', 'What questions should I ask my doctor?']
  },
  {
    id: 'discharge-normal',
    keywords: ['discharge', 'white', 'clear', 'fluid', 'wet', 'cervical mucus', 'safed paani'],
    question: 'Is vaginal discharge normal?',
    answer: {
      opener: 'Yes, absolutely! Natural discharge is your body’s self-cleaning fluid 🫧',
      explanation: 'The cervix and vaginal walls constantly produce clear or whitish fluid. It carries away old cells and keeps your intimate area healthy and clean.',
      tips: [
        'Normal fluid is clear, milky white, or pale cream, with no foul smell.',
        'Midway through your cycle (ovulation), fluid becomes stretchy and clear like raw egg whites.',
        'Before or after your period, it can look thicker or light brownish.',
        'Wash only the outside area (vulva) with clean water during your bath.'
      ],
      doctorAlert: 'See a doctor or visit a PHC if discharge is thick and clumpy like curd (chenna), greenish-yellow, smells bad, or causes burning or itching.'
    },
    category: 'hygiene',
    sourceArticleId: 'hygiene-dos-donts',
    followUps: ['Why should I never douche?', 'What does healthy vulva care look like?', 'How do I know if I have a yeast infection?']
  },
  {
    id: 'swimming-exercise',
    keywords: ['swim', 'swimming', 'exercise', 'gym', 'workout', 'sports', 'run', 'yoga'],
    question: 'Can I exercise and walk during my period?',
    answer: {
      opener: 'Yes, absolutely! Gentle movement is safe and helps reduce pain 🏃‍♀️',
      explanation: 'There is no medical reason to stay in bed unless you feel tired. Light exercise releases natural body chemicals that ease cramps and lift your mood.',
      tips: [
        'For walking and daily chores: A standard sanitary pad or clean cloth is comfortable.',
        'For swimming: Use a menstrual cup or tampon so fluid stays secure inside.',
        'For yoga: Poses like Child’s Pose (Balasana) or gentle stretches relax lower back stiffness.',
        'Rest if you feel low on energy on heavier days.'
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
      opener: 'A delayed period can feel worrying, but cycles are sensitive to everyday life changes 🌸',
      explanation: 'Occasional delays happen because ovulation was delayed. The brain center that guides hormones reacts quickly to exam stress, travel, illness, or diet changes.',
      tips: [
        'High stress, fever, or school exam pressure is a very common cause of temporary delay.',
        'Significant weight loss, poor diet, or weakness can also pause periods.',
        'If you are married or sexually active, taking a simple home urine pregnancy test is a good first step.',
        'For teenagers, irregular cycles are normal for the first 2 to 3 years.'
      ],
      doctorAlert: 'Has your period stopped for 3 months in a row (if not pregnant)? Visit a doctor or gynaecologist to check for thyroid imbalance or PCOS.'
    },
    category: 'medical',
    sourceArticleId: 'warning-signs-doctor',
    followUps: ['What is PCOS?', 'How does stress affect periods?', 'When should I see a doctor for irregular periods?']
  },
  {
    id: 'pms-mood-swings',
    keywords: ['pms', 'mood', 'crying', 'angry', 'irritated', 'sad', 'pmdd', 'chidhchidhapan'],
    question: 'Why do I get irritated or emotional before my period?',
    answer: {
      opener: 'You are not imagining it, and you are definitely not alone 💭',
      explanation: 'In the week before your period, estrogen and progesterone drop rapidly. This drop affects serotonin in the brain, which manages happiness and calmness.',
      tips: [
        'Track your days: knowing your pre-period week helps you understand sudden mood shifts.',
        'Eat balanced meals with dal, sabzi, and whole grains to keep blood sugar stable.',
        'Drink warm water, cut down on excess salty snacks, and get 8 hours of sleep.',
        'If pre-period sadness is very severe, consult a doctor or counselor for PMDD support.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'understanding-pms',
    followUps: ['What is the difference between PMS and PMDD?', 'Which foods help with mood?', 'Why do I crave sweets before periods?']
  },
  {
    id: 'menstrual-cup-how',
    keywords: ['cup', 'menstrual cup', 'silicone', 'fold', 'insert cup', 'sanitize'],
    question: 'How does a menstrual cup work and how do I use it?',
    answer: {
      opener: 'Menstrual cups are an eco-friendly and affordable choice that lasts for years 🌿',
      explanation: 'A menstrual cup is a soft, flexible bell made of medical-grade silicone. It sits inside the vagina to collect period fluid rather than soak it.',
      tips: [
        'Boil: Before each monthly cycle, boil the cup in clean water for 3 to 5 minutes.',
        'Fold: Fold the rim flat and bend in half (C-fold) so it becomes as small as a finger.',
        'Insert: Relax, squat down, and gently slide the folded cup in towards your lower back. It pops open.',
        'Empty: After 8 to 12 hours, pinch the base to release suction, empty into the toilet, rinse with water, and reinsert.'
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
      opener: 'Hot flushes can be uncomfortable, but simple everyday habits bring quick relief 🍵',
      explanation: 'During perimenopause and menopause, lower estrogen tricks the brain into thinking the body is too hot. This causes sudden warmth, sweating, and redness.',
      tips: [
        'Wear loose, breathable cotton clothes so air circulates freely.',
        'Keep a bottle of cool water near your bed and sip it slowly when warmth starts.',
        'Keep bedroom temperature around 18°C to 20°C and use light cotton sheets.',
        'Avoid very oily spicy dinners, strong coffee, or tea close to bedtime.'
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
      opener: 'Thank you for guiding young bloomers with kindness and openness 🤝',
      explanation: 'Children learn attitudes before words. Presenting menstruation as a healthy, normal body milestone removes fear and shame for life.',
      tips: [
        'Use simple, accurate words: womb, period, sanitary pad.',
        'Start early around Class 4 or 5 (ages 8 to 10) with short, natural conversations.',
        'Show real pads and explain how they stick to underwear; seeing supplies eliminates worry.',
        'Teach boys as well — normalizing periods in schools stops teasing and awkwardness.'
      ]
    },
    category: 'myths',
    sourceArticleId: 'talking-to-daughter-students',
    followUps: ['What should go into a school period kit?', 'What age should boys learn about periods?', 'How do teachers support menstruating students?']
  },
  {
    id: 'food-for-cramps',
    keywords: ['food', 'diet', 'nutrition', 'eat', 'tea', 'cramp relief food', 'khana'],
    question: 'What Indian foods and drinks help reduce menstrual cramps?',
    answer: {
      opener: 'Simple foods and warm drinks from your kitchen make a wonderful difference 🫖',
      explanation: 'Certain everyday Indian foods naturally relax womb muscles and lower inflammation.',
      tips: [
        'Iron and green foods: Spinach (palak), methi, chana, rajma, sprouts, and a small piece of jaggery (gud).',
        'Warm sips: Fresh ginger (adrak) tea, ajwain water, or saunf water calm stomach spasms.',
        'Bedtime comfort: A warm cup of haldi doodh (turmeric milk) helps soothe body ache and improves sleep.',
        'Drink plenty of warm water, nimbu pani, or coconut water (nariyal pani) to ease bloating.'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'food-movement-cramps',
    followUps: ['Should I avoid cold water on my period?', 'Why do I crave sweets before bleeding?', 'Can jaggery help with period cramps?']
  },
  {
    id: 'blood-color',
    keywords: ['color', 'brown blood', 'black blood', 'pink blood', 'dark blood', 'clots color'],
    question: 'Why is my period blood brown, dark, or pink?',
    answer: {
      opener: 'Color changes are completely normal across your period days! 🎨',
      explanation: 'Period blood changes color when it touches oxygen in the air (a natural process called oxidation).',
      tips: [
        'Bright Red: Fresh blood moving quickly out of the womb (typical on days 1 to 3).',
        'Dark Brown: Blood that moved slowly and touched air (common on light days or at the start/end).',
        'Pinkish: Blood mixed with natural cervical fluid (normal at the start or finish).',
        'Small Clots: Natural jelly-like clots smaller than a ₹5 coin are completely normal.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'what-is-a-period',
    followUps: ['What size clot is too big?', 'Why does blood smell metallic?', 'Is brown spotting a period?']
  },
  {
    id: 'hygiene-washing',
    keywords: ['wash', 'soap', 'clean', 'smell', 'odor', 'douche', 'hygiene', 'safai'],
    question: 'How should I clean my intimate area during my period?',
    answer: {
      opener: 'Gentle simplicity is the best rule for intimate hygiene 🫧',
      explanation: 'The vagina (inside passage) cleans itself naturally. You only ever need to wash the vulva (the outside skin and folds).',
      tips: [
        'Use plain clean warm water to wash the outside area during your daily bath.',
        'Never wash inside the vagina or use perfumed soaps, talcum powder, or chemical washes.',
        'Always wash or wipe gently from front to back after using the toilet.',
        'Change pads every 4 to 6 hours to stay dry, comfortable, and rash-free.'
      ]
    },
    category: 'hygiene',
    sourceArticleId: 'hygiene-dos-donts',
    followUps: ['Why does my period have an odor?', 'What underwear material is healthiest?', 'Can scented pads cause irritation?']
  },
  {
    id: 'contraceptive-pills-how',
    keywords: ['pill', 'birth control', 'oral contraceptive', 'contraceptive pills', 'mala d', 'chhaya', 'garbhnirodhak'],
    question: 'How do birth control pills work and how are they taken?',
    answer: {
      opener: 'Contraceptive pills are a common, scientifically proven way to plan pregnancy 💊',
      explanation: 'Daily pills stop your ovaries from releasing an egg each month (ovulation). They also thicken cervical mucus so sperm cannot enter the womb.',
      tips: [
        'Take 1 pill at the exact same hour every day, such as bedtime or after dinner.',
        'Always consult a doctor or visit a Primary Health Centre (PHC) before starting.',
        'If you miss a pill, take it as soon as you remember and check the packet leaflet.',
        'Pills do not protect against STIs — pair with condoms for complete protection.'
      ]
    },
    category: 'medical',
    sourceArticleId: 'contraception-and-pills',
    followUps: ['What happens if I miss a birth control pill?', 'Do contraceptive pills cause weight gain?', 'Can pills help reduce heavy period flow?']
  },
  {
    id: 'emergency-pill-guide',
    keywords: ['emergency pill', 'morning after', 'i-pill', '72 hours', 'unprotected', 'e-pill'],
    question: 'What is an emergency contraceptive pill and when should it be used?',
    answer: {
      opener: 'Emergency pills are an occasional safety net, not regular birth control ⚡',
      explanation: 'An emergency contraceptive pill delays egg release when taken within 72 hours of unprotected intercourse or a broken condom.',
      tips: [
        'Take it as soon as possible — it works best within the first 12 to 24 hours.',
        'It does NOT cause abortion and cannot end an established pregnancy.',
        'It does not replace regular daily contraception or protect against STIs.',
        'If your next period is delayed by more than 7 days, take a home pregnancy test.'
      ]
    },
    category: 'medical',
    sourceArticleId: 'contraception-and-pills',
    followUps: ['How often can you take an emergency pill?', 'Does the morning after pill delay your period?', 'Where can I get emergency pills in India?']
  },
  {
    id: 'consent-boundaries-how',
    keywords: ['consent', 'boundary', 'boundaries', 'say no', 'relationship respect', 'autonomy', 'touch'],
    question: 'What does consent mean and how do I set personal boundaries?',
    answer: {
      opener: 'Your body belongs entirely to you, and your comfort always comes first 🤝',
      explanation: 'Consent means both people freely, clearly, and happily agree. You have the full right to say "No" to any touch or request that feels wrong.',
      tips: [
        'Consent must be freely given: pressure, threats, or guilt are never consent.',
        'You can change your mind and pause or stop at any second without apology.',
        'Digital boundaries count: never feel pressured to send private photos or chats.',
        'Both partners must agree on birth control together before any intimacy.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'consent-and-boundaries',
    followUps: ['How do I say no politely but firmly?', 'What is reproductive consent?', 'Who can I talk to if someone violates my boundaries?']
  },
  {
    id: 'pregnancy-early-signs',
    keywords: ['pregnant', 'pregnancy signs', 'missed period pregnancy', 'conception', 'pregnancy test', 'pregnant symptoms'],
    question: 'What are the earliest signs of pregnancy?',
    answer: {
      opener: 'Every woman’s body gives subtle early clues when conception happens 🤰',
      explanation: 'The clearest early sign is a missed menstrual period. Other hormonal changes often follow within a few weeks.',
      tips: [
        'Tender, swollen breasts or dark areolas.',
        'Morning sickness, nausea, or sudden strong food dislikes.',
        'Feeling unusually exhausted or needing frequent naps.',
        'Testing: Take a home urine test with first morning urine on the day after your missed period.'
      ]
    },
    category: 'basics',
    sourceArticleId: 'pregnancy-and-ovulation',
    followUps: ['How early can a pregnancy test show positive?', 'Can you bleed while pregnant?', 'What is the fertile window?']
  },
  {
    id: 'perimenopause-pregnancy-risk',
    keywords: ['pregnant perimenopause', 'can i get pregnant at 45', 'menopause pregnancy', 'late pregnancy'],
    question: 'Can I get pregnant during perimenopause?',
    answer: {
      opener: 'Yes, pregnancy is still biologically possible during perimenopause! 🌾',
      explanation: 'Even when periods skip months or become irregular in your 40s, an ovary can still release an egg occasionally.',
      tips: [
        'Continue using contraception until full menopause is officially confirmed.',
        'Menopause means 12 continuous months in a row with zero period bleeding.',
        'Low-dose pills, Copper-T, or condoms are common, safe options in midlife.',
        'Any bleeding that occurs AFTER 12 months of menopause requires an immediate doctor visit.'
      ]
    },
    category: 'medical',
    sourceArticleId: 'pregnancy-and-ovulation',
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
