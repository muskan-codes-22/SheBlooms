export interface EducationalVideo {
  id: string; // YouTube video ID
  title: string;
  source: string; // Channel or creator name
  duration: string;
  tag: string;
  description: string;
  fullDescription: string;
  keyTakeaways: string[];
}

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  {
    id: 'ayzN5f3qN8g',
    title: 'How Menstruation Works',
    source: 'TED-Ed (Emma Bryce)',
    duration: '4:10',
    tag: 'Cycle Biology',
    description: 'A gentle, animated scientific journey showing how hormones coordinate the menstrual cycle each month.',
    fullDescription: 'Every month, a remarkable chemical dance takes place in the human body. This beautifully animated lesson breaks down the biological role of the ovaries, the buildup of the endometrial cushion, and how falling progesterone triggers a period when an egg remains unfertilized.',
    keyTakeaways: [
      'Menstruation is the natural shedding of the uterine lining (endometrium).',
      'The cycle is governed by hormonal dialogue between the brain and ovaries.',
      'It is a vital sign of reproductive health, completely clean and biological.',
    ],
  },
  {
    id: 'NOaeKRft-gc',
    title: '3 Things That Can Cause Painful Periods',
    source: 'TED-Ed (Chen X. Chen)',
    duration: '5:00',
    tag: 'Pain & Relief',
    description: 'Understand the biological causes of menstrual cramps, prostaglandins, and when to seek medical support.',
    fullDescription: 'Why do so many menstruators experience intense pain during their cycle? Explore the biological chemistry behind dysmenorrhea: how hormone-like chemicals called prostaglandins cause uterine muscle contractions, and how conditions like endometriosis differ from ordinary cramps.',
    keyTakeaways: [
      'Mild to moderate cramps are caused by prostaglandins causing uterine contractions.',
      'Severe pain that prevents daily activities or does not respond to medication is not normal.',
      'Always advocate for your comfort and consult a healthcare professional for persistent pain.',
    ],
  },
  {
    id: 'kmWbOC8Fbb0',
    title: 'Period Hygiene: Tampons, Pads & Cups',
    source: 'AMAZE Org',
    duration: '3:20',
    tag: 'Hygiene & Products',
    description: 'Friendly, stigma-free introduction to choosing and using pads, tampons, and menstrual cups safely.',
    fullDescription: 'Navigating period care shouldn\'t feel intimidating. This friendly, inclusive animation walks through all major menstrual hygiene products—disposable pads, tampons, reusable cloth pads, and silicone menstrual cups—explaining how to insert, change, and wear them comfortably.',
    keyTakeaways: [
      'There is no "right" product—choose whatever feels comfortable and accessible for your body.',
      'Change pads every 4 to 6 hours and tampons every 4 to 8 hours to maintain fresh hygiene.',
      'Always wash hands before and after changing any menstrual hygiene product.',
    ],
  },
  {
    id: 'cjbgZwgdY7Q',
    title: 'Why Do Women Have Periods?',
    source: 'TED-Ed (Astrid Hermelin)',
    duration: '4:35',
    tag: 'Body Science',
    description: 'The fascinating evolutionary biology behind why the human body sheds its uterine lining.',
    fullDescription: 'Humans are among only a few mammalian species on Earth that menstruate. Discover the intriguing evolutionary battle between the invasive human embryo and the protective maternal uterine wall, and why our bodies evolved this monthly cyclical renewal.',
    keyTakeaways: [
      'Humans are one of the rare species with "covert" and active menstruation.',
      'The thick uterine lining evolved to protect the mother and test embryo viability.',
      'Menstruation is a sophisticated evolutionary defense, not a design flaw.',
    ],
  },
];
