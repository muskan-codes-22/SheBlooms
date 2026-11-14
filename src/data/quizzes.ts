export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctIndex: number;
  explanation: string;
  isMyth?: boolean; // For true-false / myth-or-fact
  tip?: string;
  relatedArticleId?: string;
}

export interface Quiz {
  id: string;
  title: string;
  subtitle: string;
  badgeTag: string;
  icon: string;
  color: string;
  category: string;
  questions: QuizQuestion[];
  published?: boolean;
}

export const QUIZZES: Quiz[] = [
  {
    id: 'myth-or-fact',
    title: 'Myth or Fact? Period Truths',
    subtitle: 'Swipe or tap to bust ancient taboos and uncover menstrual science',
    badgeTag: '🌟 Stigma Buster',
    icon: '💡',
    color: '#D6457F',
    category: 'Myths & Awareness',
    published: true,
    questions: [
      {
        id: 'mf-1',
        question: 'Myth or Fact: Exercising during your period is harmful to your uterus.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Gentle to moderate exercise actually releases endorphins, which act as natural painkillers to ease cramps and lift mood.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-2',
        question: 'Myth or Fact: A tampon can get lost inside your body.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! The vagina ends at the cervix, whose opening is tiny as a pinhead. Nothing like a tampon can pass through into the abdomen.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-3',
        question: 'Myth or Fact: Taking a warm shower or bath helps soothe period cramps.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! Warm water relaxes contracted pelvic muscles and promotes healthy blood flow, offering soothing natural relief.',
        relatedArticleId: 'food-movement-cramps'
      },
      {
        id: 'mf-4',
        question: 'Myth or Fact: Touching pickles or sour food during your period makes them spoil.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! This is an ancient superstitious taboo without any scientific basis. Menstruation has no effect on food or plants.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-5',
        question: 'Myth or Fact: You can safely swim during your period with a tampon or menstrual cup.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! Tampons and menstrual cups capture flow internally, allowing you to swim and dive freely without leak concerns.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-6',
        question: 'Myth or Fact: Severe, debilitating period pain that causes fainting is just normal "womanhood".',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Severe, incapacitating cramps are NOT normal and may indicate conditions like endometriosis or fibroids that deserve medical care.',
        relatedArticleId: 'period-pain-normal'
      },
      {
        id: 'mf-7',
        question: 'Myth or Fact: The average total blood lost across an entire period is only about 2 to 4 tablespoons.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! Although it appears like more when mixed with cervical mucus and fluids on a pad, 30–60 ml (2–4 tablespoons) is the typical loss.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'mf-8',
        question: 'Myth or Fact: Douching is necessary to keep your intimate area clean and scented.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! The vagina is self-cleaning. Douching washes away good Lactobacillus bacteria and increases infection risks significantly.',
        relatedArticleId: 'hygiene-dos-donts'
      }
    ]
  },
  {
    id: 'cycle-basics',
    title: 'Cycle Basics & Phases',
    subtitle: 'Test your understanding of the 4 hormonal seasons and monthly rhythm',
    badgeTag: '🌙 Rhythm Master',
    icon: '🌓',
    color: '#8B4F7E',
    category: 'Menstrual Health Basics',
    published: true,
    questions: [
      {
        id: 'cb-1',
        question: 'What day is counted as "Day 1" of your menstrual cycle?',
        type: 'multiple-choice',
        options: [
          'The first day of active period bleeding',
          'The day your bleeding completely stops',
          'The middle of the month',
          'The day you experience ovulation pain'
        ],
        correctIndex: 0,
        explanation: 'Day 1 of your cycle is always the very first day of full, active menstrual bleeding.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-2',
        question: 'What is the clinically accepted normal cycle range for healthy adults?',
        type: 'multiple-choice',
        options: [
          'Exactly 28 days only',
          '21 to 35 days',
          '10 to 20 days',
          '40 to 60 days'
        ],
        correctIndex: 1,
        explanation: 'A healthy adult cycle ranges from 21 to 35 days. For teenagers, up to 45 days is common.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'cb-3',
        question: 'During which phase of the cycle does the ovary release a mature egg cell?',
        type: 'multiple-choice',
        options: [
          'Menstrual phase',
          'Follicular phase',
          'Ovulation phase',
          'Luteal phase'
        ],
        correctIndex: 2,
        explanation: 'Ovulation occurs midway through the cycle (around day 14 in a 28-day cycle) when an egg is released from the ovarian follicle.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-4',
        question: 'Which hormone rises after ovulation to prepare the uterine lining and warms the body?',
        type: 'multiple-choice',
        options: [
          'Progesterone',
          'Adrenaline',
          'Insulin',
          'Melatonin'
        ],
        correctIndex: 0,
        explanation: 'Progesterone is produced by the corpus luteum after ovulation, stabilizing the lining and slightly raising basal temperature.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-5',
        question: 'Why do emotional shifts or PMS symptoms commonly occur in the late Luteal phase?',
        type: 'multiple-choice',
        options: [
          'Sudden drop in both estrogen and progesterone',
          'Excessive intake of sugar',
          'Lack of physical walking',
          'A decrease in iron levels'
        ],
        correctIndex: 0,
        explanation: 'When pregnancy doesn’t occur, the rapid drop in estrogen and progesterone impacts serotonin receptors in the brain.',
        relatedArticleId: 'understanding-pms'
      },
      {
        id: 'cb-6',
        question: 'What is the cushion lining of the uterus called that is shed during menstruation?',
        type: 'multiple-choice',
        options: [
          'Endometrium',
          'Epidermis',
          'Myelin',
          'Peritoneum'
        ],
        correctIndex: 0,
        explanation: 'The endometrium is the mucosal inner lining of the uterus built up each month.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'cb-7',
        question: 'What natural chemical triggers uterine contractions to help shed the lining?',
        type: 'multiple-choice',
        options: [
          'Prostaglandins',
          'Cortisol',
          'Histamine',
          'Oxytocin'
        ],
        correctIndex: 0,
        explanation: 'Prostaglandins stimulate uterine smooth muscles to contract, which causes normal mild menstrual cramping.',
        relatedArticleId: 'period-pain-normal'
      },
      {
        id: 'cb-8',
        question: 'How long does active period bleeding typically last in healthy cycles?',
        type: 'multiple-choice',
        options: [
          '2 to 7 days',
          '10 to 14 days',
          'Only 12 hours',
          'Over 3 weeks'
        ],
        correctIndex: 0,
        explanation: 'A normal period lasts between 2 and 7 days, with days 1 and 2 usually being the heaviest.',
        relatedArticleId: 'what-is-a-period'
      }
    ]
  },
  {
    id: 'hygiene-smarts',
    title: 'Hygiene & Self-Care Smarts',
    subtitle: 'Master intimate wellness, changing habits, and gentle comfort care',
    badgeTag: '🫧 Hygiene Guru',
    icon: '🫧',
    color: '#9B7FD1',
    category: 'Hygiene & Self-Care',
    published: false,
    questions: [
      {
        id: 'hs-1',
        question: 'How often should a sanitary pad typically be changed during daytime wear?',
        type: 'multiple-choice',
        options: [
          'Every 4 to 6 hours',
          'Only once a day',
          'Every 12 to 14 hours',
          'Only when completely overflowing'
        ],
        correctIndex: 0,
        explanation: 'Changing pads every 4 to 6 hours prevents moisture accumulation, skin maceration, and bacteria growth.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-2',
        question: 'What is the maximum recommended time to leave a single tampon inside?',
        type: 'multiple-choice',
        options: [
          '8 hours maximum',
          '24 hours',
          '16 hours',
          'As long as it doesn’t leak'
        ],
        correctIndex: 0,
        explanation: 'Never exceed 8 hours with a single tampon to minimize the risk of rare but serious Toxic Shock Syndrome (TSS).',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'hs-3',
        question: 'When washing your intimate area, what is the safest clinical recommendation?',
        type: 'multiple-choice',
        options: [
          'Wash only the outer vulva with warm water',
          'Douche inside the vagina with antibacterial scented soap',
          'Use perfumed body sprays on the intimate area',
          'Use bleach or vinegar rinses'
        ],
        correctIndex: 0,
        explanation: 'The internal vagina is self-cleaning. Only wash the outside vulva with warm water or a gentle, fragrance-free cleanser.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-4',
        question: 'Which mineral helps relax smooth muscles and soothe period cramps?',
        type: 'multiple-choice',
        options: [
          'Magnesium (found in seeds and dark chocolate)',
          'Sodium (table salt)',
          'Refined white sugar',
          'Caffeine'
        ],
        correctIndex: 0,
        explanation: 'Magnesium relaxes uterine smooth muscles and has been shown to reduce cramp intensity.',
        relatedArticleId: 'food-movement-cramps'
      },
      {
        id: 'hs-5',
        question: 'What direction should you always wipe after using the restroom?',
        type: 'multiple-choice',
        options: [
          'Front to back (away from the urethra and vagina)',
          'Back to front',
          'In circular motions',
          'Direction does not matter'
        ],
        correctIndex: 0,
        explanation: 'Wiping front to back prevents bacteria from the anus from entering the urinary tract or vagina.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-6',
        question: 'How should a silicone menstrual cup be sanitized between menstrual cycles?',
        type: 'multiple-choice',
        options: [
          'Boiled in clean water for 3 to 5 minutes',
          'Soaked in bleach',
          'Sprayed with perfume',
          'Wiped with dry tissue only'
        ],
        correctIndex: 0,
        explanation: 'Boiling the medical-grade silicone cup in clean water for 3-5 minutes completely sterilizes it for your next cycle.',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'hs-7',
        question: 'Which fabric is most recommended for healthy intimate underwear?',
        type: 'multiple-choice',
        options: [
          'Breathable 100% cotton',
          'Synthetic polyester or nylon',
          'Non-breathable vinyl',
          'Heavy wool'
        ],
        correctIndex: 0,
        explanation: 'Breathable cotton allows air circulation and prevents humidity traps where yeast can overgrow.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-8',
        question: 'Why is heat therapy (like a hot water bottle) so effective for menstrual cramps?',
        type: 'multiple-choice',
        options: [
          'It dilates blood vessels and relaxes uterine spasms similarly to mild painkillers',
          'It freezes the nerve endings completely',
          'It alters hormone levels permanently',
          'It stops the bleeding immediately'
        ],
        correctIndex: 0,
        explanation: 'Local heat increases blood flow and relaxes myometrial muscle fibers, easing painful spasms.',
        relatedArticleId: 'food-movement-cramps'
      }
    ]
  },
  {
    id: 'first-period-ready',
    title: 'First Period Ready Checklist',
    subtitle: 'Confidence boosters, body clues, and readiness for menarche',
    badgeTag: '🌱 Bud Champion',
    icon: '🌱',
    color: '#D6457F',
    category: 'Puberty & Menarche',
    published: true,
    questions: [
      {
        id: 'fpr-1',
        question: 'What is the medical term for a person’s very first menstrual period?',
        type: 'multiple-choice',
        options: ['Menarche', 'Menopause', 'Ovulation', 'Amenorrhea'],
        correctIndex: 0,
        explanation: 'Menarche (pronounced men-AR-kee) is the scientific term for the first menstrual period in puberty.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-2',
        question: 'Between what typical ages does a first period most commonly arrive?',
        type: 'multiple-choice',
        options: ['Ages 9 to 15', 'Ages 3 to 6', 'Ages 25 to 30', 'Ages 45 to 50'],
        correctIndex: 0,
        explanation: 'Most girls get their first period between 9 and 15 years old, with the average age being around 12.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-3',
        question: 'What does first period fluid frequently look like on your underwear?',
        type: 'multiple-choice',
        options: [
          'Light brownish smears or pinkish spots',
          'Bright blue liquid like in old TV commercials',
          'A giant gush of blood all at once',
          'Black tar'
        ],
        correctIndex: 0,
        explanation: 'First periods usually begin with modest brownish spots or pinkish stains, not a sudden flood.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-4',
        question: 'Is it normal for periods to be somewhat irregular during the first 1 to 2 years?',
        type: 'multiple-choice',
        options: [
          'Yes, completely normal as hormones calibrate',
          'No, it must be exactly 28 days immediately',
          'No, irregularity always indicates an emergency',
          'Only if you have an illness'
        ],
        correctIndex: 0,
        explanation: 'The brain-ovary hormone axis takes 1 to 3 years to establish regular monthly ovulatory cycles.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'fpr-5',
        question: 'What is clear or whitish vaginal discharge before your first period?',
        type: 'multiple-choice',
        options: [
          'A healthy sign that estrogen is maturing reproductive organs',
          'A sign of an infection that needs immediate surgery',
          'Dirty tissue that shouldn’t be there',
          'Sweat from exercise'
        ],
        correctIndex: 0,
        explanation: 'Clear or whitish discharge is a normal biological clue that puberty hormones are active and menarche is approaching.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-6',
        question: 'What is the most convenient item to keep in your school backpack for period preparedness?',
        type: 'multiple-choice',
        options: [
          'A small cute pouch with 2 pads and spare underwear',
          'A heavy medical textbook',
          'A full-size heating pad with cord',
          'Nothing, you must always stay home'
        ],
        correctIndex: 0,
        explanation: 'A discreet little pouch with pads and spare undies gives you complete confidence wherever you are.',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'fpr-7',
        question: 'Can you go to school, participate in gym class, and hang out with friends on your period?',
        type: 'multiple-choice',
        options: [
          'Yes! You can do all your normal activities comfortably',
          'No, you must stay in bed in the dark for 7 days',
          'No, you cannot be near other people',
          'Only if you are excused by a hospital'
        ],
        correctIndex: 0,
        explanation: 'Having your period is a regular part of life. With proper products, you can do everything you love!',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'fpr-8',
        question: 'Who is a good person to talk to if you think your period has arrived?',
        type: 'multiple-choice',
        options: [
          'A parent, school nurse, older sister, teacher, or trusted adult',
          'Keep it a dark secret forever',
          'Only internet strangers',
          'Nobody, it is forbidden to mention it'
        ],
        correctIndex: 0,
        explanation: 'Sharing with a trusted mom, dad, nurse, or guardian will help you get pads and reassurance right away.',
        relatedArticleId: 'talking-to-daughter-students'
      }
    ]
  },
  {
    id: 'menopause-know-how',
    title: 'Menopause Know-How',
    subtitle: 'Empowering knowledge for perimenopause, hormonal wisdom, and midlife wellness',
    badgeTag: '🌾 Golden Bloom',
    icon: '🍂',
    color: '#EDB650',
    category: 'Perimenopause & Menopause',
    published: false,
    questions: [
      {
        id: 'mn-1',
        question: 'What clinical milestone marks the official arrival of menopause?',
        type: 'multiple-choice',
        options: [
          '12 consecutive months without any menstrual bleeding',
          'The first time you experience a hot flush',
          'When your cycle skips one month',
          'On your 50th birthday exactly'
        ],
        correctIndex: 0,
        explanation: 'Menopause is clinically diagnosed retrospectively after 12 full consecutive months without a period.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-2',
        question: 'What is the phase called that leads up to menopause, often lasting several years?',
        type: 'multiple-choice',
        options: ['Perimenopause', 'Menarche', 'Amenorrhea', 'Dysmenorrhea'],
        correctIndex: 0,
        explanation: 'Perimenopause is the natural transition period where hormone levels fluctuate before cessation.',
        relatedArticleId: 'perimenopause-early-signs'
      },
      {
        id: 'mn-3',
        question: 'What is the most critical rule regarding vaginal bleeding AFTER menopause is reached?',
        type: 'multiple-choice',
        options: [
          'ANY postmenopausal bleeding requires prompt gynecological evaluation',
          'It is completely normal and can be ignored',
          'It means your youth has returned',
          'Drink warm milk and wait 6 months'
        ],
        correctIndex: 0,
        explanation: 'Any bleeding after 12 months of menopause is a red flag that must be assessed by a doctor to rule out uterine changes.',
        relatedArticleId: 'warning-signs-doctor'
      },
      {
        id: 'mn-4',
        question: 'Why do hot flushes occur in perimenopause and menopause?',
        type: 'multiple-choice',
        options: [
          'Lower estrogen levels make the brain’s thermostat (hypothalamus) extra sensitive to temperature',
          'The stomach is burning food too fast',
          'Blood pressure drops to zero',
          'It is caused by drinking cold water'
        ],
        correctIndex: 0,
        explanation: 'Decreased estrogen narrows the thermoneutral zone in the brain’s hypothalamus, triggering rapid vasodilation.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-5',
        question: 'Can a person become pregnant during perimenopause?',
        type: 'multiple-choice',
        options: [
          'Yes, pregnancy is still possible until menopause (12 months without periods) is reached',
          'No, fertility stops completely at age 40',
          'No, irregular cycles mean zero eggs remain',
          'Only during winter'
        ],
        correctIndex: 0,
        explanation: 'Because ovulation can still occur intermittently during perimenopause, contraception is advised until 12 months post-period.',
        relatedArticleId: 'perimenopause-early-signs'
      },
      {
        id: 'mn-6',
        question: 'Which type of exercise is especially vital during and after menopause to protect bone density?',
        type: 'multiple-choice',
        options: [
          'Weight-bearing & resistance training',
          'Sitting still in bed',
          'Only competitive sprinting',
          'None, bones cannot be protected'
        ],
        correctIndex: 0,
        explanation: 'Weight-bearing exercise (walking, light weights, resistance bands) stimulates bone remodeling and helps prevent osteoporosis.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-7',
        question: 'What lifestyle tweak can help reduce the frequency of night sweats and hot flushes?',
        type: 'multiple-choice',
        options: [
          'Sleeping in a cool room (65°F / 18°C) with breathable cotton layers',
          'Drinking hot spiced coffee right before bed',
          'Turning the room heater on high',
          'Drinking heavy red wine before sleep'
        ],
        correctIndex: 0,
        explanation: 'A cool sleep environment and avoiding triggers like spicy food, alcohol, and caffeine reduce nighttime vasomotor symptoms.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-8',
        question: 'What vitamins/minerals work together to preserve bone strength after menopause?',
        type: 'multiple-choice',
        options: [
          'Calcium and Vitamin D3',
          'Vitamin C and sugar',
          'Sodium and iron only',
          'Potassium and caffeine'
        ],
        correctIndex: 0,
        explanation: 'Vitamin D3 enables the intestine to absorb calcium efficiently, supporting bone matrix density.',
        relatedArticleId: 'menopause-hot-flushes'
      }
    ]
  }
];

