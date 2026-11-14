export interface BloomTip {
  id: string;
  category: 'Self-Care' | 'Nutrition' | 'Body Wisdom' | 'Mindfulness' | 'Hygiene';
  text: string;
  source: string;
  stageTag: string;
  icon: string;
}

export const BLOOM_TIPS: BloomTip[] = [
  {
    id: 'tip-1',
    category: 'Nutrition',
    text: 'Sipping fresh ginger tea can be as effective as mild ibuprofen at calming period cramps by naturally slowing inflammatory prostaglandins.',
    source: 'Integrative Women’s Health',
    stageTag: 'All Stages',
    icon: '🫖'
  },
  {
    id: 'tip-2',
    category: 'Body Wisdom',
    text: 'Your cervical mucus changes naturally: slippery and stretchy like egg whites means ovulation is here; creamy or dry signals other cycle days.',
    source: 'ACOG Reproductive Education',
    stageTag: 'Cycle & Period Care',
    icon: '💧'
  },
  {
    id: 'tip-3',
    category: 'Self-Care',
    text: 'Heat is medicine! A warm water bottle dilates pelvic blood vessels, relieving muscle spasms and easing lower back tension in minutes.',
    source: 'Clinical Dysmenorrhea Care',
    stageTag: 'All Stages',
    icon: '🔥'
  },
  {
    id: 'tip-4',
    category: 'Hygiene',
    text: 'Remember: the vagina is self-cleaning. Wash only the outside vulva with warm water. No perfumes, no douches, no harsh soaps.',
    source: 'Royal College of Obstetricians',
    stageTag: 'Young Bloomers',
    icon: '🫧'
  },
  {
    id: 'tip-5',
    category: 'Mindfulness',
    text: 'In your luteal phase (the days before bleeding), your body uses slightly more energy. Honor cravings for warming complex carbs without guilt.',
    source: 'Endocrine Society',
    stageTag: 'Cycle & Period Care',
    icon: '🥑'
  },
  {
    id: 'tip-6',
    category: 'Body Wisdom',
    text: 'Irregular cycles in the first 2 years after your first period are totally normal! Your brain-ovary communication is gently calibrating.',
    source: 'Pediatric Gynecology',
    stageTag: 'First Period / Puberty',
    icon: '🌱'
  },
  {
    id: 'tip-7',
    category: 'Self-Care',
    text: 'For nighttime hot flushes during perimenopause, keep a chilled tumbler of ice water at your bedside and sleep in natural cotton layers.',
    source: 'The Menopause Society',
    stageTag: 'Perimenopause & Menopause',
    icon: '🍵'
  },
  {
    id: 'tip-8',
    category: 'Nutrition',
    text: 'Boost iron absorption: pair iron-rich foods (spinach, lentils, seeds) with Vitamin C (lemon water, bell peppers, oranges).',
    source: 'WHO Nutrition Guidelines',
    stageTag: 'All Stages',
    icon: '🍊'
  },
  {
    id: 'tip-9',
    category: 'Mindfulness',
    text: 'Feeling introverted during your period? That’s your inner winter. Give yourself permission to cancel non-essential plans and rest.',
    source: 'Mindful Wellness Journal',
    stageTag: 'Cycle & Period Care',
    icon: '🌙'
  },
  {
    id: 'tip-10',
    category: 'Body Wisdom',
    text: 'Educators & parents: normalizing period talk with boys creates safe school environments where girls never have to hide pads with shame.',
    source: 'UNICEF Stigma-Free Schools',
    stageTag: 'Educators & Caregivers',
    icon: '🤝'
  }
];

