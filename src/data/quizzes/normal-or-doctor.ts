import { Quiz } from './types';

export const normalOrDoctorQuiz: Quiz = {
  id: 'normal-or-doctor',
  title: 'Normal or See a Doctor?',
  subtitle: 'Navigate real-life scenarios about cramps, flow, cycle timing, and discharge to know when to seek medical care.',
  badgeTag: 'Health Detective',
  icon: '🩺',
  color: 'from-rose-400 to-red-500',
  category: 'Symptoms & Red Flags',
  targetStages: ['cycle', 'puberty', 'menopause'],
  ageTier: '13-17',
  displayCount: 8,
  disclaimer: 'This quiz is for awareness and education, not medical diagnosis. When in doubt, always consult a qualified doctor.',
  published: true,
  questions: [
    {
      id: 'nod-01',
      type: 'scenario',
      scenario: 'Pooja (16) experiences mild lower abdominal heaviness and dull cramps on Days 1 and 2 of her period. The ache eases with a warm water bottle and allows her to attend school.',
      question: 'Is Pooja\'s experience normal or a sign to see a doctor?',
      options: [
        'Normal: Mild to moderate primary dysmenorrhea caused by uterine prostaglandins is very common and usually responds to heat and rest',
        'See a Doctor: Any cramping whatsoever indicates pelvic infection',
        'See a Doctor: She must undergo emergency pelvic surgery immediately',
        'Normal only if she never drinks water'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Mild lower belly cramps that respond well to a warm water bottle, light stretching, or standard mild analgesics are typical primary dysmenorrhea from uterine muscle contractions.',
        whyWrong: 'Cramping alone does not mean infection. If pain is severe enough to cause fainting or vomiting, that would be a medical red flag.'
      },
      topicTag: 'Cramps & Pain',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'period-pain-normal'
    },
    {
      id: 'nod-02',
      type: 'scenario',
      scenario: 'Divya (15) has periods so intensely painful that she vomits, faints, and misses 2 days of school every single month. Standard painkillers and heating pads do not relieve her pain.',
      question: 'What is the most appropriate action for Divya?',
      options: [
        'See a Doctor: Debilitating pain that causes school absenteeism and vomiting is secondary dysmenorrhea and warrants investigation for endometriosis or other pelvic conditions',
        'Normal: Every woman must experience unbearable suffering and faint regularly',
        'Normal: She just needs to stop complaining and drink cold soda',
        'Wait until she turns 30 before mentioning it to anyone'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Pain that stops normal daily activities, causes vomiting, or resists standard pain relief is never normal. A paediatrician or gynaecologist can check for underlying conditions like endometriosis or adenomyosis.',
        whyWrong: 'Accepting debilitating agony as "normal womanhood" delays vital clinical diagnosis by an average of 7 to 10 years.'
      },
      topicTag: 'Cramps & Pain',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Endometriosis diagnostic delay averages 7-9 years globally due to normalized dysmenorrhea; ACOG recommends clinical referral for dysmenorrhea refractory to NSAIDs and OCPs]'
    },
    {
      id: 'nod-03',
      type: 'scenario',
      scenario: 'Ananya (14) has been soaking through a thick sanitary pad completely every 45 minutes for the last 4 hours, and notices blood clots larger than a 5-rupee coin.',
      question: 'Is Ananya\'s heavy bleeding normal or a reason to see a doctor?',
      options: [
        'See a Doctor promptly: Soaking through one or more pads an hour for consecutive hours and passing large clots (larger than a quarter/coin) indicates menorrhagia (abnormal uterine bleeding) and can cause acute anaemia',
        'Normal: Everyone bleeds this heavily on weekends',
        'Normal: Clots the size of a fist are standard for adolescents',
        'See a Doctor only if bleeding continues for 6 months'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The clinical threshold for severe menorrhagia is soaking through a pad or tampon in 1-2 hours for consecutive hours, or passing clots larger than a coin. Prompt medical care is needed to prevent acute anaemia.',
        whyWrong: 'While small pea-sized clots can be normal on heavy days, coin-sized clots with rapid pad saturation require urgent clinical evaluation.'
      },
      topicTag: 'Flow & Heavy Bleeding',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Clinical menorrhagia threshold: soaking through >= 1 pad/tampon per hour for 2+ consecutive hours, or passing clots > 2.5 cm (1 inch)]'
    },
    {
      id: 'nod-04',
      type: 'scenario',
      scenario: 'Priya is 14 and had her first period 8 months ago. Her cycles have been 30 days, 42 days, and 28 days apart.',
      question: 'Is Priya\'s cycle variability normal or should she see a doctor?',
      options: [
        'Normal: In the first 1–2 years after menarche, cycles frequently vary between 21 and 45 days while the hormonal axis (HPO axis) matures and anovulatory cycles occur',
        'See a Doctor: Any cycle that is not exactly 28 days indicates immediate ovarian damage',
        'See a Doctor: She must start high-dose fertility drugs right away',
        'Normal only if her periods start on full moon days'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Irregularity in the first 24 months post-menarche is a recognized physiological phase. As the brain and ovaries mature their feedback loop, cycles gradually settle into a narrower pattern.',
        whyWrong: 'Demanding textbook 28-day precision in young teens causes needless anxiety. However, cycles consistently longer than 45 days after 2 years should be checked.'
      },
      topicTag: 'Cycle Length',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'teen-irregular-cycles'
    },
    {
      id: 'nod-05',
      type: 'scenario',
      scenario: 'Meera (17) has not had a period for over 4 months (120+ days). She is not pregnant, but has noticed increased hair on her chin and persistent acne.',
      question: 'What is the appropriate medical recommendation for Meera?',
      options: [
        'See a Doctor: Missing periods for over 90 consecutive days (secondary amenorrhea) combined with signs of androgen excess (chin hair, acne) warrants evaluation for PCOS or thyroid disorders',
        'Normal: Skipping periods for 4 months is great because it saves money on pads',
        'Normal: Teenagers never need more than 2 periods a year',
        'Ignore it until she turns 25'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Secondary amenorrhea (absence of periods for >90 days in previously cycling individuals) along with hyperandrogenism signs (hirsutism, cystic acne) is a hallmark presentation of Polycystic Ovary Syndrome (PCOS).',
        whyWrong: 'Infrequent periods are not just a convenience—prolonged untreated amenorrhea can lead to endometrial hyperplasia and bone density issues.'
      },
      topicTag: 'Missed Periods & PCOS',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'pcos-pcod-management-guide'
    },
    {
      id: 'nod-06',
      type: 'scenario',
      scenario: 'Sana (15) notices a thick, white, cottage-cheese-like vaginal discharge accompanied by intense itching and burning sensation around the vulva.',
      question: 'Is Sana\'s symptom normal or should she see a doctor?',
      options: [
        'See a Doctor or Healthcare Provider: Clumpy white discharge with intense itching, redness, or burning is typical of a yeast infection (Candida) and needs appropriate antifungal treatment',
        'Normal: Vaginal discharge always itches severely during puberty',
        'Normal: Washing with strong fragrant chemical soap will cure it',
        'See a Doctor only if she has been hospitalized'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Normal physiological leukorrhea is smooth, clear to milky, and does not itch or burn. Clumpy "curd-like" discharge with vulvar itching suggests candidiasis (yeast overgrowth), easily treated with antifungal medication.',
        whyWrong: 'Washing with strong soaps worsens the irritation and destroys protective vaginal microflora.'
      },
      topicTag: 'Vaginal Discharge',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor'
    },
    {
      id: 'nod-07',
      type: 'scenario',
      scenario: 'Tanvi (13) notices a clear, slippery, odorless discharge in her underwear that does not itch. It stretches slightly between her fingers.',
      question: 'Is Tanvi\'s clear, odorless discharge normal or a reason to see a doctor?',
      options: [
        'Normal: Physiological cervical mucus and leukorrhea are the body\'s natural way of cleaning the vagina and balancing moisture, especially during estrogen surges',
        'See a Doctor: All discharge is a sign of disease',
        'See a Doctor: She needs antibiotic injections immediately',
        'Normal only if it happens at midnight'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Clear, watery, or stretchy discharge with no foul smell, itching, or pain is healthy physiological cervical fluid. It keeps the vaginal tissue elastic and protected.',
        whyWrong: 'Many young girls panic when seeing discharge, wrongly assuming it is an infection. Education removes this fear.'
      },
      topicTag: 'Vaginal Discharge',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'nod-08',
      type: 'scenario',
      scenario: 'Kavita (16) feels extremely exhausted, dizzy when standing up, gets breathless climbing a single flight of stairs at school, and notices her inner lower eyelids look pale white instead of pink.',
      question: 'What do Kavita\'s symptoms most likely indicate, and what is the recommended step?',
      options: [
        'See a Doctor for a Complete Blood Count (CBC) and Ferritin test: Extreme fatigue, breathlessness on exertion, and pale conjunctiva are classic signs of iron-deficiency anaemia, which is widespread among menstruating adolescent girls',
        'Normal: All teenagers are permanently lazy and need louder alarms',
        'Normal: Breathlessness while walking stairs is just lack of willpower',
        'See a Doctor only if she stops breathing completely'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Menstrual blood loss depletes iron stores if not replenished by diet. Anaemia deprives muscles and the brain of oxygen, causing fatigue, dizziness, and pale conjunctiva. A simple CBC and iron supplementation restores energy.',
        whyWrong: 'Dismissing anaemia as "laziness" impairs academic performance and immune health. Over 50% of adolescent girls in India are anaemic (NFHS-5).'
      },
      topicTag: 'Anaemia & Fatigue',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'nod-09',
      type: 'scenario',
      scenario: 'Sunita (52) had her last period 2 years ago (confirmed menopause). Yesterday she noticed light vaginal bleeding and brown spotting.',
      question: 'Is post-menopausal bleeding normal or an urgent reason to see a doctor?',
      options: [
        'See a Doctor urgently: Any vaginal bleeding occurring 12+ months after menopause is abnormal until proven otherwise and requires immediate investigation (ultrasound/biopsy) to rule out endometrial malignancy',
        'Normal: Menopause often reverses itself for a few days',
        'Normal: Just drink warm milk and rest at home',
        'See a Doctor only if bleeding lasts for 30 consecutive days'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Postmenopausal bleeding is an absolute red flag. While benign polyps or vaginal atrophy are common causes, approximately 10% of cases are endometrial cancer. Early diagnosis has extremely high cure rates.',
        whyWrong: 'Never wait or ignore postmenopausal spotting. Bleeding after menopause is never "youth returning".'
      },
      topicTag: 'Post-Menopause Red Flags',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Clinical guideline: Post-menopausal bleeding (PMB) is considered a red flag for endometrial carcinoma; urgent transvaginal ultrasound or hysteroscopy/biopsy indicated]'
    },
    {
      id: 'nod-10',
      type: 'scenario',
      scenario: 'Aarti (15) feels sudden high fever (102°F), vomiting, dizziness, confusion, and a sunburn-like rash on her palms while using a high-absorbency tampon that she forgot to remove for over 10 hours.',
      question: 'What is the critical medical action for Aarti?',
      options: [
        'Seek Emergency Medical Care immediately: High fever, rash, confusion, and vomiting while using a tampon are symptoms of Toxic Shock Syndrome (TSS), a rare but life-threatening bacterial condition',
        'Take a nap and wait for the fever to go away on its own',
        'Normal: Tampons always cause temporary sunburn rashes and vomiting',
        'Drink lemon juice and continue wearing the tampon'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'TSS is caused by Staphylococcus aureus toxins multiplying in prolonged tampon use. It is a medical emergency requiring immediate tampon removal and IV antibiotics in a hospital.',
        whyWrong: 'Waiting or sleeping through TSS symptoms can lead to rapid septic shock. Tampons should never be left in for more than 8 hours.'
      },
      topicTag: 'TSS & Product Safety',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'nod-11',
      type: 'scenario',
      scenario: 'Ritu (18) experiences severe mood swings, intense crying spells, hopelessness, and panic attacks strictly in the 7 days before her period, which vanish within 2 days of bleeding starting.',
      question: 'Is Ritu\'s extreme premenstrual distress normal PMS or a medical condition?',
      options: [
        'See a Doctor: Severe premenstrual depression, anger, or hopelessness that disrupts relationships and study is likely Premenstrual Dysphoric Disorder (PMDD), a treatable neurobiological condition',
        'Normal: All women feel like giving up on life every month',
        'Normal: She is just being dramatic for attention',
        'Normal: Sugar pills are the only medical solution'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'PMDD is a severe form of PMS recognized by DSM-5. Shifting progesterone metabolites interact with brain GABA-A receptors, triggering genuine psychiatric distress. SSRIs, lifestyle support, or hormonal regulation provide dramatic relief.',
        whyWrong: 'Brushing off PMDD as drama isolates girls and risks self-harm. Compassionate clinical care is available.'
      },
      topicTag: 'PMDD & Mental Health',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'understanding-pms'
    },
    {
      id: 'nod-12',
      type: 'scenario',
      scenario: 'Deepa (16) noticed her period blood is bright red on Day 2, but turns dark brown and thick on Day 5.',
      question: 'Is this blood color change normal or a sign of illness?',
      options: [
        'Normal: Bright red indicates fresh, rapid flow; dark brown or rust indicates older, slower-moving blood that oxidized upon contact with air inside the vagina',
        'See a Doctor: Dark blood means gangrene inside the pelvis',
        'See a Doctor: Blood must stay bright neon pink every single day',
        'Normal only if she avoids all dairy products'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Blood contains iron, which turns dark brown when exposed to oxygen over several hours. Brown flow at the beginning or tail end of a period is completely standard and harmless.',
        whyWrong: 'Brown blood does not indicate dead tissue or disease. It is basic oxidation chemistry.'
      },
      topicTag: 'Blood Color & Flow',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'what-is-a-period'
    }
  ]
};
