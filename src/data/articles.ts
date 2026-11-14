export interface MythFact {
  myth: string;
  fact: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'basics' | 'myths' | 'hygiene' | 'medical';
  categoryLabel: string;
  targetStages: ('puberty' | 'cycle' | 'menopause' | 'educator')[];
  readTime: string;
  icon: string;
  summary: string;
  keyTakeaways: string[];
  content: string[]; // Markdown-style paragraphs
  mythVsFact?: MythFact[];
  whenToSeeDoctor?: string;
  suggestedQuestion: string;
  relatedArticleIds: string[];
  reviewedDate: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'what-is-a-period',
    title: 'What is a Period? The Gentle Science of Menstruation',
    subtitle: 'A simple, natural breakdown of how the body prepares each month',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '🩸',
    summary: 'A monthly period is simply your body shedding the gentle cushion lining of the uterus when pregnancy does not occur. It is a sign of health, not sickness or impurity.',
    keyTakeaways: [
      'Menstruation is a normal, healthy biological process, not an illness.',
      'The flow is a mixture of blood, uterine lining tissue, and natural fluid.',
      'The average cycle spans between 21 to 35 days (often up to 45 days during the first 2-3 years of puberty).',
      'The total fluid lost over a period is usually just 2 to 4 tablespoons (30–60 ml).'
    ],
    content: [
      'Every month, hormones in your body work together like an orchestra. Your uterus (womb) builds up a soft, nutrient-rich inner lining called the endometrium, preparing for a potential baby.',
      'Around the middle of your cycle, one of your ovaries releases an egg cell in a step called ovulation. If the egg is not fertilized, the body realizes the lining is not needed.',
      'Hormone levels shift gently downward, signaling the uterus to let go of this lining. It gently trickles down through the cervix and out through the vagina. That is your period!',
      'Many people are surprised to learn how little blood is actually lost. Even though it might look like a lot on a pad, the typical total volume across all days is only about 2 to 4 tablespoons.'
    ],
    mythVsFact: [
      {
        myth: 'Period blood is "dirty" or toxic blood leaving the body.',
        fact: 'Period fluid is completely clean and natural — it consists of mucosal tissue and blood vessels that were nurtured to support new life.'
      },
      {
        myth: 'You cannot bathe or wash your hair while on your period.',
        fact: 'Warm baths and showers are soothing, relax pelvic muscles, and help prevent odor and infection.'
      }
    ],
    whenToSeeDoctor: 'If your period flow routinely soaks through one or more regular pads or tampons every hour for two consecutive hours, or if bleeding lasts longer than 7 full days, speak with a doctor or health professional.',
    suggestedQuestion: 'How many days does a normal period usually last?',
    relatedArticleIds: ['first-period-expect', 'cycle-in-4-phases', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Based on WHO & Public Health Guidelines'
  },
  {
    id: 'first-period-expect',
    title: 'What to Expect at Your First Period (Menarche)',
    subtitle: 'From physical clues to your very first day with zero stress',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['puberty', 'educator'],
    readTime: '4 min read',
    icon: '🌱',
    summary: 'Your first period (called menarche) usually arrives between ages 9 and 15. Learn what clues your body gives and how to feel completely prepared.',
    keyTakeaways: [
      'Most girls get their first period about 1.5 to 2 years after their breasts begin developing.',
      'Clear or milky vaginal discharge is a common normal sign that your first period is approaching.',
      'First periods are often light brownish or rust-colored spotting rather than bright red.',
      'Irregularity in the first 1-2 years is completely normal as hormones calibrate.'
    ],
    content: [
      'Starting your first period is a milestone that connects you with millions of women around the globe. While it can feel slightly mysterious, knowing what happens removes all the worry.',
      'Body clues: Usually, you will notice breast buds first, followed by soft body hair. You will also notice clear or whitish discharge on your underwear. This is your body\'s natural self-cleaning fluid and is totally healthy.',
      'What it looks like: Many girls expect bright red blood, but the first day often looks like dark brownish smears or pinkish spots. Don\'t be alarmed; slow-moving blood reacts with oxygen and naturally turns brownish.',
      'Having an emergency kit in your backpack containing 2 pads, a spare pair of underwear, and a discreet pouch gives you instant peace of mind anywhere.'
    ],
    mythVsFact: [
      {
        myth: 'Your period starts suddenly like a gushing fountain.',
        fact: 'Periods typically begin with gentle, slow spotting that you notice when you wipe in the restroom.'
      }
    ],
    whenToSeeDoctor: 'If you have reached age 15 without having your first period, or if you experience severe abdominal pain with vomiting, consult a healthcare provider.',
    suggestedQuestion: 'What should I put in my first period kit?',
    relatedArticleIds: ['what-is-a-period', 'first-period-kit-guide', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Pediatric & Adolescent Guidance'
  },
  {
    id: 'cycle-in-4-phases',
    title: 'The Menstrual Cycle in 4 Phases: Your Inner Seasons',
    subtitle: 'Harness the natural rhythm of Menstrual, Follicular, Ovulatory, and Luteal phases',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle', 'educator', 'puberty'],
    readTime: '4 min read',
    icon: '🌓',
    summary: 'Your cycle is not just the bleeding days — it is a continuous, beautiful 4-phase hormonal cycle that influences your energy, focus, and appetite.',
    keyTakeaways: [
      'Phase 1: Menstrual (Days 1–5): Low estrogen and progesterone; time for rest and replenishment.',
      'Phase 2: Follicular (Days 6–13): Estrogen rises; energy, curiosity, and optimism lift.',
      'Phase 3: Ovulatory (Days 14–16): Peak estrogen and luteinizing hormone; high confidence and sociability.',
      'Phase 4: Luteal (Days 17–28): Progesterone rules; introspective focus, appetite increases, PMS possible.'
    ],
    content: [
      'Think of your menstrual cycle as your body\'s personal four seasons: Winter (Menstruation), Spring (Follicular), Summer (Ovulation), and Autumn (Luteal).',
      'Phase 1 - Winter (Days 1 to 5): Bleeding begins on Day 1. Hormones are at their lowest baseline. It is natural to feel inward-focused and crave rest, warming teas, and gentle stretching.',
      'Phase 2 - Spring (Days 6 to 13): As the follicle matures in the ovary, estrogen climbs. You may feel creative sparks, sharper memory, and renewed physical energy.',
      'Phase 3 - Summer (Days 14 to 16): An egg is released! Estrogen peaks. You might notice your skin looking radiant and your vocal inflection feeling confident.',
      'Phase 4 - Autumn (Days 17 to 28): Progesterone takes center stage to warm the body. If energy dips or cravings for complex carbs increase, that is your metabolism operating at a slightly higher baseline.'
    ],
    mythVsFact: [
      {
        myth: 'Every person must have a strict 28-day cycle to be healthy.',
        fact: 'Cycles ranging from 24 to 38 days are medically considered regular in healthy adults. Minor shifts from travel or stress are normal.'
      }
    ],
    suggestedQuestion: 'How does progesterone affect mood during the luteal phase?',
    relatedArticleIds: ['food-movement-cramps', 'understanding-pms', 'period-pain-normal'],
    reviewedDate: 'Evidence-informed • Endocrine Guidance'
  },
  {
    id: 'period-myths-busted',
    title: 'Period Myths Busted: Separating Science from Stigma',
    subtitle: 'Debunking taboos around exercise, food, water, and daily life',
    category: 'myths',
    categoryLabel: 'Myths & Awareness',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '💡',
    summary: 'Centuries of cultural taboos have created unnecessary restrictions around menstruation. Let us replace myths with clinical science.',
    keyTakeaways: [
      'You CAN exercise, swim, wash your hair, and enjoy sour foods on your period.',
      'Periods do not ruin sour pickles or plants — this is purely ancient superstition.',
      'Tampons and menstrual cups cannot get lost inside your body; the cervix blocks passage.',
      'Open conversations remove stigma and protect young people from fear.'
    ],
    content: [
      'Around the world, myths have told women they cannot touch plants, enter religious places, swim, or eat certain fruits while on their period. Science tells a vastly different, empowering story.',
      'Myth: Exercising during your period is harmful. Truth: Gentle exercise actually releases beta-endorphins, which act as nature\'s painkillers for cramps and elevate dopamine.',
      'Myth: You cannot swim during your period. Truth: Using a tampon, menstrual cup, or leak-proof swim period underwear allows you to swim freely without any leakage.',
      'Myth: A tampon can get lost inside you. Truth: The vagina is a closed muscular canal about 3 to 4 inches deep ending at the tiny pinhole opening of the cervix. Nothing can travel into your abdomen.'
    ],
    mythVsFact: [
      {
        myth: 'Taking a shower stops or coagulates period flow dangerously.',
        fact: 'Water pressure may momentarily slow external flow, but warm water relaxes muscles and maintains essential hygiene.'
      },
      {
        myth: 'Using a tampon takes away your virginity.',
        fact: 'Virginity is a social/personal concept, not a medical condition. The hymen is a stretchy membrane with natural openings that accommodates tampons comfortably.'
      }
    ],
    suggestedQuestion: 'Can you go swimming when on your period?',
    relatedArticleIds: ['hygiene-dos-donts', 'what-is-a-period', 'first-period-expect'],
    reviewedDate: 'Evidence-informed • Public Health Standards'
  },
  {
    id: 'period-pain-normal',
    title: 'Is Period Pain Normal? Primary vs. Secondary Dysmenorrhea',
    subtitle: 'Understanding mild cramping vs. symptoms that require professional care',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '4 min read',
    icon: '🩺',
    summary: 'Mild cramps that respond to heat or gentle painkillers are common. Debilitating pain that stops you from going to school or work is NOT normal.',
    keyTakeaways: [
      'Mild cramping is caused by natural hormone-like chemicals called prostaglandins.',
      'Primary dysmenorrhea is common cramping not caused by another medical condition.',
      'Severe pain that causes fainting, vomiting, or doesn\'t respond to medication warrants medical evaluation.',
      'Conditions like endometriosis, adenomyosis, or fibroids can and should be treated.'
    ],
    content: [
      'To help shed its lining, your uterus produces natural chemicals called prostaglandins. These cause the uterine muscles to gently contract, which feels like a dull ache or cramp in your lower belly or back.',
      'What is considered normal: A dull ache for the first 1 to 2 days of bleeding that improves with a warm water bottle, gentle rest, hydration, or over-the-counter anti-inflammatory medicine.',
      'What is NOT normal: Pain so severe that you miss work, school, or social events; pain accompanied by severe nausea or blacking out; or pain during urination or bowel movements.',
      'Never allow anyone to tell you that unbearable pain is "just part of being a woman." You deserve compassionate medical attention and a full assessment.'
    ],
    mythVsFact: [
      {
        myth: 'You just have to suffer through period cramps silently.',
        fact: 'Effective relief exists — from heat therapy and magnesium to hormonal therapies and specialized pain management.'
      }
    ],
    whenToSeeDoctor: 'Seek medical care if pain worsens year over year, starts days before bleeding and continues after, or if basic pain relievers like ibuprofen offer zero relief.',
    suggestedQuestion: 'How can I tell the difference between normal cramps and endometriosis?',
    relatedArticleIds: ['food-movement-cramps', 'warning-signs-doctor', 'cycle-in-4-phases'],
    reviewedDate: 'Evidence-informed • Clinical Guidance'
  },
  {
    id: 'first-period-kit-guide',
    title: 'How to Choose: Pads, Tampons, Menstrual Cups & Period Underwear',
    subtitle: 'Your complete guide to picking the right menstrual products for your lifestyle',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '5 min read',
    icon: '🌸',
    summary: 'Explore disposable pads, internal tampons, reusable silicone cups, and washable period underwear with pros, cons, and tips.',
    keyTakeaways: [
      'Sanitary pads are beginner-friendly and adhere to regular underwear.',
      'Tampons allow swimming and athletic sports; always choose the lowest absorbency needed.',
      'Menstrual cups are reusable medical-grade silicone cups that collect rather than absorb.',
      'Period underwear offers soft, sustainable comfort for light-to-medium days and sleep.'
    ],
    content: [
      'There is no single "best" period product — the best choice is whichever makes you feel secure, comfortable, and confident.',
      'Disposable & Organic Pads: Great for beginners. They stick onto your underwear and catch flow. Change every 4 to 6 hours to prevent moisture buildup.',
      'Tampons: Inserted into the vagina to absorb fluid internally. Perfect for swimming and gymnastics. Crucial rule: change every 4 to 8 hours (never exceed 8 hours to avoid Toxic Shock Syndrome).',
      'Menstrual Cups & Discs: Eco-friendly and economical. Made from medical-grade silicone, they fold for insertion and pop open to create a seal, holding fluid up to 10–12 hours.',
      'Period Underwear: Multi-layered absorbent fabric built into washable underwear. Amazing for sleeping, light flow days, or backup protection.'
    ],
    mythVsFact: [
      {
        myth: 'You can only use pads until you turn 18.',
        fact: 'Young people can safely use tampons, cups, or pads at any age they feel ready and comfortable.'
      }
    ],
    suggestedQuestion: 'How often should I change my pad or tampon?',
    relatedArticleIds: ['hygiene-dos-donts', 'what-is-a-period', 'first-period-expect'],
    reviewedDate: 'Evidence-informed • Menstrual Hygiene Guidance'
  },
  {
    id: 'hygiene-dos-donts',
    title: 'Hygiene Dos and Don\'ts: Keeping Your Intimate Area Happy',
    subtitle: 'Safe washing practices, changing frequencies, and protecting natural flora',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '3 min read',
    icon: '🫧',
    summary: 'The vagina is a self-cleaning marvel. Learn the difference between the vulva (outside) and vagina (inside) and why gentle water is best.',
    keyTakeaways: [
      'The vagina (inside canal) cleans itself with natural secretions — never douche.',
      'Wash only the vulva (outside skin and folds) with warm water or unscented gentle cleanser.',
      'Always wipe from front to back after using the toilet to avoid bacterial spread.',
      'Change pads every 4 to 6 hours and tampons every 4 to 8 hours.'
    ],
    content: [
      'A huge key to intimate health is knowing anatomy: the "vulva" is the outside skin you see, while the "vagina" is the internal canal.',
      'Self-cleaning mechanism: The healthy vagina contains beneficial Lactobacillus bacteria that keep the pH slightly acidic (around 3.8 to 4.5). Douching or using fragranced washes strips these good bacteria, leading to yeast infections and bacterial vaginosis.',
      'Do: Wash the outer vulva with warm water. Wear breathable cotton underwear. Wash your hands before and after changing any menstrual product.',
      'Don\'t: Never use perfumed sprays, scented pads, or chemical wipes on intimate areas. Never leave a tampon in for more than 8 hours.'
    ],
    mythVsFact: [
      {
        myth: 'A healthy vulva should smell like vanilla or floral perfume.',
        fact: 'A healthy vulva has a natural, mild musky scent. Adding artificial fragrances causes allergic contact dermatitis.'
      }
    ],
    whenToSeeDoctor: 'If you notice thick cottage-cheese discharge, greenish-yellow discharge, strong fishy odor, or intense vaginal itching or burning, visit a doctor for quick relief.',
    suggestedQuestion: 'Why should I never douche?',
    relatedArticleIds: ['first-period-kit-guide', 'period-myths-busted', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Intimate Care Guidelines'
  },
  {
    id: 'food-movement-cramps',
    title: 'Food, Hydration & Movement for Cramp Relief',
    subtitle: 'Evidence-based holistic strategies to soothe uterine spasms naturally',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '4 min read',
    icon: '🥑',
    summary: 'Anti-inflammatory foods, adequate hydration, magnesium, and restorative yoga poses can significantly lessen period cramps.',
    keyTakeaways: [
      'Warmth is medicine: Heat packs relax myometrial contractions and boost local blood flow.',
      'Magnesium-rich foods (dark leafy greens, pumpkin seeds, dark chocolate) help relax smooth muscles.',
      'Ginger tea has been clinically shown to reduce prostaglandin synthesis similarly to ibuprofen.',
      'Gentle poses like Child\'s Pose (Balasana) and Cat-Cow decompress pelvic and lower back tension.'
    ],
    content: [
      'While popping a pill is sometimes necessary, daily nutritional and movement habits provide powerful foundational support.',
      'Hydration: It sounds counterintuitive, but drinking 8 to 10 glasses of warm water decreases water retention and bloating.',
      'The Magic of Magnesium: Magnesium acts as a natural smooth-muscle relaxant. Enjoy pumpkin seeds, almonds, bananas, and 70%+ dark chocolate during your pre-period and bleeding days.',
      'Soothing sips: Ginger tea and chamomile tea contain compounds that inhibit inflammatory prostaglandins and calm spasms.',
      'Gentle movement: Avoid high-intensity bootcamps if feeling depleted; instead, try 15 minutes of gentle walking or restorative yoga poses like Supta Baddha Konasana (Reclined Butterfly).'
    ],
    suggestedQuestion: 'Which foods reduce period bloating and cramps?',
    relatedArticleIds: ['cycle-in-4-phases', 'period-pain-normal', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Wellness Guidance'
  },
  {
    id: 'understanding-pms',
    title: 'Understanding PMS & PMDD: Emotional and Physical Harmony',
    subtitle: 'Why mood swings and breast tenderness occur before your period',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle', 'puberty', 'menopause', 'educator'],
    readTime: '4 min read',
    icon: '💭',
    summary: 'Premenstrual syndrome (PMS) affects up to 75% of menstruators. Learn the difference between mild PMS and severe PMDD.',
    keyTakeaways: [
      'PMS happens in the late luteal phase as progesterone and estrogen rapidly drop.',
      'Common symptoms include irritability, breast tenderness, fatigue, and food cravings.',
      'Premenstrual Dysphoric Disorder (PMDD) is a severe, debilitating mood reaction requiring medical care.',
      'Tracking your cycle in a journal helps predict and manage premenstrual emotional waves.'
    ],
    content: [
      'In the 7 to 10 days before bleeding, progesterone levels peak and then drop steeply. This hormonal dive affects brain neurotransmitters, especially serotonin (the happiness and calm chemical).',
      'Common signs of PMS: Mild irritability, breast tenderness, fluid retention, skin breakouts, and sweet cravings. These typically vanish within 1 to 2 days after bleeding starts.',
      'What is PMDD? Premenstrual Dysphoric Disorder is a severe condition affecting roughly 3–8% of menstruating individuals. It triggers intense depression, panic, hopelessness, or anger that disrupts relationships and daily function.',
      'Self-care: Cut back on excess caffeine and sodium, prioritize 8 hours of sleep, and let friends or partners know when you need a little extra grace.'
    ],
    whenToSeeDoctor: 'If premenstrual sadness makes you feel hopeless, unable to cope, or triggers dark thoughts, please contact a compassionate healthcare provider or counselor promptly.',
    suggestedQuestion: 'What is the difference between PMS and PMDD?',
    relatedArticleIds: ['cycle-in-4-phases', 'food-movement-cramps', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Premenstrual Care Guidance'
  },
  {
    id: 'perimenopause-early-signs',
    title: 'Perimenopause: The Early Signs and Subtle Shifts',
    subtitle: 'Navigating your 40s with clarity, hormonal knowledge, and calm',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['menopause', 'educator'],
    readTime: '4 min read',
    icon: '🍂',
    summary: 'Perimenopause is the natural transition leading up to menopause. It often begins in the early to mid-40s as ovarian reserve gradually shifts.',
    keyTakeaways: [
      'Perimenopause can begin 4 to 8 years before the final menstrual period.',
      'The hallmark sign is cycle irregularity (shorter or longer gaps, varying flow).',
      'Other early indicators: nighttime warmth, sleep disturbances, brain fog, and mood shifts.',
      'Pregnancy is still biologically possible during perimenopause.'
    ],
    content: [
      'Just as puberty marks the beginning of reproductive years, perimenopause is the natural, dignified bridge to the next phase of life.',
      'Hormone fluctuations: Rather than a steady decline, estrogen levels fluctuate like a rollercoaster during perimenopause, causing cycles to be 21 days one month and 45 days the next.',
      'What you might experience: Changes in flow (some cycles lighter, some heavier), waking up feeling warm at night, lighter sleep, momentary word-finding difficulty ("brain fog"), and joint stiffness.',
      'Perimenopause is not something to endure in silence; modern lifestyle modifications, non-hormonal supplements, and Hormone Replacement Therapy (HRT) can transform your quality of life.'
    ],
    mythVsFact: [
      {
        myth: 'Perimenopause means you are suddenly old.',
        fact: 'Perimenopause frequently begins in vibrant 40s women and is simply a biological calibration into a wiser life chapter.'
      }
    ],
    suggestedQuestion: 'At what age does perimenopause usually begin?',
    relatedArticleIds: ['menopause-hot-flushes', 'warning-signs-doctor', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Menopause Health Guidance'
  },
  {
    id: 'menopause-hot-flushes',
    title: 'Menopause: Navigating Hot Flushes, Sleep & Bone Health',
    subtitle: 'Practical comfort strategies for temperature swings and restful nights',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['menopause', 'educator'],
    readTime: '4 min read',
    icon: '🍵',
    summary: 'Menopause is officially reached when you have gone 12 consecutive months without a period. Discover proven relief for vasodilation and sleep.',
    keyTakeaways: [
      'Menopause is defined as 12 full consecutive months without a menstrual period.',
      'Hot flushes stem from the hypothalamus (body\'s thermostat) reacting to reduced estrogen.',
      'Layered cotton clothing, chilled bedside water, and avoiding evening wine help.',
      'Strength training and calcium + Vitamin D3 protect bone density after menopause.'
    ],
    content: [
      'Reaching menopause means your ovaries have completed their egg-releasing role. The average age is 51, though anywhere between 45 and 55 is typical.',
      'Why hot flushes happen: Estrogen helps stabilize your brain\'s thermostat (hypothalamus). When estrogen drops, a tiny temperature change triggers the brain to rapidly widen skin blood vessels to cool down, causing sudden flushing and sweating.',
      'Cooling hacks: Dress in breathable natural layers; use cooling gel pillows; sip cold water when you feel a wave coming; and keep your bedroom around 65°F (18°C).',
      'Bone and heart health: Estrogen protects bones. Weight-bearing exercises (like walking with weights or resistance bands) combined with Vitamin D3 and calcium keep bones strong and resilient.'
    ],
    whenToSeeDoctor: 'Crucial rule: ANY vaginal bleeding or spotting that occurs AFTER you have reached 12 months of menopause requires prompt clinical evaluation by a gynecologist.',
    suggestedQuestion: 'What triggers hot flushes during menopause?',
    relatedArticleIds: ['perimenopause-early-signs', 'warning-signs-doctor', 'hygiene-dos-donts'],
    reviewedDate: 'Evidence-informed • Midlife Wellness Guidance'
  },
  {
    id: 'talking-to-daughter-students',
    title: 'How to Talk to Your Daughter or Students About Periods',
    subtitle: 'Empathy, positive framing, and age-appropriate conversation starters',
    category: 'myths',
    categoryLabel: 'Myths & Awareness',
    targetStages: ['educator', 'puberty'],
    readTime: '4 min read',
    icon: '🤝',
    summary: 'A warm, stigma-free guide for parents, teachers, and guardians to make period talks comforting, normal, and empowering.',
    keyTakeaways: [
      'Start early with bite-sized conversations rather than one daunting "big talk".',
      'Include all genders in menstrual education to dismantle teasing and stigma in schools.',
      'Keep anatomy terms clear and accurate (vulva, vagina, uterus, menstruation).',
      'Prepare an emergency kit together so they feel proud, prepared, and in control.'
    ],
    content: [
      'The best way to raise confident youth is to treat menstruation as a neutral, healthy biological fact, just like losing a baby tooth or growing taller.',
      'Start early (Ages 7–9): You don\'t need to explain fertilization right away. Simply explain that bodies grow, develop cushion linings, and refresh them every month.',
      'Teach boys and young men too: Period taboos persist when menstruation is hidden like a shameful secret. Teaching all students builds respectful, supportive classrooms and families.',
      'Action step: Take your daughter shopping to select pads, a fun pouch, and comfortable cotton briefs. Demystifying the products removes fear.'
    ],
    mythVsFact: [
      {
        myth: 'Talking about periods too early will confuse or frighten young children.',
        fact: 'Children are curious; simple, matter-of-fact answers prevent them from learning fear or shame from misinformed peers.'
      }
    ],
    suggestedQuestion: 'How do I start a conversation about puberty with an 10-year-old?',
    relatedArticleIds: ['first-period-expect', 'what-is-a-period', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Comprehensive Health Guidance'
  },
  {
    id: 'warning-signs-doctor',
    title: 'Warning Signs: When to Seek Medical Help Without Delay',
    subtitle: 'Red flags, heavy bleeding criteria, and how to advocate for your body',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '3 min read',
    icon: '🚨',
    summary: 'Knowing when to book a doctor\'s appointment is empowering. Here is a clear, calm checklist of symptoms that warrant medical evaluation.',
    keyTakeaways: [
      'Soaking through one or more pads/tampons every hour for 2+ consecutive hours is excessive.',
      'Passing blood clots larger than the size of an Indian rupee or a quarter.',
      'Bleeding that lasts longer than 7 full days consecutively.',
      'Any vaginal bleeding after 12 months of menopause is a red flag requiring immediate checkup.',
      'Missed periods for 3+ months if previously regular (secondary amenorrhea).'
    ],
    content: [
      'Listening to your body is one of the greatest acts of self-care. While cycles shift naturally, certain clinical red flags require professional medical attention.',
      'Heavy Menstrual Bleeding (Menorrhagia): If you have to double up on pads, bleed through clothing, change protection overnight multiple times, or pass blood clots larger than a coin, consult a gynecologist.',
      'Severe or Disabling Pain: Excruciating cramps that cause fainting, dizziness, or vomiting are not normal and can be signs of pelvic conditions that have medical treatments.',
      'Irregularity and Post-Menopausal Bleeding: If your period disappears for more than 90 days (and you are not pregnant), or if you bleed at all after reaching menopause, make an appointment without delay.'
    ],
    whenToSeeDoctor: 'Always trust your intuition. If something feels fundamentally off with your body, consult a licensed healthcare professional or community health center.',
    suggestedQuestion: 'What size blood clot during a period is considered abnormal?',
    relatedArticleIds: ['period-pain-normal', 'what-is-a-period', 'menopause-hot-flushes'],
    reviewedDate: 'Evidence-informed • Clinical Guidance'
  }
];

