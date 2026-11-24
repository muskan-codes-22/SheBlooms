import { Quiz } from './types';

export const consentBoundariesQuiz: Quiz = {
  id: 'consent-boundaries',
  title: 'Consent, Boundaries & Staying Safe',
  subtitle: 'Practical scenarios on personal boundaries, online safety, trusted adults, and speaking up without fear.',
  badgeTag: 'Safety & Respect',
  icon: '🛡️',
  color: 'from-emerald-500 to-teal-600',
  category: 'Safety & Well-being',
  targetStages: ['puberty', 'cycle', 'educator'],
  ageTier: 'all',
  displayCount: 8,
  disclaimer: 'Your body belongs to you. If you ever feel unsafe or confused, talking to a trusted adult or calling 1098 is always your right.',
  published: true,
  questions: [
    {
      id: 'cb-01',
      type: 'scenario',
      scenario: 'A family friend or relative insists on giving 11-year-old Meera a long, tight hug and lap-sitting that makes her feel uncomfortable, saying "Come on, don\'t you love your uncle?"',
      question: 'What is true about Meera\'s personal physical boundaries in this situation?',
      options: [
        'Meera has the absolute right to set boundaries with her body; she can offer a polite namaste, handshake, or high-five instead',
        'Children have no right to refuse physical affection from older family members',
        'She must endure any physical contact as long as the person is an adult relative',
        'Setting a boundary makes her a rude child who should be punished'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Bodily autonomy applies to everyone, regardless of age. Children are allowed to decide who touches them. Offering a respectful non-physical greeting (like Namaste or a wave) honours both politeness and bodily boundaries.',
        whyWrong: 'Guilt-tripping ("don\'t you love me?") is an unhealthy dynamic. Forced physical affection teaches children to ignore their own safety instincts.'
      },
      topicTag: 'Personal Boundaries',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'consent-and-boundaries'
    },
    {
      id: 'cb-02',
      type: 'single-choice',
      question: 'What is the "swimsuit rule" taught in safety and bodily autonomy education?',
      options: [
        'The principle that the areas covered by a typical swimsuit (chest, between legs, and bottom) plus the mouth are private body parts that no one should touch or see without a valid medical reason with a guardian present',
        'A rule about which swimming costumes are approved for school competitions',
        'A guideline stating you should only swim during morning hours',
        'A rule that only doctors can wear swimsuits'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The swimsuit rule is an internationally recognized child-safety concept: private parts are the areas covered by a swimsuit. Only a trusted doctor during a medical checkup with a parent/guardian present may examine these areas.',
        whyWrong: 'No other adult or peer has the right to touch, photograph, or ask to view private parts.'
      },
      topicTag: 'Private Body Parts',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'consent-and-boundaries'
    },
    {
      id: 'cb-03',
      type: 'scenario',
      scenario: 'An acquaintance met on an online gaming or social media app asks 14-year-old Simran to send a "private selfie" in her bedroom, promising "It will vanish in 5 seconds and I will never show anyone".',
      question: 'What is the safest and smartest response for Simran?',
      options: [
        'Never send private photos; block the user, save screenshots of the request, and immediately tell a trusted parent, guardian, or teacher',
        'Send it because disappearing photo features prevent anyone from saving or taking a screenshot',
        'Send a photo of her best friend instead to keep herself safe',
        'Agree only if they send a photo of themselves first'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Digital images can be easily captured via second devices or screengrabs, even on self-deleting apps. Requests for intimate or bedroom photos are serious red flags for exploitation or blackmail. Blocking and informing a trusted adult protects you.',
        whyWrong: 'Disappearing photos offer zero guarantee of privacy. Never share personal intimate images.'
      },
      topicTag: 'Digital Safety',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'consent-and-boundaries'
    },
    {
      id: 'cb-04',
      type: 'scenario',
      scenario: 'An adult or senior student tells 12-year-old Tanya: "This is our special secret game. If you tell your parents, they will be very angry at you and you will get into big trouble."',
      question: 'How should Tanya identify and handle this type of "secret"?',
      options: [
        'Recognize this as an unsafe secret used to manipulate and isolate her; she should break the secret immediately and report it to a trusted adult',
        'Keep the secret because getting in trouble with parents is the worst possible outcome',
        'Wait until she turns 18 before telling anyone',
        'Try to bribe the person to stop playing the game'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Safe secrets are joyful surprises (like a surprise birthday party where everyone eventually knows). Unsafe secrets make someone feel scared, uncomfortable, or guilty. Adults who tell children to keep secrets from their parents are crossing critical safety lines.',
        whyWrong: 'Victims are never at fault, and speaking up is the brave and safe action.'
      },
      topicTag: 'Safe vs Unsafe Secrets',
      difficulty: 'medium',
      ageTier: '9-12',
      relatedArticleId: 'talk-to-someone-trust'
    },
    {
      id: 'cb-05',
      type: 'single-choice',
      question: 'In India, which toll-free national emergency helpline is dedicated 24/7 to protecting children in need of care, safety, and distress response?',
      options: [
        '1098 (Childline / Women & Child Development Emergency Support)',
        '100 (General Police)',
        '1901 (Railway Enquiries)',
        '139 (Train Timings)'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: '1098 is India\'s dedicated, toll-free 24/7 emergency response helpline for children and adolescents facing abuse, danger, or distress. It is managed under the Ministry of Women and Child Development.',
        whyWrong: '100 is general police. 1098 is specially trained for compassionate child protection and emergency rescue.'
      },
      topicTag: 'Helplines & Protection',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'talk-to-someone-trust',
      doctorReviewFlag: '[VERIFY: National Emergency Helpline 1098 integration under Mission Vatsalya and ERSS 112 by Ministry of Women and Child Development]'
    },
    {
      id: 'cb-06',
      type: 'multi-select',
      question: 'What qualities make someone a truly "trusted adult" in a young person\'s safety network? (Select all that apply)',
      options: [
        'They listen without immediately judging, shaming, or blaming you',
        'They respect your personal space and take your safety concerns seriously',
        'They take appropriate action to protect you when you tell them someone crossed a line',
        'They buy you expensive gifts and ask you to keep everything between just the two of you'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'A trusted adult can be a parent, aunt, school counsellor, teacher, or older sibling who provides safety, validates feelings, and protects boundaries without conditional secrecy.',
        whyWrong: 'Gifting in exchange for exclusivity or secrecy is a classic grooming red flag, not a sign of trustworthy support.'
      },
      topicTag: 'Trusted Network',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'talk-to-someone-trust'
    },
    {
      id: 'cb-07',
      type: 'scenario',
      scenario: 'During a bus ride to school, a stranger standing near 15-year-old Kavita brushes against her repeatedly and moves closer whenever she shifts away.',
      question: 'What is an effective safety response using the "NO - GO - TELL" rule?',
      options: [
        'Speak up firmly in a loud, clear voice ("Please move back, you are standing too close"), move away to the driver or conductor, and report it to school authorities or parents',
        'Stay completely frozen in silence hoping the person notices her discomfort and stops on their own',
        'Apologize to the person for taking up seat space',
        'Jump off the moving bus immediately'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Loud, direct objection breaks the silence perpetrators rely on. Moving towards authority figures (conductor, female co-passengers) and reporting the incident immediately creates a protective barrier.',
        whyWrong: 'Staying quiet often encourages the offender. You never need to apologize for expecting personal physical space.'
      },
      topicTag: 'Public Space Safety',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'consent-and-boundaries'
    },
    {
      id: 'cb-08',
      type: 'single-choice',
      question: 'What does "Consent is freely given, reversible, and enthusiastic" mean in everyday relationships and friendships?',
      options: [
        'A person has the right to say no at any point, even if they previously said yes, and their decision must be respected without guilt-tripping',
        'Once you say yes to sharing your diary or hugging someone, you can never change your mind later',
        'If someone pressures, begs, or threatens until you say "fine, okay", that counts as true consent',
        'Consent only matters in courtrooms, not in day-to-day interactions'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Consent must be ongoing and free of fear, coercion, or exhaustion. Anyone can withdraw permission at any time, and that boundary must be honoured immediately.',
        whyWrong: 'Pressuring or wearing someone down until they give in is coercion, not consent.'
      },
      topicTag: 'Consent Fundamentals',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'consent-and-boundaries'
    },
    {
      id: 'cb-09',
      type: 'scenario',
      scenario: 'Someone touched 13-year-old Ayesha inappropriately at a coaching class. Ayesha feels deeply guilty, thinking: "Did I wear the wrong dupatta? Did I smile too much? Is it my fault?"',
      question: 'What is the most crucial truth Ayesha needs to understand?',
      options: [
        'Boundary violations and harassment are 100% the responsibility of the person crossing the boundary; the victim is NEVER at fault',
        'She is partly responsible because clothes dictate how people treat you',
        'She should never leave her house again to prevent future issues',
        'She should keep it completely secret so her family is not embarrassed'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Safety violations, harassment, and abuse are solely the fault and choice of the perpetrator. Clothes, smiles, or politeness never justify inappropriate behaviour. Shifting blame to victims is harmful and false.',
        whyWrong: 'Believing you are at fault prevents seeking help and allows perpetrators to escape accountability.'
      },
      topicTag: 'Victim Blaming Truths',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'talk-to-someone-trust'
    },
    {
      id: 'cb-10',
      type: 'single-choice',
      question: 'If you confide in an adult about someone making you feel unsafe, but that adult dismisses you with "you are overreacting, let it go", what should you do next?',
      options: [
        'Keep telling other trusted adults on your safety list (like a school counselor, another family member, or call 1098) until someone listens and protects you',
        'Give up and accept that you must endure the discomfort',
        'Apologize for bringing up the topic',
        'Blame yourself for feeling uncomfortable'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Never stop seeking help if the first person fails to act. Having a "safety network" of multiple trusted adults (at least 3 to 5 people) ensures that if one person lets you down, another will stand up for you.',
        whyWrong: 'Adult dismissal does not invalidate your safety feelings. Keep speaking up until you are safe.'
      },
      topicTag: 'Safety Network',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'talk-to-someone-trust'
    }
  ]
};
