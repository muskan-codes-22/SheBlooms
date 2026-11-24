import { Quiz } from './types';

export const supportSomeoneElseQuiz: Quiz = {
  id: 'support-someone-else',
  title: 'Support Someone Else: Educators & Caregivers',
  subtitle: 'Guiding parents, teachers, and didis to create stigma-free, empathetic, and medically sound menstrual support.',
  badgeTag: 'Caregiver Toolkit',
  icon: '🤝',
  color: 'from-purple-500 to-indigo-600',
  category: 'Educator & Community',
  targetStages: ['educator'],
  ageTier: 'adult',
  displayCount: 8,
  disclaimer: 'Guidance for parents, teachers, and community mentors. Always recommend clinical evaluation for severe menstrual pathology.',
  published: true,
  questions: [
    {
      id: 'sse-01',
      type: 'scenario',
      scenario: 'A 12-year-old girl walks up to her mother or teacher trembling, looking pale, and whispers that there is blood on her skirt.',
      question: 'What is the most constructive, comforting first reaction an adult can have?',
      options: [
        'Smile gently, reassure her with warmth ("You are completely safe, nothing is broken—this is a normal, healthy part of growing up"), and help her clean up and get a fresh pad',
        'Gasp with shock, scold her for ruining her clothes, and tell her to sit outside in shame',
        'Tell her that her childhood is permanently over and she must immediately stop playing sports with friends',
        'Whisper that she must hide this from everyone in the house forever'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'A child\'s initial experience with menarche sets their lifelong psychological relationship with their body. Immediate warmth, safety, and reassurance that their body is healthy prevent lasting shame.',
        whyWrong: 'Scolding or treating blood as dirty induces panic and internalized stigma that can lead to poor hygiene and emotional distress.'
      },
      topicTag: 'Empathetic First Response',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'talking-to-daughter-students'
    },
    {
      id: 'sse-02',
      type: 'single-choice',
      question: 'When conducting puberty and adolescent health education in schools, what does UNESCO and UNICEF guidance recommend regarding boys?',
      options: [
        'Boys should also receive age-appropriate education about menstrual biology and hygiene to foster empathy, dismantle myths, and eliminate playground teasing',
        'Boys must be sent out to play cricket while only girls learn about puberty in secret',
        'Boys should only be taught about periods after they graduate from university',
        'Talking about menstruation in front of boys is harmful to school discipline'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Global studies show that excluding boys fosters curiosity turned into teasing, mockery, and stigma. When boys learn that menstruation is a normal biological function, school bullying decreases and girls feel supported.',
        whyWrong: 'Secrecy perpetuates the idea that menstruation is something dirty or shameful to be hidden.'
      },
      topicTag: 'Inclusive Education',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'talking-to-daughter-students'
    },
    {
      id: 'sse-03',
      type: 'scenario',
      scenario: 'A school teacher notices that a 13-year-old student has an accidental blood stain on the back of her school uniform bench.',
      question: 'How should the educator handle this situation to protect the student\'s dignity?',
      options: [
        'Discreetly approach the student, offer a cardigan/jacket to tie around her waist, guide her to the washroom with emergency pads, and provide a spare skirt or allow her to clean up without fuss',
        'Announce the stain to the entire classroom so other students can clean it',
        'Send the student home with a disciplinary warning for dress code violation',
        'Ignore it and leave the student to face mockery from classmates'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Stains are inevitable accidental occurrences. Discreet, matter-of-fact support and practical cover (like a jacket or spare uniform) preserves the student\'s self-esteem and keeps her in school.',
        whyWrong: 'Calling attention to the stain causes severe mortification and is a primary driver of adolescent school absenteeism.'
      },
      topicTag: 'School Dignity',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'period-emergency-at-school'
    },
    {
      id: 'sse-04',
      type: 'multi-select',
      question: 'Which of the following signs in a young girl warrant referral to a paediatrician or gynaecologist rather than just "waiting it out"? (Select all that apply)',
      options: [
        'Missing school or exams every month due to severe pain unresponsive to standard heating pads and mild analgesics',
        'Soaking through a sanitary pad completely every 1 to 2 hours for consecutive hours, or passing large blood clots larger than a coin',
        'Severe depressive mood drops, suicidal ideation, or panic attacks strictly during the premenstrual week (suspected PMDD)',
        'Wanting to wear comfortable shoes during sports'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Debilitating pain (dysmenorrhea/endometriosis), menorrhagia (heavy bleeding causing anaemia), and PMDD (premenstrual dysphoric disorder) are treatable medical conditions requiring professional clinical care.',
        whyWrong: 'Wearing comfortable sports shoes is normal and healthy. Adults should never brush off severe agony as "just womanhood".'
      },
      topicTag: 'Clinical Referral Triggers',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'warning-signs-doctor'
    },
    {
      id: 'sse-05',
      type: 'scenario',
      scenario: 'A father wants to support his 11-year-old daughter who is approaching puberty, but he feels awkward and wonders if only mothers or aunts should handle menstrual topics.',
      question: 'What is the most positive, empowering advice for fathers and male caregivers?',
      options: [
        'Fathers play a vital role in normalizing periods by keeping period kits stocked at home, buying pads without embarrassment, and offering warmth, hot water bottles, and support without awkwardness',
        'Fathers should never mention biology to their daughters under any circumstances',
        'Fathers should leave the house whenever their daughter is on her period',
        'Fathers should only communicate through written medical letters'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'When fathers talk about menstrual care without shame or awkwardness, girls grow up with high body confidence and feel secure asking for supplies or medical help whenever needed.',
        whyWrong: 'Treating periods as an untouchable taboo topic alienates daughters and reinforces harmful social barriers.'
      },
      topicTag: 'Caregiver Role Models',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'talking-to-daughter-students'
    },
    {
      id: 'sse-06',
      type: 'single-choice',
      question: 'Why should educators and health volunteers teach young learners anatomical terms (like "vulva", "vagina", "uterus") instead of vague euphemisms (like "down there" or "dirty place")?',
      options: [
        'Anatomical accuracy reduces stigma, allows children to clearly describe symptoms or medical pain, and strengthens child safety and abuse reporting',
        'Because euphemisms make children memorize faster',
        'Because big medical words prevent children from asking further questions',
        'It has no effect on child comprehension or safety'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Using clear, neutral anatomical terms normalizes body parts as ordinary biology. It empowers children to report health issues (e.g., "my vulva itches") or boundary violations clearly without confusion.',
        whyWrong: 'Euphemisms like "dirty place" instill deep-seated subconscious shame and impair communication with medical professionals.'
      },
      topicTag: 'Communication & Language',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'talking-to-daughter-students'
    },
    {
      id: 'sse-07',
      type: 'scenario',
      scenario: 'In some households, elders insist a menstruating girl must sleep on a floor mat in a dark corner, cannot eat curd or pickles, and cannot touch kitchen utensils.',
      question: 'How can a supportive parent or educator navigate traditional beliefs with care and scientific reasoning?',
      options: [
        'Gently explain that historical seclusion rules arose before sanitary pads and running water existed, while lovingly ensuring the girl receives warm nutritious food, comfortable sleep, and full access to studies',
        'Verbally insult and scream at the elders to make them change immediately',
        'Force the girl to follow every restriction even if it harms her nutrition and mental health',
        'Tell the girl that old traditions can never be questioned'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Understanding that many ancient restrictions stemmed from lack of modern hygiene products and need for physical rest allows compassionate conversations with elders, while firmly prioritizing the child\'s health, dignity, and nutrition.',
        whyWrong: 'Depriving young girls of nutritious foods or segregating them impairs health and causes long-term psychological harm.'
      },
      topicTag: 'Navigating Traditions with Empathy',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'sse-08',
      type: 'multi-select',
      question: 'What simple, low-cost steps can a school or coaching institute take to become "period-friendly"? (Select all that apply)',
      options: [
        'Keep an emergency supply box of sanitary pads and spare undergarments in the medical/staff room',
        'Ensure functional washroom latches, running tap water, soap, and clean covered dustbins with lids',
        'Train male and female staff to grant washroom access without public questioning or interrogation',
        'Install loud alarm sirens outside toilet cubicles that ring every 5 minutes'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Private, secure sanitation facilities with water, soap, covered disposal, and an empathetic policy on washroom breaks dramatically reduce female student absenteeism and dropout rates in Indian schools.',
        whyWrong: 'Intrusive alarms or strict gatekeeping make washroom use terrifying and undignified.'
      },
      topicTag: 'School WASH & Infrastructure',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'period-emergency-at-school'
    },
    {
      id: 'sse-09',
      type: 'single-choice',
      question: 'When a teenager opens up about painful emotional PMS or anxiety before periods, what response best fosters emotional connection?',
      options: [
        '"I hear you, it feels really overwhelming right now. Let\'s get you warm water and rest, and track this together over the next two months to see how we can support you"',
        '"Stop being so sensitive, you are just using hormones as an excuse for bad behaviour"',
        '"Everyone in our family suffers, so you just have to deal with it quietly"',
        '"You should study for exams instead of thinking about feelings"'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Active listening and emotional validation reduce adrenaline and stress hormones. Partnering to track symptoms turns feelings into actionable, manageable data without judgment.',
        whyWrong: 'Dismissive comments invalidate the adolescent, damage trust, and discourage them from sharing serious mental health struggles.'
      },
      topicTag: 'Mental Health Support',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'understanding-pms'
    },
    {
      id: 'sse-10',
      type: 'scenario',
      scenario: 'A community health educator conducts a session in a rural or semi-urban school. Several students lack money for commercial branded pads.',
      question: 'What practical guidance should the educator provide on accessible menstrual products?',
      options: [
        'Inform them about subsidized ₹1 Suvidha pads available at Pradhan Mantri Jan Aushadhi Kendras, and teach hygienic washing, boiling, and sun-drying if using clean cotton cloth pads',
        'Tell them that only 500-rupee imported branded pads are safe and nothing else should ever be used',
        'Advise them to use ash or husk sand wrapped in old dirty rags',
        'Advise them to drop out of school during their period'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Government initiatives like PMBJP Suvidha pads provide 100% biodegradable sanitary pads at ₹1 per pad across thousands of Jan Aushadhi Kendras. Reusable cloth is also safe when properly washed with soap and dried completely in sunlight.',
        whyWrong: 'Ash, sand, or unwashed damp cloth can cause life-threatening pelvic infections.'
      },
      topicTag: 'Accessible Products & Schemes',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'hygiene-dos-donts',
      doctorReviewFlag: '[VERIFY: Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) Suvidha sanitary pad scheme pricing and availability at Jan Aushadhi Kendras across India]'
    }
  ]
};
