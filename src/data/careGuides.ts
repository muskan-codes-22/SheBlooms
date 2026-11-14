export interface ProductGuide {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  badge: string;
  bestFor: string;
  changeFrequency: string;
  comfortLevel: string;
  ecoScore: string;
  howToUseSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  dos: string[];
  donts: string[];
  commonMistakes: string[];
}

export const PRODUCT_GUIDES: ProductGuide[] = [
  {
    id: 'pads',
    name: 'Sanitary Pads',
    tagline: 'Classic, beginner-friendly external protection',
    icon: '🌸',
    badge: 'Beginner Favorite',
    bestFor: 'First periods, sleeping, heavy flow days, and quick changes',
    changeFrequency: 'Every 4 to 6 hours',
    comfortLevel: 'Gentle & familiar',
    ecoScore: 'Disposables or Washable Cloth Pads',
    howToUseSteps: [
      {
        step: 1,
        title: 'Unwrap & Peel',
        description: 'Wash your hands with clean water. Unwrap the pad wrapper and peel off the long center adhesive backing strip.'
      },
      {
        step: 2,
        title: 'Position on Underwear',
        description: 'Stick the adhesive side firmly along the center crotch (gusset) of your clean underwear with the wider side towards the back.'
      },
      {
        step: 3,
        title: 'Fold the Wings',
        description: 'If your pad has wings, peel their adhesive papers, wrap them tightly around the underside of the underwear to secure edges.'
      },
      {
        step: 4,
        title: 'Check Fit & Wear',
        description: 'Pull your underwear up. The pad should feel smooth and centered without bunching up.'
      },
      {
        step: 5,
        title: 'Dispose Responsibly',
        description: 'Wrap used pad tightly in its wrapper or newspaper, and toss into the trash bin. Never flush pads down the toilet.'
      }
    ],
    dos: [
      'Change regularly every 4–6 hours, even if the pad looks mostly clean.',
      'Choose unscented pads to prevent irritation or allergic vulvitis.',
      'Keep a spare pad in a cute waterproof pouch in your bag.'
    ],
    donts: [
      'Never flush sanitary pads down the toilet — they will block plumbing.',
      'Don’t wear a single disposable pad for 10+ hours continuously.'
    ],
    commonMistakes: [
      'Placing the pad too far forward or backwards — align the widest part where your body rests.',
      'Forgetting to wash hands before changing products.'
    ]
  },
  {
    id: 'tampons',
    name: 'Tampons',
    tagline: 'Discreet internal protection for swimming and athletics',
    icon: '🌸',
    badge: 'Active & Sporty',
    bestFor: 'Swimming, dance, gymnastics, tight workout leggings',
    changeFrequency: 'Every 4 to 8 hours (never exceed 8 hrs)',
    comfortLevel: 'Weightless when positioned properly',
    ecoScore: 'Biodegradable cotton options available',
    howToUseSteps: [
      {
        step: 1,
        title: 'Wash Hands & Unpack',
        description: 'Wash your hands thoroughly with soap. Unwrap the fresh tampon and ensure the removal string is securely dangling.'
      },
      {
        step: 2,
        title: 'Find a Relaxed Position',
        description: 'Sit on the toilet with your knees spread wide, or stand with one foot lifted on the toilet rim. Take a gentle exhale.'
      },
      {
        step: 3,
        title: 'Angle Towards Lower Back',
        description: 'Hold the barrel grips with thumb and middle finger. Gently guide the rounded tip into the vaginal opening, aiming towards your lower spine (not straight up).'
      },
      {
        step: 4,
        title: 'Push Plunger to Insert',
        description: 'Push the inner plunger until it enters the outer barrel, gently depositing the tampon. Withdraw the plastic applicator, leaving the string outside.'
      },
      {
        step: 5,
        title: 'To Remove',
        description: 'Relax your muscles, pull the string at the same gentle angle as insertion, and wrap the used tampon for the trash bin.'
      }
    ],
    dos: [
      'Always pick the lowest absorbency necessary for your flow level (Regular/Light/Super).',
      'Change every 4 to 8 hours without fail.',
      'Double check that you have removed the previous tampon before inserting a new one.'
    ],
    donts: [
      'Never leave a tampon in for more than 8 hours.',
      'Never use a tampon for normal non-period vaginal discharge.'
    ],
    commonMistakes: [
      'Aiming straight up instead of slightly backwards towards the lower back.',
      'Stopping halfway — if you can feel the tampon when walking, it is not inserted deeply enough.'
    ]
  },
  {
    id: 'cups',
    name: 'Menstrual Cups',
    tagline: 'Zero-waste medical silicone cup with up to 12-hour protection',
    icon: '🌿',
    badge: 'Eco-Hero',
    bestFor: 'Sustainability, long days away from home, budget savings',
    changeFrequency: 'Empty every 8 to 12 hours',
    comfortLevel: 'Unnoticeable once suction is formed',
    ecoScore: 'Lasts up to 5–10 years',
    howToUseSteps: [
      {
        step: 1,
        title: 'Boil & Sanitize',
        description: 'Before first use each month, boil the silicone cup in a pot of water for 3 to 5 minutes. Wash your hands thoroughly.'
      },
      {
        step: 2,
        title: 'Fold the Rim',
        description: 'Try the "Punch-Down fold" (push one side of the rim down into the base) or "C-Fold" (flatten and bend in half like a letter C).'
      },
      {
        step: 3,
        title: 'Insert & Release',
        description: 'In a comfortable squat or sit, insert the folded cup at a 45-degree angle. Once inside, release the fold so it pops open.'
      },
      {
        step: 4,
        title: 'Verify the Seal',
        description: 'Rotate the base slightly with your fingers or run a finger along the outer rim to make sure it opened completely and formed a seal.'
      },
      {
        step: 5,
        title: 'Break Seal & Empty',
        description: 'To remove, pinch the ribbed base to release the vacuum suction, then gently tilt and slide out. Pour into the toilet, rinse with water, and reinsert.'
      }
    ],
    dos: [
      'Practice inserting with a little water or water-based lubricant in the shower.',
      'Always break the suction seal by pinching the base before pulling.'
    ],
    donts: [
      'Never pull hard on the stem alone without pinching the base (you’ll tug against suction).'
    ],
    commonMistakes: [
      'Panicking if it feels high: bearing down gently with abdominal muscles brings the cup right to your fingertips.'
    ]
  },
  {
    id: 'underwear',
    name: 'Period Underwear',
    tagline: 'Washable, multi-layered absorbent undergarments',
    icon: '🩲',
    badge: 'Cozy & Reusable',
    bestFor: 'Sleeping comfortably, backup leak protection, teen peace of mind',
    changeFrequency: 'Wear 8 to 12 hours depending on flow rating',
    comfortLevel: 'Feels just like ordinary soft underwear',
    ecoScore: 'Washable and reusable for 2–3+ years',
    howToUseSteps: [
      {
        step: 1,
        title: 'Choose Flow Rating',
        description: 'Select your pair: Light (holds 1 tampon equivalent), Medium (2 tampons), or Heavy/Overnight (3–4 tampons).'
      },
      {
        step: 2,
        title: 'Wear Naturally',
        description: 'Slip on just like your favorite underwear. The built-in moisture-wicking gusset catches fluid and neutralizes odor.'
      },
      {
        step: 3,
        title: 'Rinse in Cold Water',
        description: 'When changing, rinse under cold running tap water until the water runs clear. This prevents blood stains from setting.'
      },
      {
        step: 4,
        title: 'Gentle Machine Wash',
        description: 'Wash with regular laundry on a gentle cold cycle. Do NOT use fabric softeners or bleach (they coat absorbent fibers).'
      },
      {
        step: 5,
        title: 'Hang to Dry',
        description: 'Hang or lay flat to air dry. Heat from high dryers can degrade the waterproof membrane.'
      }
    ],
    dos: [
      'Rinse with cold water immediately after wearing.',
      'Have 3–5 pairs in your drawer so you can rotate throughout your cycle.'
    ],
    donts: [
      'Never use hot water to rinse fresh blood, as heat cooks proteins and sets the stain.',
      'Never use fabric softener.'
    ],
    commonMistakes: [
      'Putting them in high-heat dryer machines which can weaken the waterproof backing.'
    ]
  }
];

export interface FirstPeriodChecklistItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

export const FIRST_PERIOD_CHECKLIST: FirstPeriodChecklistItem[] = [
  {
    id: 'kit-1',
    title: 'Discreet Zipper Pouch',
    category: 'Essential',
    description: 'A cute, opaque pouch that fits neatly into your school bag or purse without drawing attention.',
    icon: '👝'
  },
  {
    id: 'kit-2',
    title: '2–3 Regular Sanitary Pads',
    category: 'Essential',
    description: 'Individual wrapped pads with wings for secure attachment.',
    icon: '🌸'
  },
  {
    id: 'kit-3',
    title: '1 Clean Spare Cotton Underwear',
    category: 'Essential',
    description: 'Folded neatly into a small ziplock bag for emergency leaks or sudden starts.',
    icon: '🩲'
  },
  {
    id: 'kit-4',
    title: 'Unscented Intimate Wipes or Tissues',
    category: 'Hygiene',
    description: 'Gentle, fragrance-free wipes to clean up quickly if public restrooms lack toilet paper.',
    icon: '🧻'
  },
  {
    id: 'kit-5',
    title: 'Small Reusable Disposal Bag',
    category: 'Hygiene',
    description: 'A small biodegradable bag or newspaper scrap for clean and respectful disposal.',
    icon: '🛍️'
  },
  {
    id: 'kit-6',
    title: 'Comfort Snack or Dark Chocolate',
    category: 'Comfort',
    description: 'A small square of 70% dark chocolate or trail mix rich in magnesium.',
    icon: '🍫'
  },
  {
    id: 'kit-7',
    title: 'Mini Heat Patch / Hot Water Bottle',
    category: 'Comfort',
    description: 'Stick-on adhesive warmth patch for soothing lower tummy cramps at school or work.',
    icon: '🔥'
  },
  {
    id: 'kit-8',
    title: 'Period Tracker / SheBlooms App Shortcut',
    category: 'Preparedness',
    description: 'Bookmarked on your phone to note your cycle days without storing private data online.',
    icon: '📱'
  }
];

export interface PainFlowSuggestion {
  flowLevel: 'spotting' | 'light' | 'medium' | 'heavy' | 'very-heavy';
  painLevel: number; // 0 to 10
  title: string;
  summary: string;
  recommendations: string[];
  doctorAlert?: string;
}

export function evaluatePainFlow(pain: number, flow: string): PainFlowSuggestion {
  let doctorAlert: string | undefined = undefined;

  if (pain >= 8 || flow === 'very-heavy') {
    doctorAlert = '⚠️ High discomfort or very heavy flow noted. If you are soaking pads hourly, passing large coin-sized clots, or pain stops daily tasks, please consult a healthcare professional.';
  } else if (pain >= 5) {
    doctorAlert = 'Moderate pain noted. If over-the-counter relief and warmth don’t ease cramps within 48 hours, consider checking in with your doctor.';
  }

  return {
    flowLevel: flow as any,
    painLevel: pain,
    title: pain <= 3 ? 'Gentle Rhythm' : pain <= 6 ? 'Soothing Care Recommended' : 'Prioritize Rest & Support',
    summary: `For pain level ${pain}/10 with ${flow.replace('-', ' ')} flow:`,
    recommendations: [
      pain > 0 ? 'Apply continuous gentle heat (hot water bottle or heat patch) over your pelvic area.' : 'Keep well hydrated with warm infusions.',
      flow === 'heavy' || flow === 'very-heavy' ? 'Change products every 3–4 hours and track count of pads/tampons used.' : 'Wear comfortable, loose breathable cotton clothing.',
      pain >= 5 ? 'Sip fresh ginger tea or warm peppermint brew to calm inflammatory prostaglandins.' : 'Enjoy light walking or restorative child’s pose.',
      'Prioritize 8+ hours of restful sleep and reduce caffeine or sodium.'
    ],
    doctorAlert
  };
}

