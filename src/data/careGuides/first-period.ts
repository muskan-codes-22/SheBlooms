import {
  FlowLevelInfo,
  BloodColorInfo,
  SymptomCardInfo,
  EmergencyKitItem,
  ScenarioStep,
  PadStep,
  BoundaryScenario,
  BodyMythCard
} from './types';

export const FLOW_LEVELS: FlowLevelInfo[] = [
  {
    level: 'spotting',
    label: 'Spotting (Tiny Specks)',
    fillPercentage: 15,
    description: 'A few light brownish or pinkish droplets or streaks on your underwear. Very common 1–2 days before or after your main bleed.',
    padUsage: 'A pantyliner or thin regular pad is usually plenty.',
    whatToDo: 'Keep a pad in your bag in case flow picks up. Completely normal for first periods.',
    comfortTip: 'No need to worry; many first periods begin with just light spots for a day.'
  },
  {
    level: 'light',
    label: 'Light Flow',
    fillPercentage: 35,
    description: 'A steady but small amount of flow. Blood covers a small patch in the center of the pad without soaking through.',
    padUsage: 'Change your pad every 4 to 6 hours to stay fresh and avoid skin irritation.',
    whatToDo: 'Wear comfortable cotton underwear. A regular-absorbency pad works well.',
    comfortTip: 'Gentle walking or warm water sips help keep tummy muscles relaxed.'
  },
  {
    level: 'medium',
    label: 'Medium Flow (Typical Day 1–2)',
    fillPercentage: 65,
    description: 'Steady, active menstrual flow that fills the absorbent center core of the pad over 3 to 4 hours.',
    padUsage: 'Change your pad every 4 hours, or sooner if feeling damp.',
    whatToDo: 'Use a regular or wing pad. Carry 2 spare pads in your school kit.',
    comfortTip: 'Rest with a warm water bottle across your lower tummy if cramps appear.'
  },
  {
    level: 'heavy',
    label: 'Heavy Flow',
    fillPercentage: 90,
    description: 'Fast flow that saturates most of the pad within 2 to 3 hours. Often happens on the first 24–36 hours of a period.',
    padUsage: 'Use an XL or overnight pad with wings for full coverage.',
    whatToDo: 'Check pad every 3 hours. If completely soaking through a pad every 1 hour for 2+ hours, speak with a doctor.',
    comfortTip: 'Stay well hydrated with warm water and eat iron-rich snacks like roasted chana and jaggery.'
  }
];

export const BLOOD_COLORS: BloodColorInfo[] = [
  {
    id: 'light-pink',
    label: 'Light Pink / Peach',
    dotColor: '#F8B4C4',
    meaning: 'Fresh, very light flow mixed with natural clear cervical fluids.',
    whyItHappens: 'Often appears right at the start of your period or during light spotting days.'
  },
  {
    id: 'bright-red',
    label: 'Bright Red',
    dotColor: '#E02444',
    meaning: 'Active, steady, fresh flow moving smoothly through the uterus.',
    whyItHappens: 'Common on Days 1 and 2 when flow is at its peak and leaving the body quickly.'
  },
  {
    id: 'dark-red',
    label: 'Deep Red / Maroon',
    dotColor: '#8C1D40',
    meaning: 'Standard, healthy menstrual blood that has taken slightly longer to exit.',
    whyItHappens: 'Often seen in the morning after sleeping or on medium-flow afternoons.'
  },
  {
    id: 'brown-rust',
    label: 'Brown / Dark Rust',
    dotColor: '#5C3828',
    meaning: 'Completely normal older blood that has oxidized in the presence of air.',
    whyItHappens: 'Common on the very first day or the final tapering days of your bleed. 100% natural, not an infection.',
    doctorFlag: 'If brown spotting continues non-stop for more than 10 days, have a friendly chat with a doctor.'
  }
];

export const HOW_IT_MIGHT_FEEL: SymptomCardInfo[] = [
  {
    id: 'cramps',
    title: 'Lower Tummy Cramps',
    icon: '🌸',
    whatItFeelsLike: 'A mild to moderate dull ache or tightness in your lower belly or back.',
    simpleComfortTip: 'Place a warm water bottle or heating pad on your lower belly. Gentle cat-cow stretches and slow deep breathing ease the tension.',
    whyItHappens: 'Natural chemical messengers called prostaglandins cause the uterine muscles to gently contract so the lining can shed.'
  },
  {
    id: 'tiredness',
    title: 'Feeling Sleepy or Low Energy',
    icon: '🌙',
    whatItFeelsLike: 'Wanting to lie down, take a nap, or feeling slower than usual.',
    simpleComfortTip: 'Honor your body by getting 8–9 hours of sleep. Sip warm ginger water and eat an iron-rich snack like dates or roasted chana.',
    whyItHappens: 'Shifting progesterone and estrogen levels use metabolic energy as your body does physical reproductive work.'
  },
  {
    id: 'mood',
    title: 'Emotional Ups & Downs',
    icon: '✨',
    whatItFeelsLike: 'Feeling tearful, easily irritated, or extra sensitive over small things.',
    simpleComfortTip: 'Remind yourself: "My feelings are real, but hormones are amplifying them right now." Share a warm hug with someone you trust.',
    whyItHappens: 'Hormones interact temporarily with brain serotonin. These waves usually pass as your bleed gets underway.'
  },
  {
    id: 'bloating',
    title: 'Puffy or Full Tummy',
    icon: '💧',
    whatItFeelsLike: 'Your school skirt feels slightly snug, or your stomach feels full and gassy.',
    simpleComfortTip: 'Drink plenty of warm or room-temperature water. Light walking and warm ajwain water relieve intestinal gas.',
    whyItHappens: 'Progesterone slows down digestion slightly, causing temporary fluid retention that eases after Day 2.'
  }
];

export const FIRST_PERIOD_KIT_ITEMS: EmergencyKitItem[] = [
  {
    id: 'kit-pouch',
    title: 'Small Discreet Zipper Pouch',
    description: 'A cute pouch (like a pencil case or cosmetic bag) that slips silently into your school bag or locker.',
    essential: true
  },
  {
    id: 'kit-pads',
    title: '2 to 3 Clean Sanitary Pads',
    description: 'Wrapped in their individual covers to keep them sterile and dry until use.',
    essential: true
  },
  {
    id: 'kit-underwear',
    title: 'Spare Cotton Underwear',
    description: 'Kept in a clean ziplock bag in case of an accidental leak during class or sports.',
    essential: true
  },
  {
    id: 'kit-wrap',
    title: 'Paper or Small Disposal Bags',
    description: 'Clean newspaper squares or biodegradable disposal bags to wrap used pads neatly before binning.',
    essential: true
  },
  {
    id: 'kit-tissues',
    title: 'Pocket Tissues or Intimate Wipes',
    description: 'Gentle, unscented tissues to pat dry and clean hands if school washroom supplies run low.',
    essential: true
  },
  {
    id: 'kit-snack',
    title: 'Nutritious Snack (Chana, Jaggery, Dates)',
    description: 'A handful of roasted chana with gur (jaggery) or dates for a clean burst of iron and steady energy.',
    essential: false
  },
  {
    id: 'kit-contact',
    title: 'Note of 2 Trusted Adults',
    description: 'Phone numbers of your mom, dad, didi, aunt, or school nurse you can call if you ever feel unsure.',
    essential: false
  }
];

export const SCHOOL_SCENARIO_STEPS: ScenarioStep[] = [
  {
    id: 'step-1',
    title: 'Step 1: You Notice a Damp Feeling in Class',
    prompt: 'You are sitting at your desk during class and feel dampness or a warm spot on your underwear. What should you do first?',
    options: [
      {
        label: 'Stay calm, ask for a washroom pass, and check privately in a cubicle',
        feedback: 'Perfect! There is zero rush. Excuse yourself calmly and walk to the washroom to check.',
        isRecommended: true,
        nextStepId: 'step-2'
      },
      {
        label: 'Panic, pack your bag, and run out of the school gates immediately',
        feedback: 'No need to run away! Every teacher and nurse has helped students with this before. You are safe in school.',
        isRecommended: false,
        nextStepId: 'step-2'
      }
    ]
  },
  {
    id: 'step-2',
    title: 'Step 2: Checking in the Washroom',
    prompt: 'In the cubicle, you see a red or brown mark on your underwear. You do not have a pad with you right now. What is the smartest move?',
    options: [
      {
        label: 'Fold clean toilet tissue into your underwear as a temporary shield, then visit the school medical room or ask a female teacher or friend',
        feedback: 'Exactly right! Tissue acts as a temporary 10-minute liner while you get a fresh pad from the staff room or medical box.',
        isRecommended: true,
        nextStepId: 'step-3'
      },
      {
        label: 'Lock yourself inside the stall for the rest of the school day',
        feedback: 'You do not have to hide! Staff and friends are happy to help you with an emergency pad.',
        isRecommended: false,
        nextStepId: 'step-3'
      }
    ]
  },
  {
    id: 'step-3',
    title: 'Step 3: What if There is a Small Stain on Your Skirt?',
    prompt: 'You notice a tiny spot on the back of your uniform skirt or bench. How can you handle this with dignity?',
    options: [
      {
        label: 'Tie a cardigan, sweater, or dupatta around your waist; ask the nurse for a spare skirt or wash the spot gently with cold water',
        feedback: 'Brilliant! Tying a jacket or cardigan around your waist looks stylish and covers the spot completely.',
        isRecommended: true,
        nextStepId: 'step-4'
      },
      {
        label: 'Shout and apologize loudly to everyone in the hallway',
        feedback: 'Never apologize! Staining is an ordinary accident, like spilling a drop of water or ink. Millions of girls experience it every day.',
        isRecommended: false,
        nextStepId: 'step-4'
      }
    ]
  },
  {
    id: 'step-4',
    title: 'Step 4: Heading Back to Class Confidently',
    prompt: 'With a fresh pad in place and your cardigan tied, how should you finish your school day?',
    options: [
      {
        label: 'Sip water, attend your classes normally, and remember to change your pad in 4 to 6 hours',
        feedback: 'You handled it like a champion! You are fully protected, healthy, and ready for your day.',
        isRecommended: true
      }
    ]
  }
];

export const PAD_STEPS: PadStep[] = [
  {
    step: 1,
    title: 'Wash Hands & Unwrap',
    instruction: 'Wash your hands with soap and water. Open the pad wrapper carefully, keeping the wrapper clean for later disposal.',
    tip: 'Clean hands keep intimate areas free from outside bacteria.'
  },
  {
    step: 2,
    title: 'Peel Backing & Stick to Centre',
    instruction: 'Peel the long paper strip off the sticky adhesive back. Stick the pad firmly to the center of your clean cotton underwear, with the wider end towards the back.',
    tip: 'Placing the wider part toward the back gives you the best leak protection when sitting or lying down.'
  },
  {
    step: 3,
    title: 'Fold Wings Under Underwear',
    instruction: 'Peel the small paper backing from the side wings. Wrap both wings tightly around the underside of your underwear panties to lock it in place.',
    tip: 'Wings prevent the pad from shifting or bunching when you walk or climb stairs.'
  },
  {
    step: 4,
    title: 'Check Fit & Wear Comfortably',
    instruction: 'Pull your underwear up. The pad should feel smooth, centered, and comfortable without bunching between your thighs.',
    tip: 'If it feels crooked, you can easily peel it off and reposition it once.'
  },
  {
    step: 5,
    title: 'Wrap Used Pad & Bin Responsibly',
    instruction: 'When changing (every 4 to 6 hours), roll up the used pad, wrap it securely in its plastic wrapper or old newspaper, and place it in a dustbin. Never flush down the toilet.',
    tip: 'Pads swell in water and choke pipes. Binning wrapped pads keeps plumbing clean and protects sanitation workers.'
  }
];

export const BOUNDARY_SCENARIOS: BoundaryScenario[] = [
  {
    id: 'bs-01',
    situation: 'A family friend or distant relative insists on giving you a long, tight hug and lap-sitting that makes your stomach feel uncomfortable, saying "Come on, give uncle a big hug!"',
    choices: [
      {
        text: 'Politely step back, offer a warm Namaste or wave, and say: "I prefer to say hello like this, thank you."',
        guidance: 'You have full autonomy over your physical body. Offering a polite Namaste is respectful to culture while firmly guarding your personal space.',
        isEmpowering: true
      },
      {
        text: 'Force yourself to endure it because refusing an older person is always bad manners.',
        guidance: 'You never have to sacrifice your bodily comfort to appear polite. True respect goes both ways.',
        isEmpowering: false
      }
    ],
    keyTakeaway: 'The Swimsuit Rule: The areas covered by your swimsuit (chest, between your legs, bottom) plus your mouth are strictly private. No one has the right to touch or view them.'
  },
  {
    id: 'bs-02',
    situation: 'Someone on an online gaming or chat app you met asks you to send a picture of yourself in your bedroom without your school uniform, saying "It will vanish in 5 seconds."',
    choices: [
      {
        text: 'Block the account immediately, take a screenshot of the message, and show it to a parent, teacher, or trusted adult.',
        guidance: 'Disappearing photos can be easily screen-recorded or photographed by second phones. Blocking and reporting protects you and other students.',
        isEmpowering: true
      },
      {
        text: 'Send it because they promised to delete it right away.',
        guidance: 'Never send private photos online. Safe friends will never ask for intimate pictures or ask you to keep secrets.',
        isEmpowering: false
      }
    ],
    keyTakeaway: 'Digital Safety Rule: Never share private photos. If anyone ever makes you feel uncomfortable online, tell a trusted adult immediately—you will not be in trouble.'
  },
  {
    id: 'bs-03',
    situation: 'An older student or neighbor tells you: "Let us play a secret game. Do not tell your parents or they will be very angry at you."',
    choices: [
      {
        text: 'Recognize this as an unsafe secret and tell a trusted adult right away.',
        guidance: 'Safe secrets are joyful surprises (like a surprise birthday gift). Unsafe secrets make you feel scared, confused, or guilty. Adults must never ask children to hide physical touch.',
        isEmpowering: true
      },
      {
        text: 'Keep the secret so your parents do not get angry.',
        guidance: 'Perpetrators use fear to enforce silence. Caring parents and teachers will protect you, not blame you.',
        isEmpowering: false
      }
    ],
    keyTakeaway: 'The NO - GO - TELL Rule: Say NO firmly, GO away to a safe place, and TELL a trusted adult until someone takes action to protect you.'
  }
];

export const BODY_MYTHS_DATA: BodyMythCard[] = [
  {
    id: 'bm-01',
    myth: 'Sharing a bed, hugging, or touching someone can cause pregnancy.',
    fact: 'Biologically impossible. Pregnancy requires sexual intercourse involving sperm and an ovum.',
    explanation: 'Everyday affection like hugs, handshakes, holding hands, and sharing a room has zero biological connection to conception.',
    ageTier: '9-12'
  },
  {
    id: 'bm-02',
    myth: 'Touching a jar of pickles (achar) during your period will turn it bad.',
    fact: 'Clean hands never spoil food or pickles.',
    explanation: 'Pickles spoil only if contaminated with water, dirt, or bacteria on spoons. Menstruation releases no toxins through your hands.',
    ageTier: '9-12'
  },
  {
    id: 'bm-03',
    myth: 'You cannot wash your hair or take a warm bath while menstruating.',
    fact: 'Warm baths and clean hair are soothing, safe, and reduce period cramps.',
    explanation: 'Water cannot enter your uterus or "freeze" blood. Warm showers relax abdominal muscles and keep your skin fresh.',
    ageTier: '9-12'
  },
  {
    id: 'bm-04',
    myth: 'Sperm can only survive in the female body for a few minutes.',
    fact: 'Sperm can remain viable inside the female reproductive tract for up to 5 days in fertile cervical mucus.',
    explanation: 'This biological lifespan is why the "fertile window" spans the 5 days before ovulation plus the day of ovulation itself.',
    ageTier: '13-17'
  },
  {
    id: 'bm-05',
    myth: 'A girl will always ovulate exactly on Day 14 of every cycle.',
    fact: 'Ovulation timing varies widely based on individual cycle length, stress, and sleep.',
    explanation: 'Day 14 is only an average for textbook 28-day cycles. In cycles lasting 32 days, ovulation typically occurs around Day 18.',
    ageTier: '13-17'
  }
];
