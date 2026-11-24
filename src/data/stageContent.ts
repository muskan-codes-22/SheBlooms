/**
 * Stage-specific content definitions for SheBlooms
 * Provides strongly-typed copy for personalized banners, hero sublines,
 * starter chat questions, care emphasis, and cycle education notes.
 */

export interface StageContent {
  id: 'puberty' | 'cycle' | 'menopause' | 'educator';
  name: string;
  greeting: string;
  heroSubline: string;
  starterQuestions: [string, string, string, string];
  careEmphasis: {
    badge: string;
    title: string;
    description: string;
  };
  cycleNote: {
    title: string;
    text: string;
    citationHint: string;
  };
}

export const DEFAULT_STAGE_CONTENT = {
  heroSubline:
    'Reliable, stigma-free guidance across every life stage — from your first period to menopause. No account required, zero judgment, and based on public health guidance.',
  starterQuestions: [
    'Is period pain normal?',
    'What is a normal cycle length?',
    'How do I use a tampon safely?',
    'What are early signs of my first period?'
  ] as [string, string, string, string],
  careEmphasis: {
    badge: 'Universal Care',
    title: 'Essential Product Guides',
    description: 'Practical, step-by-step guidance on choosing and using menstrual products comfortably.'
  },
  cycleNote: {
    title: 'Understanding Your Rhythm',
    // TODO(verify: WHO menstrual health educational baseline)
    text: 'Every body has its own unique biological rhythm. The traditional 28-day model is an educational average, while healthy individual cycles naturally vary.',
    citationHint: 'Educational average based on global public health standards.'
  }
};

export const STAGE_CONTENT: Record<'puberty' | 'cycle' | 'menopause' | 'educator', StageContent> = {
  puberty: {
    id: 'puberty',
    name: 'First Period / Puberty',
    greeting: 'Welcome, young bloom! There are no silly questions here 🌸',
    heroSubline:
      'Gentle, reassuring guidance on what your first period feels like, how to prepare an emergency school pouch, and understanding bodily changes without fear.',
    starterQuestions: [
      'What will my first period feel like?',
      'How do I use a sanitary pad properly?',
      'Is white or clear discharge normal before my period?',
      'What should I keep in my school bag kit?'
    ],
    careEmphasis: {
      badge: 'Beginner Priority',
      title: 'First Period Essentials',
      description: 'Start with familiar, comfortable external protection and assemble an emergency school pouch for complete peace of mind.'
    },
    cycleNote: {
      title: 'Note for Young Bloomers: Irregularity is Normal',
      // TODO(verify: WHO/ACOG adolescent cycle regularity guidance)
      text: 'During the first 1 to 3 years after your very first period (menarche), your cycle length can naturally vary between 21 and 45 days as your brain and ovaries establish regular communication.',
      citationHint: 'Based on ACOG Committee Opinion on Menstruation in Girls and Adolescents.'
    }
  },

  cycle: {
    id: 'cycle',
    name: 'Cycle & Period Care',
    greeting: 'Welcome, bloom! Tune in to your rhythm and body wisdom 🌿',
    heroSubline:
      'Track your monthly rhythm, soothe period cramps with evidence-backed self-care, navigate PMS with calm strategies, and pick the products that fit your routine.',
    starterQuestions: [
      'Is my period pain normal or should I see a doctor?',
      'What are the 4 hormonal phases of my cycle?',
      'Which foods and gentle stretches help soothe cramps?',
      'How do I recognize my ovulation window?'
    ],
    careEmphasis: {
      badge: 'Active Cycle Care',
      title: 'Daily Rhythm & Cramp Comfort',
      description: 'Explore targeted flow management, pain self-assessment, and compare pads, cups, tampons, and period underwear.'
    },
    cycleNote: {
      title: 'The 4 Hormonal Seasons',
      // TODO(verify: ACOG adult cycle length and phase ranges)
      text: 'Healthy adult cycles typically range from 21 to 35 days across 4 hormonal shifts (Menstrual, Follicular, Ovulatory, and Luteal). Tracking these shifts helps explain natural fluctuations in energy, mood, and appetite.',
      citationHint: 'Based on ACOG and Endocrine Society clinical guidelines.'
    }
  },

  menopause: {
    id: 'menopause',
    name: 'Perimenopause & Menopause',
    greeting: 'Welcome! Embrace your next chapter with clarity and calm 🌾',
    heroSubline:
      'Compassionate, evidence-informed guidance on perimenopause signs, hot flush comfort, sleep strategies, and embracing midlife transitions with confidence.',
    starterQuestions: [
      'What are the earliest signs of perimenopause?',
      'How can I naturally manage hot flushes and night sweats?',
      'Why is my period suddenly irregular or skipping months?',
      'How does changing estrogen affect sleep, mood, and bone health?'
    ],
    careEmphasis: {
      badge: 'Midlife Comfort',
      title: 'Perimenopause & Menopause Wellness',
      description: 'Gentle support for fluctuating flow, skin sensitivity, cooling nighttime habits, and bone-strengthening nourishment.'
    },
    cycleNote: {
      title: 'Cycle Shifts During Perimenopause',
      // TODO(verify: NAMS/ACOG perimenopausal cycle variability and vasomotor symptoms)
      text: 'As ovarian estrogen and progesterone levels naturally fluctuate during perimenopause, periods often become irregular, lighter, or heavier. A predictable 28-day cycle wheel fits less rigidly during this transition.',
      citationHint: 'Based on North American Menopause Society (NAMS) clinical practice guidelines.'
    }
  },

  educator: {
    id: 'educator',
    name: 'Educators & Caregivers',
    greeting: 'Welcome, educator! Thank you for fostering a safe, stigma-free space 💫',
    heroSubline:
      'Age-appropriate conversation frameworks, lesson insights, and myth-busting resources to guide daughters, sisters, and students with empathy.',
    starterQuestions: [
      'How do I start a calm, stigma-free period conversation with my daughter?',
      'How can I explain the 4 hormonal phases simply to students?',
      'What are common cultural period myths we should dispel in schools?',
      'How can parents and teachers prepare young people before menarche?'
    ],
    careEmphasis: {
      badge: 'Teaching Framework',
      title: 'Guidance for Mentors & Parents',
      description: 'Practical product demonstrations, demystifying anatomy, and building open, shame-free communication with young people.'
    },
    cycleNote: {
      title: 'Educator Tip: The 4 Seasons Metaphor',
      // TODO(verify: UNESCO/WHO international technical guidance on sexuality education)
      text: 'When explaining the menstrual cycle to learners, using the 4 seasons metaphor (Winter rest, Spring renewal, Summer peak, Autumn focus) makes complex hormonal shifts intuitive and relatable without clinical intimidation.',
      citationHint: 'Recommended pedagogical framing for reproductive literacy.'
    }
  }
};

export function getStageContent(stage: 'puberty' | 'cycle' | 'menopause' | 'educator' | null | undefined): StageContent | null {
  if (stage && STAGE_CONTENT[stage]) {
    return STAGE_CONTENT[stage];
  }
  return null;
}
