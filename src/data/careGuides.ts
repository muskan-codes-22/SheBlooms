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
    tagline: 'Most widely used in India, beginner-friendly external protection',
    icon: '🌸',
    badge: 'Most Popular in India',
    bestFor: 'First periods, school days, overnight sleep, and easy changing',
    changeFrequency: 'Every 4 to 6 hours',
    comfortLevel: 'Simple and familiar',
    ecoScore: 'Available at medical shops (₹30 to ₹60/pack); cloth pads also reusable',
    howToUseSteps: [
      {
        step: 1,
        title: 'Unwrap & Peel',
        description: 'Wash hands with soap. Unwrap the pad and peel the center paper strip off the sticky back.'
      },
      {
        step: 2,
        title: 'Stick to Underwear',
        description: 'Press the sticky side firmly onto the center of clean cotton underwear with the wider end towards the back.'
      },
      {
        step: 3,
        title: 'Fold the Wings',
        description: 'Peel the wing papers. Wrap both wings tightly around the underside of your underwear.'
      },
      {
        step: 4,
        title: 'Check Fit & Wear',
        description: 'Pull your underwear up. The pad should feel flat and centered without bunching up.'
      },
      {
        step: 5,
        title: 'Dispose Responsibly',
        description: 'Wrap the used pad in newspaper or its wrapper. Toss into a dustbin. Never flush down any toilet.'
      }
    ],
    dos: [
      'Change every 4 to 6 hours, even on lighter flow days, to avoid skin rashes.',
      'Wrap used pads in newspaper or paper before throwing them in the dustbin.',
      'Always keep 1 or 2 spare pads in your school bag or purse.',
      'Safe cloth care: If using reusable cloth, wash with soap and clean water, dry fully in direct sunlight, and store in a clean dry place. Replace when rough. // TODO(verify: MoHFW / UNICEF menstrual hygiene guidelines on cloth sanitation)'
    ],
    donts: [
      'Never flush sanitary pads or cloth into the toilet — they clog pipes immediately.',
      'Never wear a single disposable pad for more than 8 to 10 hours continuously.',
      'Never dry reusable cloth in dark, damp indoor corners.'
    ],
    commonMistakes: [
      'Sticking the pad too far forward — place the wider part where your body rests.',
      'Forgetting to wash hands with soap before and after changing.'
    ]
  },
  {
    id: 'tampons',
    name: 'Tampons',
    tagline: 'Discreet internal protection for sports, dance, and swimming',
    icon: '🌸',
    badge: 'Active & Sports',
    bestFor: 'Swimming, athletics, dance classes, tight track pants',
    changeFrequency: 'Every 4 to 8 hours (never exceed 8 hours)',
    comfortLevel: 'Weightless when placed properly',
    ecoScore: 'Available at pharmacies & online (about ₹200 to ₹350/pack)',
    howToUseSteps: [
      {
        step: 1,
        title: 'Wash Hands & Check',
        description: 'Wash your hands with soap. Unwrap the tampon and check that the removal string hangs securely.'
      },
      {
        step: 2,
        title: 'Find an Easy Position',
        description: 'Squat comfortably or sit on the toilet with knees wide apart. Take a slow, calm breath.'
      },
      {
        step: 3,
        title: 'Slide In at an Angle',
        description: 'Hold the grip. Gently slide the tip into the vaginal opening, aiming towards your lower spine (not straight up).'
      },
      {
        step: 4,
        title: 'Push Plunger to Place',
        description: 'Push the inner tube to release the tampon inside. Remove the outer applicator, leaving the string outside.'
      },
      {
        step: 5,
        title: 'To Remove Gently',
        description: 'Relax your body. Pull the string at the same gentle angle. Wrap in paper and put in the dustbin.'
      }
    ],
    dos: [
      'Always use the lowest absorbency that matches your flow.',
      'Change every 4 to 8 hours without fail.',
      'Make sure you remove the previous tampon before inserting a new one.'
    ],
    donts: [
      'Never leave a tampon inside for longer than 8 hours.',
      'Never use a tampon for ordinary vaginal discharge when not on your period.'
    ],
    commonMistakes: [
      'Pushing straight up instead of slightly backwards towards the lower back.',
      'Leaving it half in — if you feel it when walking, slide it a little deeper.'
    ]
  },
  {
    id: 'cups',
    name: 'Menstrual Cups',
    tagline: 'Reusable medical-grade silicone cup with up to 12-hour protection',
    icon: '🌿',
    badge: 'Pocket-Friendly & Eco-Hero',
    bestFor: 'Long college or office hours, travel, saving money over years',
    changeFrequency: 'Empty every 8 to 12 hours',
    comfortLevel: 'Completely unnoticeable once sealed',
    ecoScore: 'One-time cost (₹250 to ₹500), lasts up to 5 to 10 years',
    howToUseSteps: [
      {
        step: 1,
        title: 'Boil & Wash Hands',
        description: 'Boil the cup in clean water for 3 to 5 minutes before your period starts. Wash hands with soap.'
      },
      {
        step: 2,
        title: 'Fold the Rim',
        description: 'Fold the cup rim in half like a letter "C", or push one side down into the base.'
      },
      {
        step: 3,
        title: 'Insert & Release',
        description: 'Squat comfortably and slide the folded cup towards your tailbone. Let it pop open inside.'
      },
      {
        step: 4,
        title: 'Check the Seal',
        description: 'Gently turn the base with your fingers to ensure it opened fully and formed a gentle seal.'
      },
      {
        step: 5,
        title: 'Pinch Base & Empty',
        description: 'Pinch the ribbed base to release suction, then slide out. Empty into the toilet, wash with water, and reinsert.'
      }
    ],
    dos: [
      'Practice inserting with a little clean water during your bath when relaxed.',
      'Always pinch the base to break suction before pulling.'
    ],
    donts: [
      'Never pull hard on the stem alone without pinching the base first.'
    ],
    commonMistakes: [
      'Worrying if it sits high: relaxing and bearing down gently brings it right to your fingers.'
    ]
  },
  {
    id: 'underwear',
    name: 'Period Underwear',
    tagline: 'Washable, multi-layered absorbent underwear for leak-free days',
    icon: '🩲',
    badge: 'Cozy & Reusable',
    bestFor: 'Sleeping without worry, backup on heavy days, school peace of mind',
    changeFrequency: 'Wear 8 to 12 hours depending on flow level',
    comfortLevel: 'Feels just like ordinary soft cotton underwear',
    ecoScore: 'Available online (about ₹400 to ₹800/pair); washable for 2+ years',
    howToUseSteps: [
      {
        step: 1,
        title: 'Pick Your Flow Level',
        description: 'Choose your pair: Light (holds 1 pad equivalent), Medium (2 pads), or Heavy Overnight (3 pads).'
      },
      {
        step: 2,
        title: 'Wear Naturally',
        description: 'Wear just like regular underwear. The built-in middle layer absorbs flow and prevents stains.'
      },
      {
        step: 3,
        title: 'Rinse in Cold Tap Water',
        description: 'When changing, rinse under cold running water until the water runs clear. This stops stains from setting.'
      },
      {
        step: 4,
        title: 'Wash with Soap',
        description: 'Wash by hand or in a bucket with mild soap. Do not use bleach or hot water.'
      },
      {
        step: 5,
        title: 'Dry Fully in Sunlight',
        description: 'Hang to dry in direct sunlight or fresh air. Sunlight naturally kills bacteria.'
      }
    ],
    dos: [
      'Rinse with cold water right away after wearing.',
      'Keep 2 or 3 pairs so you can rotate them through your period days.'
    ],
    donts: [
      'Never use hot water to wash fresh blood stains, as heat sets the stain permanently.',
      'Avoid harsh bleach or fabric conditioners.'
    ],
    commonMistakes: [
      'Drying in damp, dark bathrooms where fabric cannot dry completely.'
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
    description: 'A small, simple cloth pouch that fits neatly into your school bag without drawing attention.',
    icon: '👝'
  },
  {
    id: 'kit-2',
    title: '2–3 Regular Sanitary Pads',
    category: 'Essential',
    description: 'Clean wrapped pads with wings (or clean cotton cloth pads) for safe changing.',
    icon: '🌸'
  },
  {
    id: 'kit-3',
    title: '1 Clean Spare Cotton Underwear',
    category: 'Essential',
    description: 'Folded neatly into a small paper or plastic packet for sudden stains or leaks.',
    icon: '🩲'
  },
  {
    id: 'kit-4',
    title: 'Paper Bag or Newspaper Wrap',
    category: 'Hygiene',
    description: 'Newspaper sheets or paper envelopes to wrap used pads respectfully before the dustbin.',
    icon: '📰'
  },
  {
    id: 'kit-5',
    title: 'Pocket Tissues or Clean Handkerchief',
    category: 'Hygiene',
    description: 'Soft tissues or a clean cloth to wipe hands and stay fresh in school washrooms.',
    icon: '🧻'
  },
  {
    id: 'kit-6',
    title: 'Healthy Snack: Gud-Chana or Dates',
    category: 'Comfort',
    description: 'A small packet of roasted chana with jaggery (gud), dates, or a small piece of dark chocolate for iron and energy.',
    icon: '🥜'
  },
  {
    id: 'kit-7',
    title: 'Hot Water Bag or Warm Cloth',
    category: 'Comfort',
    description: 'A hot water bag (garam paani ki thaili) or warm cloth for soothing lower belly cramps at home.',
    icon: '🔥'
  },
  {
    id: 'kit-8',
    title: 'SheBlooms Private Phone Bookmark',
    category: 'Preparedness',
    description: 'Bookmarked on your phone or written in a diary to note cycle days with complete privacy.',
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
    doctorAlert = '⚠️ High pain or very heavy bleeding noted. If you soak through pads hourly, pass blood clots bigger than an Indian ₹5 coin (about 2.5 cm), or cannot stand or study, please visit a doctor, ASHA didi, or your local primary health centre (PHC).';
  } else if (pain >= 5) {
    doctorAlert = 'Moderate pain noted. If a hot water bag and safe home drinks do not ease cramps within 48 hours, consider seeing a doctor.';
  }

  return {
    flowLevel: flow as any,
    painLevel: pain,
    title: pain <= 3 ? 'Gentle Rhythm' : pain <= 6 ? 'Soothing Care Recommended' : 'Prioritize Rest & Support',
    summary: `For pain level ${pain}/10 with ${flow.replace('-', ' ')} flow:`,
    recommendations: [
      pain > 0 ? 'Apply continuous gentle heat with a hot water bag (garam paani ki thaili) over your lower belly.' : 'Keep well hydrated with warm water.',
      flow === 'heavy' || flow === 'very-heavy' ? 'Change pads every 3 to 4 hours and note how many you use.' : 'Wear loose, comfortable cotton clothes.',
      pain >= 5 ? 'Sip warm ginger (adrak) tea, ajwain water, or saunf water to soothe cramping muscles.' : 'Try a gentle 15-minute walk or relaxing Child’s Pose (Balasana).',
      'Get 8 hours of restful sleep and avoid very salty or oily snacks.'
    ],
    doctorAlert
  };
}

// -------------------------------------------------------------
// CONTRACEPTION & BIRTH CONTROL GUIDELINES (ACROSS ALL STAGES)
// -------------------------------------------------------------

export interface ContraceptionGuide {
  id: string;
  name: string;
  tagline: string;
  typeBadge: string;
  icon: string;
  effectiveness: string;
  stiProtection: boolean;
  howItWorks: string;
  howToUse: string[];
  importantRules: string[];
  stageRelevance: Record<'puberty' | 'cycle' | 'menopause' | 'educator', string>;
  medicalCaution: string;
}

export const CONTRACEPTION_GUIDES: ContraceptionGuide[] = [
  {
    id: 'daily-pills',
    name: 'Daily Oral Contraceptive Pills (OCPs)',
    tagline: 'Hormonal and non-hormonal daily tablets taken to prevent pregnancy',
    typeBadge: 'Daily Pill',
    icon: '💊',
    effectiveness: 'Over 99% effective with perfect use; about 91% with typical use',
    stiProtection: false,
    howItWorks: 'Stops the ovaries from releasing an egg (ovulation). Also thickens cervical mucus so sperm cannot enter the womb.',
    howToUse: [
      'Take 1 pill every day at the exact same time (for example, right after dinner or before bedtime).',
      'Pill packs usually have 21 active pills plus 7 reminder pills, or 28 active pills.',
      'In India, government programmes also offer non-hormonal weekly pills like Chhaya (Centchroman). // TODO(verify: National Family Planning Programme guidelines on Chhaya and Mala-N)',
      'If you forget a pill, take it as soon as you remember. Check the packet leaflet or speak to a doctor or chemist.'
    ],
    importantRules: [
      'Pills do NOT protect against HIV or STIs (Sexually Transmitted Infections). Always use condoms for dual protection.',
      'Never start or change hormonal pills without consulting a doctor or gynaecologist.',
      'Common early adjustments like mild nausea or light spotting often settle within 2 to 3 months.'
    ],
    stageRelevance: {
      puberty: 'Teens should learn how pills work biologically to dispel myths. Hormonal pills are sometimes also prescribed by doctors to treat severe acne or heavy irregular bleeding, not only for contraception.',
      cycle: 'Very popular method for active cycle planning. Requires a reliable daily reminder. Can make periods lighter, more regular, and less painful.',
      menopause: 'Can be used in perimenopause under medical guidance to manage erratic bleeding and prevent unplanned late pregnancy. Women over 35 who smoke should discuss risks with a doctor.',
      educator: 'Explain that contraceptive pills are safe scientific medicine, not a moral topic. Emphasize dual protection with condoms.'
    },
    medicalCaution: 'Always consult a doctor or visit your nearest Primary Health Centre (PHC). Women with high blood pressure, clotting history, or migraines with aura must be evaluated before taking combined hormonal pills.'
  },
  {
    id: 'emergency-pill',
    name: 'Emergency Contraceptive Pill (Morning-After Pill / E-Pill)',
    tagline: 'Backup medicine for emergencies within 72 hours of unprotected intercourse',
    typeBadge: 'Emergency Only',
    icon: '⚡',
    effectiveness: 'Up to 95% effective if taken within 24 hours; decreases after 72 hours',
    stiProtection: false,
    howItWorks: 'Delivers a temporary dose of progestin hormone that delays or blocks egg release (ovulation) so sperm cannot meet an egg.',
    howToUse: [
      'Take 1 tablet as soon as possible after unprotected sex, condom slippage, or missed pills.',
      'Most effective when taken within the first 12 to 24 hours. Must be taken within 72 hours maximum.',
      'Available over the counter at local pharmacies and chemists in India without a prescription.',
      'Your next period may arrive a few days earlier or later than usual. If it is delayed by more than 7 days, take a home pregnancy test.'
    ],
    importantRules: [
      'This is an EMERGENCY backup only. It is not meant for regular daily or weekly birth control.',
      'Emergency pills do NOT cause abortion. They cannot terminate an already established pregnancy or harm a fertilised egg that has already implanted.',
      'Does not protect against STIs. Frequent use can cause temporary cycle irregularity.'
    ],
    stageRelevance: {
      puberty: 'Critical for young people to know what it is and when it works. Knowing it exists prevents panic, but it must never be used as a routine contraceptive.',
      cycle: 'A valuable emergency safety net if a condom breaks or regular pill doses were missed during the fertile window.',
      menopause: 'Useful in perimenopause if unexpected unprotected intimacy occurs, as ovulation can still happen unpredictably.',
      educator: 'Clarify the difference between emergency contraception (preventing ovulation) and medical abortion (ending a pregnancy). Clear up widespread myths.'
    },
    medicalCaution: 'If vomiting occurs within 2 hours of taking the pill, consult a doctor or chemist immediately as a repeat dose may be needed.'
  },
  {
    id: 'condoms',
    name: 'Condoms (Barrier Protection)',
    tagline: 'The only method providing dual protection against both pregnancy and STIs',
    typeBadge: 'Barrier Method',
    icon: '🛡️',
    effectiveness: '98% effective with correct use; about 85% with typical use',
    stiProtection: true,
    howItWorks: 'Creates a physical barrier that stops sperm and bodily fluids from entering the vagina. Blocks transmission of bacteria and viruses.',
    howToUse: [
      'Use a fresh condom every single time before any intimate contact.',
      'Check expiry date on the packet. Open gently with fingers, never with teeth or scissors.',
      'Pinch the tip to leave a small pocket for fluid, then roll smoothly all the way down the erect penis.',
      'After ejaculation, hold the base firmly while withdrawing before softening.',
      'Wrap in paper and dispose into a dustbin. Never flush down toilets.'
    ],
    importantRules: [
      'Condoms are the ONLY contraceptive method that prevents STIs (like Chlamydia, Gonorrhea, and HIV).',
      'Completely hormone-free with zero medical side effects.',
      'Widely available for free at government PHCs, sub-centres, and ASHA didis, and affordable (₹10 to ₹50) at any chemist or grocery store.'
    ],
    stageRelevance: {
      puberty: 'Essential knowledge for young people. Condoms are non-invasive, accessible, and require no doctor prescription.',
      cycle: 'Gold standard for dual protection. Can be combined with daily pills or Copper-T for maximum safety and peace of mind.',
      menopause: 'Protects against STIs with new partners in midlife. Even when pregnancy risk is low after menopause, STI protection remains important.',
      educator: 'Teach correct usage without awkwardness. Emphasize that carrying or buying condoms is responsible healthcare, not shameful.'
    },
    medicalCaution: 'Use only water-based lubricants if needed. Never use oil, vaseline, or cooking oil, as oil weakens latex condoms.'
  },
  {
    id: 'iud-copper-t',
    name: 'Intrauterine Device (IUCD / Copper-T)',
    tagline: 'Long-term, highly effective reversible protection placed by a doctor',
    typeBadge: 'Long-Acting (LARC)',
    icon: '⚓',
    effectiveness: 'Over 99% effective for 5 to 10 years',
    stiProtection: false,
    howItWorks: 'A tiny, flexible T-shaped device placed inside the womb by a trained doctor or ANM. Copper ions naturally prevent sperm from reaching the egg.',
    howToUse: [
      'Placed inside the womb during a quick 5-minute clinic procedure by a trained doctor or nurse.',
      'Works continuously for 5 to 10 years without requiring daily attention.',
      'Completely reversible: a doctor can remove it at any time if you decide to have children.',
      'Provided free of charge under the Indian National Health Mission at government hospitals and PHCs.'
    ],
    importantRules: [
      'Does not protect against STIs — pair with condoms for full protection.',
      'Completely non-hormonal, so it does not affect your natural hormone cycle or mood.',
      'First 2 to 3 periods after insertion may be slightly heavier or crampier before returning to baseline.'
    ],
    stageRelevance: {
      puberty: 'Teens should know this is a safe, medically approved option for people of all ages once sexually active, not only after having children.',
      cycle: 'Excellent for women who want worry-free contraception without remembering daily pills or scheduling injections.',
      menopause: 'Can remain in place through perimenopause until full menopause (12 months without bleeding) is reached, providing reliable protection.',
      educator: 'Bust the myth that Copper-T causes infertility or wanders through the body. It stays safely in the womb.'
    },
    medicalCaution: 'Must be inserted and removed only by a qualified gynaecologist, doctor, or trained ANM at a certified healthcare clinic.'
  }
];

// -------------------------------------------------------------
// CONSENT & BODILY AUTONOMY GUIDELINES (ACROSS ALL 4 STAGES)
// -------------------------------------------------------------

export interface ConsentStageGuide {
  stageId: 'puberty' | 'cycle' | 'menopause' | 'educator';
  stageName: string;
  badge: string;
  icon: string;
  corePrinciples: {
    title: string;
    description: string;
  }[];
  realLifeScenarios: {
    scenario: string;
    healthyBoundary: string;
  }[];
  keyMessage: string;
}

export const CONSENT_STAGE_GUIDES: ConsentStageGuide[] = [
  {
    stageId: 'puberty',
    stageName: 'First Period / Puberty',
    badge: 'My Body, My Boundaries',
    icon: '🌱',
    keyMessage: 'Your body belongs to you. You have the complete right to say "No" to any touch, pressure, or secret that makes you feel uncomfortable.',
    corePrinciples: [
      {
        title: 'Bodily Autonomy',
        description: 'No one has the right to touch your body without your permission — not friends, classmates, relatives, or strangers.'
      },
      {
        title: 'Clear & Confident "No"',
        description: 'You never have to be "polite" when protecting your personal space. A firm "No, please step back" or walking away is always right.'
      },
      {
        title: 'Digital Consent & Phone Privacy',
        description: 'Never feel pressured to send private photos, videos, or messages. Once sent, control is lost. Respecting digital boundaries is as important as physical ones.'
      },
      {
        title: 'No Secrets That Cause Discomfort',
        description: 'If anyone asks you to keep a touch or conversation a secret from your parents, tell a trusted adult (mom, didi, teacher, or ASHA didi) right away.'
      }
    ],
    realLifeScenarios: [
      {
        scenario: 'A friend or relative insists on a hug or touch that makes you feel awkward.',
        healthyBoundary: 'Smile and offer a polite "Namaste" or handshake instead: "I prefer personal space today."'
      },
      {
        scenario: 'Classmates or peers tease you or pressure you to share private personal details or photos.',
        healthyBoundary: 'Firmly say: "I do not share that. Please stop asking." Speak with a school counselor or teacher if it continues.'
      }
    ]
  },
  {
    stageId: 'cycle',
    stageName: 'Cycle & Reproductive Life',
    badge: 'Mutual Respect & Clear Consent',
    icon: '🌸',
    keyMessage: 'Consent in relationships is ongoing, voluntary, and built on mutual equality. Both partners must freely agree at every step.',
    corePrinciples: [
      {
        title: 'The FRIES Framework',
        description: 'Freely given (without fear or pressure), Reversible (you can change your mind anytime), Informed (knowing facts like contraception), Enthusiastic (both actively want it), and Specific (agreeing to one thing does not mean agreeing to everything).'
      },
      {
        title: 'Reproductive Consent',
        description: 'Both partners must openly agree on contraception before intimacy. Removing a condom without agreement (stealthing) or lying about pills is a serious breach of consent.'
      },
      {
        title: 'Silence or Absence of "No" is NOT Consent',
        description: 'Consent requires an active, clear "Yes". If someone is hesitant, quiet, intoxicated, or pressured, consent does not exist.'
      },
      {
        title: 'Right to Pause Anytime',
        description: 'Saying yes earlier does not lock you into continuing. You can pause or stop intimacy at any second, and your partner must respect that immediately.'
      }
    ],
    realLifeScenarios: [
      {
        scenario: 'Your partner pressures you for intimacy when you are tired, having period cramps, or uncomfortable.',
        healthyBoundary: '"I am not feeling up to this tonight. Let us just rest and watch a movie instead." A caring partner will always respect your rest.'
      },
      {
        scenario: 'A partner hesitates or refuses to use a condom.',
        healthyBoundary: '"My health and safety matter to me. Intimacy happens only with protection. If no condom, then no intimacy."'
      }
    ]
  },
  {
    stageId: 'menopause',
    stageName: 'Perimenopause & Menopause',
    badge: 'Comfort, Evolving Intimacy & Care',
    icon: '🌾',
    keyMessage: 'Midlife hormonal shifts can change your body, stamina, and libido. Honest communication with your partner is essential, and physical comfort is a valid boundary.',
    corePrinciples: [
      {
        title: 'Body Changes are Natural, Not a Failure',
        description: 'Lower estrogen can cause vaginal dryness, hot flushes, fatigue, or lower sexual desire. These are biological changes, not a lack of affection.'
      },
      {
        title: 'Physical Comfort is a Right',
        description: 'Intimacy should never cause pain. Communicating needs, using water-based lubricants, or taking time for gentle affection is completely normal.'
      },
      {
        title: 'Consent Over Pace & Frequency',
        description: 'You have the right to set the pace. Saying "not tonight" or asking for cuddles and rest without sexual expectations is healthy and respectful.'
      },
      {
        title: 'Medical Support Without Shame',
        description: 'If dryness or pain causes discomfort, talk to a gynaecologist. Moisturizers, localized estrogen creams, and supportive advice make a significant difference.'
      }
    ],
    realLifeScenarios: [
      {
        scenario: 'Intimacy feels dry or uncomfortable due to hormonal changes.',
        healthyBoundary: '"My body is experiencing dryness right now. Let us use a gentle water-based lubricant and take things very slowly."'
      },
      {
        scenario: 'You feel exhausted from night sweats or joint aches.',
        healthyBoundary: '"I am feeling tired from hot flushes tonight. I would love a gentle massage and rest together without pressure."'
      }
    ]
  },
  {
    stageId: 'educator',
    stageName: 'Educators & Caregivers',
    badge: 'Teaching Boundaries & Mutual Respect',
    icon: '🤝',
    keyMessage: 'Teaching consent early gives young people the language to protect themselves, respect peers, and build safe, healthy relationships for life.',
    corePrinciples: [
      {
        title: 'Start With Everyday Boundaries',
        description: 'Teach children from an early age that their body belongs to them. Do not force hugs or kisses on reluctant children; teach them to respect other children’s "No".'
      },
      {
        title: 'Frame Consent as Care, Not Fear',
        description: 'Present consent as kindness, clear communication, and mutual listening, rather than only as a warning against strangers.'
      },
      {
        title: 'Address Peer Pressure & Digital Safety',
        description: 'Discuss online boundaries: forwarding private chats, taking photos without permission, or group chat bullying are consent violations.'
      },
      {
        title: 'Be an Approachable, Non-Judgmental Ally',
        description: 'Ensure students know they can come to you if they feel unsafe or confused, without fear of punishment or shame.'
      }
    ],
    realLifeScenarios: [
      {
        scenario: 'A student mentions feeling pressured by friends or a partner.',
        healthyBoundary: 'Reassure them: "You never owe anyone your body or your privacy to prove your love or friendship. Real respect listens to your comfort."'
      },
      {
        scenario: 'Explaining bodily boundaries in a classroom setting.',
        healthyBoundary: 'Use clear, everyday examples: "Just like you ask before borrowing a friend’s pencil or notebook, you must always ask and respect their answer before touching anyone."'
      }
    ]
  }
];

// -------------------------------------------------------------
// PREGNANCY & OVULATION AWARENESS (ACROSS ALL 4 STAGES)
// -------------------------------------------------------------

export interface PregnancyStageGuide {
  stageId: 'puberty' | 'cycle' | 'menopause' | 'educator';
  stageName: string;
  icon: string;
  title: string;
  summary: string;
  keyPoints: string[];
  commonMythVsFact: {
    myth: string;
    fact: string;
  };
}

export const PREGNANCY_STAGE_GUIDES: PregnancyStageGuide[] = [
  {
    stageId: 'puberty',
    stageName: 'First Period / Puberty',
    icon: '🌱',
    title: 'How Conception Works & Busting Myths',
    summary: 'Puberty awakens the reproductive system. Learning the science helps demystify how pregnancy happens and removes scary myths.',
    keyPoints: [
      'Pregnancy can only happen when viable sperm enters the vagina and fertilises a released egg during the fertile window.',
      'You CANNOT get pregnant from hugging, touching, kissing, sharing bathrooms, sitting on toilet seats, or swimming.',
      'Once a girl begins menstruating, her ovaries are beginning to release eggs, meaning biological fertility is starting.',
      'Cycles in the first 1 to 2 years are often irregular as the brain and ovaries calibrate.'
    ],
    commonMythVsFact: {
      myth: 'A girl can get pregnant by touching clothes, holding hands, or sharing a bed with someone.',
      fact: 'False. Pregnancy requires sperm entering the vaginal canal to meet an egg cell. Touching, sitting together, and everyday contact cannot cause pregnancy.'
    }
  },
  {
    stageId: 'cycle',
    stageName: 'Cycle & Reproductive Life',
    icon: '🌸',
    title: 'The Fertile Window, Early Signs & Testing',
    summary: 'Understanding ovulation and your cycle’s fertile days gives you control over whether you want to prevent or plan a pregnancy.',
    keyPoints: [
      'The Fertile Window: An egg lives for only 12 to 24 hours after ovulation. However, sperm can live inside the female reproductive tract for up to 5 days! Thus, the fertile window is the 5 days before ovulation plus ovulation day itself.',
      'Ovulation Clues: Clear, stretchy vaginal mucus (like raw egg white), slight rise in morning body temperature (+0.3°C to 0.5°C), and sometimes mild one-sided lower tummy twinges (Mittelschmerz).',
      'Earliest Signs of Pregnancy: A missed period is the most common clue, followed by tender swollen breasts, morning nausea, unusual tiredness, and frequent urination.',
      'How to Test: Simple urine pregnancy test kits (₹40 to ₹60 at any chemist) detect the hCG hormone. For most accurate results, test with your first morning urine on or after the first day of your missed period.',
      'Prenatal Health: If planning a pregnancy, doctors recommend starting daily folic acid (to protect baby’s spine development), iron, and a balanced diet with dal, leafy greens, and curd.'
    ],
    commonMythVsFact: {
      myth: 'You can never get pregnant while on your period.',
      fact: 'While unlikely, it IS possible! Sperm can survive inside the body for up to 5 days. In people with short cycles, early ovulation right after bleeding can overlap with surviving sperm.'
    }
  },
  {
    stageId: 'menopause',
    stageName: 'Perimenopause & Menopause',
    icon: '🌾',
    title: 'Can You Get Pregnant in Perimenopause?',
    summary: 'Yes! Even when cycles skip months, ovulation can still happen unpredictably until full menopause is officially confirmed.',
    keyPoints: [
      'Pregnancy is biologically possible throughout perimenopause: As long as your ovaries release an egg, pregnancy can occur, even if periods are months apart.',
      'Contraception is advised until Menopause is confirmed: Menopause is officially diagnosed after 12 consecutive months with zero menstrual bleeding.',
      'Birth Control in Midlife: Low-dose oral pills (under doctor advice), Copper-T, or condoms are commonly used to prevent unintended late pregnancies.',
      'Postmenopausal Bleeding Warning: If any bleeding occurs AFTER 12 full months of menopause, it is NOT a period or pregnancy — it requires prompt evaluation by a gynaecologist.'
    ],
    commonMythVsFact: {
      myth: 'If my periods are irregular and skipping months in my late 40s, I am completely infertile and cannot get pregnant.',
      fact: 'False. Fertility decreases in perimenopause, but occasional ovulation still happens. You can still conceive until 12 full months without bleeding have passed.'
    }
  },
  {
    stageId: 'educator',
    stageName: 'Educators & Caregivers',
    icon: '🤝',
    title: 'Teaching Conception with Clarity & Science',
    summary: 'Framing reproduction through biology rather than shame helps young people build body literacy and make responsible life decisions.',
    keyPoints: [
      'Use biological terms: Explain the sperm, egg, fallopian tube, and womb with anatomical diagrams without embarrassment.',
      'Connect cycle to fertility: Show how the 4 phases prepare the womb cushion each month, and shedding that cushion is what creates a period.',
      'Explain contraception openly: Show how barrier methods (condoms) block sperm, while pills regulate hormones to prevent ovulation.',
      'Encourage questions: Create an anonymous question box so learners can ask about myths, pregnancy fears, and relationships without fear of teasing.'
    ],
    commonMythVsFact: {
      myth: 'Talking about pregnancy and contraception encourages young people to be reckless.',
      fact: 'Scientific research worldwide proves the opposite: young people with factual, stigma-free reproductive knowledge delay sexual activity and make much safer, healthier decisions.'
    }
  }
];

