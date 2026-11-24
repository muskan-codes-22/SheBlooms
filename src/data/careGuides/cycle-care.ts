import {
  ProductComparison,
  IndianFoodItem,
  TriageScenario
} from './types';

export interface PainToolkitItem {
  id: string;
  name: string;
  icon: string;
  category: 'heat' | 'movement' | 'nutrition' | 'rest' | 'medical';
  howItWorks: string;
  bestTiming: string;
  practicalTip: string;
}

export const PAIN_TOOLKIT_ITEMS: PainToolkitItem[] = [
  {
    id: 'heat',
    name: 'Topical Warmth Therapy',
    icon: '🔥',
    category: 'heat',
    howItWorks: 'Local heat (~40°C) triggers temperature receptors in the skin that block pain signals to the spine (Gate Control Theory) and dilates local blood vessels to soothe muscle ischemia.',
    bestTiming: 'Days 1 and 2 when cramps first begin.',
    practicalTip: 'Apply a warm water bottle or heating pad wrapped in cloth across your lower tummy for 20 minutes while relaxing.'
  },
  {
    id: 'movement',
    name: 'Gentle Restorative Movement',
    icon: '🧘',
    category: 'movement',
    howItWorks: 'Light walking, swimming, or restorative yoga (like Child’s Pose and Cat-Cow) stimulates the release of beta-endorphins (natural pain relievers) and enhances pelvic blood flow.',
    bestTiming: 'When feeling stiff, bloated, or experiencing mild-to-moderate cramps.',
    practicalTip: 'A slow 15-minute walk in fresh air or 5 minutes of gentle pelvic rocking reduces cramping better than lying stiffly motionless.'
  },
  {
    id: 'food-fluids',
    name: 'Warm Infusions & Electrolytes',
    icon: '🍵',
    category: 'nutrition',
    howItWorks: 'Ginger (gingerols) and ajwain (thymol) have mild antispasmodic and anti-inflammatory properties that ease smooth muscle spasms in the intestines and pelvis.',
    bestTiming: 'Throughout bleeding days, especially morning and evening.',
    practicalTip: 'Sip warm water boiled with a pinch of carom seeds (ajwain) and fresh ginger slices. Drink tender coconut water for natural potassium.'
  },
  {
    id: 'rest',
    name: 'Sleep & Body Decompression',
    icon: '🌙',
    category: 'rest',
    howItWorks: 'Quality sleep lowers circulating cortisol and adrenaline, which can otherwise amplify pain sensitivity in the nervous system.',
    bestTiming: 'Nighttime and short 20-minute daytime power naps.',
    practicalTip: 'Sleep curled on your side with a small pillow between your knees (fetal position) to take pressure off lower back and pelvic muscles.'
  },
  {
    id: 'medical-note',
    name: 'Analgesics (Medical Guidance)',
    icon: '💊',
    category: 'medical',
    howItWorks: 'Non-steroidal anti-inflammatory drugs (NSAIDs) inhibit the cyclooxygenase (COX) enzyme, reducing excessive prostaglandin production that causes cramping.',
    bestTiming: 'Only when non-medicinal remedies are insufficient, taken with food.',
    practicalTip: 'Always consult a qualified doctor or pharmacist for medicine advice and dosage. Never take medications on an empty stomach without clinical approval.'
  }
];

export const PRODUCTS_COMPARISON: ProductComparison[] = [
  {
    id: 'disposable-pads',
    name: 'Disposable Sanitary Pads',
    icon: '🌸',
    wearTime: 'Change every 4 to 6 hours',
    costRange: '₹30 to ₹60 per pack (₹1 Suvidha pads at Jan Aushadhi)',
    ecoRating: 'Single-use plastic backing (biodegradable options emerging)',
    bestFor: 'Beginners, school days, overnight, and anyone wanting simplicity.',
    safetyTips: 'Change every 4–6 hours even on light flow days to prevent vulvar rash and bacterial accumulation.',
    ageFit: 'All ages (ideal starter product for 9–17)'
  },
  {
    id: 'cloth-pads',
    name: 'Reusable Cotton Cloth Pads',
    icon: '🌱',
    wearTime: 'Change every 4 to 6 hours',
    costRange: '₹150 to ₹300 per pad (reusable for 1–2 years)',
    ecoRating: 'High sustainability (zero single-use waste)',
    bestFor: 'Sensitive skin prone to pad rashes, eco-conscious individuals, home use.',
    safetyTips: 'Must be washed thoroughly with clean water and soap, and dried completely in direct sunlight (UV disinfection). Never store damp.',
    ageFit: 'All ages'
  },
  {
    id: 'menstrual-cups',
    name: 'Medical-Grade Menstrual Cups',
    icon: '🏆',
    wearTime: 'Empty every 8 to 12 hours',
    costRange: '₹250 to ₹600 (lasts 5 to 10 years)',
    ecoRating: 'Maximum eco-friendliness (lowest lifetime waste)',
    bestFor: 'Active sports, swimming, long travel, hot humid climates.',
    safetyTips: 'Boil in clean water for 5 to 7 minutes before and after each cycle. Empty and wash with clean water at least twice daily.',
    ageFit: 'Teens & Adults (requires comfort with self-insertion)'
  },
  {
    id: 'tampons',
    name: 'Sanitary Tampons',
    icon: '🩹',
    wearTime: 'Change every 4 to 8 hours (never exceed 8 hours)',
    costRange: '₹150 to ₹350 per box',
    ecoRating: 'Single-use; applicators create plastic waste',
    bestFor: 'Swimming, athletics, dance competitions.',
    safetyTips: 'Toxic Shock Syndrome (TSS) awareness: use lowest absorbency for your flow, never wear overnight or past 8 hours.',
    ageFit: 'Ages 13+ (follow insertion guide calmly)'
  },
  {
    id: 'period-underwear',
    name: 'Absorbent Period Underwear',
    icon: '🩲',
    wearTime: 'Wear for 6 to 10 hours (depending on layer capacity)',
    costRange: '₹400 to ₹900 per pair (reusable for 2+ years)',
    ecoRating: 'High sustainability (washable)',
    bestFor: 'Nighttime leak protection, light flow days, backup with cups.',
    safetyTips: 'Rinse in cold tap water immediately after removal, then wash with mild soap and dry thoroughly in sunlight.',
    ageFit: 'All ages (very comforting for teens)'
  }
];

export const INDIAN_NUTRITION_FOODS: IndianFoodItem[] = [
  {
    id: 'palak',
    name: 'Spinach & Methi Greens',
    category: 'iron',
    hindiName: 'Palak / Methi / Moringa',
    benefit: 'Rich in non-heme plant iron and folate to help replace red blood cells lost in menstrual flow.'
  },
  {
    id: 'chana',
    name: 'Roasted Black Chana & Rajma',
    category: 'iron',
    hindiName: 'Bhuna Chana / Kala Chana',
    benefit: 'High-fiber, high-protein iron source that stabilizes blood sugar and curbs premenstrual energy crashes.'
  },
  {
    id: 'jaggery',
    name: 'Traditional Jaggery & Dates',
    category: 'iron',
    hindiName: 'Gur & Khajoor',
    benefit: 'Natural source of iron and minerals that provides steady warmth and energy.'
  },
  {
    id: 'lemon',
    name: 'Fresh Lemon Juice',
    category: 'vit-c',
    hindiName: 'Nimbu',
    benefit: 'Squeezing fresh lemon over palak or poha multiplies plant iron absorption by 2 to 3 times!'
  },
  {
    id: 'amla',
    name: 'Indian Gooseberry (Amla)',
    category: 'vit-c',
    hindiName: 'Amla',
    benefit: 'One of nature’s richest Vitamin C powerhouses; enhances intestinal ferritin uptake.'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin & Sesame Seeds (Til)',
    category: 'magnesium',
    hindiName: 'Til & Kaddu ke beej',
    benefit: 'Rich in magnesium and zinc, which help relax uterine smooth muscle spasms and ease breast tenderness.'
  }
];

export const CYCLE_TRIAGE_SCENARIOS: TriageScenario[] = [
  {
    id: 'tri-01',
    title: 'Mild Tummy Heaviness Responsive to Warmth',
    scenario: 'Mild cramping on Days 1 and 2 that eases with a hot water bag, allowing you to attend school or work normally.',
    verdict: 'normal',
    explanation: 'Classic primary dysmenorrhea from natural prostaglandins. Responds well to heat, hydration, and light stretching.',
    actionStep: 'Use a heating pad, stay warm, and keep tracking your cycle days.'
  },
  {
    id: 'tri-02',
    title: 'Severe Pain Causing Fainting & School Absences',
    scenario: 'Intense, agonizing cramps that make you vomit, faint, or miss school/work every month, with no relief from heating pads.',
    verdict: 'see-doctor-soon',
    explanation: 'Debilitating dysmenorrhea that impairs daily life is never "just womanhood". It is a clinical sign of secondary dysmenorrhea (e.g. endometriosis or adenomyosis).',
    actionStep: 'Schedule a visit with a paediatrician or gynaecologist for a thorough clinical evaluation.'
  },
  {
    id: 'tri-03',
    title: 'Soaking 1 Pad per Hour for 2+ Consecutive Hours',
    scenario: 'Flow is so heavy that you completely soak through a thick pad or tampon in 45 to 60 minutes, with blood clots larger than a coin.',
    verdict: 'see-doctor-soon',
    explanation: 'Soaking a pad an hour for consecutive hours meets the clinical threshold for menorrhagia (abnormal uterine bleeding) and can cause acute anaemia.',
    actionStep: 'Seek prompt medical advice from a healthcare provider or gynaecology clinic.'
  },
  {
    id: 'tri-04',
    title: 'Period Missing for Over 90 Consecutive Days',
    scenario: 'You have had periods before, but now more than 3 months (90+ days) have passed with zero bleeding, and you are not pregnant.',
    verdict: 'worth-checking',
    explanation: 'Secondary amenorrhea can stem from hormonal imbalances (like PCOS), thyroid variations, extreme stress, or low nutritional intake.',
    actionStep: 'Consult a doctor for basic blood tests (CBC, TSH, prolactin) and gentle pelvic ultrasound if indicated.'
  }
];
