export interface EducationalVideo {
  id: string; // YouTube video ID
  title: string;
  source: string; // Channel or creator name
  duration: string;
  tag: string;
  description: string;
  fullDescription: string;
  keyTakeaways: string[];
  targetStages?: ('puberty' | 'cycle' | 'menopause' | 'educator')[];
}

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  {
    id: 'DBe7-PHRav8',
    title: 'Menstruation: What To Expect',
    source: 'AMAZE Org',
    duration: '3:18',
    tag: 'Puberty & First Period',
    targetStages: ['puberty', 'educator'],
    description: 'A comforting animated introduction to what getting your first period looks and feels like.',
    fullDescription: 'Starting your first period can bring questions and worries. This friendly AMAZE Org animation explains what happens in your body, what period blood looks like on day one, and how to pack a simple pouch so you feel completely prepared.',
    keyTakeaways: [
      'First periods usually begin between ages 9 and 15 with gentle brown spotting or light pink drops.',
      'Bleeding lasts 3 to 7 days, and irregular cycles during the first 1 to 2 years are completely normal.',
      'Carrying a small pouch with pads in your school bag ensures you are always ready.',
    ],
  },
  {
    id: 'ayzN5f3qN8g',
    title: 'How Menstruation Works',
    source: 'TED-Ed (Emma Bryce)',
    duration: '4:10',
    tag: 'Cycle Biology',
    targetStages: ['cycle', 'puberty', 'educator'],
    description: 'A gentle, animated scientific journey showing how hormones coordinate the menstrual cycle each month.',
    fullDescription: 'Every month, a remarkable chemical dance takes place in the human body. This beautifully animated lesson breaks down the biological role of the ovaries, the buildup of the endometrial cushion, and how falling progesterone triggers a period when an egg remains unfertilized.',
    keyTakeaways: [
      'Menstruation is the natural shedding of the uterine lining (endometrium).',
      'The cycle is governed by hormonal dialogue between the brain and ovaries.',
      'It is a vital sign of reproductive health, completely clean and biological.',
    ],
  },
  {
    id: 'NOaeKRft-gc',
    title: '3 Things That Can Cause Painful Periods',
    source: 'TED-Ed (Chen X. Chen)',
    duration: '5:00',
    tag: 'Pain & Relief',
    targetStages: ['cycle', 'puberty', 'educator'],
    description: 'Understand the biological causes of menstrual cramps, prostaglandins, and when to seek medical support.',
    fullDescription: 'Why do so many menstruators experience intense pain during their cycle? Explore the biological chemistry behind dysmenorrhea: how hormone-like chemicals called prostaglandins cause uterine muscle contractions, and how conditions like endometriosis differ from ordinary cramps.',
    keyTakeaways: [
      'Mild to moderate cramps are caused by prostaglandins causing uterine contractions.',
      'Severe pain that prevents daily activities or does not respond to medication is not normal.',
      'Always advocate for your comfort and consult a healthcare professional for persistent pain.',
    ],
  },
  {
    id: 'kmWbOC8Fbb0',
    title: 'Period Hygiene: Tampons, Pads & Cups',
    source: 'AMAZE Org',
    duration: '3:20',
    tag: 'Hygiene & Products',
    targetStages: ['puberty', 'cycle', 'educator'],
    description: 'Friendly, stigma-free introduction to choosing and using pads, tampons, and menstrual cups safely.',
    fullDescription: 'Navigating period care shouldn\'t feel intimidating. This friendly, inclusive animation walks through all major menstrual hygiene products—disposable pads, tampons, reusable cloth pads, and silicone menstrual cups—explaining how to insert, change, and wear them comfortably.',
    keyTakeaways: [
      'There is no "right" product—choose whatever feels comfortable and accessible for your body.',
      'Change pads every 4 to 6 hours and tampons every 4 to 8 hours to maintain fresh hygiene.',
      'Always wash hands before and after changing any menstrual hygiene product.',
    ],
  },
  {
    id: 'iBvD3sACS4o',
    title: 'What is Consent? - Animation',
    source: 'Stacy Bias Animation',
    duration: '3:03',
    tag: 'Boundaries & Consent',
    targetStages: ['puberty', 'cycle', 'educator'],
    description: 'An empowering animation exploring bodily autonomy, clear communication, and mutual respect.',
    fullDescription: 'Understanding personal boundaries is essential across every age. This clear animation breaks down how consent must always be freely given, reversible, informed, enthusiastic, and specific, empowering everyone to honor their own boundaries and respect others.',
    keyTakeaways: [
      'Your body belongs completely to you—you always have the right to say no without guilt.',
      'Consent must be voluntary and can be withdrawn whenever you feel uncomfortable.',
      'Respecting someone\'s boundaries is the foundation of every safe and healthy relationship.',
    ],
  },
  {
    id: 'cjbgZwgdY7Q',
    title: 'Why Do Women Have Periods?',
    source: 'TED-Ed (Astrid Hermelin)',
    duration: '4:35',
    tag: 'Body Science',
    targetStages: ['cycle', 'puberty', 'educator'],
    description: 'The fascinating evolutionary biology behind why the human body sheds its uterine lining.',
    fullDescription: 'Humans are among only a few mammalian species on Earth that menstruate. Discover the intriguing evolutionary battle between the invasive human embryo and the protective maternal uterine wall, and why our bodies evolved this monthly cyclical renewal.',
    keyTakeaways: [
      'Humans are one of the rare species with "covert" and active menstruation.',
      'The thick uterine lining evolved to protect the mother and test embryo viability.',
      'Menstruation is a sophisticated evolutionary defense, not a design flaw.',
    ],
  },
  {
    id: 'raPPvnTtIdA',
    title: 'What Vaginal Discharge Says About Your Health',
    source: 'Health (Deep Dives)',
    duration: '3:00',
    tag: 'Discharge & Health',
    targetStages: ['cycle', 'puberty', 'menopause'],
    description: 'A clear, stigma-free medical guide decoding what normal discharge looks like and how to spot infection signs.',
    fullDescription: 'Vaginal discharge is a completely natural fluid that cleans and protects the reproductive canal. In this clinical guide, learn how hormones transform cervical fluid throughout your cycle—from sticky to clear and stretchy egg-white near ovulation—and discover how to spot signs of yeast infections or bacterial vaginosis.',
    keyTakeaways: [
      'Healthy discharge ranges from clear to milky white with a mild scent, keeping the reproductive tract clean.',
      'Stretchy, slippery fluid (resembling raw egg white) is a healthy indicator of high estrogen during ovulation.',
      'Thick clumpy discharge, greenish fluid, or strong fishy odor with itching warrants a visit to a doctor.',
    ],
  },
  {
    id: 'Zx8zbTMTncs',
    title: 'How Do Contraceptives Work?',
    source: 'TED-Ed (NWHunter)',
    duration: '4:21',
    tag: 'Contraception Science',
    targetStages: ['cycle', 'educator'],
    description: 'Explore the biological mechanisms behind barrier methods, daily pills, IUDs, and implants.',
    fullDescription: 'How does birth control actually prevent pregnancy? This TED-Ed lesson dives into the 3 core biological methods: blocking sperm from meeting the egg, disabling sperm, and suppressing ovulation with hormones.',
    keyTakeaways: [
      'Barrier methods (like condoms) block sperm and provide essential STI protection.',
      'Hormonal methods (pills, patches, implants) prevent the ovaries from releasing an egg.',
      'Intrauterine devices (IUDs) provide long-term, reversible protection directly in the uterus.',
    ],
  },
  {
    id: 'af-356SbCkY',
    title: 'What Is Menopause?',
    source: 'National Institute on Aging (NIH)',
    duration: '2:02',
    tag: 'Menopause Transition',
    targetStages: ['menopause'],
    description: 'Learn the biology of the menopausal transition, perimenopause symptoms, and postmenopause.',
    fullDescription: 'Menopause is a natural biological stage of life. Produced by the National Institute on Aging, this informative video explains what happens as hormone levels shift, why hot flashes occur, and how healthy habits support this transition.',
    keyTakeaways: [
      'Menopause is officially reached after 12 consecutive months without a period.',
      'Perimenopause can begin years earlier with irregular cycles, hot flashes, and sleep changes.',
      'Lifestyle habits, nutrition, and healthcare support keep bones and heart strong through midlife.',
    ],
  },
];
