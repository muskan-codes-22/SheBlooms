export interface NewsArticle {
  id: string;
  headline: string;
  source: string;
  sourceUrl: string;
  publishedDate: string;
  category: 'policy' | 'research' | 'workplace' | 'schools' | 'menopause';
  categoryLabel: string;
  targetStages: ('puberty' | 'cycle' | 'menopause' | 'educator')[];
  summary: string;
  keyHighlights: string[];
  readTime: string;
  icon: string;
  isBreaking?: boolean;
}

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'the-hindu-menopause-guidelines-2026',
    headline: 'Updated Clinical Guidelines Offer Clearer Pathways for Navigating Hot Flushes and Menopausal Symptoms',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/sci-tech/health/updated-guidelines-menopause-symptoms-hormonal-nonhormonal/article72049180.ece',
    publishedDate: 'November 14, 2026',
    category: 'menopause',
    categoryLabel: 'Clinical Practice Guidelines',
    targetStages: ['menopause'],
    summary: 'Leading obstetrics and gynaecology consensus panels have released updated clinical practice guidance to provide evidence-based, compassionate care for perimenopause and menopause. The framework validates both hormonal and modern non-hormonal prescription options for hot flushes, night sweats, and sleep disruption, urging doctors to move away from a "wait it out" approach.',
    keyHighlights: [
      'Evaluates both individualized Menopausal Hormone Therapy (MHT) and novel non-hormonal neurokinin-3 receptor antagonists.',
      'Replaces outdated "suffer in silence" attitudes with proactive symptom mapping and cardiovascular risk tracking.',
      'Urges clinicians to screen for sleep apnea, bone loss, and anxiety triggered by midlife hormonal fluctuations.'
    ],
    readTime: '4 min read',
    icon: '🩺',
    isBreaking: true
  },
  {
    id: 'indian-express-nfhs6-menstrual-hygiene-surge',
    headline: 'Menstrual Hygiene Goes Up in India: 79.2% of Young Women Now Use Hygienic Methods, Shows NFHS-6 Data',
    source: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/menstrual-hygiene-india-nfhs-6-data-women-sanitary-pads-9642010/',
    publishedDate: 'November 2, 2026',
    category: 'policy',
    categoryLabel: 'National Health Survey',
    targetStages: ['puberty', 'cycle', 'educator'],
    summary: 'Freshly released National Family Health Survey (NFHS-6) figures reveal a significant milestone: 79.2% of Indian women aged 15–24 now use hygienic methods of menstrual protection (such as sanitary pads, tampons, or cups), up from 77.6% in NFHS-5 and 57.6% in NFHS-4. The growth is heavily credited to subsidized Janaushadhi Suvidha pads and free school distribution schemes across rural districts.',
    keyHighlights: [
      '79.2% of young women (ages 15–24) now use safe, hygienic menstrual protection methods across India.',
      'Highlights the impact of subsidized ₹1 Janaushadhi Suvidha pads and state school distribution drives.',
      'Public health experts note that while adoption has surged, addressing safe disposal infrastructure and social taboos remains the next priority.'
    ],
    readTime: '4 min read',
    icon: '📊'
  },
  {
    id: 'the-hindu-menopause-ehr-tracking-gap',
    headline: 'Menopause Symptoms Largely Missing From Electronic Medical Records, Study Reveals',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/sci-tech/health/menopause-tracking-gap-medical-records-study/article71928410.ece',
    publishedDate: 'October 24, 2026',
    category: 'menopause',
    categoryLabel: 'Clinical Research',
    targetStages: ['menopause'],
    summary: 'A major clinical cohort analysis published in the journal Menopause and highlighted by The Hindu found that only 12% of electronic health records explicitly track menopausal status, despite more than half of the aging female population experiencing moderate-to-severe symptoms. Researchers emphasized that omitting menopause from routine records leads to missed preventive screenings for cardiovascular risk and osteoporosis.',
    keyHighlights: [
      'Found that fewer than 1 in 8 medical charts explicitly documented whether midlife female patients were in perimenopause or menopause.',
      'Emphasizes that unmanaged menopausal transitions directly impact cardiovascular health, bone density, and metabolic risk.',
      'Calls for structured menopausal intake protocols across primary care and internal medicine clinics.'
    ],
    readTime: '4 min read',
    icon: '🦋'
  },
  {
    id: 'pib-world-menopause-day-2026',
    headline: 'World Menopause Day 2026: National Focus on Holistic Preventive Care and Midlife Wellness',
    source: 'Press Information Bureau (PIB)',
    sourceUrl: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2065840',
    publishedDate: 'October 18, 2026',
    category: 'menopause',
    categoryLabel: 'National Health Initiative',
    targetStages: ['menopause', 'educator'],
    summary: 'On the occasion of World Menopause Day on October 18, 2026, health authorities and medical panels launched structured midlife wellness awareness initiatives, emphasizing preventive nutrition, musculoskeletal health, and workplace sensitization to remove the taboo surrounding perimenopause.',
    keyHighlights: [
      'Promotes integrated lifestyle, dietary, and calcium/Vitamin D supplementation strategies for women in their 40s and 50s.',
      'Encourages employers to implement supportive rest and temperature control policies in workplaces.',
      'Highlights community-level health talks to empower women to talk openly about midlife transitions without embarrassment.'
    ],
    readTime: '3 min read',
    icon: '🌸'
  },
  {
    id: 'sc-contempt-warning-school-sanitary-pads',
    headline: 'Supreme Court Warns Defaulting States of Contempt Action Over Delayed Menstrual Facilities in Schools',
    source: 'LiveLaw',
    sourceUrl: 'https://www.livelaw.in/top-stories/menstrual-hygiene-schools-supreme-court-contempt-warning-states-compliance-542100',
    publishedDate: 'October 12, 2026',
    category: 'policy',
    categoryLabel: 'Supreme Court Monitoring',
    targetStages: ['puberty', 'educator', 'cycle'],
    summary: 'Following up on its landmark Article 21 judgment, a Supreme Court bench comprising Justices J.B. Pardiwala and R. Mahadevan strongly rebuked several States and Union Territories for administrative apathy, warning of contempt proceedings against State Chief Secretaries who fail to submit ground compliance reports on providing free oxo-biodegradable sanitary napkins and functional toilets in schools.',
    keyHighlights: [
      'The Court firmly observed that constitutional declarations for schoolgirls\' dignity cannot remain merely on paper.',
      'Mandates government, aided, and private schools to provide free sanitary pads and functional, gender-segregated toilets.',
      'Sets strict deadlines with the next compliance monitoring scheduled for December 2026.'
    ],
    readTime: '4 min read',
    icon: '⚖️'
  },
  {
    id: 'indian-express-kerala-womn-vending-machines',
    headline: 'Kerala Installs ₹10 Sanitary Napkin Vending Machines & Incinerators Across Public Transit Hubs',
    source: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/thiruvananthapuram/kerala-women-child-development-sanitary-napkin-vending-machines-ksrtc-9610482/',
    publishedDate: 'October 5, 2026',
    category: 'workplace',
    categoryLabel: 'Public Infrastructure',
    targetStages: ['puberty', 'cycle', 'educator'],
    summary: 'Under the Women and Child Development Department\'s pilot "WOMN" initiative, Kerala has begun installing ₹10 automated sanitary napkin vending machines and safe disposal incinerators at major KSRTC bus stations and public transit depots across the state, ensuring girls and working women never face emergency period distress while traveling.',
    keyHighlights: [
      'Installs coin- and digital-payment enabled dispensers providing emergency sanitary pads for ₹10.',
      'Equips each transit sanitation block with an electric, smokeless incinerator for safe and hygienic disposal.',
      'Solves emergency period distress for female commuters, students, and inter-city bus travelers.'
    ],
    readTime: '3 min read',
    icon: '🚌'
  },
  {
    id: 'sc-menstrual-hygiene-fundamental-right',
    headline: 'Supreme Court Rules Menstrual Health is a Fundamental Right Under Article 21',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/sci-tech/health/rights-beyond-the-pad-making-menstrual-health-services-work-in-every-school/article71685390.ece',
    publishedDate: 'January 2026',
    category: 'policy',
    categoryLabel: 'Supreme Court Directive',
    targetStages: ['puberty', 'cycle', 'educator'],
    summary: 'In a historic ruling, the Supreme Court of India established menstrual health and access to sanitation as an inalienable fundamental right under the Right to Life (Article 21), issuing binding mandates across all States and UTs.',
    keyHighlights: [
      'Mandatory free oxo-biodegradable sanitary napkins for adolescent girls (Classes 6–12) in all schools.',
      'Strict requirement for functional, gender-segregated toilets with running water and safe disposal bins.',
      'Private schools face loss of recognition if they fail to provide separate sanitation facilities and emergency pads.'
    ],
    readTime: '4 min read',
    icon: '⚖️'
  },
  {
    id: 'lancet-pcos-renamed-pmos',
    headline: 'Global Medical Landmark: PCOS Renamed PMOS to Reflect Systemic Metabolic & Hormonal Reality',
    source: 'The Endocrine Society',
    sourceUrl: 'https://www.endocrine.org/news-and-advocacy/news-room/2026/pcos-name-change',
    publishedDate: '2026 Consensus',
    category: 'research',
    categoryLabel: 'Medical Research Landmark',
    targetStages: ['cycle', 'educator'],
    summary: 'Following an extensive global consensus involving international endocrinologists and patient advocates, Polycystic Ovary Syndrome has been formally renamed Polyendocrine Metabolic Ovarian Syndrome (PMOS) to end diagnostic delays and recognize its whole-body metabolic dimensions.',
    keyHighlights: [
      'Removes the misleading word "cysts" (which were actually harmless arrested follicles).',
      'Highlights "Polyendocrine" and "Metabolic" disturbances like insulin resistance and cardiovascular health.',
      'Urges clinicians to look beyond fertility and treat long-term endocrine, mental, and metabolic wellbeing.'
    ],
    readTime: '5 min read',
    icon: '🔬'
  },
  {
    id: 'india-menopause-workplace-guidelines',
    headline: 'India Menopause Policy: Why Workplace Support Guidelines Are Gaining National Momentum',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/society/india-menopause-policy-women-workplace-support-mini-mathur-lisa-ray-intuit-books-podcast/article69500270.ece',
    publishedDate: '2026 Policy Report',
    category: 'menopause',
    categoryLabel: 'Workplace & Health Policy',
    targetStages: ['menopause'],
    summary: 'With India home to over 130 million menopausal women and an average onset age of 46–47 years (peak career years), leading institutions and corporate bodies are exploring structured menopause workplace accommodations.',
    keyHighlights: [
      'Average menopause onset in India is 46–47 years—coinciding directly with women in senior and leadership roles.',
      'Guidelines introduce flexible work schedules, desk ventilation support, and specialized gynecological coverage.',
      'Advocates push to eliminate the "silent exit" where over 40% of midlife women considered quitting due to unmanaged symptoms.'
    ],
    readTime: '4 min read',
    icon: '🦋',
    isBreaking: true
  },
  {
    id: 'economic-times-menopause-hr-guidelines',
    headline: 'Breaking the Silence: Why Menopause-Specific Guidelines Are Essential in Indian Workplaces',
    source: 'The Economic Times',
    sourceUrl: 'https://hr.economictimes.indiatimes.com/news/breaking-the-silence-why-menopause-specific-guidelines-are-essential-in-indian-workplaces/100638951',
    publishedDate: '2026 HR Focus',
    category: 'menopause',
    categoryLabel: 'Corporate DEI & Policy',
    targetStages: ['menopause'],
    summary: 'An in-depth analysis on why Indian companies are moving beyond standard wellness perks to introduce dedicated perimenopause and menopause healthcare benefits, manager sensitization, and symptom support.',
    keyHighlights: [
      'Addresses severe symptoms like hot flushes, fatigue, and brain fog that affect workplace productivity.',
      'Encourages internal employee support groups and quiet rest zones in modern office spaces.',
      'Positions menopause accommodations as vital for retaining experienced female leadership in India.'
    ],
    readTime: '4 min read',
    icon: '🏢'
  },
  {
    id: 'school-menstrual-hygiene-corners',
    headline: 'States Make Free Sanitary Napkins Mandatory in Schools, Warning of Strict Action for Lapses',
    source: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/india-news/karnataka-makes-free-sanitary-napkins-mandatory-in-schools-warns-of-action-for-lapses-101795433120122.html',
    publishedDate: '2026 Implementation',
    category: 'schools',
    categoryLabel: 'State School Mandate',
    targetStages: ['puberty', 'educator'],
    summary: 'In direct compliance with Supreme Court orders, State education departments have issued mandatory directives instructing every school to provide free sanitary pads to adolescent students and install proper waste disposal units.',
    keyHighlights: [
      'Addresses school absenteeism: Ensures girls never have to leave school mid-day due to sudden period arrival.',
      'Safe disposal covered pedal bins and incinerators mandated in every female restroom block.',
      'Departmental inspections and monitoring committees established to ensure supplies are stocked continuously.'
    ],
    readTime: '3 min read',
    icon: '🎒'
  },
  {
    id: 'who-endometriosis-early-diagnosis',
    headline: 'WHO Global Fact Sheet & Guidelines on Early Diagnosis and Management of Endometriosis',
    source: 'World Health Organization (WHO)',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/endometriosis',
    publishedDate: 'WHO Public Health',
    category: 'research',
    categoryLabel: 'Global Health Priority',
    targetStages: ['cycle', 'educator'],
    summary: 'The World Health Organization has published comprehensive clinical guidance aimed at reducing the diagnostic delay for endometriosis, promoting non-invasive assessments and early symptom management.',
    keyHighlights: [
      'Affects roughly 10% of reproductive-age women globally, yet patients historically face long waits for diagnosis.',
      'Strict clinical guidance: Debilitating period cramps that cause fainting, vomiting, or missing school/work require timely clinical care.',
      'Emphasizes multi-disciplinary care combining hormonal therapies, pain management, and emotional health support.'
    ],
    readTime: '4 min read',
    icon: '🩺'
  },
  {
    id: 'sc-observer-menstrual-facilities-schools',
    headline: 'Supreme Court Directs Pan-India Implementation of Menstrual Health Facilities in Schools',
    source: 'Supreme Court Observer',
    sourceUrl: 'https://www.scobserver.in/journal/supreme-court-directs-implementation-of-menstrual-health-facilities-in-schools/',
    publishedDate: 'Legal Analysis 2026',
    category: 'policy',
    categoryLabel: 'Judicial Case Analysis',
    targetStages: ['puberty', 'cycle', 'educator'],
    summary: 'A detailed judicial tracking of the Supreme Court’s mandamus directing all states to ensure affordable menstrual products, separate toilets, and dignity-centered education for adolescent schoolgirls across India.',
    keyHighlights: [
      'Details the constitutional grounding under Article 21 (Dignity and Right to Life).',
      'Examines state compliance affidavits and mandates for accessible facilities for students with disabilities.',
      'Highlights judicial emphasis on eliminating menstrual poverty in rural and government schools.'
    ],
    readTime: '5 min read',
    icon: '⚖️'
  },
  {
    id: 'the-hindu-menstrual-leave-kerala',
    headline: 'The Caring Period: Menstrual Leave Policies in Educational Institutions and Workplaces',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/kerala/the-caring-period-kerala-governments-proposal-for-menstrual-leave-for-schoolchildren-opens-door-to-a-healthy-debate/article71061168.ece',
    publishedDate: 'Policy Debate 2026',
    category: 'workplace',
    categoryLabel: 'Education & Policy',
    targetStages: ['cycle', 'puberty'],
    summary: 'An exploration of how university attendance condonations and proposed school menstrual leave provisions in Kerala have opened healthy, stigma-free public conversations around biological equity.',
    keyHighlights: [
      'Examines attendance relaxation policies allowing female students flexibility during acute menstrual pain days.',
      'Tracks positive community response and ongoing debate on extending similar support to secondary school students.',
      'Highlights how formal policy helps destigmatize period discussions in educational institutions.'
    ],
    readTime: '4 min read',
    icon: '🌸'
  },
  {
    id: 'livelaw-fundamental-right-directive',
    headline: 'LiveLaw: Right to Menstrual Health is an Integral Part of Article 21, Rules Supreme Court',
    source: 'LiveLaw',
    sourceUrl: 'https://www.livelaw.in/top-stories/menstrual-health-fundamental-right-under-article-21-ensure-girls-get-free-sanitary-pads-in-schools-supreme-court-521230',
    publishedDate: 'Supreme Court Report',
    category: 'policy',
    categoryLabel: 'Constitutional Law',
    targetStages: ['puberty', 'cycle', 'educator'],
    summary: 'LiveLaw’s comprehensive courtroom coverage of the bench comprising Justices J.B. Pardiwala and R. Mahadevan directing pan-India execution of free sanitary pad distributions and school sanitation norms.',
    keyHighlights: [
      'Affirms that inability to access pads or toilets violates young girls’ right to education and personal dignity.',
      'Sets strict deadlines for State Chief Secretaries and Education Secretaries to submit ground compliance reports.',
      'Mandates sensitization programs for teachers and students to eradicate social stigma.'
    ],
    readTime: '4 min read',
    icon: '⚖️'
  }
];
