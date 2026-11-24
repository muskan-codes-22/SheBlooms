import { Quiz } from './types';

export const pubertyBodyChangesQuiz: Quiz = {
  id: 'puberty-body-changes',
  title: 'Body Changes of Puberty',
  subtitle: 'Understand what changes, in what order, and why every body blooms on its own timeline.',
  badgeTag: 'Puberty Journey',
  icon: '🌱',
  color: 'from-amber-400 to-rose-400',
  category: 'Puberty & Growth',
  targetStages: ['puberty'],
  ageTier: '9-12',
  displayCount: 8,
  disclaimer: 'Puberty is a natural transition, not an illness. Pacing varies widely among healthy girls.',
  published: true,
  questions: [
    {
      id: 'pbc-01',
      type: 'scenario',
      scenario: 'Priya is 10 years old. She feels a small, tender firm pebble-like bump under one nipple and is worried she has an injury or disease.',
      question: 'What is the most likely explanation for Priya\'s tender bump?',
      options: [
        'A breast bud (thelarche), usually the very first physical sign of puberty',
        'A bruise from carrying a heavy school bag',
        'An infection from not bathing with antiseptic soap',
        'A sign that her period will start tomorrow morning'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Breast budding (thelarche) is typically the earliest physical marker of female puberty, often starting between ages 8 and 13. A small firm, tender "button" under one or both nipples is completely normal.',
        whyWrong: 'Periods usually start about 2 to 2.5 years after breast buds first appear, not the next day. Asymmetry (one side starting before the other) is also very common and harmless.'
      },
      topicTag: 'Breast Development',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-02',
      type: 'single-choice',
      question: 'Ayaan notices her best friend grew 4 inches this summer, while her own height hasn\'t changed much yet. What is true about growth spurts during puberty?',
      options: [
        'Growth spurts happen at different ages for everyone; girls usually experience their fastest spurt 6 to 12 months before their first period',
        'If you do not grow tall by age 11, you will stop growing completely',
        'Drinking special malt powders is the only way to trigger puberty growth spurts',
        'Everyone in the same school class grows at the exact same rate'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Puberty timing is controlled by genetics, nutrition, and hormones. Peak height velocity in girls typically happens about 6 to 12 months before menarche, and girls grow at widely differing times.',
        whyWrong: 'Malt drinks and supplements do not dictate genetic growth windows. Growth continues for 1 to 2 years after menarche before growth plates fuse.'
      },
      topicTag: 'Growth Spurts',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-03',
      type: 'scenario',
      scenario: 'Ananya is 11 and noticed clear-to-milky white marks on her underwear for the past few weeks. There is no itching, no burning, and no foul smell.',
      question: 'What does this vaginal discharge indicate?',
      options: [
        'Normal physiological leukorrhea, showing the body is maturing and preparing for periods (often 6–12 months away)',
        'A urinary tract infection requiring antibiotics immediately',
        'Poor personal hygiene that needs internal chemical douching',
        'An allergic reaction to laundry detergent'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Estrogen increases during puberty and stimulates vaginal glands to produce mild, clear or milky discharge (leukorrhea). It keeps the vagina naturally clean and healthy.',
        whyWrong: 'It is not an infection unless accompanied by foul odour, curd-like clumping, itching, or painful urination. Never use douches or harsh chemicals inside.'
      },
      topicTag: 'Vaginal Discharge',
      difficulty: 'medium',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-04',
      type: 'multi-select',
      question: 'Which of the following physical changes are common and expected as puberty progresses? (Select all that apply)',
      options: [
        'Sweat glands become more active and body odour develops under the arms',
        'Hips widen and body fat naturally distributes around the thighs and hips',
        'Fine hairs on the underarms and pubic area gradually become darker and coarser',
        'Fingernails permanently change colour to dark purple'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Apocrine sweat glands activate, pelvic bones and fat deposits widen the hips for future reproductive maturity, and androgen hormones cause pubic and underarm hair growth.',
        whyWrong: 'Fingernails do not change colour during puberty—that would be an unrelated medical issue.'
      },
      topicTag: 'Puberty Milestones',
      difficulty: 'medium',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-05',
      type: 'scenario',
      scenario: 'Tanvi (12) is upset because she has tiny red pimples on her forehead and nose, and her elder cousin told her it is because she ate fried snacks.',
      question: 'What actually causes acne during puberty, and how should she care for her skin?',
      options: [
        'Puberty hormones (androgens) stimulate sebaceous glands to produce more oil; washing twice daily with gentle soap and water helps most',
        'Acne is purely caused by eating mangoes and oily food, so she must skip all meals',
        'Scrubbing the face hard with rough pumice stones 5 times a day is required to remove dirt',
        'Popping every pimple as soon as it appears prevents bacteria from spreading'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Androgen hormones cause skin oil glands to enlarge and produce sebum, which mixes with dead skin cells and clogs pores. Gentle washing prevents irritation.',
        whyWrong: 'Scrubbing vigorously or popping pimples damages skin, spreads bacteria, and leads to scarring. Diet plays a minor role compared to hormones.'
      },
      topicTag: 'Skin & Acne',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'pbc-06',
      type: 'single-choice',
      question: 'What is the typical sequence of physical puberty changes in most girls (Tanner staging stages simplified)?',
      options: [
        'Breast budding (thelarche) → Pubic hair growth → Peak height growth spurt → First period (menarche)',
        'First period → Breast buds → Growth spurt → Pubic hair',
        'First period → Voice deepening → Facial beard → Growth spurt',
        'Wisdom teeth eruption → First period → Breast budding'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'In standard physiological development, breast budding is almost always the first milestone, followed closely by pubic hair, peak growth velocity, and finally menarche approximately 2 years after budding.',
        whyWrong: 'Menarche is usually a late puberty event, not the first. Facial beards do not develop in typical female puberty.'
      },
      topicTag: 'Puberty Milestones',
      difficulty: 'challenge',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-07',
      type: 'single-choice',
      question: 'Diya is 11 and feels happy one minute, then suddenly tearful and irritated the next, even over small things. What is happening biologically?',
      options: [
        'Fluctuating surges of estrogen and progesterone interact with brain neurotransmitters (like serotonin) while the emotional brain matures',
        'She has a permanent personality defect that cannot be helped',
        'Her phone screen is the sole biological cause of hormonal mood changes',
        'Puberty only changes the body; emotional ups and downs have no connection to hormones'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Surging reproductive hormones directly impact brain chemistry, while the prefrontal cortex (responsible for emotional regulation) is still developing throughout adolescence. Validation and healthy sleep help tremendously.',
        whyWrong: 'Mood swings during puberty are biologically driven, not intentional drama or bad character.'
      },
      topicTag: 'Emotional Health',
      difficulty: 'medium',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-08',
      type: 'scenario',
      scenario: 'Ritu is 14 years old and has not noticed any breast buds, body hair, or growth spurt, while all her classmates have started their periods.',
      question: 'What is the most medically appropriate step for Ritu and her guardian?',
      options: [
        'Consult a paediatrician or endocrinologist to check hormone levels and rule out delayed puberty',
        'Wait until age 20 without doing anything because everyone is different',
        'Take over-the-counter adult weight-gain supplements immediately',
        'Assume she can never lead a healthy life and hide it from family'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'While puberty timing varies, medical guidelines recommend evaluating delayed puberty if there are zero secondary sexual characteristics (no breast buds) by age 13-14. A simple medical check can identify nutritional, thyroid, or genetic factors.',
        whyWrong: 'Waiting until 20 delays potential treatment. Supplements without medical guidance can be unsafe.'
      },
      topicTag: 'Puberty Milestones',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Clinical threshold for delayed puberty evaluation in adolescent girls: absence of breast development by age 13, or no menarche by age 15 or 3 years post-thelarche, per ACOG/AAP/ISPAE guidelines]'
    },
    {
      id: 'pbc-09',
      type: 'single-choice',
      question: 'Sana is 12 and feels self-conscious because her left breast bud is slightly larger and firmer than her right one. What should a trusted didi tell her?',
      options: [
        'Breast asymmetry is completely normal during puberty; one breast bud frequently starts growing months before the other and often balances out over time',
        'She must undergo immediate surgery to equalize them',
        'It means her right side has stopped growing permanently',
        'She must bind her chest tightly with tight cloth to flatten both'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Asymmetry is extremely common during puberty as hormone receptors on each side respond at slightly different rates. Most adult women also have slight natural differences in breast size.',
        whyWrong: 'Chest binding with tight cloth during breast budding can restrict normal tissue development and cause pain. Surgery is neither needed nor appropriate.'
      },
      topicTag: 'Breast Development',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'first-period-expect'
    },
    {
      id: 'pbc-10',
      type: 'single-choice',
      question: 'With new sweat gland activity during puberty, what is the best daily personal hygiene routine for young girls?',
      options: [
        'Bathing daily with water and mild soap on armpits/outer body, wearing clean cotton undergarments, and letting washed clothes dry thoroughly in sunlight',
        'Spraying chemical room fresheners directly onto clothes instead of bathing',
        'Avoiding baths during humid summer months so natural oils stay trapped',
        'Applying heavy adult perfumed powders inside intimate areas'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Daily bathing removes bacterial breakdown products that cause body odour. Breathable cotton underwear and drying clothes in direct sunlight prevents fungal growth.',
        whyWrong: 'Perfumed powders or body sprays applied directly to the vulva or broken skin can cause severe chemical dermatitis and allergy.'
      },
      topicTag: 'Hygiene Habits',
      difficulty: 'easy',
      ageTier: '9-12',
      relatedArticleId: 'hygiene-dos-donts'
    }
  ]
};
