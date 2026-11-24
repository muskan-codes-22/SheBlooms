import { Quiz } from './types';

export const mythOrFactQuiz: Quiz = {
  id: 'myth-or-fact',
  title: 'Myth or Fact? Period Truths',
  subtitle: 'Dismantle old taboos with clear biological facts and simple explanations.',
  badgeTag: 'Stigma Buster',
  icon: '💡',
  color: 'from-amber-400 to-rose-500',
  category: 'Myths & Awareness',
  targetStages: ['puberty', 'cycle', 'educator'],
  ageTier: 'all',
  displayCount: 10,
  disclaimer: 'Separating cultural folklore from reproductive biology. Knowledge brings freedom and confidence.',
  published: true,
  questions: [
    {
      id: 'mf-01',
      type: 'myth-fact',
      question: 'Myth or Fact: Touching a jar of homemade pickles (achar) during your period will cause it to spoil or rot.',
      options: [
        'Myth: Clean hands touching clean utensils never spoil food; pickling preservation depends strictly on salt, oil, clean dry spoons, and microbial hygiene',
        'Fact: Menstrual hormones secrete through hand sweat and curdle oil',
        'Fact: Only metal jars spoil, glass jars stay safe',
        'Fact: Spoilage happens only if touched after sunset'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Pickles spoil when introduced to moisture, dirty hands, or contaminated spoons carrying fungi or bacteria. Menstruation has zero effect on microorganisms or fermentation.',
        whyWrong: 'Skin does not emit toxins during menstruation. This ancient belief arose from lack of running water and general hygiene in past centuries.'
      },
      topicTag: 'Cultural Taboos',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'mf-02',
      type: 'myth-fact',
      question: 'Myth or Fact: A menstrual cup or tampon can travel upward and get permanently lost inside your stomach or body.',
      options: [
        'Myth: Anatomically impossible; the vagina is a closed muscular canal about 8–10 cm long ending at the cervix, whose opening is tiny as a pinhead',
        'Fact: Internal organs are connected in one open cavity so items can float to the heart',
        'Fact: Only tampons can get lost, cups cannot',
        'Fact: Items can slip into the liver if you sleep upside down'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The vagina is a blind pouch ending at the cervix. The cervical opening (os) is microscopic—only blood, fluid, and sperm can pass through. A cup or tampon cannot leave the vaginal canal.',
        whyWrong: 'If an item shifts high up, relaxed bearing down with pelvic muscles easily brings it down within reach.'
      },
      topicTag: 'Anatomy Truths',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'mf-03',
      type: 'myth-fact',
      question: 'Myth or Fact: Severe, debilitating period pain that causes vomiting, fainting, or missing school is "just a natural woman\'s burden" to endure quietly.',
      options: [
        'Myth: While mild-to-moderate cramps are common, severe pain that impairs school, work, or daily life is medical dysmenorrhea and warrants evaluation for conditions like endometriosis or PCOS',
        'Fact: Every woman must experience extreme agony as part of biology',
        'Fact: Taking painkillers for cramps causes permanent infertility',
        'Fact: Pain only exists if you talk about it'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Debilitating pain is never "normal". Dysmenorrhea that stops daily living should be evaluated by a healthcare professional. Targeted pain relief, heating pads, or hormonal therapies can provide immense relief.',
        whyWrong: 'Suffering in silence delays diagnosis of conditions like endometriosis. Normalising agony harms health.'
      },
      topicTag: 'Pain Realities',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'period-pain-normal'
    },
    {
      id: 'mf-04',
      type: 'myth-fact',
      question: 'Myth or Fact: Menstrual blood is "dirty, toxic waste" filled with body poisons being purged each month.',
      options: [
        'Myth: Menstrual fluid consists of ordinary blood, sterile endometrial tissue, cervical mucus, and vaginal secretions; it is neither toxic nor poisonous',
        'Fact: The uterus filters toxins like the kidneys do',
        'Fact: Blood is clean only in young girls under 14',
        'Fact: It turns toxic if you eat lemon during periods'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The endometrium is a rich, nourishing cushion grown each month in anticipation of supporting a fertilized embryo. When pregnancy does not occur, this clean lining simply sheds.',
        whyWrong: 'The liver and kidneys filter bodily toxins, not the uterus. Calling period blood "dirty" is a cultural stigma, not biology.'
      },
      topicTag: 'Biology & Stigma',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'what-is-a-period'
    },
    {
      id: 'mf-05',
      type: 'myth-fact',
      question: 'Myth or Fact: Washing inside the vagina with fragrant feminine washes, soaps, or antiseptic liquids is necessary for intimate cleanliness.',
      options: [
        'Myth: The vagina is a self-cleaning internal organ with healthy Lactobacillus bacteria; washing inside disrupts pH and causes yeast and bacterial infections',
        'Fact: Intimate parts require chemical douching twice daily',
        'Fact: Plain water is dangerous for the vulva',
        'Fact: Baby oil should be inserted daily'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Lactobacillus bacteria maintain an acidic pH (3.8–4.5) that naturally wards off pathogens. Only the outside (the vulva) should be washed with plain warm water. Never wash inside the vagina.',
        whyWrong: 'Feminine washes and douching strip healthy microflora, triggering bacterial vaginosis and candidiasis.'
      },
      topicTag: 'Intimate Care',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'mf-06',
      type: 'myth-fact',
      question: 'Myth or Fact: Drinking cold water, curd, or eating sour foods (like citrus) curdles or stops menstrual blood flow inside the uterus.',
      options: [
        'Myth: Digestion and menstruation operate through completely separate biological systems; stomach contents cannot touch or freeze pelvic blood flow',
        'Fact: Cold temperatures freeze the uterine lining in minutes',
        'Fact: Sour foods turn blood sour inside veins',
        'Fact: Curd causes the cervix to permanently close'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Food travels through the esophagus into the gastrointestinal tract, while the menstrual cycle is regulated by hormones in the bloodstream. Sour foods like lemon provide Vitamin C that actually helps iron absorption!',
        whyWrong: 'Internal core body temperature remains steady around 37°C regardless of whether you sip cold or room-temperature water.'
      },
      topicTag: 'Diet Folklore',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'mf-07',
      type: 'myth-fact',
      question: 'Myth or Fact: It is medically impossible to become pregnant from sexual intercourse that occurs during a period.',
      options: [
        'Myth: While unlikely, sperm can survive inside the female reproductive tract for up to 5 days, so someone with a short cycle who ovulates early can conceive from sex during bleeding',
        'Fact: Periods provide 100% natural contraception',
        'Fact: Pregnancy can only occur on Day 28 of a cycle',
        'Fact: Conception requires at least 40 days of bleeding'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'In individuals with shorter menstrual cycles (e.g., 21–24 days), ovulation can occur shortly after bleeding stops. Because sperm can remain viable in cervical crypts for up to 5 days, unprotected intercourse during menstruation carries pregnancy risk.',
        whyWrong: 'Menstruation is never a reliable form of contraception.'
      },
      topicTag: 'Fertility Science',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'pregnancy-and-ovulation'
    },
    {
      id: 'mf-08',
      type: 'myth-fact',
      question: 'Myth or Fact: Exercising, running, or stretching during your period harms your fertility or displaces internal organs.',
      options: [
        'Myth: Physical movement is completely safe; gentle-to-moderate exercise stimulates beta-endorphins (natural pain relievers) and improves pelvic blood flow to reduce cramp intensity',
        'Fact: Heavy jogging drops the uterus into the legs',
        'Fact: Only swimmers can exercise on periods',
        'Fact: Sweating removes all estrogen from the body'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Strong pelvic floor muscles and ligaments securely suspend pelvic organs. Movement helps reduce prostaglandin-induced cramping and eases premenstrual fluid retention.',
        whyWrong: 'The uterus does not shift from jumping, running, or inversion yoga poses.'
      },
      topicTag: 'Exercise & Movement',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'food-movement-cramps'
    },
    {
      id: 'mf-09',
      type: 'myth-fact',
      question: 'Myth or Fact: Women living together in a hostel or home always "sync" their periods to the same day through mysterious pheromones.',
      options: [
        'Myth: Rigorous modern statistical research shows that because cycle lengths vary (21 to 35 days), cycles inevitably overlap periodically by mathematical chance, not biological pheromone synchronization',
        'Fact: Periods always lock into identical 28-day clocks within 2 months of living together',
        'Fact: Only identical twins sync cycles',
        'Fact: Moon rays sync people sleeping in the same bedroom'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The famous 1971 McClintock study claimed menstrual synchrony, but repeated larger modern studies (including Oxford University data) found no pheromonal synchronization—cycles simply converge and diverge by standard probability.',
        whyWrong: 'Cycle lengths naturally fluctuate from month to month, making periodic overlap a mathematical certainty over time.'
      },
      topicTag: 'Cycle Science',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'cycle-in-4-phases'
    },
    {
      id: 'mf-10',
      type: 'myth-fact',
      question: 'Myth or Fact: Premenstrual Syndrome (PMS) is purely "imaginary emotional drama" created in a person\'s head.',
      options: [
        'Myth: PMS has genuine neurobiological roots: shifting progesterone and estrogen levels directly modulate serotonin and GABA neurotransmitters in the brain, triggering genuine emotional and physical symptoms',
        'Fact: Hormones have zero effect on emotions or physical wellbeing',
        'Fact: PMS only affects people over age 50',
        'Fact: Eating sugar cures all hormonal chemistry instantly'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Post-ovulatory drops in estrogen and progesterone alter central serotonin transmission, which regulates mood, sleep, and appetite. PMS and Premenstrual Dysphoric Disorder (PMDD) are clinically recognized physiological conditions.',
        whyWrong: 'Dismissing hormonal symptoms as emotional weakness creates shame and prevents supportive care.'
      },
      topicTag: 'PMS Biology',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'understanding-pms'
    },
    {
      id: 'mf-11',
      type: 'myth-fact',
      question: 'Myth or Fact: Taking daily oral contraceptive birth control pills causes permanent lifelong infertility after you discontinue them.',
      options: [
        'Myth: Combined oral contraceptives prevent ovulation only while being actively taken; standard ovulatory fertility returns quickly within 1 to 3 months for the vast majority of women upon stopping',
        'Fact: Pills destroy the ovaries permanently after 6 months of use',
        'Fact: You can never have children if you ever take a birth control pill',
        'Fact: Contraceptives turn off all hormones forever'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Extensive global studies confirm that fertility rates after stopping oral contraceptives match those of non-users of the same age. Contraceptives do not damage ovarian reserve.',
        whyWrong: 'If someone had irregular cycles prior to taking the pill, those underlying irregular cycles typically return after stopping, which is unrelated to the pill itself.'
      },
      topicTag: 'Contraception Science',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'contraception-and-pills'
    },
    {
      id: 'mf-12',
      type: 'myth-fact',
      question: 'Myth or Fact: Touching a plant or basil (Tulsi) plant while menstruating will cause it to dry up and die.',
      options: [
        'Myth: Plants require sunlight, water, carbon dioxide, and fertile soil; human menstruation emits no toxins, radiation, or chemicals capable of harming plant tissue',
        'Fact: Menstrual touch radiates plant-killing heat',
        'Fact: Only flowering plants die, leafy vegetables survive',
        'Fact: Plants only die on Tuesdays and Thursdays'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Botanical biology is governed by photosynthesis and plant nutrition. Menstruating individuals touch plants, crops, and gardens across the world with zero negative effect.',
        whyWrong: 'This is an ancient superstition used to justify excluding menstruating individuals from agriculture and household courtyards.'
      },
      topicTag: 'Cultural Taboos',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'mf-13',
      type: 'myth-fact',
      question: 'Myth or Fact: Using a menstrual cup or tampon will permanently destroy a young person\'s "virginity".',
      options: [
        'Myth: "Virginity" is a social and personal concept regarding whether someone has engaged in sexual intercourse; the hymen is a flexible, naturally perforated mucosal ring that can stretch with cups, tampons, or sports without defining anyone\'s value',
        'Fact: Virginity is a physical medical lock that is broken by inserting anything',
        'Fact: Tampons can only be used by married women over 30',
        'Fact: Cups dissolve the hymen through suction'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The hymen naturally has openings to allow menstrual fluid to exit. It stretches naturally with athletic activities, horse-riding, tampons, and cups. Virginity is about sexual experiences, not hygiene products.',
        whyWrong: 'Anyone of any age who menstruates can safely choose tampons, pads, or cups depending on their comfort.'
      },
      topicTag: 'Anatomy Truths',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'mf-14',
      type: 'myth-fact',
      question: 'Myth or Fact: If you enter a swimming pool while on your period, the water will force menstrual blood back into your lungs or stop flow entirely.',
      options: [
        'Myth: Water pressure against the vaginal opening can temporarily counteract gravity while immersed, but blood cannot enter the lungs; using a cup or tampon allows clean, safe swimming',
        'Fact: Swimming forces blood into the chest cavity',
        'Fact: Pool chlorine turns period blood into cement',
        'Fact: You will contaminate the entire municipal water supply'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'The reproductive system does not connect to the respiratory tract. Mild water pressure can slow external discharge while in the water, but once you step out, gravity resumes. Tampons and cups make swimming completely worry-free.',
        whyWrong: 'Modern pool filtration and chlorine safely sanitize water. Swimming during menstruation is hygienic and excellent exercise.'
      },
      topicTag: 'Activity & Movement',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'period-myths-busted'
    }
  ]
};
