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
    subtitle: 'Tap to clear old myths and learn simple science about your body',
    badgeTag: '🌟 Stigma Buster',
    icon: '💡',
    color: '#D6457F',
    category: 'Myths & Awareness',
    published: true,
    questions: [
      {
        id: 'mf-1',
        question: 'Myth or Fact: Exercising or walking during your period harms your body.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Gentle walks and light yoga release natural feel-good chemicals that ease cramps.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-2',
        question: 'Myth or Fact: A tampon or menstrual cup can get lost inside your body.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! The vagina ends at the cervix. Its opening is tiny as a pinhead. Nothing gets lost.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-3',
        question: 'Myth or Fact: A warm bath or a hot water bag soothes period pain.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! Gentle warmth relaxes your lower tummy muscles and improves blood flow.',
        relatedArticleId: 'food-movement-cramps'
      },
      {
        id: 'mf-4',
        question: 'Myth or Fact: Touching pickles (achar) during your period will spoil them.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Clean hands never spoil food or achar. This is an old myth with no science.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-5',
        question: 'Myth or Fact: You can safely swim or play sports during your period.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! With a pad, tampon, or cup, you can run, play, and swim freely.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'mf-6',
        question: 'Myth or Fact: Severe period pain that makes you faint is normal.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Mild pain is common. Severe pain that stops daily school or work needs a doctor.',
        relatedArticleId: 'period-pain-normal'
      },
      {
        id: 'mf-7',
        question: 'Myth or Fact: You lose only about 2 to 4 small spoons of blood during a period.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! It looks like more on a pad. Total blood loss is just 30 to 60 ml.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'mf-8',
        question: 'Myth or Fact: Washing inside your intimate parts with harsh soap is necessary.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! The vagina cleans itself naturally. Wash only the outside with clean, plain water.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'mf-9',
        question: 'Myth or Fact: Daily birth control pills cause permanent infertility after you stop.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Your natural fertility returns soon after you stop taking contraceptive pills.',
        relatedArticleId: 'contraception-and-pills'
      },
      {
        id: 'mf-10',
        question: 'Myth or Fact: Consent in a relationship can be stopped or paused at any moment.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! You always have the right to change your mind and pause or stop intimacy.',
        relatedArticleId: 'consent-and-boundaries'
      },
      {
        id: 'mf-11',
        question: 'Myth or Fact: You can still become pregnant during perimenopause if periods skip months.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 1,
        isMyth: false,
        explanation: 'Fact! An ovary can still release an egg until 12 full months without bleeding pass.',
        relatedArticleId: 'pregnancy-and-ovulation'
      },
      {
        id: 'mf-12',
        question: 'Myth or Fact: Emergency contraceptive pills cause an abortion of an established pregnancy.',
        type: 'true-false',
        options: ['Myth', 'Fact'],
        correctIndex: 0,
        isMyth: true,
        explanation: 'Myth! Emergency pills only delay ovulation. They cannot harm or end an implanted pregnancy.',
        relatedArticleId: 'contraception-and-pills'
      }
    ]
  },
  {
    id: 'cycle-basics',
    title: 'Cycle Basics & Phases',
    subtitle: 'Test what you know about the 4 hormonal seasons and monthly rhythm',
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
          'The first day of real period bleeding',
          'The day your bleeding fully stops',
          'The exact middle of the month',
          'The day you get stomach cramps'
        ],
        correctIndex: 0,
        explanation: 'Day 1 is always the very first day of red menstrual bleeding.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-2',
        question: 'What is the normal menstrual cycle length for most adults?',
        type: 'multiple-choice',
        options: [
          '21 to 35 days',
          'Exactly 28 days only',
          '10 to 14 days',
          '45 to 60 days'
        ],
        correctIndex: 0,
        explanation: 'A healthy adult cycle lasts between 21 and 35 days. Cycles vary from person to person.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'cb-3',
        question: 'In which phase does an ovary release a mature egg cell?',
        type: 'multiple-choice',
        options: [
          'Ovulation phase',
          'Menstrual bleed phase',
          'Late winter phase',
          'Luteal wind-down phase'
        ],
        correctIndex: 0,
        explanation: 'Ovulation happens roughly in the middle of your cycle when an egg is released.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-4',
        question: 'Which hormone rises after ovulation to prepare the womb cushion?',
        type: 'multiple-choice',
        options: [
          'Progesterone',
          'Adrenaline',
          'Insulin',
          'Melatonin'
        ],
        correctIndex: 0,
        explanation: 'Progesterone rises after ovulation. It makes the womb lining soft, thick, and warm.',
        relatedArticleId: 'cycle-in-4-phases'
      },
      {
        id: 'cb-5',
        question: 'Why do mood swings or food cravings often happen a few days before periods?',
        type: 'multiple-choice',
        options: [
          'Estrogen and progesterone drop quickly',
          'You ate too much spicy food',
          'You walked too much during the day',
          'Your body ran out of water'
        ],
        correctIndex: 0,
        explanation: 'If pregnancy does not happen, hormones drop fast. This natural dip triggers PMS moods.',
        relatedArticleId: 'understanding-pms'
      },
      {
        id: 'cb-6',
        question: 'What is the soft inner lining of the womb that sheds during your period?',
        type: 'multiple-choice',
        options: [
          'Endometrium (womb cushion)',
          'Epidermis (outer skin)',
          'Cartilage',
          'Tendon'
        ],
        correctIndex: 0,
        explanation: 'The endometrium is the soft inner cushion built each month. It sheds as period blood.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'cb-7',
        question: 'What natural body chemicals cause the womb to contract and cause cramps?',
        type: 'multiple-choice',
        options: [
          'Prostaglandins (womb-squeezing chemicals)',
          'Cortisol (stress alert)',
          'Histamine',
          'Hemoglobin'
        ],
        correctIndex: 0,
        explanation: 'Prostaglandins are natural chemicals. They help your womb squeeze to shed its lining.',
        relatedArticleId: 'period-pain-normal'
      },
      {
        id: 'cb-8',
        question: 'How many days does normal period bleeding usually last?',
        type: 'multiple-choice',
        options: [
          '2 to 7 days',
          '15 to 20 days',
          'Only 6 hours',
          'More than 1 month'
        ],
        correctIndex: 0,
        explanation: 'Bleeding usually lasts between 2 and 7 days. Days 1 and 2 are often heaviest.',
        relatedArticleId: 'what-is-a-period'
      }
    ]
  },
  {
    id: 'hygiene-smarts',
    title: 'Hygiene & Self-Care Smarts',
    subtitle: 'Learn clean daily habits, pad changing, and caring for your body',
    badgeTag: '🫧 Hygiene Guru',
    icon: '🫧',
    color: '#9B7FD1',
    category: 'Hygiene & Self-Care',
    published: false,
    questions: [
      {
        id: 'hs-1',
        question: 'How often should you change a sanitary pad during the day?',
        type: 'multiple-choice',
        options: [
          'Every 4 to 6 hours',
          'Only once at bedtime',
          'Every 12 hours',
          'Only when it is completely overflowing'
        ],
        correctIndex: 0,
        explanation: 'Change pads every 4 to 6 hours. This keeps skin fresh and stops bacterial growth.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-2',
        question: 'What is the longest time a single tampon should stay inside?',
        type: 'multiple-choice',
        options: [
          '8 hours maximum',
          '24 hours',
          '16 hours',
          '2 full days'
        ],
        correctIndex: 0,
        explanation: 'Never leave a tampon in for more than 8 hours. Changing it prevents rare infections.',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'hs-3',
        question: 'What is the cleanest way to wash your intimate area?',
        type: 'multiple-choice',
        options: [
          'Wash only the outside vulva with clean water',
          'Wash inside the vagina with perfumed chemical soap',
          'Spray strong deodorant on intimate areas',
          'Use vinegar or bleach water'
        ],
        correctIndex: 0,
        explanation: 'Wash only the outside with clean water. The inside cleans itself naturally.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-4',
        question: 'Which kitchen foods help relax tummy muscles and ease cramps?',
        type: 'multiple-choice',
        options: [
          'Warm ajwain water, banana, and roasted seeds',
          'Heavy cold ice cream and soda',
          'Deep-fried greasy street snacks',
          'Raw refined white sugar'
        ],
        correctIndex: 0,
        explanation: 'Warm ajwain water, jeera water, bananas, and seeds contain magnesium that soothes cramps.',
        relatedArticleId: 'food-movement-cramps'
      },
      {
        id: 'hs-5',
        question: 'In which direction should you always wipe in the toilet?',
        type: 'multiple-choice',
        options: [
          'Front to back (away from the urine and vaginal opening)',
          'Back to front',
          'In round circles',
          'Direction does not matter'
        ],
        correctIndex: 0,
        explanation: 'Always wipe front to back. This keeps bowel bacteria away from your urinary tract.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-6',
        question: 'How should you wash and sanitize reusable cloth pads?',
        type: 'multiple-choice',
        options: [
          'Wash with soap and water, and dry fully in bright direct sunlight',
          'Hide them damp under other clothes to dry in secret',
          'Rinse with plain cold tea only',
          'Never wash them at all'
        ],
        correctIndex: 0,
        explanation: 'Wash well with soap. Sunlight acts as a natural sanitizer to kill germs safely.',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'hs-7',
        question: 'Which underwear fabric is healthiest for your intimate skin?',
        type: 'multiple-choice',
        options: [
          'Breathable 100% cotton',
          'Tight synthetic nylon or plastic',
          'Rough synthetic polyester',
          'Heavy non-breathable vinyl'
        ],
        correctIndex: 0,
        explanation: 'Cotton underwear allows air flow. It prevents sweat traps and fungal rashes.',
        relatedArticleId: 'hygiene-dos-donts'
      },
      {
        id: 'hs-8',
        question: 'Why does a hot water bag (garam paani ki thaili) relieve period cramps?',
        type: 'multiple-choice',
        options: [
          'Warmth opens blood vessels and relaxes tight womb muscles',
          'It freezes all stomach nerves',
          'It changes your blood type',
          'It stops period bleeding permanently'
        ],
        correctIndex: 0,
        explanation: 'Gentle warmth relaxes tight muscle fibers in your womb. It eases spasms naturally.',
        relatedArticleId: 'food-movement-cramps'
      }
    ]
  },
  {
    id: 'first-period-ready',
    title: 'First Period Ready Checklist',
    subtitle: 'Build confidence, know your body clues, and feel prepared for your first period',
    badgeTag: '🌱 Bud Champion',
    icon: '🌱',
    color: '#D6457F',
    category: 'Puberty & Menarche',
    published: true,
    questions: [
      {
        id: 'fpr-1',
        question: 'What is the doctor term for a girl’s very first menstrual period?',
        type: 'multiple-choice',
        options: ['Menarche (first period)', 'Menopause', 'Ovulation', 'Digestion'],
        correctIndex: 0,
        explanation: 'Menarche means your very first period. It is a healthy sign that your body is growing.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-2',
        question: 'Around what ages do most girls get their first period?',
        type: 'multiple-choice',
        options: ['Between 9 and 15 years old', 'Between 3 and 6 years old', 'Between 25 and 30 years old', 'After age 45'],
        correctIndex: 0,
        explanation: 'Most girls get their first period between ages 9 and 15. The average age is around 12.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-3',
        question: 'What does first period fluid usually look like on underwear?',
        type: 'multiple-choice',
        options: [
          'Light brownish spots or pinkish stains',
          'Bright blue liquid like on TV ads',
          'A giant waterfall of dark blood',
          'Thick green glue'
        ],
        correctIndex: 0,
        explanation: 'First periods usually start with light brownish spots or pink marks, not a sudden flood.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-4',
        question: 'Is it normal for periods to be irregular in the first 1 to 2 years?',
        type: 'multiple-choice',
        options: [
          'Yes, totally normal while your body hormones learn their rhythm',
          'No, every period must arrive every 28 days immediately',
          'No, irregular periods always mean danger',
          'Only if you have a fever'
        ],
        correctIndex: 0,
        explanation: 'In the first 1 to 3 years, cycles naturally vary. Your body is finding its rhythm.',
        relatedArticleId: 'what-is-a-period'
      },
      {
        id: 'fpr-5',
        question: 'What is clear or whitish discharge on your underwear before your first period?',
        type: 'multiple-choice',
        options: [
          'A healthy sign that puberty hormones are getting your body ready',
          'Dirty dirt that needs harsh chemical wash',
          'A serious medical emergency',
          'Sweat from sitting down'
        ],
        correctIndex: 0,
        explanation: 'Clear or white discharge is normal. It shows puberty hormones are maturing your body.',
        relatedArticleId: 'first-period-expect'
      },
      {
        id: 'fpr-6',
        question: 'What is best to pack in your school bag pouch so you are always ready?',
        type: 'multiple-choice',
        options: [
          'A small pouch with 2 pads, paper wrapper, and spare underwear',
          'A heavy electric heater cord',
          'A giant medical kit with needles',
          'Nothing, you must stay home if your period starts'
        ],
        correctIndex: 0,
        explanation: 'A small pouch with 2 pads, paper for wrapping, and clean underwear gives full peace of mind.',
        relatedArticleId: 'first-period-kit-guide'
      },
      {
        id: 'fpr-7',
        question: 'Can you go to school, play sports, and meet friends during your period?',
        type: 'multiple-choice',
        options: [
          'Yes! You can do all your regular daily activities with confidence',
          'No, you must lie locked in bed in the dark for 7 days',
          'No, you cannot sit near anyone in class',
          'Only if you carry a hospital doctor certificate'
        ],
        correctIndex: 0,
        explanation: 'Having your period is natural. With a clean pad or cloth, you can learn, run, and play.',
        relatedArticleId: 'period-myths-busted'
      },
      {
        id: 'fpr-8',
        question: 'Who can you speak with comfortably if your first period arrives?',
        type: 'multiple-choice',
        options: [
          'Your mom, didi, teacher, school nurse, or ASHA didi',
          'Keep it a dark shameful secret forever',
          'Only unknown people online',
          'Nobody at all'
        ],
        correctIndex: 0,
        explanation: 'Tell a trusted mom, elder sister, teacher, or ASHA didi. They will gladly help you.',
        relatedArticleId: 'talking-to-daughter-students'
      }
    ]
  },
  {
    id: 'menopause-know-how',
    title: 'Menopause Know-How',
    subtitle: 'Clear knowledge for perimenopause, hot flushes, and midlife health',
    badgeTag: '🌾 Golden Bloom',
    icon: '🍂',
    color: '#EDB650',
    category: 'Perimenopause & Menopause',
    published: true,
    questions: [
      {
        id: 'mn-1',
        question: 'When is a woman clinically considered to have reached menopause?',
        type: 'multiple-choice',
        options: [
          'After 12 full months in a row without any period bleeding',
          'The first day she feels a hot flush',
          'When her period skips just one month',
          'On her 50th birthday exactly'
        ],
        correctIndex: 0,
        explanation: 'Menopause is confirmed after 12 full months with zero period bleeding.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-2',
        question: 'What is the natural multi-year transition stage leading up to menopause called?',
        type: 'multiple-choice',
        options: ['Perimenopause', 'Menarche', 'Dysmenorrhea', 'Gestation'],
        correctIndex: 0,
        explanation: 'Perimenopause is the natural phase before menopause when hormone levels shift.',
        relatedArticleId: 'perimenopause-early-signs'
      },
      {
        id: 'mn-3',
        question: 'What is an important rule if vaginal bleeding happens AFTER menopause is reached?',
        type: 'multiple-choice',
        options: [
          'Any bleeding after menopause needs a doctor or gynaecologist check-up',
          'It is completely normal and can be ignored',
          'It means your youthful cycle has returned permanently',
          'Drink warm milk and wait a year'
        ],
        correctIndex: 0,
        explanation: 'Any bleeding after menopause is not normal. See a doctor or gynaecologist right away.',
        relatedArticleId: 'warning-signs-doctor'
      },
      {
        id: 'mn-4',
        question: 'Why do sudden hot flushes or warmth waves happen during perimenopause?',
        type: 'multiple-choice',
        options: [
          'Lower estrogen makes the brain temperature center extra sensitive',
          'The stomach is burning food too fast',
          'Blood pressure drops to zero',
          'Drinking plain water makes the body overheat'
        ],
        correctIndex: 0,
        explanation: 'Lower estrogen affects your brain thermostat. It triggers sudden sweating and heat waves.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-5',
        question: 'Can a woman become pregnant during perimenopause?',
        type: 'multiple-choice',
        options: [
          'Yes, pregnancy is still possible until 12 months with no periods pass',
          'No, all chances stop completely on your 40th birthday',
          'No, irregular periods mean zero eggs ever release',
          'Only during cold winter months'
        ],
        correctIndex: 0,
        explanation: 'An ovary can still release an egg occasionally during perimenopause until full menopause.',
        relatedArticleId: 'perimenopause-early-signs'
      },
      {
        id: 'mn-6',
        question: 'Which daily exercise helps protect strong bones during and after menopause?',
        type: 'multiple-choice',
        options: [
          'Regular brisk walking and light weight-bearing exercise',
          'Lying completely still on a bed all day',
          'Heavy Olympic sprinting only',
          'None, bones cannot be protected'
        ],
        correctIndex: 0,
        explanation: 'Daily brisk walking and light weights keep bones strong and prevent fractures.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-7',
        question: 'Which bedroom habit helps reduce hot flushes and night sweats for better sleep?',
        type: 'multiple-choice',
        options: [
          'Sleeping in a cool room (about 18°C to 20°C) with breathable cotton bedding',
          'Drinking hot spicy tea right before sleeping',
          'Putting heavy blankets and running a room heater on high',
          'Eating greasy fried snacks at midnight'
        ],
        correctIndex: 0,
        explanation: 'A cool, ventilated bedroom and light cotton clothes help prevent nighttime heat waves.',
        relatedArticleId: 'menopause-hot-flushes'
      },
      {
        id: 'mn-8',
        question: 'Which nutrients work together to protect bone strength after menopause?',
        type: 'multiple-choice',
        options: [
          'Calcium (milk, curd, ragi, til) and Vitamin D from sunlight',
          'Refined white sugar and sweet soda',
          'Table salt and caffeine',
          'Deep fried oil only'
        ],
        correctIndex: 0,
        explanation: 'Calcium from milk, curd, ragi, and til plus daily morning sunlight keeps bones dense.',
        relatedArticleId: 'menopause-hot-flushes'
      }
    ]
  }
];
