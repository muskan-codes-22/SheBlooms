import { ScriptedConversation } from './types';
export type { ScriptedConversation } from './types';

export const SCRIPTED_CONVERSATIONS: ScriptedConversation[] = [
  {
    id: 'script-8-10',
    ageGroup: '8-10',
    context: 'Curious questions about body changes, seeing pads in the house, or preparing before menarche.',
    starterPhrase: '"You are growing taller, and over the next couple of years your body will start preparing for healthy adulthood. Have you noticed any questions about how bodies bloom?"',
    dos: [
      'Use proper anatomical terms ("vulva", "uterus") so children have clear, stigma-free words',
      'Explain periods simply: "The body builds a soft cushion inside every month. When it is not needed, it leaves as a little clean blood"',
      'Reassure that growing up is a healthy, safe adventure and that everyone develops on their own clock'
    ],
    donts: [
      'Never describe periods as "dirty", "sick", or an illness',
      'Do not say "Now you are a woman and you must stop running and climbing trees"',
      'Do not whisper or make biology sound like a dangerous family secret'
    ]
  },
  {
    id: 'script-11-13',
    ageGroup: '11-13',
    context: 'First period starting at home or school, packing an emergency pouch, handling initial cramps.',
    starterPhrase: '"Congratulations on taking this healthy step! Your body is doing exactly what it was designed to do. Let us get you comfortable, fresh pads, and a warm water bottle."',
    dos: [
      'Show immediate warmth and a calm, reassuring smile—your reaction sets their lifelong emotional relationship with their cycle',
      'Walk through how to stick a pad and wrap it before binning, step by step without rush',
      'Equip their school bag with a small discreet pouch containing pads and spare undergarments'
    ],
    donts: [
      'Never scold or show disgust if they accidentally stained clothes or furniture',
      'Do not tell them to hide it in shame from their fathers, brothers, or male teachers',
      'Do not dismiss severe agonizing pain as "just something girls must endure silently"'
    ]
  },
  {
    id: 'script-14-17',
    ageGroup: '14-17',
    context: 'Cycle irregularity, PMS mood swings, personal physical boundaries, and peer pressure.',
    starterPhrase: '"Cycles can be irregular in your teens while your brain and ovaries calibrate. How have your energy and cramps been feeling lately?"',
    dos: [
      'Validate emotional shifts: "Hormone changes can make feelings intense—your feelings are real, let us track them together"',
      'Discuss digital boundaries: remind them that anyone pressuring them for private photos or secrecy is crossing critical safety lines',
      'Encourage regular hydration, iron-rich meals, and non-judgmental sports participation'
    ],
    donts: [
      'Do not dismiss severe premenstrual depression as "just being dramatic for attention"',
      'Do not force traditional isolation rules that deprive them of nutritious food or study time',
      'Do not give medicine doses without a doctor’s guidance'
    ]
  }
];

export interface WashSetupItem {
  id: string;
  category: 'supplies' | 'infrastructure' | 'policy';
  title: string;
  description: string;
}

export const WASH_SETUP_ITEMS: WashSetupItem[] = [
  {
    id: 'wash-01',
    category: 'supplies',
    title: 'Emergency Sanitary Pad Supply Box',
    description: 'Keep a clearly marked, easily accessible box of sanitary pads and clean spare undergarments in the medical room, staff room, or counsellor’s office.'
  },
  {
    id: 'wash-02',
    category: 'infrastructure',
    title: 'Functional Door Latches & Privacy Locks',
    description: 'Ensure every toilet cubicle door has a sturdy, working inside latch so girls feel completely safe and secure while changing.'
  },
  {
    id: 'wash-03',
    category: 'infrastructure',
    title: 'Covered Foot-Pedal Dustbins with Lids',
    description: 'Place covered dustbins lined with biodegradable trash bags inside toilet cubicles so used pads can be disposed of privately and hygienically without touching lids.'
  },
  {
    id: 'wash-04',
    category: 'infrastructure',
    title: 'Running Tap Water & Liquid Soap',
    description: 'Ensure clean running water and handwashing soap are consistently available inside or directly adjacent to washroom blocks.'
  },
  {
    id: 'wash-05',
    category: 'policy',
    title: 'Shame-Free Washroom Break Policy',
    description: 'Train all teaching staff (male and female) to grant washroom access upon request without interrogating students or requiring public explanations.'
  },
  {
    id: 'wash-06',
    category: 'policy',
    title: 'Stain Dignity & Spare Uniform Support',
    description: 'Provide spare school skirts or cardigans in the medical room to discreetly assist students who experience accidental leaks, avoiding send-home shame.'
  }
];

export interface SessionPlanTopic {
  id: string;
  title: string;
  durationMinutes: number;
  learningGoal: string;
  talkingPoints: string[];
  suggestedQuizId: string;
}

export const SESSION_PLANNER_TOPICS: SessionPlanTopic[] = [
  {
    id: 'topic-bio',
    title: '1. The Biology of Growing Up (8 mins)',
    durationMinutes: 8,
    learningGoal: 'Explain menarche and hormones as normal human growth milestones.',
    talkingPoints: [
      'What is a period? (The monthly uterine cushion shedding clean blood)',
      'Typical age of menarche (9 to 15, median 12–13 in India)',
      'Why everyone develops at their own natural biological pace'
    ],
    suggestedQuizId: 'puberty-body-changes'
  },
  {
    id: 'topic-hygiene',
    title: '2. Pads, Changing & Dignified Disposal (8 mins)',
    durationMinutes: 8,
    learningGoal: 'Teach practical pad application, 4–6 hour changes, and never flushing.',
    talkingPoints: [
      'The 5-step pad walkthrough: wash, peel, stick, wrap wings, bin',
      'The 4 to 6 hour change rule to prevent rashes and bacterial overgrowth',
      'Wrapping used pads in paper and placing in bins (never flushing down commodes)'
    ],
    suggestedQuizId: 'hygiene-smarts'
  },
  {
    id: 'topic-myths',
    title: '3. Busting Taboos & Respecting Tradition (7 mins)',
    durationMinutes: 7,
    learningGoal: 'Dismantle food/touch superstitions while honoring family warmth.',
    talkingPoints: [
      'Touching pickles, plants, or family utensils does not spoil anything',
      'Historical roots of isolation (lack of sanitary pads and running water centuries ago)',
      'Prioritizing nutrition, rest, warm showers, and school attendance'
    ],
    suggestedQuizId: 'myth-or-fact'
  },
  {
    id: 'topic-support',
    title: '4. Empathy, Boundaries & Boys’ Role (7 mins)',
    durationMinutes: 7,
    learningGoal: 'Build peer empathy, eliminate playground teasing, and teach safety.',
    talkingPoints: [
      'Why boys must understand periods to prevent bullying and mockery',
      'The Swimsuit Rule and personal physical boundaries',
      'National emergency protection helpline: 1098'
    ],
    suggestedQuizId: 'consent-boundaries'
  }
];

export interface DisclosureStep {
  step: number;
  action: string;
  detail: string;
  criticalDoNot: string;
}

export const DISCLOSURE_PROTOCOL: DisclosureStep[] = [
  {
    step: 1,
    action: 'Listen With Calm Empathy',
    detail: 'Maintain steady eye contact and a gentle, supportive tone. Validate their courage: "Thank you for telling me. You did the right thing by sharing this."',
    criticalDoNot: 'Do NOT gasp, show panic, or express horror. Your calm presence reassures the child that they are safe.'
  },
  {
    step: 2,
    action: 'Do Not Promise Absolute Secrecy',
    detail: 'Explain gently: "I care about your safety very much. I cannot keep secrets that put you in danger, but I will only involve people whose job it is to protect you, and I will support you throughout."',
    criticalDoNot: 'Do NOT promise: "I will never tell anyone, I promise." That traps you and the child.'
  },
  {
    step: 3,
    action: 'Never Investigate or Interrogate Alone',
    detail: 'Record verbatim words used by the child (dates, times, names) without asking leading or suggestive questions.',
    criticalDoNot: 'Do NOT confront the accused individual yourself or conduct a private amateur investigation.'
  },
  {
    step: 4,
    action: 'Connect to Designated Safeguarding Authorities',
    detail: 'Report immediately to the designated school child protection officer, school counsellor, or call India’s national child emergency helpline 1098 (Childline / Mission Vatsalya) [VERIFY: helpline integration under Mission Vatsalya].',
    criticalDoNot: 'Do NOT delay reporting out of fear of family scandal. A child’s safety comes first.'
  }
];
