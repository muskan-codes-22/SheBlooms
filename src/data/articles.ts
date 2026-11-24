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
    readTime: '4 min read',
    icon: '🩸',
    summary: 'A monthly period (mahwari) is normal. The body sheds the soft inner lining of the womb when you are not pregnant. It is a sign of health, not sickness or impurity.',
    keyTakeaways: [
      'Menstruation is a normal, healthy body process. It is not an illness.',
      'Period flow is a natural mix of blood, womb lining tissue, and body fluid.',
      'How to count: Day 1 of bleeding is Day 1 of your cycle. A normal cycle lasts 21 to 35 days (often up to 45 days in early puberty).',
      'Most people lose only about 2 to 4 small spoons of fluid (30 to 60 ml) during a full period.',
      'Clear, milky, or stretchy discharge between periods is a normal sign that your body cleans itself.'
    ],
    content: [
      'Every month, natural body messengers called hormones work together. Your womb (uterus) builds a soft inner lining. This lining prepares for a possible pregnancy.',
      'Around the middle of your cycle, one ovary releases a tiny egg cell. This step is called ovulation. If the egg does not meet sperm, the soft lining is not needed.',
      'Your hormone levels drop gently. This tells the womb to let go of the lining. It flows out slowly through the vagina. That is your period (mahwari)! Total fluid lost across all days is only about 2 to 4 small spoons (30 to 60 ml).',
      'How to count and track your cycle: Mark the very first day you bleed on a calendar or diary. That is Day 1. Count each day until your NEXT period begins bleeding. That total number of days is your cycle length. For adult women, 21 to 35 days is normal. For young girls in their first few years, 21 to 45 days is completely regular and healthy.',
      'Cycle Seasons (Simple Rhythm):\n• Winter (Days 1–5): Your period bleeding days. Energy is low; your body rests.\n• Spring (Days 6–13): Estrogen rises; an egg grows. Energy and focus lift.\n• Summer (Days 14–16): Egg releases (ovulation). Confidence and natural glow peak.\n• Autumn (Days 17–28): Progesterone warms the womb. Mild hunger or mood shifts can appear as pre-period signs.',
      'Vaginal discharge through the month: Between your periods, noticing fluid on your underwear is completely normal. Right after your period, you feel dry. Mid-cycle near egg release, discharge becomes clear, slippery, and stretchy like raw egg white. In the second half, it turns thicker, white, or creamy. As long as it does not itch or smell bad, it is healthy.',
      'Mini Glossary:\n• Cycle: The total days from Day 1 of one period to Day 1 of the next.\n• Ovulation: The monthly release of a tiny egg cell from your ovary.\n• Flow: The fluid shed by the womb during your period.\n• Spotting: Very light pink or brown drops that do not soak a pad.\n• Clots: Small, jelly-like dark red lumps of lining tissue (normal if smaller than a 1-rupee coin).'
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
    whenToSeeDoctor: 'Visit your primary health centre (PHC) or doctor if you soak through a pad hourly for 2 hours in a row. Also get checked if bleeding lasts over 7 days, or if you pass blood clots larger than a lemon.',
    suggestedQuestion: 'How many days does a normal period usually last?',
    relatedArticleIds: ['first-period-expect', 'cycle-in-4-phases', 'period-myths-busted', 'teen-irregular-cycles'],
    reviewedDate: 'Evidence-informed • Based on WHO & Public Health Guidelines'
  },
  {
    id: 'first-period-expect',
    title: 'What to Expect at Your First Period (Menarche)',
    subtitle: 'Body signs and simple preparation for your first day with zero stress',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['puberty', 'educator'],
    readTime: '4 min read',
    icon: '🌱',
    summary: 'Your first period (called menarche) usually arrives between ages 9 and 15 (Class 6 to 10). Learn what body clues to look for so you feel ready and confident.',
    keyTakeaways: [
      'Puberty brings natural growth: breast buds, soft hair, growth spurts, skin changes, and mood shifts.',
      'Most girls get their first period about 1 to 2 years after breast buds begin developing.',
      'First periods often look like light brown spotting or pink stains rather than bright red blood.',
      'Cycles during the first 1 to 2 years are naturally irregular because your body is still learning.',
      'Keeping a small pouch in your school bag ensures you are always calm and ready.'
    ],
    content: [
      'Starting your first period is a natural milestone. Millions of young girls in India experience it every year. Knowing what happens removes all fear.',
      'Puberty Body Changes (What to Expect):\n• Ages 9 to 12: You notice small, tender lumps under your nipples called breast buds. Soft hair begins growing on your private area and underarms. You may grow taller quickly.\n• Ages 13 to 16: Hips widen gently, skin may become slightly oilier with mild pimples (acne), and body odor develops. You also notice clear or whitish fluid on your underwear. This is normal puberty.',
      'What Day 1 looks like: Many girls expect bright red blood rushing out. But on your first day, you usually only see dark brown spots or light pink stains on your underwear. Slow-moving blood reacts with air and naturally turns brownish. You may also feel a mild dull ache in your lower belly.',
      'Why your first 1 to 2 years are irregular: In early puberty, the communication between your brain and your ovaries is still maturing. It is completely normal to have your first period, and then skip 2 or 3 months before the next one comes. Your body is practicing.',
      'Your School Bag Emergency Kit: Keep a small pouch in your backpack with: 2 sanitary pads, 1 clean spare cotton panty, a small pack of pocket tissues, and a newspaper or paper bag for clean wrapping.',
      'What if it starts at school? Take a deep breath. Excuse yourself to the washroom. Place a pad or layer clean toilet paper on your underwear. If you have no pad, ask a friend, female teacher, or visit the school medical room. Everyone understands.',
      'Words to tell someone: You do not need to feel shy. Try saying: "Mummy, I noticed brown spotting on my underwear today, can you help me?" or "Ma\'am, my period started, could I visit the medical room?"'
    ],
    mythVsFact: [
      {
        myth: 'Your first period starts suddenly like a gushing fountain.',
        fact: 'Periods typically begin with gentle, slow drops or brown spots that you notice when you use the toilet.'
      },
      {
        myth: 'Having an irregular cycle in the first year means something is wrong.',
        fact: 'Irregular gaps of 30 to 60 days are completely normal during the first 2 years as your hormones settle.'
      }
    ],
    whenToSeeDoctor: 'See a doctor or ASHA didi if you reach age 15 without any sign of breast growth or periods. Also visit if you experience severe belly pain with vomiting or fainting.',
    suggestedQuestion: 'What should I put in my first period school kit?',
    relatedArticleIds: ['what-is-a-period', 'first-period-kit-guide', 'period-emergency-at-school', 'talk-to-someone-trust'],
    reviewedDate: 'Evidence-informed • Pediatric & Adolescent Guidance'
  },
  {
    id: 'cycle-in-4-phases',
    title: 'The Menstrual Cycle in 4 Phases: Your Body’s Seasons',
    subtitle: 'How your hormones, energy, and mood change naturally across the month',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle', 'educator'],
    readTime: '4 min read',
    icon: '🌓',
    summary: 'Your cycle is more than just bleeding days. It has 4 natural hormonal phases. These phases shape your energy, hunger, and daily rhythm.',
    keyTakeaways: [
      'Phase 1: Period Days (Days 1 to 5): Hormones are low. Time for rest, gentle warmth, and iron replenishment.',
      'Phase 2: Follicular Phase (Days 6 to 13): Estrogen rises. Energy, creativity, and mental focus lift naturally.',
      'Phase 3: Ovulation (Days 14 to 16): Peak hormones. Clear stretchy discharge signals your fertile window.',
      'Phase 4: Luteal Phase (Days 17 to 28): Progesterone warms the womb. Metabolism increases and pre-period signs appear.',
      'Cycle syncing: Aligning your tasks, workouts, and nutrition to these phases helps you work with your body instead of fighting it.'
    ],
    content: [
      'Think of your menstrual cycle as 4 natural seasons: Winter (Period), Spring (Egg growth), Summer (Ovulation), and Autumn (Pre-period). Each season brings unique superpowers and needs.',
      'Phase 1 - Winter / Menstrual Phase (Days 1 to 5): Bleeding starts on Day 1. Both estrogen and progesterone are at baseline low. Your body is directing energy inward. Focus on resting, drinking warm ajwain or ginger water, and eating iron-rich comforting foods like moong dal khichdi and spinach soup. Gentle walking or light yoga is plenty.',
      'Phase 2 - Spring / Follicular Phase (Days 6 to 13): As bleeding finishes, your brain signals the ovaries to prepare an egg. Estrogen begins its steady rise. You notice a natural surge in physical energy, sharper focus, and an upbeat mood. This is the best time for learning new skills, socializing, and strength workouts.',
      'Phase 3 - Summer / Ovulatory Phase (Days 14 to 16): Estrogen peaks and triggers the release of a mature egg (ovulation). Your skin glows, vocal clarity increases, and social confidence is highest. You will notice your cervical fluid changing: it becomes clear, slippery, and stretchy like raw egg whites. This fertile fluid helps sperm survive.',
      'Phase 4 - Autumn / Luteal Phase (Days 17 to 28): After ovulation, the empty follicle produces progesterone. Progesterone slightly raises body temperature and increases your basal metabolic rate by 100 to 200 calories a day. Craving a little more food—such as roasted chana, nuts, or sweet potato—is biological hunger, not lack of willpower. In the final days, hormones drop, bringing pre-period mood sensitivity.',
      'Cycle Syncing in Daily Life: Once you understand your 4 phases, you can stop feeling guilty about lower energy days. Plan high-stakes presentations, tough workouts, and social events during your Spring and Summer phases. Schedule quiet study, reflection, and restorative rest during your Autumn and Winter phases.'
    ],
    mythVsFact: [
      {
        myth: 'Every woman must have a strict 28-day cycle to be healthy.',
        fact: 'Cycles from 21 to 35 days are normal in healthy adults. Minor delays from travel, exams, or stress are very common.'
      },
      {
        myth: 'You should have the exact same physical stamina every single day of the month.',
        fact: 'Hormone levels shift across 4 phases every month. Natural ebbs and flows in stamina are healthy biology, not laziness.'
      }
    ],
    suggestedQuestion: 'How does progesterone affect mood before my period?',
    relatedArticleIds: ['food-movement-cramps', 'understanding-pms', 'period-pain-normal', 'pcos-pcod-management-guide'],
    reviewedDate: 'Evidence-informed • Endocrine & Cycle Science Guidance'
  },
  {
    id: 'period-myths-busted',
    title: 'Period Myths Busted: Science vs. Old Beliefs',
    subtitle: 'The truth about food, touching pickles, temples, exercise, and bathing',
    category: 'myths',
    categoryLabel: 'Myths & Awareness',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '4 min read',
    icon: '💡',
    summary: 'Many cultural taboos exist around periods. Let us separate old beliefs from science with kindness, medical facts, and shame-free confidence.',
    keyTakeaways: [
      'You can safely bathe, wash your hair, study, dance, and play sports during your period.',
      'Period blood does not spoil pickles (achaar), tulsi plants, or kitchen food.',
      'Bathing in warm water relieves muscle tension and prevents infections—it does not harm flow.',
      'How to respond to teasing: Stay calm, look them in the eye, and speak natural facts.',
      'Your body is carrying out a healthy biological function. There is zero reason for shame.'
    ],
    content: [
      'In many families across India, girls are told not to touch pickles, not to enter the kitchen or temple, not to wash their hair, and not to play outside. Science and public health doctors tell a clear and reassuring story.',
      'Myth: Touching pickles (achaar) or sacred plants (tulsi) will spoil them. Fact: Period fluid stays securely inside your pad or cloth. It cannot jump or touch food. Pickles spoil only from moisture, wet hands, or fungus, never from a menstruating body.',
      'Myth: Entering kitchens or prayer rooms. Fact: Many families observe religious customs as an ancient personal tradition. But from a biological perspective, periods are a clean, natural body process. You are never dirty, impure, or cursed.',
      'Myth: Bathing or washing hair during periods harms flow. Fact: Warm water relaxes tight lower belly muscles and keeps your skin clean. Washing your hair or taking a bath is healthy, soothing, and prevents skin infections.',
      'Myth: You must avoid sour food (khatta) like lemon or curd. Fact: Sour foods like lemon (nimbu) or amla are rich in vitamin C. Vitamin C actually helps your body absorb iron from green vegetables, protecting you from weakness.',
      'How to respond calmly to teasing or shame: If a classmate or relative makes an awkward comment or spots a pad in your bag, do not look down. Take a breath and say calmly: "Periods are a normal, healthy part of every human body. There is nothing to hide." Calm confidence stops teasing instantly.',
      'Embracing a healthy body image: During puberty, your body changes rapidly. Bloating, a tender belly, or mild acne before your period are temporary hormonal shifts. Speak kindly to yourself in the mirror. Your body is doing powerful, beautiful work.'
    ],
    mythVsFact: [
      {
        myth: 'Bathing or washing hair during periods stops blood flow.',
        fact: 'Warm water relaxes tight belly muscles and keeps you clean. It does not stop or harm blood flow.'
      },
      {
        myth: 'Girls should stay seated in one corner and avoid all exercise.',
        fact: 'Light walking, yoga, and gentle movement release endorphins (natural pain-relieving hormones) that soothe cramps.'
      },
      {
        myth: 'Using a tampon or menstrual cup destroys virginity.',
        fact: 'Virginity is a cultural idea, not a medical condition. The hymen is a soft, stretchy skin band with natural openings that stretches safely.'
      }
    ],
    suggestedQuestion: 'How should I respond if someone in my family tells me not to enter the kitchen?',
    relatedArticleIds: ['hygiene-dos-donts', 'what-is-a-period', 'first-period-expect', 'talk-to-someone-trust'],
    reviewedDate: 'Evidence-informed • Public Health Standards'
  },
  {
    id: 'period-pain-normal',
    title: 'Is Period Pain Normal? Mild Cramps vs. Medical Warning Signs',
    subtitle: 'Learn what normal stomach ache (pet dard) feels like and when to see a doctor',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '4 min read',
    icon: '🩺',
    summary: 'Mild cramps that ease with warmth or basic rest are common. Severe pain that stops you from going to school or work is NOT normal.',
    keyTakeaways: [
      'Mild cramps happen when natural body chemicals (prostaglandins) make the womb gently contract.',
      'Common period pain (primary dysmenorrhea) is normal and improves with warmth and hydration.',
      'PMS mood shifts (crying easily, irritability, food cravings) happen 2 to 4 days before bleeding as hormones drop.',
      'Sleep deprivation and exam stress make cramps significantly sharper and harder to bear.',
      'Severe pain causing vomiting, fainting, or missing school needs medical evaluation—never suffer in silence.'
    ],
    content: [
      'To shed its lining, the womb makes natural chemicals called prostaglandins. These make the uterine muscles squeeze gently. You feel this as a dull ache in your lower belly (pet dard) or lower back.',
      'What is normal cramps: A mild ache on Day 1 or Day 2 is very common. It improves with a hot water bag (garam paani ki thaili), warm ajwain water, light stretching, or simple rest.',
      'PMS & Emotional Weather: A few days before your period, your body hormone levels (estrogen and progesterone) dip. You might notice tender breasts, mild headaches, crying over small things, or feeling easily annoyed. This is Pre-Menstrual Syndrome (PMS). It is not "in your head"—it is real hormonal chemistry. Eating small meals and resting helps.',
      'The Pain Triangle: Sleep, Stress & Exercise: Late-night studying and high stress increase inflammatory chemicals that make cramps feel twice as intense. Getting 8 hours of sleep and taking a 20-minute gentle evening walk improves blood circulation and releases natural pain-relieving endorphins.',
      'What is NOT normal: Pain so severe that you cannot stand up, pain that makes you vomit, dizzy spells, or pain that forces you to miss school every single month. Pain that does not ease after basic doctor-prescribed medicine is a red flag.',
      'Do not suffer in silence: Never accept that unbearable pain is "just a woman’s fate." Visit an ASHA didi, primary health centre (PHC), or trusted gynaecologist. Conditions like endometriosis or cysts are treatable.'
    ],
    mythVsFact: [
      {
        myth: 'Women must suffer through severe period cramps silently without medicine.',
        fact: 'Help exists. Warmth, desi home remedies, and doctor-prescribed pain relievers (like mefenamic acid or paracetamol) can relieve pain safely.'
      },
      {
        myth: 'Period pain is all imaginary or exaggerated by young girls.',
        fact: 'Prostaglandin contractions produce real physical pressure inside the uterine muscle comparable to labor contractions.'
      }
    ],
    whenToSeeDoctor: 'Seek medical care if pain worsens year after year, starts days before bleeding, causes vomiting or fainting, or if pain prevents you from attending school despite using a heating pad.',
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
    summary: 'Learn about disposable pads, reusable cloth, menstrual cups, and tampons. Compare availability, budget, safety wear hours, and hygiene.',
    keyTakeaways: [
      'Sanitary pads are beginner-friendly: change every 4 to 6 hours to prevent moisture rashes.',
      'Clean reusable cloth is safe if washed thoroughly with soap and dried completely in direct sunlight.',
      'Tampons and cups are great for sports; change tampons every 4 to 8 hours to avoid Toxic Shock Syndrome (TSS).',
      'Menstrual cups cost more upfront (around ₹250 to ₹500) but last for years when boiled in water before each cycle.',
      'Subsidised oxo-biodegradable pads (₹1 Suvidha pads) are available across India at Jan Aushadhi Kendras.'
    ],
    content: [
      'There is no single best product. Choose what feels comfortable for your body, daily routine, and family budget.',
      'Sanitary Pads: The most widely used option in India. They stick onto your underwear and catch flow. Change every 4 to 6 hours (even on light flow days) to prevent bacterial growth and itching.',
      'Safe Reusable Cotton Cloth: If using cloth, use 100% clean, soft cotton. Wash thoroughly with soap and clean water. Dry completely under direct sunlight (sunlight naturally acts as a powerful UV disinfectant). Never hide damp cloth in dark, humid corners or under other laundry. Replace with fresh cloth when rough.',
      'Menstrual Cups: Made of medical-grade silicone. You fold and insert the cup to collect fluid. Empty every 8 to 12 hours. Boil in hot water for 5 minutes before your period starts and after it finishes. A single cup can last 5 to 10 years.',
      'Tampons & Toxic Shock Syndrome (TSS) Safety: Tampons are small cotton plugs inserted inside to soak fluid. Useful for swimming, dance, or sports. Never keep one inside for more than 8 hours. If you ever develop sudden high fever, vomiting, diarrhea, or a sunburn-like skin rash while wearing a tampon, remove it immediately and seek emergency medical care (Toxic Shock Syndrome).',
      'Affordable & Government Pad Schemes in India: Under the Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP), oxo-biodegradable sanitary napkins called "Suvidha" are available for just ₹1 per pad at Jan Aushadhi Kendras [VERIFY: PMBJP Suvidha ₹1 pad pricing]. Free or subsidised pads are also distributed in government schools through the Rashtriya Kishor Swasthya Karyakram (RKSK) [VERIFY: RKSK Menstrual Hygiene Scheme].',
      'Safe disposal: Wrap used pads or tampons in old newspaper or a paper disposal bag. Put them in a covered dustbin. Never throw them in the toilet or flush them down the drain—they will choke the plumbing.'
    ],
    mythVsFact: [
      {
        myth: 'Young girls can only use pads until marriage.',
        fact: 'Anyone can safely choose pads, clean cloth, cups, or tampons as soon as they feel ready and comfortable.'
      },
      {
        myth: 'Flushing pads down the toilet is fine if they are thin.',
        fact: 'Pads absorb water and swell up, causing severe sewage blocks. Always wrap in paper and put in the dustbin.'
      }
    ],
    suggestedQuestion: 'How often should I change my sanitary pad during school hours?',
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
    readTime: '4 min read',
    icon: '🫧',
    summary: 'The inside of the vagina cleans itself naturally. Learn how to clean the outside (vulva), decode discharge, and avoid common hygiene mistakes.',
    keyTakeaways: [
      'The inside of the vagina is self-cleaning. Never wash inside (no douching or internal soaps).',
      'Wash only the outside skin (vulva) using clean, warm water during your daily bath.',
      'Always wipe or wash from front to back after using the toilet to avoid urinary infections (UTIs).',
      'Decode discharge: Clear, milky white, and odorless is healthy. Clumpy, greenish, or foul-smelling needs a doctor.',
      'Wear breathable cotton underwear and change out of sweaty sports clothes promptly.'
    ],
    content: [
      'Know your anatomy: The "vulva" is the outside skin you can see and touch (lips, pubic hair area). The "vagina" is the internal muscular canal that connects to your womb. You only ever need to wash the outside vulva.',
      'Your body\'s self-cleaning power: Healthy friendly bacteria (called lactobacilli) live inside your vagina. They create a natural mild acidity that kills harmful germs. Perfumed soaps, intimate washes, and sprays destroy these good bacteria and cause burning, itching, or bacterial infections.',
      'Daily washing habits: Wash your outside vulva with clean warm water using your hands. Pat dry with a clean, soft cotton towel. Always wipe from FRONT to BACK after urinating or passing stools. Wiping back-to-front drags bowel bacteria toward your urine passage, causing painful burning infections (UTIs).',
      'Decode your discharge:\n• Healthy discharge: Clear, stretchy, milky-white, or light creamy fluid with a mild clean scent. It changes slightly across your cycle and keeps your body clean.\n• Warning signs: Thick white clumpy discharge like curd/paneer (yeast infection), yellow-green frothy discharge, or a strong fishy odor accompanied by itching, redness, or burning when you pee. These need a quick doctor checkup.',
      '5 Common Hygiene Mistakes to Avoid:\n1. Wearing the same pad for 8+ hours because bleeding is light (always change within 4 to 6 hours).\n2. Using scented talcum powder or deodorant near your private area.\n3. Staying in sweaty sports leggings or wet underwear after school PT or gym.\n4. Storing clean reusable cloth pads in damp bathroom corners instead of dry sunlight.\n5. Using harsh clothes-washing detergents on your underwear without rinsing thoroughly.'
    ],
    mythVsFact: [
      {
        myth: 'Your intimate area must smell like roses, strawberries, or perfume.',
        fact: 'A healthy private area has a natural, mild body scent. Artificial perfumes irritate delicate mucous membranes and trigger infections.'
      },
      {
        myth: 'White discharge between periods is a disease called "safed paani" that makes bones weak.',
        fact: 'Normal white discharge is healthy fluid produced by the cervix. It is a sign of working hormones, not a disease, and does not harm your bones.'
      }
    ],
    whenToSeeDoctor: 'Visit a doctor, PHC, or ASHA didi if you notice intense itching, burning when you pee, curdy white discharge, or a foul fishy smell that does not go away with water washing.',
    suggestedQuestion: 'Why should I never use perfumed soap inside my private area?',
    relatedArticleIds: ['first-period-kit-guide', 'period-myths-busted', 'warning-signs-doctor', 'period-stains-leaks-laundry'],
    reviewedDate: 'Evidence-informed • Intimate Care Guidelines'
  },
  {
    id: 'food-movement-cramps',
    title: 'Desi Foods, Warm Drinks & Movement to Ease Cramps',
    subtitle: 'Affordable home remedies, iron-rich meals, and gentle stretches that calm period pain',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['cycle', 'puberty', 'educator'],
    readTime: '4 min read',
    icon: '🫖',
    summary: 'Simple Indian kitchen staples like ginger, ajwain, jaggery (gud), iron-rich greens, and light movement ease cramps naturally.',
    keyTakeaways: [
      'Warmth works: A hot water bag (garam paani ki thaili) over your lower belly relaxes tight uterine muscles.',
      'The Iron + Vitamin C Rule: Pair green vegetables or jaggery with lemon or amla so your body absorbs iron.',
      'Warm sips: Ginger (adrak) tea, saunf water, or ajwain water soothe tummy spasms and bloating.',
      'Spot anaemia: Pale inner eyelids, brittle nails, and exhaustion on climbing stairs mean low iron.',
      'Exercise is healthy: Sports, dance, running, and gentle yoga relieve period cramps safely.'
    ],
    content: [
      'Home remedies and good nutrition comfort your body and lessen cramps. They do not replace medical treatment if pain is debilitating, but they make everyday periods far easier.',
      'Warm sips from the Indian kitchen: Sip warm ginger (adrak) tea or ajwain water. Both ginger and ajwain contain natural compounds that relax uterine muscle spasms and relieve gas. A cup of warm turmeric milk (haldi doodh) before bed soothes inflammation and promotes restful sleep.',
      'The Iron + Vitamin C Pairing Rule: During periods, your body loses red blood cells containing iron. Plant-based iron in foods like palak (spinach), methi, boiled chana, rajma, and jaggery (gur) absorbs much better when paired with Vitamin C. Always squeeze fresh nimbu (lemon) over your dal or eat a piece of amla or orange alongside your meal.',
      'Warning Signs of Anaemia (Low Blood Count): If you notice extreme tiredness, dizziness when standing up, pale inner eyelids or fingernails, and breathlessness while climbing school stairs, your iron levels may be low. An ASHA didi or clinic can check your haemoglobin with a simple finger-prick test.',
      'Can I play sports, swim, and do yoga? YES! Exercising during your period increases blood flow and triggers your brain to release endorphins—your body’s natural painkillers. In school PT classes, running, badminton, and cycling are completely safe. In yoga, gentle poses like Child’s Pose (Balasana) and Cat-Cow soothe the lower back. Swimming with a menstrual cup or tampon is also safe and leak-free.'
    ],
    mythVsFact: [
      {
        myth: 'Eating curd, lemon, or pickles during periods will cause heavy clotting.',
        fact: 'Food enters your stomach and intestines; it never enters your womb. Curd provides gut-friendly probiotics, and lemon provides iron-absorbing vitamin C.'
      },
      {
        myth: 'Girls should not run or jump during periods because it damages the uterus.',
        fact: 'The uterus is held securely by strong pelvic ligaments. Running, jumping, and playing sports do not harm the uterus in any way.'
      }
    ],
    suggestedQuestion: 'Which desi foods help boost iron and reduce period bloating?',
    relatedArticleIds: ['cycle-in-4-phases', 'period-pain-normal', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Wellness & Adolescent Nutrition Guidance'
  },
  {
    id: 'understanding-pms',
    title: 'Understanding PMS: Mood Swings, Cravings & Tender Breasts',
    subtitle: 'Why emotional waves happen before your period and how to handle them',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['cycle'],
    readTime: '4 min read',
    icon: '💭',
    summary: 'Premenstrual syndrome (PMS) affects millions in the 7 to 10 days before bleeding. Learn why emotional waves happen, how PMDD differs, and practical coping tools.',
    keyTakeaways: [
      'PMS happens in the week before bleeding as estrogen and progesterone levels dip sharply.',
      'Common signs include irritability, emotional tears, tender breasts, and intense food cravings.',
      'PMDD (Premenstrual Dysphoric Disorder) causes severe depression, rage, or hopelessness that requires medical care.',
      'Cutting excess caffeine and high salt helps reduce breast tenderness and belly bloating.',
      'Communicating your emotional boundaries to family or roommates creates understanding and peace.'
    ],
    content: [
      'About 7 to 10 days before your period starts, both progesterone and estrogen levels begin to plunge. This sudden drop directly lowers serotonin—the key brain chemical that manages happiness, sleep, and emotional calm.',
      'Common signs of PMS: You might feel unexpectedly tearful over small things, easily annoyed by loud noises, or notice swollen breasts, fluid retention in your fingers, and intense cravings for sweets. These symptoms typically vanish within 24 to 48 hours after your flow begins.',
      'What is PMDD (Premenstrual Dysphoric Disorder)? In roughly 3 to 8% of menstruators, the brain has an abnormal sensitivity to normal hormone shifts. PMDD causes severe depressive episodes, intense rage, severe panic attacks, or feelings of hopelessness that make working or maintaining relationships impossible. PMDD is a recognized medical condition—not a personal flaw—and responds very well to doctor-prescribed therapies like SSRIs, CBT, and cycle regulation.',
      'Desi Kitchen Tweaks for PMS: Reduce salty packaged snacks (namkeen, chips) and strong coffee 5 days before your period. High salt traps water in your tissues, making breast pain and bloating worse. Instead, nourish your nerves with magnesium and Vitamin B6 found in roasted pumpkin seeds, almonds, bananas, and a square of dark chocolate.',
      'Scripts for Loved Ones and Roommates: When PMS strikes, explain your needs gently before misunderstandings happen. You can say: "My body is in the pre-period luteal phase today. I am feeling emotionally tender and tired. I love you, but I need 30 minutes of quiet space to recharge." Calm honesty prevents unnecessary friction.'
    ],
    mythVsFact: [
      {
        myth: 'PMS is just an excuse women use when they are bad-tempered.',
        fact: 'PMS and PMDD are caused by genuine neurochemical changes triggered by falling estrogen and progesterone.'
      },
      {
        myth: 'Eating sweets and sugary desserts cures PMS sadness.',
        fact: 'Sugar causes a quick blood sugar spike followed by a steep crash, making mood swings and fatigue even worse. Complex carbs like oats or roasted chana are much better.'
      }
    ],
    whenToSeeDoctor: 'If pre-period sadness makes you feel hopeless, unable to manage daily life, or brings dark thoughts, please talk to a doctor or counselor promptly. In India, you can also reach the Tele-MANAS mental health helpline at 14416 [VERIFY: Tele-MANAS 24/7 helpline].',
    suggestedQuestion: 'What is the difference between mild PMS and PMDD?',
    relatedArticleIds: ['cycle-in-4-phases', 'food-movement-cramps', 'warning-signs-doctor', 'pcos-pcod-management-guide'],
    reviewedDate: 'Evidence-informed • Premenstrual Care Guidance'
  },
  {
    id: 'perimenopause-early-signs',
    title: 'Perimenopause: Early Signs in Your 40s',
    subtitle: 'Understand irregular cycles, hot flushes, and body changes with calm confidence',
    category: 'basics',
    categoryLabel: 'Menstrual Health Basics',
    targetStages: ['menopause'],
    readTime: '4 min read',
    icon: '🍂',
    summary: 'Perimenopause is the natural transition towards menopause, often beginning in your late 30s or early 40s. Learn to decode cycle chaos, hormonal swings, and body clues.',
    keyTakeaways: [
      'In India, the average age of menopause is 46 to 47 years—meaning perimenopause often begins around 40 to 42 [VERIFY: Indian Menopause Society data].',
      'The Estrogen Roller-Coaster: Hormones do not decrease gradually; they surge and plunge unpredictably.',
      'Cycle chaos: Periods may arrive every 21 days, skip 2 months, or produce unexpected heavy flow.',
      'Noticeable signs: Night sweats, sudden 3 AM wakeups, heart flutters, brain fog, and mood shifts.',
      'The 12-Month Rule: You can still become pregnant until 12 continuous months have passed without any period.'
    ],
    content: [
      'Just as puberty marks the beginning of your reproductive journey, perimenopause is the natural transition toward its conclusion. It is a biological chapter of life, not a sudden disease or loss of vitality.',
      'Onset Age in Indian Women: While Western textbooks often cite age 51 for menopause, research by the Indian Menopause Society (IMS) shows that the average Indian woman reaches menopause earlier, between 46.2 and 47.5 years [VERIFY: IMS Clinical Guidelines]. Consequently, perimenopause symptoms frequently start in your early 40s—a time when many women are at the peak of their careers and family responsibilities.',
      'The Estrogen Roller-Coaster: Rather than declining in a smooth straight line, estrogen fluctuates wildly during perimenopause. One week, estrogen surges unusually high, causing swollen tender breasts and thick uterine linings that lead to heavy, clotty bleeding (flooding). The next week, estrogen plummets, triggering sudden feelings of anxiety, hot flashes, and intense night sweats.',
      'Cycle Chaos Patterns: Your periods will likely become unpredictable. You may experience short 21-day cycles, followed by a missed period for 2 months, followed by light brown spotting. Tracking these dates in a small pocket calendar or phone note helps your gynaecologist understand your pattern.',
      'Brain Fog & Unexplained Anxiety: Many women in their 40s worry they are developing early memory loss. Estrogen acts as a brain-protecting hormone; when it dips, you may struggle to recall common names or walk into a room and forget what you needed. You might also experience sudden palpitations (racing heartbeat) or wake up wide awake at 3 AM. Knowing this is hormonal takes away the fear.',
      'The 12-Month Contraception Rule: Because ovulation still occurs intermittently during perimenopause, surprise pregnancies can happen. Doctors advise continuing safe birth control (such as condoms or non-hormonal IUDs) until you have completed 12 consecutive months without a single period.'
    ],
    mythVsFact: [
      {
        myth: 'Perimenopause means a woman has suddenly become old or weak.',
        fact: 'Perimenopause begins in healthy, active women in their early 40s. It is a natural biological transition into a wiser, empowering stage of life.'
      },
      {
        myth: 'If your period skips for 3 months in your 40s, you cannot get pregnant.',
        fact: 'Ovaries can still release an egg unpredictably during perimenopause. Reliable contraception is necessary until 12 full period-free months have elapsed.'
      }
    ],
    suggestedQuestion: 'At what age does perimenopause usually begin for Indian women?',
    relatedArticleIds: ['menopause-hot-flushes', 'menopause-mood-brain-fog-sleep', 'warning-signs-doctor', 'menopause-intimacy-pelvic-health'],
    reviewedDate: 'Evidence-informed • Menopause Health Guidance'
  },
  {
    id: 'menopause-hot-flushes',
    title: 'Menopause: Managing Hot Flushes, Sleep & Bone Health',
    subtitle: 'Simple ways to stay cool, sleep better, and keep bones strong in your 40s and 50s',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['menopause'],
    readTime: '4 min read',
    icon: '🍵',
    summary: 'Menopause is reached after 12 consecutive months without a period. Learn practical ways to tame hot flushes, protect bone density, and sleep deeply.',
    keyTakeaways: [
      'Menopause is officially reached after 12 continuous months without any menstrual bleeding (average age 46 to 48 in India).',
      'Hot flushes and night sweats happen when lower estrogen narrows the brain’s thermal comfort zone.',
      'Cooling habits: Layered cotton clothing, bedside cold water, and avoiding spicy dinners reduce flush triggers.',
      'Bone preservation: Calcium-rich Indian foods (ragi, til, paneer) paired with sunlight (Vitamin D3) prevent osteoporosis.',
      'CRITICAL: Any vaginal bleeding occurring after 12 period-free months requires immediate gynaecological evaluation.'
    ],
    content: [
      'In India, the average age of natural menopause is 46.2 to 47.5 years [VERIFY: Indian Menopause Society Consensus]. Once you reach 12 consecutive months with zero period bleeding, you have officially arrived at menopause.',
      'Why Hot Flushes and Night Sweats Happen: Your brain’s hypothalamus acts as your internal thermostat. As estrogen drops, the hypothalamus becomes hypersensitive. Even a tiny change in room temperature tricks your brain into thinking the body is dangerously overheating. The brain signals blood vessels in your chest, neck, and face to dilate instantly, causing a rush of red flushing, drenching sweat, and subsequent chills.',
      'Bedroom Cooling Protocols: To prevent sleepless nights from night sweats, use 100% breathable cotton bedsheets. Keep a stainless steel bottle of cold water beside your pillow to sip when you feel a wave of warmth approaching. Avoid heavy, oily, or red-chilli curries close to bedtime, and sleep in lightweight, layered cotton clothing that you can easily peel off.',
      'Protecting Your Bones (Preventing Osteoporosis): Estrogen acts as a natural shield that slows bone breakdown. After menopause, bone loss speeds up significantly, increasing fracture risk. Protect your skeleton with calcium-rich desi foods: ragi (finger millet—which has over 300mg of calcium per 100g), roasted til (sesame seeds), curd, paneer, and dark greens. Pair this with 20 minutes of morning sunlight for Vitamin D3 and daily weight-bearing walks.',
      'Soothing Joint Aches & Stiffness: Many midlife women wake up with stiff fingers, hips, or knee joints (menopausal arthralgia). A daily warm sesame or mustard oil massage (abhyanga) before a warm bath stimulates circulation and lubricates tight joints.'
    ],
    mythVsFact: [
      {
        myth: 'Hot flushes last forever and cannot be managed without expensive treatments.',
        fact: 'For most women, hot flushes peak in the first 1 to 2 years and gradually subside. Simple lifestyle tweaks and medical options provide strong relief.'
      },
      {
        myth: 'Taking calcium tablets is all you need to keep bones strong after menopause.',
        fact: 'Calcium needs Vitamin D3 for absorption, and bones require weight-bearing exercises like brisk walking to signal bone mineral retention.'
      }
    ],
    whenToSeeDoctor: 'CRITICAL WARNING: Any vaginal bleeding or pink spotting that occurs AFTER you have gone 12 full months without a period is abnormal. You must see a gynaecologist right away for an endometrial ultrasound to rule out uterine abnormalities.',
    suggestedQuestion: 'What triggers hot flushes during menopause?',
    relatedArticleIds: ['perimenopause-early-signs', 'menopause-hrt-natural-remedies', 'menopause-mood-brain-fog-sleep', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Midlife Wellness & Bone Health Guidance'
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
    subtitle: 'Clear checklist of heavy bleeding, severe pain, PCOS basics, and clinic visits',
    category: 'medical',
    categoryLabel: 'Medical Safety',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '4 min read',
    icon: '🚨',
    summary: 'Knowing when to visit a clinic or gynaecologist is empowering. Here is a calm checklist of warning signs, hormonal basics, and how to get help.',
    keyTakeaways: [
      'Soaking 1 or more pads completely every hour for 2 hours in a row is a medical red flag.',
      'Passing blood clots bigger than a ₹5 coin or experiencing pain that makes you vomit needs a clinic visit.',
      'Conditions like PCOS/PMOS, Thyroid imbalances, and Endometriosis are treatable medical conditions—never your fault.',
      'What happens at a gynaecologist visit: A friendly conversation about your cycle; doctors do not do scary tests on teens.',
      'The HPV vaccine protects girls ages 9 to 14 from cervical cancer before exposure.'
    ],
    content: [
      'Listening to your body is important. Most periods have mild cramping or temporary delays, but some symptoms are clear biological warning signs that require a clinic checkup.',
      'Very heavy bleeding (Menorrhagia): It is a red flag if you soak through a thick pad every hour for 2 hours in a row, bleed through your clothes onto furniture, pass dark clots larger than a ₹5 coin, or bleed continuously for more than 7 days.',
      'Severe pain (Dysmenorrhea): Extreme cramps that cause fainting, dizziness, nausea, or vomiting are NOT normal. Normal cramps respond to warmth and rest; debilitating pain does not.',
      'Conditions doctors can treat (PCOS, Thyroid & Endometriosis):\n• PCOS / PMOS: A hormonal imbalance where irregular periods, facial acne, or hair growth occur due to metabolic signals. It is very common and easily managed with diet, activity, and simple medicine.\n• Thyroid shifts: An underactive or overactive thyroid gland in your neck can make your periods too heavy or stop them for months.\n• Endometriosis: Tissue similar to the womb lining grows outside the uterus, causing sharp pelvic pain. Early diagnosis brings effective relief.',
      'What happens at your first gynaecologist visit? Many girls feel terrified of visiting a female doctor (gynaecologist). In reality, for teenagers, the doctor simply asks gentle questions about your cycle dates, checks your blood pressure and weight, and may suggest a simple abdominal ultrasound or blood test. There is zero reason to feel afraid.',
      'Preventive Health: The HPV Vaccine: Human Papillomavirus (HPV) is a common virus that can cause cervical cancer decades later in adulthood. Getting the HPV vaccine between ages 9 and 14 builds strong lifetime immunity [VERIFY: Indian Academy of Pediatrics (IAP) & National HPV vaccination guidelines].',
      'Where to find help near you: In Indian villages and towns, you can always visit your local ASHA didi, meet the Auxiliary Nurse Midwife (ANM) at your village Sub-Centre, or visit your nearest government Primary Health Centre (PHC) or Community Health Centre (CHC) for free checkups and medicines.'
    ],
    mythVsFact: [
      {
        myth: 'Visiting a gynaecologist as an unmarried girl is shameful or means something is wrong.',
        fact: 'Gynaecologists are doctors for reproductive health, just like dentists are for teeth. Consulting a doctor early protects your long-term wellbeing.'
      },
      {
        myth: 'Severe period pain is just weakness of the mind.',
        fact: 'Severe pain is driven by inflammatory prostaglandins or medical conditions like endometriosis. It is a genuine physical condition that doctors can treat.'
      }
    ],
    whenToSeeDoctor: 'Visit your nearest government hospital, primary health centre (PHC), or trusted gynaecologist if you bleed for >7 days, soak pads hourly, miss periods for >90 days, or have severe pelvic pain. You can also talk to your local ASHA didi. In emergencies, call 112 [VERIFY].',
    suggestedQuestion: 'What should I ask my doctor during my first gynaecologist visit?',
    relatedArticleIds: ['period-pain-normal', 'what-is-a-period', 'teen-irregular-cycles'],
    reviewedDate: 'Evidence-informed • Clinical & Adolescent Health Guidance'
  },
  {
    id: 'consent-and-boundaries',
    title: 'Consent & Personal Boundaries: Across Every Life Stage',
    subtitle: 'Understanding bodily autonomy, clear communication, and mutual respect',
    category: 'basics',
    categoryLabel: 'Life & Relationships',
    targetStages: ['puberty', 'cycle', 'menopause', 'educator'],
    readTime: '4 min read',
    icon: '🤝',
    summary: 'Your body belongs to you. Learn how clear consent, healthy boundaries, and mutual respect work from teenage years to adulthood and midlife.',
    keyTakeaways: [
      'Your body belongs completely to you. You always have the right to say "No" without apology.',
      'Safe vs. Unsafe Touch: Any touch on parts covered by a swimsuit (chest, private area, bottom, lips) without your permission is unsafe.',
      'Secrets that make you feel scared, guilty, or uncomfortable should never be kept secret.',
      'Digital safety: Never feel pressured to send private pictures or share passwords. Block and tell a trusted adult immediately.',
      'You are never to blame for anyone else crossing your boundaries. Free help is always available.'
    ],
    content: [
      'Consent means giving clear, willing permission. It means both people freely agree to what is happening. It applies to hugs, holding hands, medical checkups, and relationships.',
      'Safe Touch, Unsafe Touch & The Swimsuit Rule: For young bloomers, the rule is simple: Any touch on body parts covered by a standard swimsuit (your chest, your bottom, between your legs, and your mouth) is private. If anyone—whether a stranger, relative, friend, or senior—tries to touch these areas, look at them, or asks you to keep it a "special secret", that is an unsafe touch. You have the right to shout, run away, and tell a trusted adult.',
      'Setting boundaries with confidence: You never have to be polite when defending your personal space. Practice saying firmly: "Please step back", "I do not like that", or "Do not touch me." A real friend or caring relative will always respect your words.',
      'Digital Safety & Phone Boundaries: Your phone and messages belong to you. Never feel forced to share private photos, videos, or passwords with classmates or boyfriends. Once an image is sent online, you lose control over it. If someone asks for uncomfortable photos or threatens you, take a screenshot, block them immediately, and tell a parent or teacher.',
      'Your 3-Person Trusted Circle: Pick 3 safe adults in your life right now (for example: your mother, an aunt or elder sister, and a favorite school teacher). If anyone ever crosses your boundary or makes you uncomfortable, promise yourself you will speak to one of these three people immediately. You are never in trouble for speaking up.',
      'Adult Relationships & Ongoing Consent: In adult relationships, consent must be active, continuous, and mutual. It uses the FRIES framework: Freely given, Reversible anytime, Informed, Enthusiastic, and Specific. You can say yes to holding hands and no to anything else. You can change your mind at any moment.'
    ],
    mythVsFact: [
      {
        myth: 'If someone is a relative or family friend, you must allow them to touch or hug you.',
        fact: 'Your body belongs strictly to you. If a hug, touch, or lap-sit makes you uncomfortable, you have the full right to say no, step back, and greet them with a polite namaste instead.'
      },
      {
        myth: 'If you did not shout or fight back, it means you gave consent.',
        fact: 'Freezing in fear or staying silent is a natural shock reaction. Silence is never consent. Consent requires a clear, active, enthusiastic "yes".'
      }
    ],
    whenToSeeDoctor: 'If you have experienced unwanted touch, harassment, or feel unsafe, tell a trusted adult right away. In India, you can call free, 24/7 confidential helplines: Childline at 1098 [VERIFY: Childline 1098 / WCD Mission Vatsalya], National Women Helpline at 181 [VERIFY], or Emergency at 112 [VERIFY].',
    suggestedQuestion: 'How can I set clear personal boundaries without feeling guilty?',
    relatedArticleIds: ['talking-to-daughter-students', 'talk-to-someone-trust', 'first-period-expect'],
    reviewedDate: 'Evidence-informed • Health, Child Safety & Ethics Guidance'
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
  },
  {
    id: 'period-emergency-at-school',
    title: 'Emergency at School! What to Do When Period Starts Unexpectedly',
    subtitle: 'Step-by-step calm checklist for stains, asking for a pad, and feeling safe',
    category: 'hygiene',
    categoryLabel: 'School & Daily Life',
    targetStages: ['puberty', 'educator'],
    readTime: '3 min read',
    icon: '🎒',
    summary: 'Got your period unexpectedly during class or assembly? Take a slow breath. Here is a calm 5-minute action plan to handle pads, stains, and teachers.',
    keyTakeaways: [
      'Take a deep breath: A surprise period happens to every girl. You are safe and not in trouble.',
      'Head to the washroom calmly to check your underwear and clothing.',
      'No pad in your bag? Ask a classmate, teacher, or visit the school medical room/MHM corner.',
      'Emergency pad hack: Fold clean toilet paper or pocket tissues 6 to 8 times into a temporary pad.',
      'Stain on your uniform? Tie your school sweater or cardigan around your waist and wash with cold water.'
    ],
    content: [
      'You are sitting in class or standing in morning assembly, and suddenly you feel warm dampness in your underwear. Your heart starts beating fast. First, take a slow deep breath: You are completely safe, you did nothing wrong, and every menstruating teacher and student in your school has experienced this exact moment.',
      'The 5-Minute Washroom Plan:\n1. Raise your hand calmly and ask the teacher: "Ma\'am, may I please visit the washroom?"\n2. Once in a cubicle, check your underwear. If it is your period starting, do not panic.\n3. If you have a pad in your bag, unwrap it and press the sticky side firmly onto the center of your panty. Pull your underwear up snugly.',
      'What if you do NOT have a pad?\n• Ask a female classmate: Whisper: "Hey, do you have an extra pad in your pouch?" Girls always help each other with pads.\n• Ask a teacher or school didi: Approach your favorite female teacher or the school nurse and say: "Ma\'am, my period started unexpectedly. Do you have a pad or can I visit the medical room?" Under Supreme Court directives, all schools in India must maintain emergency sanitary pads.\n• The Emergency Tissue Hack: If you cannot find a pad immediately, take clean toilet paper or pocket tissues. Fold them back and forth 6 to 8 times into a thick, neat rectangular pad. Place it in your underwear. This gives you safe protection for 30 to 45 minutes until you get a real pad.',
      'What if blood stained your skirt or salwar? Do not cry or hide. Take your school sweater, jacket, or dupatta and tie it neatly around your waist. This completely covers the back of your skirt. In the washroom, dab the stain gently with a wet paper towel and COLD water from the sink. Never use hot water.',
      'If you have severe cramps: Visit the school sick bay or medical room, lie down with a warm water bottle on your belly, and ask the school to contact your parent if you need to go home early to rest.'
    ],
    mythVsFact: [
      {
        myth: 'Getting a blood stain on your uniform is a huge public shame.',
        fact: 'Stains are normal biological accidents, just like a sudden nosebleed. No one has the right to mock you.'
      }
    ],
    whenToSeeDoctor: 'If your period starts at school and is accompanied by dizziness, fainting, or vomiting from pain, rest in the school infirmary immediately and have an adult contact your family doctor.',
    suggestedQuestion: 'How can I ask my school teacher for a pad without feeling embarrassed?',
    relatedArticleIds: ['first-period-expect', 'first-period-kit-guide', 'period-stains-leaks-laundry', 'talk-to-someone-trust'],
    reviewedDate: 'Evidence-informed • School & Adolescent Guidance'
  },
  {
    id: 'talk-to-someone-trust',
    title: 'Talk to Someone You Trust: Word-for-Word Scripts for Girls',
    subtitle: 'Easy conversation starters to talk to mom, dad, didi, or teachers without feeling shy',
    category: 'basics',
    categoryLabel: 'Courage & Support',
    targetStages: ['puberty', 'educator'],
    readTime: '3 min read',
    icon: '💬',
    summary: 'Feel awkward talking about your body? Use these exact, gentle scripts to tell your parents, elder sister, teacher, or doctor when your period starts.',
    keyTakeaways: [
      'Feeling shy is normal, but remember: Every adult woman around you has periods too.',
      'You do not have to give long explanations; 1 simple sentence is all it takes.',
      'Scripts ready to use: For Mummy, Papa, elder sister (didi), school teacher, or doctor.',
      'If your family has strict restrictions, you can speak to an ASHA didi or school counselor.',
      'Free, confidential helplines exist in India if you ever need safe support.'
    ],
    content: [
      'Telling someone that your period has started can make your heart race. You might wonder: "What will they think? Will they be upset?" The truth is: Adults will be relieved you told them, and they will want to help you feel comfortable.',
      'Script for Telling Mummy:\n• In person: "Mummy, I noticed brown spotting on my underwear today. I think my period has started. Can you show me what to do?"\n• By text message (if you are too shy in person): "Mummy, my period started today. Please bring some pads when you come home."',
      'Script for Telling Papa or an Older Brother:\n• Dads and brothers want to protect and care for you. Say: "Papa, I need to pick up a packet of sanitary pads from the chemist shop, could you help me get them?" or "Papa, I have period tummy cramps today, can I rest?"',
      'Script for Telling an Elder Sister (Didi) or Friend:\n• "Didi, my period started today and I am a little nervous. Do you have a pad, and can you help me place it?"',
      'Script for Telling a Teacher or School Nurse:\n• Walk up to the teacher\'s desk after class or during recess: "Ma\'am, my period started today and my stomach is hurting. May I please visit the medical room to rest?"',
      'What if your family has strict taboos? In some homes, elders ask girls to sit separately or avoid the kitchen. If this makes you feel sad, remember: You are not dirty or cursed. You can speak privately to a progressive aunt, an elder cousin, your biology teacher, or an ASHA didi in your locality.',
      'Free Confidential Helplines in India: If you ever feel alone, unsafe, or have private questions, you can dial Childline at 1098 [VERIFY: 24/7 toll-free Childline] or the National Women Helpline at 181 [VERIFY: 24/7 free support].'
    ],
    mythVsFact: [
      {
        myth: 'You should never say the word "period" or "pad" in front of male family members.',
        fact: 'Menstruation is basic human biology. Speaking naturally helps fathers and brothers become supportive allies.'
      }
    ],
    whenToSeeDoctor: 'If you have questions about your cycle that no one at home can answer, ask to visit a female doctor or local PHC with your mother or didi. Doctors are friendly and answer questions privately.',
    suggestedQuestion: 'How can I text my mother that my first period has started?',
    relatedArticleIds: ['first-period-expect', 'period-emergency-at-school', 'consent-and-boundaries'],
    reviewedDate: 'Evidence-informed • Communication & Family Guidance'
  },
  {
    id: 'period-stains-leaks-laundry',
    title: 'Period Stains, Leaks & Laundry: The No-Panic Guide',
    subtitle: 'How to remove blood spots from uniforms, bedsheets, and underwear easily',
    category: 'hygiene',
    categoryLabel: 'Hygiene & Self-Care',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '🧺',
    summary: 'Leaked onto your school skirt, favorite panties, or bedsheet? Do not panic. Learn the science of stain removal using simple cold water and soap.',
    keyTakeaways: [
      'The #1 Golden Rule: ALWAYS wash blood stains with COLD water. Hot water bakes the stain into cloth.',
      'Quick bathroom fix: Bar soap + cold water removes 90% of fresh blood stains in 2 minutes.',
      'Bedsheet leaks: Dab with a cold, soapy towel and sprinkle salt or baking soda.',
      'Nighttime protection: Place an old towel across your mattress and wear snug cotton underwear.',
      'Every single menstruating woman in the world has leaked blood. It is never a reason for shame.'
    ],
    content: [
      'You wake up in the morning, pull back the blanket, and see a red circle on your bedsheet. Or you stand up from a classroom chair and notice a spot on your skirt. Your stomach drops. But stop right there: Blood leaks are NOT a mistake. They happen to doctors, athletes, teachers, and film stars. It is simply gravity.',
      'The Golden Rule of Period Laundry: ALWAYS USE COLD WATER!\nBlood contains proteins (haemoglobin). Hot or warm water cooks these proteins, permanently bonding them to fabric threads. Cold water dissolves blood proteins effortlessly.',
      'Step-by-Step Underwear & Skirt Stain Removal:\n1. Rinse under cold running tap water as soon as possible. Watch most of the red color flush right out.\n2. Rub a standard bar of bath soap or laundry soap directly onto the stain.\n3. Rub the fabric against itself for 30 seconds until a rich lather forms.\n4. Rinse with cold water. If a faint shadow remains, make a paste of table salt (namak) or baking soda with a few drops of cold water, let it sit for 10 minutes, and rinse clean.',
      'Handling a Mattress or Bedsheet Leak:\n• For bedsheets: Strip the sheet immediately and soak the stained spot in a bucket of cold water with detergent.\n• For the mattress underneath: Do not soak the mattress with water. Take a wet washcloth dipped in cold soapy water and dab the spot gently. Press a dry towel on top to soak up moisture. Sprinkling a little talcum powder or baking soda over the damp spot absorbs moisture and odor.',
      'How to Prevent Nighttime Leaks:\n• Wear snug (not tight) cotton panties that keep your pad from shifting sideways.\n• Use longer "Overnight" pads with wide back wings.\n• Keep a small, clean folded dark towel on your bedsheet underneath your hips for zero-stress sleep.'
    ],
    mythVsFact: [
      {
        myth: 'Stained underwear is ruined forever and must be thrown away.',
        fact: 'Cold water and soap remove fresh blood completely. Even if a faint spot remains, clean washed underwear is 100% hygienic to wear.'
      }
    ],
    whenToSeeDoctor: 'If you are leaking through overnight pads every 1 to 2 hours during sleep, your flow may be unusually heavy. Consult a doctor to check your iron levels and womb health.',
    suggestedQuestion: 'Why should you never use hot water to wash out a period stain?',
    relatedArticleIds: ['first-period-kit-guide', 'period-emergency-at-school', 'hygiene-dos-donts'],
    reviewedDate: 'Evidence-informed • Practical Hygiene Guidance'
  },
  {
    id: 'teen-irregular-cycles',
    title: 'Why Is My Period Late or Irregular? The First 2 Years Explained',
    subtitle: 'Why skipping months or spotting is normal while your body is learning',
    category: 'basics',
    categoryLabel: 'Teen Body Science',
    targetStages: ['puberty', 'cycle', 'educator'],
    readTime: '3 min read',
    icon: '📅',
    summary: 'Did your period come after 45 days, or skip 2 months entirely? Learn why teenage cycles wander naturally, how to track them, and when to ask a doctor.',
    keyTakeaways: [
      'In the first 1 to 2 years after your first period, irregular cycle lengths are normal biology.',
      'Your brain and ovaries are still practicing communication; ovulation does not happen every single month yet.',
      'Exams, catch-up stress, changing schools, and catching a cold can easily delay a period by a week or two.',
      'How to track: Write the date in a pocket diary or phone note whenever bleeding starts.',
      'When to see a doctor: If your period skips for more than 90 days in a row, or bleeding lasts longer than 7 days.'
    ],
    content: [
      'You had your first period in August, but September came and went with nothing. Then in October, you noticed light brown spotting. Now you are worried: "Is my body broken? Why is my cycle so irregular?" Take a deep breath: Your body is completely fine. In fact, this is how nearly every teenager’s reproductive system begins.',
      'Why early cycles wander: Menstruation is controlled by a delicate feedback loop between your brain (pituitary gland) and your ovaries (called the HPO axis). In young bloomers, this communication line is still learning. In the first 1 to 2 years after menarche, many cycles are "anovulatory"—meaning your body builds lining but does not release an egg every single month. Without ovulation, cycle dates can be early, late, or skip.',
      'What causes temporary delays?\n• Stress & Exams: High stress releases cortisol, which tells your brain to hit the pause button on hormones.\n• Catching viral fevers, flu, or sudden weight loss.\n• Travel or major changes in sleep schedules.\nOnce life settles down, your cycle rhythm returns naturally.',
      'How to track your cycle easily: You do not need fancy apps. Take a school notebook, small diary, or your phone calendar. Mark a small red circle or dot on Day 1 (the day bleeding begins). Write down how many days it lasted (e.g. 4 days). Over 6 months, you will see your body\'s unique personal pattern emerge.',
      'When is an irregular cycle a red flag? Talk to a doctor or ASHA didi if: Your period skips for more than 90 days in a row (3 months), bleeding continues for more than 7 to 10 days without stopping, or you experience sudden severe facial hair growth or intense cystic acne.'
    ],
    mythVsFact: [
      {
        myth: 'Every girl must have a strict 28-day cycle from her very first period.',
        fact: 'For teenagers, cycles between 21 and 45 days are completely normal and considered healthy by pediatricians.'
      },
      {
        myth: 'A missed period in a teenager always means a serious illness.',
        fact: 'Most missed periods in puberty are due to normal hormonal immaturity or simple exam stress.'
      }
    ],
    whenToSeeDoctor: 'Visit a gynaecologist or PHC if your period has stopped for over 3 months, if you bleed for more than 7 days, or if you feel dizzy and weak when your period arrives.',
    suggestedQuestion: 'How many days between periods is considered normal for a 13-year-old?',
    relatedArticleIds: ['what-is-a-period', 'first-period-expect', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Pediatric & Adolescent Gynecology'
  },
  {
    id: 'pcos-pcod-management-guide',
    title: 'PCOS & PCOD Survival Guide: Hormones, Weight & Period Restoration',
    subtitle: 'Understanding insulin resistance, PMOS updates, desi nutrition, and cycle revival',
    category: 'medical',
    categoryLabel: 'Hormonal Health',
    targetStages: ['cycle', 'educator'],
    readTime: '4 min read',
    icon: '🪷',
    summary: 'PCOS and PCOD affect 1 in 5 Indian women. Learn the biological difference, decode ultrasound "cysts", master the desi plate method, and restore cycle harmony.',
    keyTakeaways: [
      'PCOD is milder ovarian egg stalling; PCOS/PMOS is a whole-body metabolic and hormonal condition.',
      'The "cysts" are harmless, unreleased egg follicles—never dangerous tumors or surgical emergencies.',
      'Insulin resistance drives belly fat, sweet cravings, facial acne, and excess androgen signals.',
      'The Desi Plate Formula: Half plate greens/salad, quarter protein (dal/paneer/chana/eggs), quarter complex millets.',
      'Consistent small daily habits restore ovulation; PCOS does not mean you cannot live a vibrant, fertile life.'
    ],
    content: [
      'Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal conditions in India. Despite frightening internet stories, PCOS is a manageable metabolic pattern—never a personal fault or life sentence.',
      'PCOD vs PCOS (and the PMOS Update): In PCOD, ovaries release immature eggs due to stress or lifestyle, which often resolves with simple routine adjustments. PCOS is a deeper metabolic and hormonal pattern. Leading global consensus recently updated the name to PMOS (Polyendocrine Metabolic Ovary Syndrome) to emphasize that it is not an ovarian disease, but an endocrine metabolic condition involving insulin and hormones.',
      'The Truth About Ultrasound "Cysts": The word "cyst" sounds alarming. On an ultrasound scan, these appear like a necklace of tiny black circles. In reality, they are completely harmless, immature egg follicles that paused before releasing. They are not cancerous tumors and do not need to be surgically removed.',
      'The Hidden Driver: Insulin Resistance: When cells resist insulin, your body makes extra insulin to clear blood sugar. High insulin stimulates ovaries to produce excess testosterone. This causes skipped periods, weight gain around the lower belly, jawline acne, excess chin hair (hirsutism), and dark velvety skin on the neck (acanthosis nigricans).',
      'The Desi Plate Formula for Hormone Balance: Crash dieting stresses your hormones. Instead, eat a balanced Indian plate: 1. Start with fiber: Eat a small katori of cucumber, kakdi, or sprouts before your main meal. 2. Protein anchor: Eat boiled kala chana, moong sprouts, paneer, curd, or eggs to blunt blood sugar spikes. 3. Smart carbs: Choose jowar, bajra, or ragi rotis over white maida. 4. Morning ritual: Methi dana (fenugreek) soaked water helps improve insulin sensitivity.',
      'Movement & Medical Support: 20 minutes of daily strength training (squats, resistance bands, walking) signals muscles to absorb glucose directly. Gynaecologists and endocrinologists can prescribe helpful insulin-sensitizing supplements (like inositol), metformin, or progesterone to safely restore your monthly cycle.'
    ],
    mythVsFact: [
      {
        myth: 'Having PCOS means you are permanently infertile and can never have a baby.',
        fact: 'PCOS causes ovulation delays, not permanent infertility. The vast majority of women with PCOS conceive naturally or with straightforward medical guidance.'
      },
      {
        myth: 'You must completely cut out all rice, rotis, and carbohydrates to reverse PCOS.',
        fact: 'Extreme low-carb diets spike stress hormones. Eating complex, unrefined carbohydrates paired with protein and fiber balances hormones safely.'
      }
    ],
    whenToSeeDoctor: 'Consult a gynaecologist or endocrinologist if your period has stopped for more than 90 days, or if you experience rapid hair loss, severe cystic acne, or dark patches on your neck. In emergencies, call 112 [VERIFY].',
    suggestedQuestion: 'What is the best daily breakfast for someone with PCOS?',
    relatedArticleIds: ['cycle-in-4-phases', 'food-movement-cramps', 'warning-signs-doctor', 'understanding-pms'],
    reviewedDate: 'Evidence-informed • Endocrine & Metabolic Health Guidance'
  },
  {
    id: 'workplace-college-period-care',
    title: 'Workplace, College & Menstrual Leave: Thriving on Your Period',
    subtitle: 'Managing long shifts, commute fatigue, stain anxiety, and advocating for yourself',
    category: 'hygiene',
    categoryLabel: 'Daily Living',
    targetStages: ['cycle', 'puberty'],
    readTime: '3 min read',
    icon: '💼',
    summary: 'Navigating long workdays, exams, and commutes during your period requires practical preparation, ergonomic comfort, and clear self-advocacy.',
    keyTakeaways: [
      'Carry a compact desk pouch: 2 daytime pads, spare underwear, zip-lock bag, and portable heat patches.',
      'Take 2-minute standing breaks every hour to relieve pelvic blood congestion and reduce back spasms.',
      'Pack unscented wipes and carry a dark stole or cardigan to eliminate leak anxiety in public transit.',
      'Professional communication: How to ask for remote work or menstrual leave without sharing private medical details.',
      'Legal backing: Landmark Indian court rulings and corporate policies recognize menstrual health as essential workplace equity.'
    ],
    content: [
      'Balancing long office hours, college lectures, and packed metro or bus commutes while menstruating can test your stamina. Having an organized plan makes workdays stress-free and dignified.',
      'Your Commute & Desk Emergency Kit: Keep a small pouch in your work backpack containing: 2 fresh sanitary pads or tampons, 1 spare cotton underwear, a mini pack of unscented wet wipes, a zip-lock pouch for soiled items, and doctor-prescribed pain medicine (such as mefenamic acid or paracetamol). Carrying a dark scarf or formal jacket gives you instant peace of mind on public transport.',
      'Desk Ergonomics & Cramp Relief: Sitting hunched over a keyboard for 8 hours compresses pelvic blood flow and worsens cramps. Stand up, roll your shoulders, and walk for 2 minutes every hour. Keep a thermos of warm saunf or ginger water at your desk. Discreet adhesive herbal heat patches stick under your clothes to provide steady, invisible warmth for up to 8 hours.',
      'Navigating Office & College Restrooms: In shared washrooms, wash your hands thoroughly before and after changing products. If running water is unavailable, use unscented intimate wipes. Wrap used pads securely in newspaper before placing them in the covered sanitary bin—never attempt to flush pads down the toilet.',
      'How to Request Menstrual Leave or Work-From-Home: You are never required to give overly private biological details. A simple, professional message works best: "Good morning team, I am experiencing severe abdominal cramps today and will be taking a personal sick day / working remotely today to rest and ensure quality output." With guidelines from the Indian Menopause Society and judicial recognitions under Article 21, organizations increasingly support menstrual wellness [VERIFY: Draft National Menstrual Hygiene Policy].'
    ],
    mythVsFact: [
      {
        myth: 'Taking time off for severe period cramps shows professional weakness.',
        fact: 'Severe cramps generate genuine physical strain. Taking medical rest when needed ensures long-term focus, productivity, and safety.'
      }
    ],
    whenToSeeDoctor: 'If period cramps regularly force you to miss work or college every single month despite pain relievers, consult a gynaecologist to rule out endometriosis or fibroids.',
    suggestedQuestion: 'How can I stay comfortable during long commutes while on my period?',
    relatedArticleIds: ['first-period-kit-guide', 'period-pain-normal', 'period-stains-leaks-laundry', 'food-movement-cramps'],
    reviewedDate: 'Evidence-informed • Occupational & Menstrual Health Guidance'
  },
  {
    id: 'menopause-mood-brain-fog-sleep',
    title: 'Brain Fog, Mood Shifts & Sleep: Mental Well-being in Menopause',
    subtitle: 'Why memory blips and sudden anxiety happen in your 40s and how to reclaim calm',
    category: 'basics',
    categoryLabel: 'Emotional Wellbeing',
    targetStages: ['menopause'],
    readTime: '4 min read',
    icon: '🧠',
    summary: 'Midlife hormonal shifts can bring unexpected memory blips, sudden anxiety, and 3 AM wakeups. Learn why estrogen impacts the brain and how to restore deep rest.',
    keyTakeaways: [
      'The Neuro-Estrogen Link: Estrogen energizes brain cells; fluctuating levels cause temporary "brain fog" and memory pauses.',
      'Sudden anxiety surges and irritability are hormonal reactions, not personal weakness or losing your mind.',
      'The 3 AM Insomnia Loop: Lower progesterone disrupts restful sleep cycles and triggers early morning waking.',
      'Restorative wind-down: Cool bedroom temperatures, light evening walking, and calming breathing (pranayama) restore calm.',
      'Professional support: Talk therapy, lifestyle adjustments, and low-dose hormonal guidance bring lasting relief.'
    ],
    content: [
      'Many women in their 40s and early 50s experience sudden memory pauses—struggling to find the right word, walking into the kitchen and forgetting why, or feeling sudden spikes of anxiety. This is not early dementia; it is the neurological impact of shifting hormones.',
      'How Estrogen Fuels the Brain: Estrogen acts as a key metabolic master in the female brain. It helps brain cells absorb glucose for energy and regulates neurotransmitters like dopamine and serotonin. When estrogen fluctuates wildly in perimenopause, the brain temporarily works with less fuel, causing mental fatigue and brain fog.',
      'Unexplained Midlife Anxiety & Rage: Have you noticed sudden waves of irritation or unexpected panic while doing ordinary tasks? When progesterone dips, levels of GABA—the brain’s calming chemical—also decrease. Your nervous system becomes more reactive. Reminding yourself "This is my hormones fluctuating, not my mind failing" relieves self-blame.',
      'Breaking the 3 AM Wakeup Cycle: Waking up alert at 3 AM with a racing heartbeat is very common in menopause. Minor nighttime temperature shifts trigger a release of cortisol. To break this loop: Keep your bedroom cool, avoid bright mobile screens for 1 hour before bed, and practice 5 minutes of deep belly breathing (Anulom Vilom or box breathing) if you wake up at night.',
      'Support & Compassionate Care: Talk openly with your partner and family about what you are experiencing. If brain fog or anxiety disrupts your daily life, speak with a doctor. Low-dose Menopausal Hormone Therapy (MHT), non-hormonal supplements, and counseling can restore clear thinking and deep sleep.'
    ],
    mythVsFact: [
      {
        myth: 'Brain fog during menopause is the beginning of permanent memory decline.',
        fact: 'Clinical studies show that menopausal brain fog is temporary. Cognitive sharpness naturally rebounds once hormones settle post-menopause.'
      },
      {
        myth: 'Midlife mood changes are all imaginary and women should just push through them silently.',
        fact: 'Hormonal mood shifts stem from real changes in brain chemistry and neurotransmitters. They deserve validation and compassionate care.'
      }
    ],
    whenToSeeDoctor: 'If persistent sadness, overwhelming anxiety, or sleeplessness impairs your ability to function for more than 2 weeks, consult a gynaecologist or counselor. In India, call the 24/7 Tele-MANAS mental health helpline at 14416 [VERIFY: Tele-MANAS].',
    suggestedQuestion: 'Why do I wake up at 3 AM with a racing heartbeat during menopause?',
    relatedArticleIds: ['perimenopause-early-signs', 'menopause-hot-flushes', 'menopause-hrt-natural-remedies'],
    reviewedDate: 'Evidence-informed • Neuro-Endocrine & Midlife Mental Health'
  },
  {
    id: 'menopause-intimacy-pelvic-health',
    title: 'Vaginal Dryness, Intimacy & Pelvic Health After 40',
    subtitle: 'Overcoming dryness, painful intimacy, and bladder leaks with dignity and comfort',
    category: 'hygiene',
    categoryLabel: 'Intimate Wellness',
    targetStages: ['menopause'],
    readTime: '3 min read',
    icon: '🌸',
    summary: 'Lower estrogen thins intimate tissues and weakens pelvic muscles. Learn safe solutions for dryness, comfortable intimacy, and bladder control.',
    keyTakeaways: [
      'Genitourinary Syndrome of Menopause (GSM): Reduced estrogen causes dryness, itching, and tissue thinning.',
      'Pain during intimacy is a physical symptom with simple medical solutions—never suffer in silence.',
      'Moisture remedies: Use water-based or silicone lubricants for intimacy, and pure coconut oil for external vulvar soothing.',
      'Local estrogen creams stay in intimate tissues without significant absorption into the rest of the body.',
      'Pelvic floor exercises (Kegels) strengthen muscles to prevent embarrassing urine leaks during coughs or sneezes.'
    ],
    content: [
      'Hormonal changes in midlife directly affect intimate comfort. Because cultural silence surrounds intimacy after 40 in India, many women silently endure discomfort. Reclaiming comfort is safe, simple, and empowering.',
      'What is GSM (Genitourinary Syndrome of Menopause)? Estrogen keeps the lining of the vagina and bladder passage thick, elastic, and moist. As estrogen declines, these tissues become thinner, drier, and more fragile. This can cause persistent burning, soreness while walking, frequent urinary infections (UTIs), or discomfort during intimacy (dyspareunia).',
      'Daily Moisturizing & Lubrication: 1. External soothing: Applying a few drops of pure cold-pressed coconut oil to the outside vulvar skin soothes itching and prevents friction. 2. Intimacy lubricants: Use generous amounts of water-based or silicone-based lubricants before intimacy. They provide a slippery barrier and eliminate friction tears.',
      'Local Vaginal Estrogen Therapy: Unlike oral hormone tablets that travel through your entire bloodstream, local vaginal estrogen (prescribed as a cream or small pessary) stays almost completely in the local tissues. It rebuilds tissue thickness, restores natural moisture, and prevents recurrent UTIs. Gynaecologists widely consider local vaginal estrogen safe for long-term use.',
      'Strengthening Pelvic Muscles (Kegel Exercises): Have you experienced a small leak of urine when laughing, coughing, or lifting a bucket? This is stress urinary incontinence caused by relaxing pelvic floor muscles. Practice daily Kegels: Gently squeeze the pelvic muscles you use to stop urination, hold for 5 seconds, relax for 5 seconds, and repeat 10 times, 3 times a day.'
    ],
    mythVsFact: [
      {
        myth: 'A woman\'s intimate life naturally ends after menopause.',
        fact: 'Intimate tissue thinning is medically treatable. With proper lubricants and local therapy, fulfilling and comfortable intimacy continues for decades.'
      },
      {
        myth: 'Using local vaginal estrogen cream carries the same risks as full-body hormone pills.',
        fact: 'Local vaginal estrogen has minimal systemic absorption into the blood and is considered safe by international gynaecological guidelines.'
      }
    ],
    whenToSeeDoctor: 'Consult a gynaecologist if you notice persistent vaginal burning, pain during intimacy, recurring urinary tract infections, or any postmenopausal bleeding.',
    suggestedQuestion: 'How do local vaginal estrogen creams differ from oral hormone pills?',
    relatedArticleIds: ['perimenopause-early-signs', 'menopause-hot-flushes', 'hygiene-dos-donts', 'menopause-hrt-natural-remedies'],
    reviewedDate: 'Evidence-informed • Gynaecological & Pelvic Health Guidance'
  },
  {
    id: 'menopause-hrt-natural-remedies',
    title: 'Hormone Therapy (HRT) vs. Desi Natural Remedies in Menopause',
    subtitle: 'Weighing MHT benefits, phytoestrogens, and herbal relief with medical clarity',
    category: 'medical',
    categoryLabel: 'Medical Options',
    targetStages: ['menopause'],
    readTime: '4 min read',
    icon: '🍵',
    summary: 'Understand modern Menopausal Hormone Therapy (MHT), explore evidence-based desi phytoestrogens, and make an informed decision for your midlife health.',
    keyTakeaways: [
      'Menopausal Hormone Therapy (MHT / HRT) replaces declining hormones to relieve hot flushes and protect bones.',
      'The "Window of Opportunity": MHT is safest and most effective when initiated within 10 years of menopause or before age 60.',
      'Desi Phytoestrogens: Natural plant compounds in flaxseeds (alsi), soy, and chana gently balance estrogen receptors.',
      'Traditional herbs: Adaptogens like Shatavari provide soothing benefits but should be discussed with your doctor [VERIFY: AYUSH guidelines].',
      'Personalized care: The right choice depends on your symptoms, bone density, cardiovascular health, and medical history.'
    ],
    content: [
      'Deciding how to manage menopause symptoms can feel daunting. Decades-old headlines caused unnecessary fear about Hormone Replacement Therapy (now called Menopausal Hormone Therapy, or MHT). Today, medical guidelines offer clear, reassuring clarity on both medical and natural remedies.',
      'What is Menopausal Hormone Therapy (MHT)? MHT delivers low doses of bioidentical estrogen to relieve debilitating hot flushes, night sweats, brain fog, and vaginal dryness, while halting rapid bone mineral loss. For women with an intact uterus, progesterone is prescribed alongside estrogen to protect the womb lining.',
      'The Modern Safety Window: Extensive clinical guidelines from the International Menopause Society and Indian Menopause Society establish that MHT is safe and highly beneficial when started within 10 years of menopause or before age 60. For women suffering from severe symptoms, it provides significant relief and long-term bone protection.',
      'Desi Phytoestrogens in Your Kitchen: Phytoestrogens are plant-based compounds that act like gentle, mild estrogen in your body. 1. Flaxseeds (alsi): 1 tablespoon of roasted ground flaxseed stirred into curd or dal provides valuable lignans and omega-3s. 2. Soy and tofu: Rich in isoflavones that help lessen hot flush frequency. 3. Fenugreek (methi) and kala chana: Traditional staples that support metabolic balance and steady energy.',
      'Ayurvedic Herbs & Adaptogens: Herbs like Shatavari (Asparagus racemosus) and Ashwagandha have long been cherished in Indian tradition for calming the nervous system and easing midlife fatigue [VERIFY: Shatavari safety in hormone-sensitive conditions]. Always inform your doctor before starting concentrated herbal tablets, as active botanicals can interact with prescription medications.',
      'Making an Informed Choice: Schedule a dedicated visit with an IMS-certified gynaecologist. Together, you can review your family history, check your blood pressure and mammogram, and decide whether lifestyle changes, plant phytoestrogens, or low-dose MHT is the best path forward.'
    ],
    mythVsFact: [
      {
        myth: 'Hormone therapy is dangerous for all menopausal women.',
        fact: 'For healthy women entering menopause before age 60, modern low-dose MHT has a very favorable safety profile and protects bone and heart health.'
      },
      {
        myth: 'Natural herbal remedies are always completely harmless because they come from plants.',
        fact: 'Active plant extracts contain potent biochemical compounds. They should be used in moderate culinary amounts and discussed with your physician.'
      }
    ],
    whenToSeeDoctor: 'Consult your gynaecologist before starting any hormone therapy or herbal supplement, especially if you have a history of blood clots, liver disease, or breast cancer.',
    suggestedQuestion: 'Am I a good candidate for Menopausal Hormone Therapy (MHT)?',
    relatedArticleIds: ['perimenopause-early-signs', 'menopause-hot-flushes', 'menopause-mood-brain-fog-sleep', 'warning-signs-doctor'],
    reviewedDate: 'Evidence-informed • Endocrinology & Menopause Society Guidelines'
  }
];
