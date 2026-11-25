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
    icon: '⚖️',
    isBreaking: true
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
