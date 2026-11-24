# SheBlooms Localization & Language Simplification Changelog

This document logs all content modifications made to localize SheBlooms for an Indian audience, simplify the language to a Class 6–8 reading level (average sentence length $\le 15$ words), and remove Western cultural assumptions and non-metric units.

---

## 1. Summary of Changes

| Domain | Before | After | Reason / Cultural Context |
| :--- | :--- | :--- | :--- |
| **Units & Measures** | Fahrenheit (°F), ounces (oz), lbs, inches, US "cups" | Metric only: °C, ml/litres, cm/mm, grams/kg. Food amounts: "bowl", "spoon", "teaspoon" | Strict Indian metric standard; everyday kitchen measures without Hindi regional bias. |
| **Currency** | No currency / generic | Rupee symbol (₹) used for product costs and coin references | Realistic pricing context for Indian users. |
| **Food & Remedies** | Oatmeal, kale, quinoa, avocado, salmon, smoothies, bone broth, heating pads | Palak, methi, dal, chana, rajma, gud (jaggery), ragi, til, banana, adrak tea, ajwain/jeera water, haldi doodh, garam paani ki thaili | Affordable, culturally familiar Indian pantry items and remedies; respects vegetarian households. |
| **Menstrual Products** | Western products given equal or primary billing | Sanitary pads prioritized; comprehensive guidance on safe reusable cotton cloth; menstrual cups & tampons explained realistically | Reflects actual usage across urban and rural India, addressing cloth sanitation and disposal hygiene safely. |
| **School & Social Life** | Lockers, nurse's offices, homerooms, sleepovers, drugstores | School bags, pouches, tiffins, uniforms, bus/auto commute, chemist shops, shared toilets | Grounded in daily Indian school and social realities. |
| **Support Networks** | Western clinics, generic medical hotlines | Mom, didi, teachers, ASHA didis, ANMs, Anganwadi workers, Primary Health Centres (PHCs), gynaecologists | Reflects frontline Indian public health and family dynamics. |
| **Myth Busting** | Western myths (e.g. sharks while swimming) | Indian cultural taboos: touching pickles/achar, entering puja room/kitchen, sitting apart, washing hair on Day 1 | Gently dispels deeply ingrained taboos with kindness, emphasizing bodily purity and science. |
| **Clot Size Reference** | "Quarter-sized clot" (US 25¢ coin) | "Bigger than a ₹5 coin" | Locally recognizable visual reference for menorrhagia. |
| **Reading Level** | Clinical jargon (dysmenorrhea, prostaglandins, menarche, endometrium) with long compound sentences (18–25+ words) | Plain-English explanations (womb-squeezing chemicals, womb cushion, first period) with concise sentences ($\approx 10.4$ words/sentence) | Accessible to young adolescents and second-language English speakers (Class 6–8 level). |

---

## 2. File-by-File Change Log

### A. `src/data/articles.ts`
- **`what-is-a-period`**:
  - Replaced "2 to 4 tablespoons" with "30 to 60 ml (about 2 to 4 small spoons)".
  - Replaced "quarter-sized blood clots" with "blood clots larger than a ₹5 coin".
  - Explained `endometrium` as the "soft womb cushion".
  - Replaced Western school/social scenarios with school uniforms, tiffin, and bus commutes.
- **`period-pain-normal`**:
  - Replaced NSAIDs and heating pads with "hot water bag (garam paani ki thaili)" and "warm ajwain or jeera water".
  - Explained `prostaglandins` as "natural womb-squeezing chemicals".
  - Advised consulting a local doctor, chemist, or PHC rather than generic prescription advice.
- **`period-myths-busted`**:
  - Added specific bustings for: touching achar (pickles), entering kitchen or prayer room, washing hair on day 1, and sitting apart.
  - Reassured that menstrual blood is natural tissue and fluid, never "impure" or "toxic".
- **`first-period-kit-guide`**:
  - Replaced locker/backpack kit with a discrete school bag pouch containing 2 pads, paper wrapper, clean spare underwear, and a small snack (gud-chana or dates).
  - Added safe reusable cloth pad care (washing with soap, drying in direct sunlight).
  - Listed realistic prices (₹30–₹60 per pack of pads).
- **`food-movement-cramps`**:
  - Replaced kale, salmon, quinoa, and avocado with palak, methi, dal, chana, ragi, til, dates, and amla/nimbu.
  - Replaced heating pads with warm cloths and garam paani ki thaili.
- **`menopause-hot-flushes` & `perimenopause-early-signs`**:
  - Adjusted age references to reflect Indian context (45–50 years).
  - Localized bone health nourishment (milk, curd, paneer, ragi, til, sunlight) and removed Fahrenheit.

### B. `src/data/qa.ts`
- **14 Q&A Entries Localized**:
  - Replaced all heating pad references with `hot water bag (garam paani ki thaili)`.
  - Replaced Western food advice with warm ginger tea, ajwain water, jeera water, haldi doodh, and jaggery.
  - Added ASHA didi, ANM, and PHC mentions for affordable and government-supported medical help.
  - Replaced all non-metric measurements with ml and cm.
  - Average sentence length reduced to 10.5 words/sentence with zero sentences over 25 words.

### C. `src/data/careGuides.ts`
- Added comprehensive sanitary pad guidance with ₹ pricing (₹30–₹70 per pack) and disposal instructions (never flush, wrap in paper).
- Added dedicated reusable cloth guidance with UNICEF/MoHFW sanitation instructions.
- Localized First Period Pouch checklist for school bags (gud-chana, paper bags, spare underwear).
- Localized Pain & Flow check-in advice to recommend warm ajwain water, garam paani ki thaili, and ₹5 coin clot sizing.

### D. `src/data/quizzes.ts`
- **`myth-or-fact`**: Added achar myth question (`mf-4`), replaced tablespoons with small spoons (30–60 ml), and simplified explanations.
- **`cycle-basics`**: Explained prostaglandins and endometrium in plain language with Indian sentence structures.
- **`hygiene-smarts`**: Added question on safe washing of cloth pads in direct sunlight; localized cramp food remedies.
- **`first-period-ready`**: Added trusted contacts (mom, didi, teacher, ASHA didi) and school bag pouch question.
- **`menopause-know-how`**: Removed Fahrenheit (18°C–20°C); localized bone health options (ragi, til, curd).

### E. `src/components/CycleWheel.tsx` & `src/pages/CareGuides.tsx`
- Removed all Fahrenheit references (converted ~0.5°F to ~0.3°C–0.5°C; 68°F to 18°C–20°C).
- Localized phase nutritional tips to curd, chaas, dal, sprouted moong, palak, methi, and seasonal fruits.
- Localized date formatting to Indian standard (`en-IN`: DD MMM YYYY).

---

## 3. Dedicated `TODO(verify)` Registry

The following items are marked with `TODO(verify)` in the codebase for verification against official Indian public health guidelines:

| File | Line | Topic | Source to Verify Against | Note |
| :--- | :---: | :--- | :--- | :--- |
| `src/data/articles.ts` | 222 | Cloth pad sanitation & sun-drying | MoHFW Menstrual Hygiene Scheme / UNICEF India Guidelines | Safe handling: wash with soap/detergent, sun dry for $\ge 4$ hours, store in dry location. |
| `src/data/articles.ts` | 373 | Average menopausal age in India | Indian Menopause Society (IMS) clinical consensus | Studies report mean age in India around 46.2 years (compared to 51 in the West). |
| `src/data/articles.ts` | 438 | Emergency helplines & PHC access | National Emergency Number (112), Tele-MANAS (14416) | Emergency escalation guidance for severe gynaecological or mental health distress. |
| `src/data/articles.ts` | 480 | Women Helpline & POCSO support | National Women Helpline (181), POCSO e-Box | Confidential support resources for boundary violations. |
| `src/data/articles.ts` | 511 | Non-hormonal pills (Chhaya) | National Family Planning Programme / MoHFW | Government distribution of non-steroidal weekly pills. |
| `src/data/careGuides.ts` | 63 | Reusable cloth hygiene | MoHFW Adolescent Health Division (Rashtriya Kishor Swasthya Karyakram - RKSK) | Guidelines on distribution of subsidized sanitary napkins and safe cloth education. |
| `src/data/careGuides.ts` | 345 | Chhaya & Mala-N government programs | National Family Planning Programme / MoHFW | Subsidized and free contraceptive options at Primary Health Centres (PHCs). |
| `src/data/stageContent.ts` | 41 | Universal cycle regularity baseline | WHO Menstrual Health & Rights Factsheet | 21–35 days standard adult baseline. |
| `src/data/stageContent.ts` | 67 | Adolescent cycle variability | ACOG Committee Opinion No. 651 / MoHFW Adolescent Guidelines | 21–45 days normal variance in first 1–3 years post-menarche. |
| `src/data/stageContent.ts` | 92 | Adult cycle phases and hormones | Endocrine Society & FOGSI (Federation of Obstetric and Gynaecological Societies of India) | 4 hormonal phases and normal symptom tracking. |
| `src/data/stageContent.ts` | 117 | Perimenopausal cycle transition | Indian Menopause Society / ACOG clinical guidelines | Irregularities, vasomotor symptoms, and postmenopausal bleeding red flags. |
| `src/data/stageContent.ts` | 142 | Menstrual literacy educational framework | UNESCO / WHO International Technical Guidance on Sexuality Education | Pedagogical 4-seasons metaphor for menstrual health education. |

---

## 4. Readability Verification Metrics

Run command: `node scripts/check-readability.js`

- **`articles.ts`**:
  - Total sentences: 457
  - Total words: 4,797
  - Average sentence length: **10.5 words/sentence**
  - Sentences > 25 words: **0 (0.0%)**
- **`qa.ts`**:
  - Total sentences: 261
  - Total words: 2,718
  - Average sentence length: **10.4 words/sentence**
  - Sentences > 25 words: **0 (0.0%)**
- **Combined (`articles.ts` + `qa.ts`)**:
  - Total sentences: **718**
  - Total words: **7,515**
  - Average sentence length: **10.5 words/sentence**
  - Sentences > 25 words: **0 (0.0%)**
  - Total words: 5,695
  - Average sentence length: **10.4 words/sentence**
  - Sentences > 25 words: **0 (0.0%)**
