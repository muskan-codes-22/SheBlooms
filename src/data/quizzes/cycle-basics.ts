import { Quiz } from './types';

export const cycleBasicsQuiz: Quiz = {
  id: 'cycle-basics',
  title: 'Cycle Basics & Phases',
  subtitle: 'Learn to track your monthly biological rhythm, decode hormone phases, and understand cycle timing.',
  badgeTag: 'Rhythm Master',
  icon: '🔄',
  color: 'from-violet-400 to-purple-500',
  category: 'Cycle & Hormones',
  targetStages: ['cycle', 'puberty'],
  ageTier: '13-17',
  displayCount: 8,
  disclaimer: 'Educational insights on menstrual cycle physiology. Consult a gynaecologist for cycle evaluation.',
  published: true,
  questions: [
    {
      id: 'cb-01',
      type: 'scenario',
      scenario: 'Meera is 13 years old. Her period started 6 months ago. Her cycle intervals have been 28 days, then 41 days, then 32 days. She is anxious that her body is damaged.',
      question: 'What is the medically accurate explanation for Meera\'s varying cycle lengths?',
      options: [
        'Irregular cycles (21 to 45 days) are completely normal in the first 1 to 2 years after menarche while the hypothalamic-pituitary-ovarian (HPO) axis matures',
        'Her reproductive system is failing and requires emergency hospitalisation',
        'Cycles are only irregular if someone has eaten cold food during bleeding',
        'Every healthy human must have an exact 28-day cycle with zero variance from day one'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'During the first 1–2 years after menarche, many cycles are anovulatory (eggs are not released every month). As the brain and ovaries calibrate communication, cycles naturally range from 21 to 45 days.',
        whyWrong: 'Expecting a rigid 28-day clock right after puberty causes needless anxiety. The 28-day cycle is simply an average across adult populations, not a biological mandate.'
      },
      topicTag: 'Adolescent Cycles',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'teen-irregular-cycles'
    },
    {
      id: 'cb-02',
      type: 'single-choice',
      question: 'When counting the length of your menstrual cycle on a calendar, what is Day 1?',
      options: [
        'The first day of full, red menstrual bleeding',
        'The last day of brown spotting at the end of your bleed',
        'The day you experience ovulation cramps',
        'The 14th day of every calendar month'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Day 1 of the cycle is universally defined in medicine as the first day of true, bright or dark red flow (not light pre-period spotting).',
        whyWrong: 'Counting from the end of the bleed or from ovulation skews tracking and makes fertile window predictions inaccurate.'
      },
      topicTag: 'Cycle Tracking',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'cycle-in-4-phases'
    },
    {
      id: 'cb-03',
      type: 'single-choice',
      question: 'What is the correct chronological sequence of the 4 phases of the menstrual cycle?',
      options: [
        'Menstrual phase → Follicular phase → Ovulatory phase → Luteal phase',
        'Ovulatory → Menstrual → Luteal → Follicular',
        'Luteal phase → Menstrual phase → Follicular phase → Ovulatory phase',
        'Follicular phase → Luteal phase → Ovulatory phase → Menstrual phase'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The cycle begins with menstruation (lining sheds), progresses to the follicular phase (follicles grow under estrogen), reaches ovulation (egg is released), and completes with the luteal phase (progesterone prepares the lining).',
        whyWrong: 'Any other order scrambles the biological hormonal sequence.'
      },
      topicTag: 'Cycle Phases',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'cycle-in-4-phases'
    },
    {
      id: 'cb-04',
      type: 'scenario',
      scenario: 'Pooja (16) notices that around Day 14 of her 28-day cycle, her vaginal discharge looks clear, slippery, and stretches between two fingers like raw egg white. She has no itchiness or foul smell.',
      question: 'What does this stretchy, slippery cervical mucus indicate biologically?',
      options: [
        'High estrogen levels opening the fertile window and facilitating sperm motility around ovulation',
        'A severe fungal infection needing prescription antifungal creams',
        'A sign that menstruation is starting within 1 hour',
        'Dehydration from lack of water intake'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Under peak estrogen right before ovulation, cervical mucus becomes clear, slippery, and stretchy ("spinnbarkeit"). This helps sperm swim through the cervix into the fallopian tubes.',
        whyWrong: 'Infection discharge is typically clumpy, yellowish-green, or accompanied by intense itching and burning.'
      },
      topicTag: 'Cervical Fluid',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'pregnancy-and-ovulation'
    },
    {
      id: 'cb-05',
      type: 'single-choice',
      question: 'What primary hormonal shift triggers the uterine endometrium to break down and shed as menstrual bleeding?',
      options: [
        'A sharp drop in both progesterone and estrogen when an egg is not fertilized',
        'A massive surge in testosterone from the thyroid',
        'A permanent loss of calcium in the bones',
        'A sudden increase in stomach acid'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'In the absence of a fertilized embryo, the corpus luteum dissolves. Progesterone and estrogen plummet, cutting off vascular support to the endometrium, which sheds as period blood.',
        whyWrong: 'Progesterone sustains the lining; it is the drop in progesterone that causes bleeding, not testosterone or stomach acid.'
      },
      topicTag: 'Hormonal Mechanics',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'what-is-a-period'
    },
    {
      id: 'cb-06',
      type: 'scenario',
      scenario: 'Divya has had 30-day cycles for a year, but during her Class 10 board exams with late-night stress, her period is 12 days late. A medical test shows she is not pregnant.',
      question: 'How can psychological or academic stress delay an upcoming period?',
      options: [
        'Stress triggers the adrenal hormone cortisol, which can suppress the hypothalamus from releasing GnRH, temporarily delaying or preventing ovulation',
        'Stress causes the ovaries to permanently dissolve',
        'Exam pressure physically freezes blood vessels in the pelvis',
        'Mental stress has zero biological interaction with reproductive hormones'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The hypothalamus controls both stress responses and reproductive hormones. High cortisol signals the brain that the body is under survival threat, delaying ovulation and pushing back the subsequent period.',
        whyWrong: 'The ovaries do not dissolve, but ovulation is temporarily paused until stress subsides.'
      },
      topicTag: 'Stress & Cycles',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'teen-irregular-cycles'
    },
    {
      id: 'cb-07',
      type: 'single-choice',
      question: 'In a typical menstrual cycle, how long is the "fertile window" during which unprotected intercourse can lead to pregnancy?',
      options: [
        'Approximately 6 days: the 5 days before ovulation plus the day of ovulation itself',
        'Only 10 minutes on the day of ovulation',
        'All 365 days of the year equally',
        'Only during the menstrual bleeding days'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Sperm can survive in fertile cervical mucus for up to 5 days, while a released human ovum (egg) survives for 12 to 24 hours. Thus, the 5 days leading up to ovulation and the day of ovulation comprise the fertile window.',
        whyWrong: 'Pregnancy cannot occur on all days equally because an egg is only present for about 24 hours post-ovulation.'
      },
      topicTag: 'Fertile Window',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'pregnancy-and-ovulation'
    },
    {
      id: 'cb-08',
      type: 'multi-select',
      question: 'Which of the following cycle irregularities warrant a visit to a gynaecologist? (Select all that apply)',
      options: [
        'Periods that consistently arrive more frequently than every 21 days or less often than every 45 days after the first 2 years of menarche',
        'A period that has stopped completely for more than 90 consecutive days (secondary amenorrhea) without pregnancy',
        'Bleeding that continues heavily for longer than 8 consecutive days every month',
        'A cycle that is 29 days one month and 31 days the next'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Cycles shorter than 21 days, longer than 45 days, bleeding beyond 8 days, or missing 3+ months straight are clinical red flags for PCOS, thyroid disorders, or endometrial issues.',
        whyWrong: 'A 1 to 3 day variation (e.g. 29 days one month and 31 days the next) is completely normal physiological variance.'
      },
      topicTag: 'When to Consult',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Clinical guidelines from FIGO & ACOG on abnormal uterine bleeding (AUB): normal adult cycle length is 24-38 days, adolescent 21-45 days, duration <= 8 days]'
    },
    {
      id: 'cb-09',
      type: 'single-choice',
      question: 'What is the dominant hormone responsible for the post-ovulation (luteal phase) rise in resting basal body temperature by ~0.3°C to 0.5°C?',
      options: [
        'Progesterone, produced by the corpus luteum',
        'Adrenaline, produced by the pancreas',
        'Insulin, produced by the liver',
        'Melatonin, produced by the skin'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'After releasing an egg, the ovarian follicle becomes the corpus luteum and secretes progesterone, which acts on the hypothalamic thermoregulatory center to slightly elevate resting temperature.',
        whyWrong: 'Adrenaline and insulin do not govern cycle-specific temperature shifts.'
      },
      topicTag: 'Hormonal Mechanics',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'cycle-in-4-phases'
    },
    {
      id: 'cb-10',
      type: 'scenario',
      scenario: 'Asha (17) experiences mood dips, breast tenderness, bloating, and food cravings strictly during the 5 to 7 days before her period starts, which disappear shortly after bleeding begins.',
      question: 'In which phase of the menstrual cycle do Premenstrual Syndrome (PMS) symptoms occur?',
      options: [
        'The late luteal phase',
        'The follicular phase',
        'The early menstrual phase',
        'The ovulatory surge window'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'PMS occurs during the late luteal phase following ovulation, driven by fluctuating progesterone and estrogen and their impact on central serotonin levels. Symptoms resolve as menstruation establishes.',
        whyWrong: 'The follicular phase follows menstruation and is typically characterized by rising estrogen and higher energy.'
      },
      topicTag: 'Cycle Phases',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'understanding-pms'
    },
    {
      id: 'cb-11',
      type: 'single-choice',
      question: 'What is the key difference between intermenstrual spotting and a true menstrual period?',
      options: [
        'Spotting is light pink or brown flecks requiring at most a pantyliner and lasting 1-2 days, whereas a period is steady red bleeding lasting 3-7 days requiring full sanitary protection',
        'Spotting only happens to people who are 60 years old',
        'There is zero difference; all vaginal blood is identical in volume and timing',
        'Spotting always indicates a broken rib'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Spotting is light droplets or smears that can occur due to ovulation, hormonal shifts, or cervical sensitivity. True menstruation reflects endometrial shedding with continuous flow over several days.',
        whyWrong: 'Spotting is distinct from a full menstrual flow in duration, volume, and physiological origin.'
      },
      topicTag: 'Flow Types',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'what-is-a-period'
    },
    {
      id: 'cb-12',
      type: 'single-choice',
      question: 'Why is tracking your cycle dates (on a calendar, notebook, or private privacy-first app) a valuable personal health habit?',
      options: [
        'It helps you predict upcoming periods, prepare emergency supplies, identify personal mood/energy patterns, and provides valuable diagnostic data for your doctor if problems arise',
        'It is required by law to show to your school principal',
        'Cycle tracking guarantees you will never catch a cold',
        'It stops hormones from changing in the body'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Menstrual cycles are considered the "fifth vital sign" of health. Tracking empowers you to know your rhythm, plan sports and study schedules, and gives gynaecologists reliable medical history if cycles become irregular.',
        whyWrong: 'Tracking is for personal health awareness, not legal surveillance.'
      },
      topicTag: 'Cycle Tracking',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'cycle-in-4-phases'
    }
  ]
};
