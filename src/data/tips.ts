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
    text: 'Sipping warm ginger (adrak) tea or ajwain water helps calm period cramps by soothing tight womb muscles naturally.',
    source: 'Integrative Health Guidance',
    stageTag: 'All Stages',
    icon: '🫖'
  },
  {
    id: 'tip-2',
    category: 'Body Wisdom',
    text: 'Your natural fluid changes across the month: clear and stretchy like raw egg whites means ovulation (egg release); creamy or dry signals other days.',
    source: 'ACOG Reproductive Education',
    stageTag: 'Cycle & Period Care',
    icon: '💧'
  },
  {
    id: 'tip-3',
    category: 'Self-Care',
    text: 'Heat is medicine! A hot water bag (garam paani ki thaili) over your lower belly relaxes tight muscles and eases backache quickly.',
    source: 'Clinical Dysmenorrhea Care',
    stageTag: 'All Stages',
    icon: '🔥'
  },
  {
    id: 'tip-4',
    category: 'Hygiene',
    text: 'Remember: the vagina cleans itself from inside. Wash only the outside area (vulva) with clean warm water during your bath. Avoid perfumed soaps or powders.',
    source: 'Royal College of Obstetricians',
    stageTag: 'Young Bloomers',
    icon: '🫧'
  },
  {
    id: 'tip-5',
    category: 'Mindfulness',
    text: 'Before your period (luteal phase), your body naturally burns slightly more energy. Enjoy healthy foods like a bowl of roasted chana, dal, or a sweet potato without guilt.',
    source: 'Endocrine Society',
    stageTag: 'Cycle & Period Care',
    icon: '🍲'
  },
  {
    id: 'tip-6',
    category: 'Body Wisdom',
    text: 'Irregular cycles in the first 2 to 3 years after your first period are totally normal! Your brain and ovaries are gently finding their rhythm.',
    source: 'Pediatric Gynecology',
    stageTag: 'First Period / Puberty',
    icon: '🌱'
  },
  {
    id: 'tip-7',
    category: 'Self-Care',
    text: 'For night warmth or hot flushes during perimenopause, keep a bottle of cool water near your bed and sleep in light, breathable cotton clothes.',
    source: 'The Menopause Society',
    stageTag: 'Perimenopause & Menopause',
    icon: '🍵'
  },
  {
    id: 'tip-8',
    category: 'Nutrition',
    text: 'Boost iron absorption: pair iron foods (palak, methi, chana, rajma, gud) with Vitamin C (fresh nimbu or amla juice) to rebuild blood.',
    source: 'WHO Nutrition Guidelines',
    stageTag: 'All Stages',
    icon: '🍋'
  },
  {
    id: 'tip-9',
    category: 'Mindfulness',
    text: 'Feeling tired during your period? That is your body asking for rest. Give yourself permission to slow down and rest comfortably.',
    source: 'Mindful Wellness Journal',
    stageTag: 'Cycle & Period Care',
    icon: '🌙'
  },
  {
    id: 'tip-10',
    category: 'Body Wisdom',
    text: 'Educators & parents: talking openly about periods with boys stops classroom teasing so girls never have to hide pads with shame.',
    source: 'UNICEF Stigma-Free Schools',
    stageTag: 'Educators & Caregivers',
    icon: '🤝'
  }
];
