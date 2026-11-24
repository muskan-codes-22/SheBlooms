import { Quiz } from './types';

export const firstPeriodReadyQuiz: Quiz = {
  id: 'first-period-ready',
  title: 'First Period Ready Checklist',
  subtitle: 'Practical scenarios for your first period: what to expect, emergency kits, and body confidence.',
  badgeTag: 'First Step',
  icon: '🌸',
  color: 'from-pink-400 to-rose-400',
  category: 'Puberty & Preparation',
  targetStages: ['puberty'],
  ageTier: '9-12',
  displayCount: 8,
  disclaimer: 'This quiz is for learning and preparation. Every body develops on its own unique schedule.',
  published: true,
  questions: [
    {
      id: 'fpr-01',
      type: 'scenario',
      scenario: 'Pooja is 12 years old and sitting in school when she notices a damp feeling in her underwear. In the washroom, she sees a small reddish-brown stain on her underwear. She does not have a pad with her.',
      question: 'What is the best immediate step for Pooja to take at school?',
      options: [
        'Fold clean toilet paper or tissues into her underwear as a temporary liner and discreetly ask a female teacher, school nurse, or friend for a pad',
        'Run out of school immediately without telling any teacher',
        'Stay locked inside the school washroom cubicle until the school bell rings in the evening',
        'Use rough paper from an exam notebook to stop the bleeding completely'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Folding clean tissue paper provides a short-term safeguard while you reach a female teacher, school nurse, or friend. School staff handle this routinely—you are never in trouble for starting your period.',
        whyWrong: 'Rough notebook paper can cause painful vaginal abrasions. Running away or hiding causes unnecessary fear.'
      },
      topicTag: 'School Emergency',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'period-emergency-at-school'
    },
    {
      id: 'fpr-02',
      type: 'scenario',
      scenario: 'Ananya (11) notices dark brown or rust-coloured spots on her underwear instead of bright red blood. She worries she is ill.',
      question: 'Why does period blood often appear brown or dark rust-coloured, especially on the first or last days?',
      options: [
        'Blood reacts with oxygen (oxidation) when flowing slowly, turning brown; this is completely normal and healthy',
        'It indicates internal infection and needs immediate antibiotics',
        'It means she ate too many spices or dark foods the day before',
        'It is a sign that her cycle has permanently stopped'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'When menstrual flow is light or slow, blood takes longer to leave the uterus and oxidizes in the presence of air, turning deep brown or rust. It is totally natural at the start and tail end of a bleed.',
        whyWrong: 'Diet and spices do not dye menstrual blood. Brown spotting does not mean an infection by itself.'
      },
      topicTag: 'Blood Color & Flow',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'what-is-a-period'
    },
    {
      id: 'fpr-03',
      type: 'multi-select',
      question: 'Which of the following items are helpful to keep inside a small, discreet "First Period Kit" pouch in your school bag? (Select all that apply)',
      options: [
        '2–3 clean sanitary pads wrapped in their original covers',
        'A clean spare cotton undergarment in a small zip pouch',
        'A small biodegradable disposal bag or newspaper wrapping sheet',
        'A bottle of heavy antiseptic liquid to spray inside the vagina'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Pads, a spare pair of panties, and clean newspaper or biodegradable bags for respectful disposal make a complete emergency pouch that keeps you calm and prepared anywhere.',
        whyWrong: 'Never spray antiseptic lotions or douching chemicals inside intimate areas; the vagina is self-cleaning and antiseptics cause chemical burns.'
      },
      topicTag: 'Preparation & Kit',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-kit-guide'
    },
    {
      id: 'fpr-04',
      type: 'single-choice',
      question: 'Across healthy girls, between what ages does menarche (the first period) typically arrive?',
      options: [
        'Between ages 9 and 15, most commonly around ages 11 to 13',
        'Exactly on a girl\'s 10th birthday',
        'Between ages 4 and 7',
        'Only after age 20'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The typical range for menarche is 9 to 15 years, with the median around 12–13. Genetics, nutrition, and body composition all influence your personal biological clock.',
        whyWrong: 'Periods do not arrive on exact birthdays, and starting after age 15 warrants a routine checkup with a doctor to check hormonal milestones.'
      },
      topicTag: 'Puberty Milestones',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'fpr-05',
      type: 'scenario',
      scenario: 'Rani (13) started her first period yesterday. Her grandmother tells her she must not take a bath or wash her hair for 4 days because "water will freeze the uterus".',
      question: 'What is the medically accurate advice regarding bathing and personal hygiene during your period?',
      options: [
        'Bathing with warm water and washing hair is safe, soothing, and essential for preventing bacterial odor and skin irritation',
        'You should only bathe in freezing cold water at midnight',
        'Avoid all water contact for 7 full days to let the body cleanse naturally',
        'Wash exclusively with strong perfumed floor cleaner'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Warm baths or showers improve circulation, relax pelvic muscles, reduce cramps, and wash away sweat and bacteria. Water cannot enter the uterus or "freeze" anything.',
        whyWrong: 'Avoiding baths leads to bacterial accumulation, skin rash, and discomfort. Traditional water taboos have no scientific foundation.'
      },
      topicTag: 'Hygiene Habits',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'fpr-06',
      type: 'single-choice',
      question: 'How much blood does a person actually lose on average during an entire period (3–5 days)?',
      options: [
        'About 2 to 4 tablespoons (30 to 60 ml) mixed with natural uterine lining fluids',
        'At least 2 full litres of pure blood',
        'One small droplet only',
        'Half of the body\'s total blood supply'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'It often looks like a huge volume because it is mixed with mucus, cervical fluid, and shed endometrial tissue, but actual menstrual blood loss averages only 30–60 ml over several days.',
        whyWrong: 'Losing litres of blood is medically impossible in normal periods and would cause shock. Total blood loss is modest.'
      },
      topicTag: 'Flow Volume',
      difficulty: 'medium',
      ageTier: '9-12',
      relatedArticleId: 'what-is-a-period'
    },
    {
      id: 'fpr-07',
      type: 'scenario',
      scenario: 'Meera (12) wears a pad to school in the morning. Even though the pad is only lightly stained after 5 hours, she is wondering whether she should change it.',
      question: 'How frequently should a disposable sanitary pad be changed, regardless of whether it looks full?',
      options: [
        'Every 4 to 6 hours to prevent bacterial growth, odor, and skin irritation',
        'Once every 24 hours to save money',
        'Only when blood completely leaks onto outerwear',
        'Never change it until taking a bath at night'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Even light menstrual blood is warm and moist, creating an ideal breeding ground for bacteria. Changing every 4–6 hours protects your vulva from chafing, rashes, and microbial overgrowth.',
        whyWrong: 'Waiting 12–24 hours increases the risk of dermatitis and infections, even if the flow appears light.'
      },
      topicTag: 'Pad Care',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'fpr-08',
      type: 'single-choice',
      question: 'What is the correct, hygienic way to dispose of a used sanitary pad in home or school bathrooms?',
      options: [
        'Wrap it securely in newspaper or its wrapper and place it in a covered dustbin',
        'Flush it down the toilet bowl with plenty of water',
        'Throw it out of the window into the backyard',
        'Leave it open on the washroom floor'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Sanitary pads contain superabsorbent polymers that expand in water and choke plumbing pipes. Wrapping them in paper and placing them into a designated covered bin ensures sanitation and dignity for cleaning workers.',
        whyWrong: 'Flushing pads leads to severe sewer blockages and requires manual scavenging, which is unsafe.'
      },
      topicTag: 'Disposal Manners',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'fpr-09',
      type: 'scenario',
      scenario: 'Simran (13) has mild lower tummy aching and heaviness on the first afternoon of her period. She feels nervous about whether this is normal.',
      question: 'What causes mild period cramps (primary dysmenorrhea), and what is a gentle home remedy?',
      options: [
        'Uterine contractions driven by natural chemical messengers called prostaglandins; placing a warm water bag or gentle cat-cow stretching eases tension',
        'Tummy bugs eating stomach lining; drinking spicy chilli oil helps kill them',
        'Lack of physical punishment; walking barefoot in the cold fixes it',
        'A broken bone inside the pelvis'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Prostaglandins make the uterus contract to shed its lining. Mild cramps are common and improve with local warmth (hot water bottle), hydration, and slow breathing.',
        whyWrong: 'Spicy oils irritate the stomach. Mild cramping is muscular, not infectious.'
      },
      topicTag: 'Cramp Comfort',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'fpr-10',
      type: 'scenario',
      scenario: 'Divya (12) has physical education class on the second day of her period. Her friend says: "Don\'t run, running during periods damages your internal organs."',
      question: 'Can you participate in sports, running, and dance during your period?',
      options: [
        'Yes, physical activity releases endorphins (natural pain relievers) and is completely safe with a comfortable pad or product',
        'No, the uterus will permanently twist if you jump or sprint',
        'Only if you have written permission from the Olympic committee',
        'You should remain stationary in bed for 5 whole days'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Light to moderate movement boosts blood flow, relaxes pelvic muscles, and lifts mood through endorphins. Many athletes compete at elite levels during their periods.',
        whyWrong: 'The uterus is held securely in place by strong pelvic ligaments. Running or jumping cannot displace organs.'
      },
      topicTag: 'Activity & Movement',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'fpr-11',
      type: 'single-choice',
      question: 'Kavita is 15 years old and has not had her first period yet, though her younger sister started at 12. When is it medically recommended to see a doctor about delayed first periods?',
      options: [
        'If a girl has had no period by age 15, or has had no breast changes by age 13; a paediatrician or gynaecologist can evaluate her development',
        'Never see a doctor; periods can safely wait until age 30',
        'Only if she has a high fever',
        'Girls must never discuss periods with medical professionals'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Medical guidelines (ACOG/AAP) recommend a clinical evaluation for primary amenorrhea if menarche has not occurred by age 15 (or 3 years after breast budding), to check thyroid, nutrition, and pelvic anatomy.',
        whyWrong: 'Waiting past 15 without a checkup delays diagnosis of treatable hormonal or anatomical variations.'
      },
      topicTag: 'Delayed Menarche',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: ACOG & Indian Academy of Pediatrics guidance recommends evaluating primary amenorrhea if no menarche by age 15, or within 3 years of thelarche]'
    },
    {
      id: 'fpr-12',
      type: 'scenario',
      scenario: 'Tanvi (11) feels embarrassed and afraid to tell her father that she started her period because she has only seen pads advertised to women on television.',
      question: 'Who can Tanvi confide in when her period begins?',
      options: [
        'Any trusted adult—mothers, fathers, elder sisters, aunts, school nurses, or teachers; periods are normal biology and caring adults will support you without shame',
        'No one; she must hide it in secret forever',
        'Only an anonymous stranger online',
        'She should pretend it never happened'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Dads, moms, teachers, and guardians care for your wellbeing. Fathers and male caregivers buy groceries, medicines, and pads for their families every day. Speaking up gets you the care and products you need.',
        whyWrong: 'Keeping periods secret creates anxiety and prevents access to hygiene products.'
      },
      topicTag: 'Emotional Support',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'talking-to-daughter-students'
    }
  ]
};
