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
    title: 'What is a Period? Simple Science of Menstruation',
    subtitle: 'How your body prepares every month in a natural and healthy way',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '🩸',
    summary: 'A monthly period (mahwari) is normal. The body sheds the soft inner lining of the womb when you are not pregnant. It is a sign of health, not sickness or impurity.',
    keyTakeaways: [
      'Menstruation is a normal, healthy body process. It is not an illness.',
      'Period flow is a natural mix of blood, womb lining tissue, and body fluid.',
      'A normal cycle lasts 21 to 35 days (often up to 45 days in early puberty).',
      'Most people lose only about 2 to 4 small spoons of fluid (30 to 60 ml) during a full period.'
    ],
    content: [
      'Every month, natural body messengers called hormones work together. Your womb (uterus) builds a soft inner lining. This lining prepares for a possible pregnancy.',
      'Around the middle of your cycle, one ovary releases a tiny egg cell. This step is called ovulation. If the egg does not meet sperm, the lining is not needed.',
      'Your hormone levels drop gently. This tells the womb to let go of the lining. It flows out slowly through the vagina. That is your period (mahwari)!',
      'Many people think they lose a lot of blood. On a pad or cloth, it can look like a lot. But the total fluid lost across all days is usually only 2 to 4 small spoons (30 to 60 ml).'
    ],
    mythVsFact: [
      {
        myth: 'Period blood is "dirty" or toxic blood leaving the body.',
        fact: 'Period blood is clean and natural. It comes from the soft lining built to nourish a baby. It is not impure or poisonous.'
      },
      {
        myth: 'You cannot bathe or wash your hair while on your period.',
        fact: 'Warm water baths are safe, soothing, and healthy. Washing keeps you clean, eases cramps, and prevents skin rash.'
      },
      {
        myth: 'You must sit alone on the floor or sleep in a separate corner.',
        fact: 'Sitting apart is an old custom, not a health rule. Periods are natural. Rest comfortably wherever you like in your home.'
      }
    ],
    whenToSeeDoctor: 'Visit your primary health centre (PHC) or doctor if you soak through a pad hourly for 2 hours. Also get checked if bleeding lasts over 7 days.',
    suggestedQuestion: 'How many days does a normal period usually last?',
    relatedArticleIds: ['first-period-expect', 'cycle-in-4-phases', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Based on WHO & Public Health Guidelines'
  },
  {
    id: 'first-period-expect',
    title: 'What to Expect at Your First Period (Menarche)',
    subtitle: 'Body signs and simple preparation for your first day with zero stress',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['puberty', 'educator'],
    readTime: '3 min read',
    icon: '🌱',
    summary: 'Your first period (called menarche) usually arrives between ages 9 and 15 (Class 6 to 10). Learn what body clues to look for so you feel ready and confident.',
    keyTakeaways: [
      'Most girls get their first period about 1 to 2 years after breast buds begin developing.',
      'Clear or white fluid (discharge) on your underwear is a normal sign that puberty has started.',
      'First periods often look like light brown spotting rather than bright red blood.',
      'Irregular gaps in the first 1 to 2 years are completely normal.'
    ],
    content: [
      'Starting your first period is a natural milestone. Millions of young girls in India experience it every year. Knowing what happens removes all fear.',
      'Body clues: First, you notice small breast buds. Then, soft hair grows under your arms and on your private area. You also notice clear or whitish fluid on your underwear. This is your body cleaning itself naturally.',
      'What it looks like: Many girls expect bright red blood. But on day one, you may only see dark brown spots or pink stains. Slow-moving blood reacts with air and naturally turns brownish. Do not worry.',
      'Stay prepared at school: Keep a small pouch in your school bag. Pack 2 clean pads, spare cotton underwear, and a small paper bag for wrapping. Talk openly with your mother, elder sister (didi), or teacher.'
    ],
    mythVsFact: [
      {
        myth: 'Your first period starts suddenly like a gushing fountain.',
        fact: 'Periods typically begin with gentle, slow drops or brown spots that you notice when you use the toilet.'
      }
    ],
    whenToSeeDoctor: 'See a doctor or ASHA didi if you reach age 15 without a period. Also visit if you have severe belly pain with vomiting.',
    suggestedQuestion: 'What should I put in my first period school kit?',
    relatedArticleIds: ['what-is-a-period', 'first-period-kit-guide', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Pediatric & Adolescent Guidance'
  },
  {
    id: 'cycle-in-4-phases',
    title: 'The Menstrual Cycle in 4 Phases: Your Body’s Seasons',
    subtitle: 'How your hormones, energy, and mood change naturally across the month',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle', 'educator'],
    readTime: '3 min read',
    icon: '🌓',
    summary: 'Your cycle is more than just bleeding days. It has 4 natural hormonal phases. These phases shape your energy, hunger, and daily rhythm.',
    keyTakeaways: [
      'Phase 1: Period Days (Days 1 to 5): Hormones are low. Time for rest and simple warm food.',
      'Phase 2: Follicular Phase (Days 6 to 13): Hormones rise. Energy, focus, and good mood lift.',
      'Phase 3: Egg Release or Ovulation (Days 14 to 16): Peak hormones. High energy and confidence.',
      'Phase 4: Luteal Phase (Days 17 to 28): Progesterone rises. Mood softens, appetite grows, pre-period signs appear.'
    ],
    content: [
      'Think of your cycle as 4 seasons: Winter (Period), Spring (Egg growth), Summer (Egg release), and Autumn (Pre-period).',
      'Phase 1 - Winter (Days 1 to 5): Bleeding starts on Day 1. Body hormones are low. You may feel like resting, drinking warm water, and eating simple comfort foods like khichdi.',
      'Phase 2 - Spring (Days 6 to 13): An egg grows in your ovary. The hormone estrogen rises. You feel fresh energy, sharper memory, and a positive mood.',
      'Phase 3 - Summer (Days 14 to 16): The ovary releases the mature egg. This is ovulation. Energy, social confidence, and skin glow are at their peak.',
      'Phase 4 - Autumn (Days 17 to 28): The hormone progesterone rises to warm the womb. Your body burns slightly more energy. Craving a little more food (like a bowl of roasted chana or sweet potato) is completely normal.'
    ],
    mythVsFact: [
      {
        myth: 'Every woman must have a strict 28-day cycle to be healthy.',
        fact: 'Cycles from 21 to 35 days are normal in healthy adults. Minor delays from travel, exams, or stress are very common.'
      }
    ],
    suggestedQuestion: 'How does progesterone affect mood before my period?',
    relatedArticleIds: ['food-movement-cramps', 'understanding-pms', 'period-pain-normal'],
    reviewedDate: 'Evidence-informed • Endocrine Guidance'
  },
  {
    id: 'period-myths-busted',
    title: 'Period Myths Busted: Science vs. Old Beliefs',
    subtitle: 'The truth about food, touching pickles, temples, exercise, and bathing',
    category: 'myths',
    categoryLabel: 'Myths & Awareness',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '💡',
    summary: 'Many cultural taboos exist around periods. Let us separate old beliefs from science with kindness and respect.',
    keyTakeaways: [
      'You can safely bathe, wash your hair, study, and exercise during your period.',
      'Period blood does not spoil pickles (achaar), plants, or kitchen food.',
      'Religious practices are a personal family choice. Medically, a period is not dirty or impure.',
      'Tampons and menstrual cups cannot get lost inside your body.'
    ],
    content: [
      'In many families, girls are told not to touch pickles, not to enter the kitchen or temple, and not to wash their hair. Science tells a clear and reassuring story.',
      'Myth: Touching pickles (achaar) or plants (like tulsi) will spoil them. Fact: Period fluid stays inside your pad or cloth. It cannot touch or spoil food. Pickles spoil only from wet hands, fungus, or improper oil, never from a woman having her period.',
      'Myth: Entering temples or prayer rooms. Fact: Many families follow religious customs as a personal tradition. But from a health perspective, periods are a clean, natural body process. You are never impure or dirty.',
      'Myth: You must avoid sour food (khatta) like lemon or curd. Fact: Sour foods like lemon (nimbu) or amla are packed with vitamin C. Vitamin C actually helps your body absorb iron from green vegetables and dal.',
      'Myth: Exercising or walking hurts your womb. Fact: Light walking and gentle yoga release natural body chemicals that reduce cramps and lift your mood.'
    ],
    mythVsFact: [
      {
        myth: 'Bathing or washing hair during periods harms blood flow.',
        fact: 'Warm water relaxes tight belly muscles and keeps you clean. It does not stop or harm blood flow.'
      },
      {
        myth: 'Using a tampon or menstrual cup destroys virginity.',
        fact: 'Virginity is a cultural idea, not a medical condition. The hymen is a soft, stretchy skin band with natural openings. It stretches safely.'
      }
    ],
    suggestedQuestion: 'Can you go swimming when on your period?',
    relatedArticleIds: ['hygiene-dos-donts', 'what-is-a-period', 'first-period-expect'],
    reviewedDate: 'Evidence-informed • Public Health Standards'
  },
  {
    id: 'period-pain-normal',
    title: 'Is Period Pain Normal? Mild Cramps vs. Medical Warning Signs',
    subtitle: 'Learn what normal stomach ache (pet dard) feels like and when to see a doctor',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '3 min read',
    icon: '🩺',
    summary: 'Mild cramps that ease with warmth or basic rest are common. Severe pain that stops you from going to school or work is NOT normal.',
    keyTakeaways: [
      'Mild cramps happen when natural body chemicals (prostaglandins) make the womb squeeze.',
      'Common period pain (primary dysmenorrhea) is normal and has no underlying disease.',
      'Severe pain with vomiting, fainting, or no relief from medicine needs a doctor’s check.',
      'Conditions like endometriosis or cysts can and should be treated by a doctor.'
    ],
    content: [
      'To shed its lining, the womb makes natural chemicals called prostaglandins. These make the womb squeeze gently. You feel this as a dull ache in your lower belly (pet dard) or lower back.',
      'What is normal: A mild ache on Day 1 or Day 2 is common. It improves with a hot water bag (garam paani ki thaili), warm ajwain water, or simple rest.',
      'What is NOT normal: Pain so severe that you miss school, college, or work. Pain that causes vomiting or fainting. Pain that does not ease after basic medicine.',
      'Do not suffer in silence: Never accept that unbearable pain is "just a woman’s fate." Visit an ASHA didi, primary health centre (PHC), or gynaecologist.'
    ],
    mythVsFact: [
      {
        myth: 'Women must suffer through severe period cramps silently.',
        fact: 'Help exists. Warmth, home remedies, doctor-guided medicines, and medical care can relieve pain safely.'
      }
    ],
    whenToSeeDoctor: 'Seek medical care if pain worsens year after year, starts days before bleeding, or if basic pain relievers like paracetamol or ibuprofen offer zero relief.',
    suggestedQuestion: 'How can I tell the difference between normal cramps and endometriosis?',
    relatedArticleIds: ['food-movement-cramps', 'warning-signs-doctor', 'cycle-in-4-phases'],
    reviewedDate: 'Evidence-informed • Clinical Guidance'
  },
  {
    id: 'first-period-kit-guide',
    title: 'Pads, Cloth, Cups & Tampons: Choosing What Fits You',
    subtitle: 'Honest guide on cost, comfort, and how to use each period product safely',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['puberty', 'educator'],
    readTime: '4 min read',
    icon: '🌸',
    summary: 'Learn about disposable pads, reusable cloth, menstrual cups, and tampons. Compare availability, budget, and hygiene.',
    keyTakeaways: [
      'Sanitary pads are the most common, easy to find, and beginner-friendly.',
      'Clean reusable cloth is safe if washed with soap and dried fully in direct sunlight.',
      'Menstrual cups cost more upfront (around ₹250 to ₹500) but last for years.',
      'Tampons allow swimming and sports; change them every 4 to 8 hours.'
    ],
    content: [
      'There is no single best product. Choose what feels comfortable for your body, daily routine, and family budget.',
      'Sanitary Pads: The most widely used option in India. They stick onto your underwear and catch flow. Change every 4 to 6 hours to prevent skin rashes.',
      'Safe Reusable Cloth: If using cloth, use clean, soft cotton cloth. Wash thoroughly with soap and water. Dry completely in direct sunlight (sunlight naturally kills germs). Store in a clean, dry place. Replace when rough. // TODO(verify: Indian Ministry of Health & Family Welfare / UNICEF menstrual hygiene guidelines on cloth sanitation)',
      'Menstrual Cups: Made of soft medical-grade silicone. You fold and insert the cup to collect fluid. Empty every 8 to 12 hours. Boil in water before each cycle.',
      'Tampons: Small cotton plugs inserted inside to soak fluid. Useful for swimming or sports. Never keep one inside for more than 8 hours.',
      'Safe disposal: Wrap used pads or tampons in paper or a pad wrapper. Put them in a dustbin. Never throw them in the toilet or flush them down the drain.'
    ],
    mythVsFact: [
      {
        myth: 'Young girls can only use pads until marriage.',
        fact: 'Anyone can safely choose pads, cloth, cups, or tampons as soon as they feel ready and comfortable.'
      }
    ],
    suggestedQuestion: 'How often should I change my sanitary pad?',
    relatedArticleIds: ['hygiene-dos-donts', 'what-is-a-period', 'first-period-expect'],
    reviewedDate: 'Evidence-informed • Menstrual Hygiene Guidance'
  },
  {
    id: 'hygiene-dos-donts',
    title: 'Intimate Hygiene: Simple Rules to Stay Fresh and Healthy',
    subtitle: 'Safe washing, toilet habits, and protecting your body’s natural defense',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '3 min read',
    icon: '🫧',
    summary: 'The inside of the vagina cleans itself naturally. Learn how to clean the outside (vulva) with simple clean water.',
    keyTakeaways: [
      'The inside of the vagina is self-cleaning. Never wash inside (no douching).',
      'Wash only the outside area (vulva) using plain clean water.',
      'Always wipe or wash from front to back after using the toilet.',
      'Change pads every 4 to 6 hours to prevent infection and bad smell.'
    ],
    content: [
      'Know your body: The "vulva" is the outside skin you can see. The "vagina" is the internal passage.',
      'Self-cleaning power: Healthy bacteria inside your vagina keep it safe from infection. Perfumed soaps, powders, and chemical washes destroy these good bacteria and cause itching or white discharge.',
      'Do: Wash the outside area with clean warm water during your daily bath. Wear clean, dry cotton underwear. Wash your hands with soap before and after changing a pad.',
      'Don\'t: Never use scented sprays, strong detergents, or neem water washes inside the vagina. Never keep a wet pad or damp cloth on for long hours.'
    ],
    mythVsFact: [
      {
        myth: 'Your intimate area must smell like flowers or perfume.',
        fact: 'A healthy private area has a natural, mild scent. Artificial perfumes cause burning, rash, and infection.'
      }
    ],
    whenToSeeDoctor: 'Visit a doctor or PHC if you notice curdy white discharge, greenish-yellow discharge, foul smell, or intense itching.',
    suggestedQuestion: 'Why should I never use perfumed soap inside my private area?',
    relatedArticleIds: ['first-period-kit-guide', 'period-myths-busted', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Intimate Care Guidelines'
  },
  {
    id: 'food-movement-cramps',
    title: 'Desi Foods, Warm Drinks & Movement to Ease Cramps',
    subtitle: 'Affordable home remedies and gentle stretches that calm period pain',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '3 min read',
    icon: '🫖',
    summary: 'Simple Indian kitchen staples like ginger, ajwain, jaggery (gud), and light stretches ease cramps naturally.',
    keyTakeaways: [
      'Warmth works: A hot water bag (garam paani ki thaili) over your lower belly relaxes tight womb muscles.',
      'Iron foods: Eat palak, methi, chana, rajma, sprouts, and jaggery with a squeeze of nimbu.',
      'Warm sips: Ginger (adrak) tea, saunf water, or ajwain water soothe tummy spasms.',
      'Light movement: 15 minutes of slow walking or yoga (like Balasana) releases natural pain relievers.'
    ],
    content: [
      'Home remedies can comfort your body and lessen cramps. They do not replace a doctor if pain is severe, but they help everyday cramps.',
      'Warm fluids: Drink warm water, nimbu pani, coconut water (nariyal pani), or chaas. Staying hydrated reduces bloating.',
      'Kitchen remedies: Sip warm ginger (adrak) tea or ajwain water. Ajwain and ginger help calm painful womb spasms. A cup of warm haldi doodh at bedtime helps sleep.',
      'Iron and blood building: During periods, your body loses iron. Eat green leafy vegetables (palak, methi), boiled chana, rajma, and a small piece of jaggery (gud). Squeeze fresh nimbu on your dal or salad to help iron absorb.',
      'Gentle movement: Avoid heavy gym workouts if feeling tired. Try gentle walking or relaxing yoga poses like Child\'s Pose (Balasana).'
    ],
    suggestedQuestion: 'Which foods reduce period bloating and cramps?',
    relatedArticleIds: ['cycle-in-4-phases', 'period-pain-normal', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Wellness Guidance'
  },
  {
    id: 'understanding-pms',
    title: 'Understanding PMS: Mood Swings, Cravings & Tender Breasts',
    subtitle: 'Why emotional waves happen before your period and how to handle them',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle'],
    readTime: '3 min read',
    icon: '💭',
    summary: 'Premenstrual syndrome (PMS) happens to many women in the week before bleeding. Learn why it happens and how to feel calmer.',
    keyTakeaways: [
      'PMS happens in the week before bleeding as hormones dip.',
      'Common signs include feeling irritated, tired, tearful, or having sweet cravings.',
      'Severe mood shifts that stop you from functioning may be PMDD and need a doctor’s help.',
      'Rest, healthy meals, and warm drinks help you ride emotional waves.'
    ],
    content: [
      'About a week before bleeding, body hormones drop. This change affects brain chemicals like serotonin, which manages happiness and calm.',
      'Common signs of PMS: Mild anger, crying easily, tender breasts, heavy tummy, and cravings for sweets. These signs usually disappear 1 to 2 days after bleeding starts.',
      'What is PMDD? In a small number of women, pre-period depression or anger is very severe. This condition is called PMDD. It is not your fault, and a doctor can provide medicine and therapy.',
      'Simple care: Drink warm water, eat regular meals with dal and sabzi, reduce excess salty snacks, and sleep for 8 hours.'
    ],
    whenToSeeDoctor: 'If pre-period sadness makes you feel hopeless, unable to manage daily life, or brings dark thoughts, please talk to a doctor or counselor promptly.',
    suggestedQuestion: 'What is the difference between mild PMS and PMDD?',
    relatedArticleIds: ['cycle-in-4-phases', 'food-movement-cramps', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Premenstrual Care Guidance'
  },
  {
    id: 'perimenopause-early-signs',
    title: 'Perimenopause: Early Signs in Your 40s',
    subtitle: 'Understand irregular cycles, hot flushes, and body changes with calm confidence',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['menopause'],
    readTime: '3 min read',
    icon: '🍂',
    summary: 'Perimenopause is the natural phase leading to menopause, usually starting in your 40s as hormones change.',
    keyTakeaways: [
      'Perimenopause can begin 4 to 8 years before periods stop permanently.',
      'The main sign is irregular cycles (periods come early, late, lighter, or heavier).',
      'Other signs: night warmth, light sleep, forgetfulness, and mood shifts.',
      'Pregnancy is still possible until 12 full months without any period.'
    ],
    content: [
      'Just as puberty is the start of periods, perimenopause is the natural shift towards their end. It is a normal life chapter.',
      'Changing hormones: In your 40s, hormones rise and fall irregularly. One period may come after 21 days, and the next after 40 days.',
      'What you may notice: Sudden warm feeling on the chest and face (hot flushes), broken sleep, mild forgetfulness, and joint stiffness.',
      'Care: Eat calcium-rich foods like milk, curd, paneer, ragi, and til (sesame). Take a daily morning walk in sunlight for natural Vitamin D.'
    ],
    mythVsFact: [
      {
        myth: 'Perimenopause means a woman has suddenly become old.',
        fact: 'Perimenopause begins in healthy, active women in their 40s. It is simply a natural body transition into a wiser stage of life.'
      }
    ],
    suggestedQuestion: 'At what age does perimenopause usually begin?',
    relatedArticleIds: ['menopause-hot-flushes', 'warning-signs-doctor', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Menopause Health Guidance'
  },
  {
    id: 'menopause-hot-flushes',
    title: 'Menopause: Managing Hot Flushes, Sleep & Bone Health',
    subtitle: 'Simple ways to stay cool, sleep better, and keep bones strong in your 40s and 50s',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['menopause'],
    readTime: '3 min read',
    icon: '🍵',
    summary: 'Menopause happens when you have had no periods for 12 months in a row. Learn practical relief for heat waves and bone health.',
    keyTakeaways: [
      'Menopause is reached after 12 full months without any period (usually around age 45 to 52).',
      'Hot flushes happen when lower estrogen tricks the brain’s temperature center.',
      'Wear loose cotton clothes, keep cold water near your bed, and avoid hot spicy dinners.',
      'Daily walking, sunlight, and calcium foods (milk, curd, ragi, til) protect bone strength.'
    ],
    content: [
      'In India, menopause commonly occurs between ages 45 and 52. When you reach 12 full months without a period, you have reached menopause. // TODO(verify: Indian Menopause Society average age range of menopause)',
      'Why hot flushes happen: When estrogen drops, the brain thinks the body is overheating. It suddenly widens blood vessels in the neck and face, causing a heat wave and sweat.',
      'Cooling tips: Wear loose, airy cotton clothes. Keep a bottle of water near your bed. Sip water when you feel warmth coming. Avoid very spicy oily curries before sleeping.',
      'Bone health: Lower estrogen makes bones thinner. Eat milk, curd, paneer, ragi, sesame seeds (til), and green vegetables. Walk for 30 minutes in morning sunlight.'
    ],
    whenToSeeDoctor: 'CRITICAL: Any vaginal bleeding or spotting that happens after you have gone 12 months without a period is NOT normal. See a gynaecologist right away.',
    suggestedQuestion: 'What triggers hot flushes during menopause?',
    relatedArticleIds: ['perimenopause-early-signs', 'warning-signs-doctor', 'hygiene-dos-donts'],
    reviewedDate: 'Evidence-informed • Midlife Wellness Guidance'
  },
  {
    id: 'talking-to-daughter-students',
    title: 'How to Talk to Your Daughter or Students About Periods',
    subtitle: 'Kind, open words for parents, teachers, and didis to remove fear and shame',
    category: 'myths',
    categoryLabel: 'Myths & Awareness',
    targetStages: ['educator'],
    readTime: '3 min read',
    icon: '🤝',
    summary: 'A gentle, shame-free guide for mothers, teachers, and mentors to make period talks normal and empowering.',
    keyTakeaways: [
      'Start early (Class 4 to 6) with short, simple talks instead of one big scary conversation.',
      'Teach boys too so that girls are never teased or shamed in school.',
      'Use plain, correct words like womb, period, and sanitary pad.',
      'Help them pack a small pouch for their school bag.'
    ],
    content: [
      'Children learn feelings before words. If you talk about periods as a normal body function, children grow up confident and free of shame.',
      'Start early (Ages 8 to 10, Class 4 to 5): Explain simply that bodies grow and get ready for the future. Every month, the womb cleans itself and refreshes its lining.',
      'Teach boys as well: In schools, teasing happens when periods are treated like dirty secrets. Teaching boys creates respectful classrooms where girls do not feel embarrassed.',
      'Action step: Give your daughter or student a small pouch. Put 2 pads, clean spare underwear, and a disposal wrapper inside. Show her how the pad sticks to the cloth.'
    ],
    mythVsFact: [
      {
        myth: 'Talking about periods to young girls will scare them.',
        fact: 'Curious children feel comforted by calm, simple facts. Silence or shame creates fear.'
      }
    ],
    suggestedQuestion: 'How do I start a conversation about puberty with an 10-year-old?',
    relatedArticleIds: ['first-period-expect', 'what-is-a-period', 'period-myths-busted'],
    reviewedDate: 'Evidence-informed • Comprehensive Health Guidance'
  },
  {
    id: 'warning-signs-doctor',
    title: 'Period Red Flags: When to See a Doctor Without Delay',
    subtitle: 'Clear checklist of heavy bleeding, severe pain, and symptoms that need a clinic visit',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '3 min read',
    icon: '🚨',
    summary: 'Knowing when to visit a clinic or gynaecologist is empowering. Here is a calm checklist of warning signs.',
    keyTakeaways: [
      'Soaking 1 or more pads completely every hour for 2 hours in a row.',
      'Passing blood clots bigger than a ₹5 coin or a lemon.',
      'Bleeding that continues for more than 7 days without stopping.',
      'Any bleeding after menopause (12 months with no period).',
      'Periods stopping for 3 months in a row (if not pregnant).'
    ],
    content: [
      'Listening to your body is important. Most periods are normal, but some signs need medical checkup at a primary health centre (PHC) or hospital.',
      'Very heavy bleeding: It is a warning sign if you soak clothes or pass blood clots bigger than a ₹5 coin. See a doctor promptly.',
      'Severe pain: Extreme cramps that cause fainting, dizziness, or vomiting are not normal. Effective medical treatments exist.',
      'Bleeding after menopause: Bleeding even a few drops after 12 months without a period needs an immediate checkup by a gynaecologist.'
    ],
    whenToSeeDoctor: 'Visit your nearest government hospital, primary health centre (PHC), or trusted gynaecologist. You can also talk to your local ASHA didi or ANM for guidance. In emergencies, call 112. // TODO(verify: Indian National Emergency Number 112 and Tele-MANAS helpline)',
    suggestedQuestion: 'What size blood clot during a period is considered abnormal?',
    relatedArticleIds: ['period-pain-normal', 'what-is-a-period', 'menopause-hot-flushes'],
    reviewedDate: 'Evidence-informed • Clinical Guidance'
  },
  {
    id: 'consent-and-boundaries',
    title: 'Consent & Personal Boundaries: Across Every Life Stage',
    subtitle: 'Understanding bodily autonomy, clear communication, and mutual respect',
    category: 'basics',
    categoryLabel: 'Life & Relationships',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '3 min read',
    icon: '🤝',
    summary: 'Your body belongs to you. Learn how clear consent, healthy boundaries, and mutual respect work from teenage years to adulthood and midlife.',
    keyTakeaways: [
      'Your body belongs completely to you. You always have the right to say "No".',
      'Consent must be freely given, informed, and can be stopped at any moment.',
      'Silence, hesitation, or pressure is never consent.',
      'Both partners must openly agree on contraception before any intimate contact.',
      'Intimacy in midlife should be comfortable and free from pain or guilt.'
    ],
    content: [
      'Consent means giving clear permission. It means both people freely agree to what is happening. It applies to hugs, relationships, and medical touch.',
      'For young people in puberty, bodily autonomy is fundamental. No friend, relative, or senior has the right to touch your body without your permission. You never have to be polite when defending your space. A clear "No, please step back" is always right.',
      'Digital boundaries matter too. Never feel forced to share private photos or messages. Once sent, control is gone. True friends and caring partners always respect your boundaries.',
      'In adult relationships, consent must be ongoing and mutual. It uses the FRIES framework: Freely given, Reversible anytime, Informed, Enthusiastic, and Specific. You can say yes to holding hands and no to intimacy. You can pause at any second.',
      'Reproductive consent is essential. Both partners must agree on birth control together. Never lie about contraceptive pills or remove a condom secretly.',
      'In perimenopause and menopause, body changes like vaginal dryness or fatigue can happen. Open communication with your partner is vital. Physical comfort is your absolute right. Never accept painful intimacy out of pressure or guilt.'
    ],
    mythVsFact: [
      {
        myth: 'If you agreed to intimacy once, you have agreed forever.',
        fact: 'Consent is ongoing. You have the full right to change your mind or say "no" at any time, even in marriage or long relationships.'
      },
      {
        myth: 'Silence or not saying "no" means you said yes.',
        fact: 'Consent requires an active, willing "yes". If someone is quiet, scared, or pressured, consent does not exist.'
      }
    ],
    whenToSeeDoctor: 'If you experience unwanted touch, coercion, or harassment, reach out to a trusted elder, school counselor, or ASHA didi. You can also call the National Women Helpline at 181 or 112 for confidential support. // TODO(verify: Women Helpline 181 and POCSO support in India)',
    suggestedQuestion: 'How can I set clear personal boundaries without feeling guilty?',
    relatedArticleIds: ['talking-to-daughter-students', 'contraception-and-pills', 'pregnancy-and-ovulation'],
    reviewedDate: 'Evidence-informed • Health & Ethics Guidance'
  },
  {
    id: 'contraception-and-pills',
    title: 'Contraception & Birth Control: Pills, Protection & Options',
    subtitle: 'Evidence-based guidance on daily pills, emergency contraception, and barrier methods',
    category: 'medical',
    categoryLabel: 'Reproductive Care',
    targetStages: ['cycle', 'educator'],
    readTime: '4 min read',
    icon: '💊',
    summary: 'A clear, stigma-free guide on how contraceptive pills work, emergency contraception backup, condoms, and finding the right method for your health.',
    keyTakeaways: [
      'Daily contraceptive pills prevent ovulation and thicken cervical fluid.',
      'Pills must be taken at the same time every single day to be effective.',
      'Emergency contraceptive pills (E-pills) are a backup within 72 hours, not for regular use.',
      'Condoms are the only contraceptive method that also protects against STIs and HIV.',
      'Contraception is still necessary during perimenopause until 12 full months without a period pass.'
    ],
    content: [
      'Contraception lets people plan if and when they want children. Choosing a method depends on your health, lifestyle, and comfort.',
      'Daily oral contraceptive pills (OCPs) use hormones to stop ovaries from releasing an egg. They also thicken cervical mucus so sperm cannot enter the womb. Take 1 pill every day at the exact same hour. In India, non-hormonal weekly pills like Chhaya are also available at government health centres. // TODO(verify: Indian National Family Planning Programme guidelines on Chhaya)',
      'Emergency contraceptive pills (E-pills) are for emergencies only. Take 1 pill as soon as possible after unprotected intimacy, ideally within 24 hours, and within 72 hours maximum. It delays ovulation temporarily. It does not cause an abortion and cannot end an existing pregnancy.',
      'Condoms provide dual protection. They prevent unintended pregnancy and protect against sexually transmitted infections (STIs). They are hormone-free, easy to use, and available for free at government PHCs and ASHA centres, or for ₹10 to ₹50 at chemists.',
      'Long-acting options like the Intrauterine Device (Copper-T / IUCD) are placed by a doctor or trained nurse in the womb. They provide safe, reversible protection for 5 to 10 years without daily attention.',
      'During perimenopause, periods become irregular, but ovulation can still happen unpredictably. Continue using birth control until you have completed 12 continuous months with zero period bleeding.'
    ],
    mythVsFact: [
      {
        myth: 'Birth control pills cause permanent infertility after you stop taking them.',
        fact: 'Pills do not cause permanent infertility. Your natural ovulation and fertility return shortly after you stop taking them.'
      },
      {
        myth: 'Emergency contraceptive pills cause abortion.',
        fact: 'Emergency pills prevent or delay ovulation before pregnancy begins. They cannot harm or terminate an already implanted pregnancy.'
      }
    ],
    whenToSeeDoctor: 'Always consult a doctor, gynaecologist, or your local Primary Health Centre (PHC) before starting hormonal pills. Seek immediate care if you experience severe leg swelling, chest pain, or sudden severe headaches on hormonal pills.',
    suggestedQuestion: 'What should I do if I forget to take my daily contraceptive pill?',
    relatedArticleIds: ['consent-and-boundaries', 'pregnancy-and-ovulation', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Reproductive Health Guidance'
  },
  {
    id: 'pregnancy-and-ovulation',
    title: 'Understanding Pregnancy: Ovulation, The Fertile Window & Signs',
    subtitle: 'How conception happens biologically, tracking fertile days, and early clues',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle', 'educator'],
    readTime: '3 min read',
    icon: '🤰',
    summary: 'Learn the clear science of conception, the 6-day fertile window, early signs of pregnancy, and when to take a home test.',
    keyTakeaways: [
      'Conception happens when a sperm fertilises a mature egg cell during ovulation.',
      'An egg lives for only 12 to 24 hours, but sperm can live in the body for up to 5 days.',
      'The fertile window is the 5 days before ovulation plus ovulation day itself.',
      'A missed period is usually the earliest and clearest sign of pregnancy.',
      'Women in perimenopause can still become pregnant until full menopause is reached.'
    ],
    content: [
      'Understanding how pregnancy occurs gives you clarity and body confidence. It all starts with the monthly menstrual cycle.',
      'Roughly midway through your cycle, an ovary releases a mature egg cell. This is ovulation. The egg travels through the fallopian tube and lives for only 12 to 24 hours.',
      'Sperm can survive inside the female body for up to 5 days. Because of this, pregnancy can happen if intimacy occurs during the 5 days before ovulation or on ovulation day itself. This is called the fertile window.',
      'If sperm fertilises the egg, it moves to the womb and implants in the soft cushion lining. If no sperm meets the egg, hormone levels drop, and the lining sheds as your monthly period.',
      'Earliest signs of pregnancy include a missed period, tender or swollen breasts, morning nausea, unusual tiredness, and frequent urination.',
      'Testing: Home urine pregnancy test kits are available at every medical shop for ₹40 to ₹60. For accurate results, test with your first morning urine on or after the first day of your missed period.',
      'Perimenopause note: Even if periods skip 2 or 3 months in your late 40s, ovulation can still happen. Protect yourself with contraception until 12 full months pass with no period at all.'
    ],
    mythVsFact: [
      {
        myth: 'You can get pregnant from kissing, hugging, or sharing public toilet seats.',
        fact: 'Completely impossible. Pregnancy requires viable sperm entering the vaginal canal during the fertile window.'
      },
      {
        myth: 'It is impossible to get pregnant right after your period ends.',
        fact: 'In people with short cycles (e.g. 21 days), ovulation happens very early. Surviving sperm can meet an egg released shortly after bleeding.'
      }
    ],
    whenToSeeDoctor: 'Is your period more than 7 days late? If a home test is positive, visit a doctor or PHC for prenatal guidance and folic acid supplements.',
    suggestedQuestion: 'How many days after a missed period should I take a home pregnancy test?',
    relatedArticleIds: ['cycle-in-4-phases', 'contraception-and-pills', 'consent-and-boundaries'],
    reviewedDate: 'Evidence-informed • Obstetrics & Biology Guidance'
  }
];
