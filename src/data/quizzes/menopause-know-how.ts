import { Quiz } from './types';

export const menopauseKnowHowQuiz: Quiz = {
  id: 'menopause-know-how',
  title: 'Menopause & Perimenopause Know-How',
  subtitle: 'Master the midlife hormonal transition: perimenopause signs, hot flushes, bone health, and red flags.',
  badgeTag: 'Golden Bloom',
  icon: '🍂',
  color: 'from-amber-500 to-rose-400',
  category: 'Perimenopause & Menopause',
  targetStages: ['menopause'],
  ageTier: 'adult',
  displayCount: 8,
  disclaimer: 'Evidence-based guidance on midlife transitions. Any post-menopausal bleeding warrants immediate clinical evaluation.',
  published: true,
  questions: [
    {
      id: 'mn-01',
      type: 'single-choice',
      question: 'When is a woman clinically confirmed to have reached menopause?',
      options: [
        'After 12 consecutive months without any menstrual bleeding, with no other physiological or medical cause',
        'The very first day she experiences a hot flush',
        'When her cycle skips just two months in a row',
        'Exactly on her 50th birthday'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Menopause is diagnosed retrospectively after 12 full consecutive months of amenorrhea. The multi-year phase of fluctuating hormones before this milestone is called perimenopause.',
        whyWrong: 'Hot flushes and skipped periods occur during perimenopause while ovaries are still occasionally functioning. Menopause requires 12 continuous months of zero bleeding.'
      },
      topicTag: 'Clinical Milestones',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'perimenopause-early-signs'
    },
    {
      id: 'mn-02',
      type: 'single-choice',
      question: 'According to epidemiological studies in India (e.g. Indian Menopause Society), what is the typical median age of natural menopause for Indian women compared to Western populations?',
      options: [
        'Around 46.2 years (approximately 4 to 5 years earlier than the Western average of 51 years)',
        'Around age 60 to 65',
        'Exactly age 35 for everyone',
        'There is zero geographical or population variation in menopause age'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Large-scale Indian Menopause Society studies establish the average age of natural menopause in Indian women at ~46.2 years, significantly earlier than the Caucasian average of ~51 years. Awareness of this earlier onset helps Indian women recognize symptoms in their early 40s.',
        whyWrong: 'Menopause at 35 is considered Premature Ovarian Insufficiency (POI) and requires medical intervention.'
      },
      topicTag: 'Indian Health Context',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'perimenopause-early-signs',
      doctorReviewFlag: '[VERIFY: Indian Menopause Society clinical data sets median age of natural menopause in Indian women between 46.2 and 47.0 years]'
    },
    {
      id: 'mn-03',
      type: 'scenario',
      scenario: 'Sunita (53) reached menopause 2 years ago (no periods for 24 months). Yesterday, she noticed light pink and brown spotting on her underwear with no pain.',
      question: 'What is the mandatory medical rule regarding any vaginal bleeding that occurs AFTER menopause?',
      options: [
        'Any bleeding after menopause—even light spotting—is an absolute clinical red flag that requires immediate evaluation by a gynaecologist to rule out endometrial hyperplasia or malignancy',
        'Ignore it because spotting means youthful hormones are naturally returning',
        'Drink turmeric water and wait 6 months to see if it happens again',
        'Apply hot mustard oil to the lower abdomen'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Postmenopausal bleeding (PMB) is abnormal until proven otherwise. While common benign causes include vaginal/endometrial atrophy or polyps, approximately 10% of PMB cases are linked to endometrial cancer. Prompt ultrasound and biopsy save lives.',
        whyWrong: 'Bleeding does not signal "youth returning". Never wait or treat postmenopausal bleeding with home remedies.'
      },
      topicTag: 'Red Flags',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'warning-signs-doctor',
      doctorReviewFlag: '[VERIFY: Standard gynaecological guideline: any post-menopausal bleeding requires transvaginal ultrasound (TVUS) and/or endometrial biopsy]'
    },
    {
      id: 'mn-04',
      type: 'single-choice',
      question: 'Why do sudden "hot flushes" and drenching night sweats happen during perimenopause?',
      options: [
        'Falling and fluctuating estrogen levels disrupt the brain\'s thermoregulatory center in the hypothalamus, narrowing the body\'s neutral temperature comfort zone',
        'Stomach digestive juices are boiling due to spicy food',
        'Blood pressure is dropping to zero',
        'The body is allergic to oxygen'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Estrogen directly modulates neurokinin B (NKB) and kisspeptin neurons in the hypothalamic thermostat. As estrogen drops, the thermoneutral zone narrows, causing the brain to misinterpret normal temperatures as intense overheating and trigger rapid flushing and sweating.',
        whyWrong: 'Digestive acids and oxygen allergies have no connection to vasomotor hot flushes.'
      },
      topicTag: 'Vasomotor Symptoms',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hot-flushes'
    },
    {
      id: 'mn-05',
      type: 'scenario',
      scenario: 'Radha (47) has had irregular periods for 8 months (skipping 2 months, then a light period). Her partner suggests they no longer need contraception.',
      question: 'Can a woman become pregnant during perimenopause?',
      options: [
        'Yes; erratic ovulation can still occur sporadically during perimenopause until 12 full consecutive months of amenorrhea have passed',
        'No, all fertility stops permanently on your 45th birthday',
        'No, irregular cycles mean the uterus can no longer hold pregnancy',
        'Only during full moon nights'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'While fertility declines significantly in perimenopause, sporadic spontaneous ovulation can still happen. Effective contraception is recommended until 12 consecutive months without a period if over 50 (or 24 months if under 50).',
        whyWrong: 'Assuming you cannot conceive during perimenopause is a leading cause of unplanned pregnancies in women in their late 40s.'
      },
      topicTag: 'Fertility & Contraception',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'perimenopause-early-signs'
    },
    {
      id: 'mn-06',
      type: 'multi-select',
      question: 'Which of the following lifestyle strategies have clinical evidence for reducing the severity of hot flushes and night sweats? (Select all that apply)',
      options: [
        'Dressing in breathable natural cotton or linen layers and keeping bedrooms cool (around 18–20°C)',
        'Identifying and minimizing personal triggers like smoking, alcohol, excessive caffeine, and very spicy food',
        'Practicing slow paced abdominal breathing and stress-reduction techniques',
        'Running a room heater at maximum heat while drinking scalding hot tea before bed'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Layered clothing allows quick temperature adjustments. Cooling bedroom environments, reducing vasodilators (alcohol, caffeine, spice), and paced diaphragmatic breathing help stabilise autonomic responses.',
        whyWrong: 'Heaters and hot drinks elevate body temperature and trigger severe hot flush cascades.'
      },
      topicTag: 'Symptom Relief',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hot-flushes'
    },
    {
      id: 'mn-07',
      type: 'single-choice',
      question: 'Why does bone loss accelerate significantly during and after the menopausal transition, increasing the risk of osteoporosis?',
      options: [
        'Estrogen normally protects bones by slowing bone breakdown (osteoclast activity); when estrogen declines, bone is broken down faster than it can rebuild',
        'Walking causes bones to dissolve in midlife',
        'Bones only stay strong if someone never exercises',
        'Drinking milk after age 40 causes calcium loss'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Estrogen suppresses osteoclasts (cells that resorb bone). With estrogen depletion, women can lose up to 10–20% of their bone density in the 5–7 years around menopause, drastically raising fracture risks.',
        whyWrong: 'Walking and exercise stimulate bone remodeling and strengthen bones; inactivity speeds up bone loss.'
      },
      topicTag: 'Bone Health',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hot-flushes'
    },
    {
      id: 'mn-08',
      type: 'multi-select',
      question: 'Which non-pharmacological habits are most effective for protecting bone density in post-menopausal women? (Select all that apply)',
      options: [
        'Regular weight-bearing exercise (like brisk walking, stair climbing, and gentle resistance bands)',
        'Adequate dietary calcium from ragi, curd, paneer, sesame seeds (til), and dark greens',
        'Checking Vitamin D levels and getting safe morning sunlight exposure or supplements as advised by a doctor',
        'Remaining completely stationary on a mattress without walking'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Weight-bearing mechanical stress signals osteoblasts to deposit minerals. Calcium provides building blocks, while Vitamin D3 is essential for intestinal calcium absorption.',
        whyWrong: 'Sedentary bed-rest accelerates bone demineralization and muscle wasting (sarcopenia).'
      },
      topicTag: 'Bone Health',
      difficulty: 'easy',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hot-flushes'
    },
    {
      id: 'mn-09',
      type: 'scenario',
      scenario: 'Kamala (51) experiences painful intercourse, persistent vaginal dryness, and frequent urges to urinate with mild burning, but urine cultures show no bacteria.',
      question: 'What is this common, treatable condition called, and what causes it?',
      options: [
        'Genitourinary Syndrome of Menopause (GSM), caused by estrogen decline thinning vaginal and urethral tissues',
        'A permanent kidney failure requiring immediate dialysis',
        'A psychological fear of aging with zero biological basis',
        'An allergic reaction to drinking plain water'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'GSM (formerly vulvovaginal atrophy) results from estrogen receptors in the vulva, vagina, and bladder losing estrogen. Tissues become thin, pale, and dry. Low-dose local vaginal estrogen creams or non-hormonal vaginal moisturizers are safe, effective treatments.',
        whyWrong: 'Unlike hot flushes, GSM does not go away on its own over time. It is a chronic physical condition that responds well to targeted medical care.'
      },
      topicTag: 'Pelvic & Bladder Health',
      difficulty: 'challenge',
      ageTier: 'adult',
      relatedArticleId: 'menopause-intimacy-pelvic-health'
    },
    {
      id: 'mn-10',
      type: 'single-choice',
      question: 'What do modern international menopause guidelines (NAMS/IMS) conclude about Menopausal Hormone Therapy (MHT/HRT)?',
      options: [
        'For healthy symptomatic women within 10 years of menopause or under age 60 (the "window of opportunity"), the benefits of MHT for hot flushes and bone preservation typically outweigh the risks',
        'MHT is lethal and banned worldwide by medical associations',
        'MHT should only be prescribed to men',
        'MHT must be taken by every woman without any doctor consultation'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'When initiated in the "window of opportunity" (under age 60 or within 10 years of menopause) without contraindications (such as active breast cancer or unexplained bleeding), MHT is the most effective therapy for vasomotor symptoms and osteoporosis prevention.',
        whyWrong: 'The older 2002 WHI trial had major limitations (tested older women on synthetic progestins). Modern bioidentical formulations have a favorable safety profile under physician supervision.'
      },
      topicTag: 'Hormone Therapy',
      difficulty: 'challenge',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hrt-natural-remedies',
      doctorReviewFlag: '[VERIFY: North American Menopause Society (NAMS) & Indian Menopause Society position on MHT window of opportunity: age < 60 or within 10 years of menopause]'
    },
    {
      id: 'mn-11',
      type: 'scenario',
      scenario: 'Neena (48) experiences sudden memory lapses ("brain fog"), difficulty concentrating at her job, and fragmented sleep. She worries she is developing early dementia.',
      question: 'What is the connection between perimenopause and cognitive "brain fog"?',
      options: [
        'Estrogen supports glucose metabolism and synaptic plasticity in the hippocampus and frontal cortex; hormonal swings combined with night sweat-induced sleep loss cause temporary cognitive fog that typically stabilizes post-menopause',
        'It is a permanent loss of 50% of brain cells that cannot recover',
        'Hormones have zero relationship with the human brain',
        'Neena has early-onset Alzheimer\'s that cannot be helped'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Neuroimaging research shows the brain goes through a temporary bioenergetic transition during perimenopause. Most women find cognitive function stabilizes after the menopause transition, especially when sleep is restored.',
        whyWrong: 'Brain fog is distinct from progressive neurodegenerative dementia. Reassurance and sleep optimization provide great relief.'
      },
      topicTag: 'Cognitive & Mood Changes',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'menopause-mood-brain-fog-sleep'
    },
    {
      id: 'mn-12',
      type: 'single-choice',
      question: 'Why does cardiovascular risk (cholesterol, heart disease) increase in women after menopause?',
      options: [
        'Premenopausal estrogen has protective effects on blood vessel elasticity and lipid profiles (raising HDL, lowering LDL); its decline removes this natural cardiovascular cushion',
        'The heart stops beating regularly after age 45',
        'Blood volume decreases by 90%',
        'Women completely stop digesting protein'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Estrogen keeps arterial walls supple and promotes healthy HDL cholesterol. After menopause, LDL cholesterol and blood pressure tend to rise, making regular cardiovascular screening, blood pressure checks, and heart-healthy diet vital.',
        whyWrong: 'The heart does not stop beating. Proactive cardiovascular monitoring prevents heart disease in midlife.'
      },
      topicTag: 'Heart Health',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'perimenopause-early-signs'
    },
    {
      id: 'mn-13',
      type: 'single-choice',
      question: 'What medical test is the clinical gold standard for measuring bone mineral density to screen for osteopenia and osteoporosis in post-menopausal women?',
      options: [
        'A Dual-Energy X-ray Absorptiometry (DEXA / DXA) scan of the spine and hip',
        'A routine skin scratch test',
        'A standard thermometer check under the arm',
        'An eye vision test'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'A DEXA scan uses very low-dose X-rays to assess bone density at the femoral neck and lumbar spine, calculating a T-score to identify fracture risk before breaks occur.',
        whyWrong: 'Skin and eye tests cannot assess internal bone mineral content.'
      },
      topicTag: 'Medical Screenings',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'menopause-hot-flushes',
      doctorReviewFlag: '[VERIFY: Clinical screening recommendation for DEXA scan in women aged 65+, or postmenopausal women under 65 with clinical risk factors (FRAX assessment)]'
    },
    {
      id: 'mn-14',
      type: 'scenario',
      scenario: 'During perimenopause, Geeta (46) experiences periods that arrive every 2 weeks, with heavy bleeding soaking a large pad every hour for 4 consecutive hours, with large blood clots.',
      question: 'What should Geeta do in this situation?',
      options: [
        'Seek urgent gynaecological care; soaking a pad an hour for multiple hours is abnormal uterine bleeding (menorrhagia) that can cause severe anaemia and warrants investigation for fibroids, polyps, or endometrial hyperplasia',
        'Assume all erratic, heavy bleeding is harmless during perimenopause and stay home',
        'Fast for 3 days and drink cold soda',
        'Wait 5 years until menopause completes'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'While cycle irregularity is normal in perimenopause, extremely heavy bleeding (soaking through a pad an hour, large clots, dizziness) is abnormal uterine bleeding requiring medical evaluation and ultrasound.',
        whyWrong: 'Untreated heavy bleeding causes severe iron-deficiency anaemia and weakness.'
      },
      topicTag: 'Red Flags',
      difficulty: 'medium',
      ageTier: 'adult',
      relatedArticleId: 'warning-signs-doctor'
    }
  ]
};
