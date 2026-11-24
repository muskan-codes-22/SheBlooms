import { Quiz } from './types';

export const fuelYourCycleQuiz: Quiz = {
  id: 'fuel-your-cycle',
  title: 'Fuel Your Cycle: Food & Movement',
  subtitle: 'Master iron pairing, energy rhythms, cramp-soothing nutrition, and healthy movement across your cycle.',
  badgeTag: 'Nourish & Move',
  icon: '🥗',
  color: 'from-amber-500 to-emerald-500',
  category: 'Nutrition & Wellness',
  targetStages: ['puberty', 'cycle'],
  ageTier: 'all',
  displayCount: 8,
  disclaimer: 'Nutritional and movement insights for healthy cycles. Always consult a physician for anaemia diagnosis and medical supplements.',
  published: true,
  questions: [
    {
      id: 'fyc-01',
      type: 'scenario',
      scenario: 'Pooja eats a bowl of spinach (palak) sabzi and chana to boost her iron levels, but she drinks a hot cup of black tea with milk right at the same meal.',
      question: 'How does tea affect iron absorption from plant-based foods, and what is the better timing?',
      options: [
        'Tannins and polyphenols in chai bind to non-heme plant iron and block absorption by up to 60%; it is best to drink chai at least 1 hour before or after meals',
        'Tea multiplies iron absorption by 5 times, so drinking it during meals is ideal',
        'Tea turns plant iron into toxic substances inside the stomach',
        'Beverage timing has zero effect on nutrient absorption in human digestion'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Tannins in tea and coffee, as well as calcium in high amounts, significantly inhibit non-heme (plant) iron absorption. Spacing tea at least 60–90 minutes away from meals allows your intestine to absorb iron properly.',
        whyWrong: 'Tea does not make iron toxic, but drinking it with meals frequently leads to low ferritin and anaemia in vegetarian diets.'
      },
      topicTag: 'Iron Absorption',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-02',
      type: 'single-choice',
      question: 'Which kitchen combination is an evidence-based example of pairing plant-based iron with Vitamin C for maximum absorption?',
      options: [
        'Palak dal or poha with a generous squeeze of fresh lemon juice (nimbu) or an amla',
        'White polished rice with sweet sugar syrup',
        'Boiled potatoes mixed with cow ghee and sugar',
        'Fried potato chips eaten with a carbonated soda'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Vitamin C (ascorbic acid found in lemon, amla, guava, tomatoes) reduces ferric iron to ferrous iron, multiplying plant iron absorption by 2 to 3 times.',
        whyWrong: 'Sugary processed foods and sodas provide no iron or Vitamin C and can worsen period inflammation.'
      },
      topicTag: 'Dietary Iron',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-03',
      type: 'multi-select',
      question: 'Which of the following symptoms frequently point to iron-deficiency anaemia (common among menstruating girls)? (Select all that apply)',
      options: [
        'Unusual extreme fatigue and feeling winded after climbing a single flight of stairs',
        'Pale inner eyelids (conjunctiva), pale nailbeds, or frequent cold hands and feet',
        'Dizziness, brain fog, and brittle or spoon-shaped fingernails',
        'Instant fluorescent glowing of skin in the dark'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Iron is required to synthesize hemoglobin, which transports oxygen to cells and muscles. Low iron reduces tissue oxygenation, causing fatigue, shortness of breath, paleness, and light-headedness.',
        whyWrong: 'Skin glowing in the dark is biologically impossible. If you feel chronic fatigue, a doctor can check your CBC and Serum Ferritin levels.'
      },
      topicTag: 'Anaemia Awareness',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: National Family Health Survey (NFHS-5) estimates ~57% of women aged 15-49 and ~59% of adolescent girls in India are anaemic]'
    },
    {
      id: 'fyc-04',
      type: 'scenario',
      scenario: 'Kavita (14) has moderate period cramps on Day 1. Her grandmother recommends staying strictly motionless in bed for 3 days and never stretching or walking.',
      question: 'What does sports medicine and gynaecology research say about gentle movement during periods?',
      options: [
        'Light to moderate movement (like brisk walking, swimming, or restorative yoga) releases endorphins (natural painkillers) and improves pelvic blood flow, easing cramps',
        'Any physical exercise during periods causes the uterus to permanently tilt backward',
        'High-intensity marathon running with no rest is mandatory for cramp relief',
        'You should only move if you have a fever'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Gentle physical activity releases beta-endorphins, which counteract painful prostaglandins and relieve abdominal cramping. Listen to your body and rest when exhausted, but complete bed-rest is unnecessary.',
        whyWrong: 'Movement does not displace reproductive organs. The old myth that exercise harms menstruating bodies has been completely debunked.'
      },
      topicTag: 'Movement & Exercise',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-05',
      type: 'single-choice',
      question: 'Which traditional Indian home remedy is backed by mild carminative and antispasmodic properties for soothing bloating and period cramping?',
      options: [
        'Warm water infused with lightly boiled carom seeds (ajwain) and a slice of fresh ginger (adrak)',
        'Drinking boiling vinegar before sunrise',
        'Eating raw unprocessed mustard seeds with cold milk',
        'Fasting completely without water for 24 hours'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Ajwain (thymol) and ginger have established carminative and mild anti-inflammatory properties that relax smooth muscle spasms in the intestines and pelvis, relieving gas and cramp discomfort.',
        whyWrong: 'Dehydrating yourself by fasting or drinking vinegar irritates the gastric mucosa and worsens cramps.'
      },
      topicTag: 'Home Remedies & Comfort',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-06',
      type: 'single-choice',
      question: 'Why do many people experience more vivid dreams or slightly disrupted sleep during the week before their period (late luteal phase)?',
      options: [
        'Progesterone raises resting body temperature slightly and influences GABA and neurotransmitters, which can alter REM sleep architecture',
        'The moon physically changes brain wave frequencies directly through house walls',
        'Drinking water before sleep permanently disables sleep hormones',
        'Sleep quality never changes across the menstrual cycle'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Post-ovulation, progesterone elevates basal body temperature by ~0.3–0.5°C and interacts with neurotransmitters. As progesterone drops right before menstruation, REM sleep and sleep continuity can experience temporary shifts.',
        whyWrong: 'Lunar myths have no medical basis. Keeping bedroom temperatures cool helps counter the slight progesterone temperature rise.'
      },
      topicTag: 'Sleep & Hormones',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'understanding-pms'
    },
    {
      id: 'fyc-07',
      type: 'multi-select',
      question: 'Which of the following nutrient-dense Indian foods are rich in magnesium, zinc, or healthy fats that support menstrual muscle relaxation? (Select all that apply)',
      options: [
        'Roasted pumpkin seeds, sesame seeds (til), and almonds',
        'Bananas (rich in potassium and Vitamin B6 for fluid balance)',
        'Dark green leafy vegetables like methi and drumstick leaves (moringa)',
        'Packaged artificial neon candy and cotton candy'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Magnesium relaxes uterine smooth muscles and reduces prostaglandin synthesis. Potassium in bananas balances sodium to curb bloating, and leafy greens provide folate and minerals.',
        whyWrong: 'Artificial candy spikes blood sugar and triggers insulin and prostaglandin surges, which can amplify cramping.'
      },
      topicTag: 'Dietary Nutrients',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-08',
      type: 'scenario',
      scenario: 'Sunita (16) experiences painful lower abdomen cramps on the first morning of her period. She has a local hot water bag and a warm shower.',
      question: 'How does heat therapy physically work to soothe menstrual cramps?',
      options: [
        'Local heat (around 40°C) activates thermal receptors that block pain signals to the brain and dilates local blood vessels, increasing blood flow to relaxed uterine muscle tissue',
        'Heat burns away prostaglandin hormones directly inside the bloodstream',
        'Heat stops the uterus from shedding its lining',
        'Heat only has a psychological placebo effect with zero biological mechanism'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Clinical trials demonstrate that continuous low-level topical heat (e.g., heating pad or hot water bottle) is as effective as standard ibuprofen for primary dysmenorrhea by triggering the gate control pain relief mechanism and improving microcirculation.',
        whyWrong: 'Heat does not destroy circulating hormones, nor does it halt normal endometrial shedding.'
      },
      topicTag: 'Pain Relief Science',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-09',
      type: 'single-choice',
      question: 'Why is staying well-hydrated especially important when you feel bloated and puffy before or during your period?',
      options: [
        'Drinking adequate water signals kidneys to excrete excess retained sodium, reducing premenstrual water retention and preventing constipation',
        'Drinking water makes bloating 10 times worse by flooding internal organs',
        'Water intake has no connection to kidney filtration or sodium excretion',
        'You should replace all water with sugary cola to maintain electrolytes'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'When dehydrated, the body holds onto water and aldosterone levels rise. Drinking ample plain water or tender coconut water flushes out excess sodium and eases bloating while preventing constipation-related pelvic pressure.',
        whyWrong: 'Restricting water actually worsens fluid retention. Sugary sodas add high sodium and sugar that exacerbate puffiness.'
      },
      topicTag: 'Hydration & Bloating',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fyc-10',
      type: 'scenario',
      scenario: 'Neeta is an athlete on her school track team. Her period starts on the morning of a district relay competition. Her teammate says: "You can\'t run, women lose all their muscle strength on periods."',
      question: 'What does sports science prove about athletic performance during menstruation?',
      options: [
        'Estrogen and progesterone are at baseline low levels during menstruation, meaning glycogen utilization is efficient and countless Olympic records have been set by athletes during their periods',
        'Athletes cannot perform during menstruation and must withdraw from all sports',
        'Muscle fibers temporarily detach from bones during menstrual bleeding',
        'Exercise causes menstrual blood to flow backwards into the lungs'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Olympic and collegiate sports data consistently show that with proper hygiene products (like pads, tampons, or cups) and pain management, physical capabilities remain strong. Low hormone levels during the early follicular phase can actually facilitate high work output.',
        whyWrong: 'Muscle attachments are unaffected by periods, and retrograde flow to lungs is medically absurd. Running during periods is entirely safe.'
      },
      topicTag: 'Sports & Periods',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'food-movement-cramps'
    }
  ]
};
