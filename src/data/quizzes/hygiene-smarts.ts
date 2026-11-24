import { Quiz } from './types';

export const hygieneSmartsQuiz: Quiz = {
  id: 'hygiene-smarts',
  title: 'Pads, Cups & Hygiene Smarts',
  subtitle: 'Master product choices, safe change timing, cup sterilisation, cloth care, and TSS prevention.',
  badgeTag: 'Hygiene Champion',
  icon: '🧼',
  color: 'from-teal-400 to-cyan-500',
  category: 'Hygiene & Products',
  targetStages: ['puberty', 'cycle'],
  ageTier: 'all',
  displayCount: 8,
  disclaimer: 'Practical guidance for menstrual health and hygiene management (MHM). Clean hands and safe sanitation protect your health.',
  published: true,
  questions: [
    {
      id: 'hs-01',
      type: 'scenario',
      scenario: 'Pooja is using disposable sanitary pads. Her flow is light today, and after 6 hours the pad has only a small spot.',
      question: 'Why must disposable pads be changed every 4 to 6 hours, even if flow is light?',
      options: [
        'Body heat and moisture trapped in pads allow skin bacteria and fungi to multiply rapidly, causing rashes, foul odor, and urinary or vulvar infections',
        'Because pads automatically dissolve after 4 hours',
        'Only to help pad companies make more money',
        'Pads turn toxic and catch fire if worn past 6 hours'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Menstrual fluid combined with body warmth and sweat creates an ideal warm incubator for bacteria. Regular changes every 4–6 hours maintain skin integrity and prevent dermatitis.',
        whyWrong: 'Pads do not dissolve or catch fire, but prolonged moisture causes severe contact dermatitis and bacterial proliferation.'
      },
      topicTag: 'Pad Care',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-02',
      type: 'scenario',
      scenario: 'Radha uses reusable cotton cloth pads at home. She feels shy and washes them secretly with little soap, then hangs them inside a dark, damp cupboard to hide them from family members.',
      question: 'What is the danger of drying reusable cloth pads in dark, damp spaces, and what is the hygienic method?',
      options: [
        'Damp, dark environments breed fungal spores, mold, and pathogenic bacteria; cloth pads must be washed with soap and dried completely in direct sunlight (UV rays) or ironed before reuse',
        'Dark cupboards are the cleanest place for pads because dust cannot enter',
        'Cloth pads should never be washed with water, only wiped with leaves',
        'There is zero medical risk in using damp, unwashed cloth'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Sunlight is nature\'s ultraviolet disinfectant. Drying cloth pads in sunlight or ironing them destroys microbial pathogens. Damp cloth used as menstrual protection is a major cause of reproductive tract infections (RTIs).',
        whyWrong: 'Hiding damp cloths under mattresses or dark cupboards allows fungi to thrive, leading to pelvic infections and pelvic inflammatory disease (PID).'
      },
      topicTag: 'Cloth Pad Hygiene',
      difficulty: 'medium',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts',
      doctorReviewFlag: '[VERIFY: UNICEF & Ministry of Health guidance on Menstrual Hygiene Management (MHM): washing with clean water/soap and drying in direct sunlight or hot ironing for reusable cloth]'
    },
    {
      id: 'hs-03',
      type: 'single-choice',
      question: 'What is the medically recommended procedure for sterilising a medical-grade silicone menstrual cup before and after each cycle?',
      options: [
        'Boil the cup in a pot of clean boiling water for 5 to 7 minutes',
        'Wash it with strong chemical bleach and toilet cleaner',
        'Microwave it dry for 30 minutes without water',
        'Never wash it under any circumstances'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Boiling medical-grade silicone in water for 5–7 minutes completely sterilizes the material by killing bacteria and spores. During your period, simply rinsing with potable tap water between emptying is sufficient.',
        whyWrong: 'Bleach, vinegar, and fragrant dish soaps degrade silicone, release irritants, and cause severe chemical vaginitis.'
      },
      topicTag: 'Menstrual Cup Care',
      difficulty: 'easy',
      ageTier: '13-17',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-04',
      type: 'single-choice',
      question: 'What is the maximum recommended time a menstrual cup can safely remain inserted before emptying and rinsing?',
      options: [
        'Up to 8 to 12 hours (depending on flow volume), but it should be emptied and washed at least twice a day',
        'Exactly 7 days non-stop without removing',
        'Only 30 minutes maximum',
        'One full month'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Medical-grade cups collect blood rather than absorb it, meaning they can safely be worn for up to 8–12 hours. However, emptying at least morning and night prevents overflow and maintains optimal hygiene.',
        whyWrong: 'Leaving a cup inserted for days can cause biofilm accumulation and odor, while changing every 30 minutes is unnecessary.'
      },
      topicTag: 'Menstrual Cup Care',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-05',
      type: 'single-choice',
      question: 'When washing the external intimate area (the vulva) during bathing or bathroom visits, in which direction should you always wipe or rinse?',
      options: [
        'From back (anus) to front (vagina)',
        'From front (vagina) to back (anus)',
        'In circular motions across both areas simultaneously',
        'Direction does not matter at all'
      ],
      correctAnswers: [1],
      explanation: {
        whyCorrect: 'Wiping or washing from front to back prevents Escherichia coli (E. coli) and other fecal bacteria from transferring into the urethra and vagina, preventing Urinary Tract Infections (UTIs).',
        whyWrong: 'Wiping back to front drags fecal bacteria directly to the urethral opening, the number one cause of adolescent UTIs.'
      },
      topicTag: 'Wiping & Washing Direction',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-06',
      type: 'scenario',
      scenario: 'Tanvi (14) uses tampons when going swimming or attending sports practice.',
      question: 'What is the crucial safety rule regarding tampon absorbency and change frequency to prevent Toxic Shock Syndrome (TSS)?',
      options: [
        'Use the lowest absorbency suitable for your flow, never leave a tampon inserted for more than 4 to 8 hours, and never use a tampon while sleeping overnight',
        'Always use the largest "Super Plus" tampon available so you only change it once every 2 days',
        'Use 3 tampons at the same time for extra safety',
        'Tampons can be washed and reused multiple times'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'TSS risks increase when high-absorbency tampons are left in too long, drying out mucosal tissue and allowing Staphylococcus aureus to generate toxins. Using appropriate absorbency and changing within 4–8 hours prevents TSS.',
        whyWrong: 'Tampons are single-use disposable items. Never reuse a tampon or leave one in for prolonged periods.'
      },
      topicTag: 'Tampon Safety & TSS',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-07',
      type: 'single-choice',
      question: 'Which Indian government initiative provides subsidized, eco-friendly, biodegradable sanitary pads at ₹1 per pad across Pradhan Mantri Bhartiya Janaushadhi Kendras?',
      options: [
        'Suvidha Sanitary Napkins under PMBJP',
        'Swachh Bharat Pad Scheme',
        'Ayushman Bharat Gold Pad',
        'Pradhan Mantri Ujjwala Napkin'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Jan Aushadhi Suvidha oxo-biodegradable sanitary napkins are made available at just ₹1 per pad at Jan Aushadhi Kendras across India to ensure accessible, affordable menstrual hygiene for all girls and women.',
        whyWrong: 'Knowing genuine government schemes helps young girls and families access affordable, safe menstrual products without financial strain.'
      },
      topicTag: 'Affordable Schemes',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'first-period-kit-guide',
      doctorReviewFlag: '[VERIFY: Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) Suvidha sanitary pad pricing is ₹1 per pad at Jan Aushadhi stores]'
    },
    {
      id: 'hs-08',
      type: 'multi-select',
      question: 'Which of the following practices protect intimate skin health and prevent vulvar dermatitis during periods? (Select all that apply)',
      options: [
        'Wearing breathable cotton underwear rather than tight synthetic fabrics',
        'Avoiding scented, perfumed sanitary pads or intimate deodorant sprays that irritate delicate mucous membranes',
        'Changing pads promptly when sweaty after sports or exercise',
        'Applying floor disinfectant inside intimate areas'
      ],
      correctAnswers: [0, 1, 2],
      explanation: {
        whyCorrect: 'Breathable cotton allows airflow and curtails heat rash. Fragrances in pads are a frequent cause of allergic contact dermatitis and intense itching.',
        whyWrong: 'Disinfectants cause severe chemical burns on mucous membranes.'
      },
      topicTag: 'Skin Health & Comfort',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-09',
      type: 'scenario',
      scenario: 'Ananya is at a school or friend\'s house and needs to dispose of her used sanitary pad.',
      question: 'What is the correct, environmentally and socially responsible method of pad disposal?',
      options: [
        'Wrap the used pad securely in old newspaper or a biodegradable disposal bag, seal it, and place it in the designated covered dry waste bin',
        'Flush it down the western or Indian toilet commode with a bucket of water',
        'Bury it inside a household plant flowerpot',
        'Throw it directly into the water storage tank'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Pads contain superabsorbent gel (sodium polyacrylate) that swells up to 30 times its size in water, causing massive pipe blockages. Wrapping in paper and placing in a covered dustbin is sanitary and humane for sanitation workers.',
        whyWrong: 'Flushing pads is a primary cause of municipal sewer blockages.'
      },
      topicTag: 'Responsible Disposal',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-10',
      type: 'single-choice',
      question: 'Can someone who has never engaged in sexual intercourse safely use a menstrual cup or tampon?',
      options: [
        'Yes; the vagina is a natural muscular organ and menstrual cups and tampons (available in small/teen sizes) can be used by anyone of any age who menstruates and feels comfortable',
        'No; cups and tampons are legally prohibited for anyone under 25',
        'No; internal products dissolve the pelvic bones',
        'Only with written permission from a court judge'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Anyone who menstruates can use cups or tampons. The vaginal opening naturally accommodates menstrual discharge and insertion with relaxation and water-based lubricant if needed.',
        whyWrong: 'Age and marital status have zero medical bearing on whether a cup or tampon is safe.'
      },
      topicTag: 'Product Inclusivity',
      difficulty: 'medium',
      ageTier: '13-17',
      relatedArticleId: 'period-myths-busted'
    },
    {
      id: 'hs-11',
      type: 'scenario',
      scenario: 'After her period, Meera notices red, itchy chafing marks on her inner thighs where the plastic edges of her disposable pad rubbed against her skin in humid weather.',
      question: 'What is the best way to soothe and prevent "pad rash" (contact dermatitis)?',
      options: [
        'Keep the area clean and dry, wear loose breathable cotton shorts, apply a thin layer of pure coconut oil or zinc oxide barrier cream, and consider switching to organic cotton/cloth pads',
        'Scratch the skin with metal needles until it bleeds',
        'Apply burning alcohol hand sanitizer directly to the raw rash',
        'Never wear underwear again'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Friction between plastic pad edges, moisture, and skin causes mechanical chafing. A gentle barrier cream (zinc oxide or cold-pressed coconut oil) protects healing skin while cotton pads reduce friction.',
        whyWrong: 'Alcohol and harsh chemicals will cause excruciating pain and damage excoriated skin.'
      },
      topicTag: 'Pad Rash & Skin Care',
      difficulty: 'easy',
      ageTier: 'all',
      relatedArticleId: 'hygiene-dos-donts'
    },
    {
      id: 'hs-12',
      type: 'single-choice',
      question: 'Why should you never wash a menstrual cup with oil-based soaps, dishwashing detergents, or heavily scented body washes?',
      options: [
        'Oils degrade medical-grade silicone over time, while fragrances and chemical residues remain on the cup and cause severe vaginal chemical dermatitis and bacterial vaginosis',
        'Because dish soap turns the cup into metal',
        'Because scented wash makes the cup invisible',
        'Dish soap is completely fine to use inside intimate canals'
      ],
      correctAnswers: [0],
      explanation: {
        whyCorrect: 'Silicone is porous to certain essential oils and degraded by petroleum/oil. Chemical residues from detergents transfer directly to sensitive vaginal mucosa, causing burning and disrupting natural pH.',
        whyWrong: 'Use only plain water or gentle, oil-free, fragrance-free pH-balanced wash specifically designed for menstrual cups.'
      },
      topicTag: 'Menstrual Cup Care',
      difficulty: 'challenge',
      ageTier: '13-17',
      relatedArticleId: 'hygiene-dos-donts'
    }
  ]
};
