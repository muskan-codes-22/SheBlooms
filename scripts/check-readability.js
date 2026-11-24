// Simple readability checker for articles.ts and qa.ts
// Calculates average sentence length (words/sentence) and flags sentences > 25 words.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function extractStrings(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  // Match single or double quoted or backtick strings (multiline)
  const stringRegex = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g;
  const matches = code.match(stringRegex) || [];
  
  const textStrings = [];
  for (const raw of matches) {
    // Strip quotes
    const str = raw.slice(1, -1)
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\n/g, ' ')
      .trim();

    // Skip short identifiers, keys, single words, URLs, icons, colors
    if (
      str.length > 20 &&
      !str.startsWith('#') &&
      !str.startsWith('http') &&
      !str.includes('import ') &&
      !str.includes('export ') &&
      !str.includes('{') &&
      str.includes(' ')
    ) {
      textStrings.push(str);
    }
  }
  return textStrings;
}

function analyzeText(textStrings, label) {
  const sentences = [];

  for (const text of textStrings) {
    // Clean common abbreviations so they don't break sentences
    const cleaned = text
      .replace(/\be\.g\./gi, 'eg')
      .replace(/\bi\.e\./gi, 'ie')
      .replace(/\bvs\./gi, 'vs')
      .replace(/(\d+)\.(\d+)/g, '$1_$2') // decimals like 0.5
      .replace(/\.\.\./g, ' ');

    // Split on sentence terminals . ! ? followed by space or end
    const rawSentences = cleaned.split(/(?<=[.!?])\s+/);
    for (const s of rawSentences) {
      const trimmed = s.trim().replace(/[_]/g, '.');
      if (trimmed.length > 3) {
        // Count words
        const words = trimmed.split(/\s+/).filter(w => w.length > 0);
        if (words.length > 1) {
          sentences.push({ text: trimmed, wordCount: words.length });
        }
      }
    }
  }

  const totalSentences = sentences.length;
  const totalWords = sentences.reduce((sum, s) => sum + s.wordCount, 0);
  const avgLength = totalSentences > 0 ? (totalWords / totalSentences).toFixed(1) : 0;
  const longSentences = sentences.filter(s => s.wordCount > 25);

  console.log(`\n========================================`);
  console.log(`Readability Analysis: ${label}`);
  console.log(`========================================`);
  console.log(`Total sentences analyzed: ${totalSentences}`);
  console.log(`Total words:              ${totalWords}`);
  console.log(`Average sentence length:  ${avgLength} words/sentence`);
  console.log(`Sentences > 25 words:     ${longSentences.length} (${((longSentences.length / totalSentences) * 100).toFixed(1)}%)`);
  if (longSentences.length > 0) {
    console.log('--- Sentences over 25 words: ---');
    longSentences.forEach((s, idx) => console.log(`${idx + 1}. [${s.wordCount} words] ${s.text}`));
  }

  return { totalSentences, totalWords, avgLength, longCount: longSentences.length, longSentences };
}

console.log('--- SHEBLOOMS READABILITY CHECK ---');
const articlesPath = path.join(rootDir, 'src', 'data', 'articles.ts');
const qaPath = path.join(rootDir, 'src', 'data', 'qa.ts');

const articleStrings = extractStrings(articlesPath);
const qaStrings = extractStrings(qaPath);

const articleRes = analyzeText(articleStrings, 'articles.ts');
const qaRes = analyzeText(qaStrings, 'qa.ts');

const combinedSentences = articleRes.totalSentences + qaRes.totalSentences;
const combinedWords = articleRes.totalWords + qaRes.totalWords;
const combinedAvg = (combinedWords / combinedSentences).toFixed(1);
const combinedLong = articleRes.longCount + qaRes.longCount;

console.log(`\n========================================`);
console.log(`COMBINED (articles.ts + qa.ts)`);
console.log(`========================================`);
console.log(`Total Sentences:         ${combinedSentences}`);
console.log(`Total Words:             ${combinedWords}`);
console.log(`Average Sentence Length: ${combinedAvg} words/sentence`);
console.log(`Sentences > 25 words:    ${combinedLong} (${((combinedLong / combinedSentences) * 100).toFixed(1)}%)`);
