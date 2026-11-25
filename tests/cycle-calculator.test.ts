// Unit tests for SheBloom Cycle Calculator & Intent Detection Engine
import { parseUserDate, calculateNextPeriod, isLeapYear, getDaysInMonth } from '../src/lib/cycleCalculator';
import { classifyIntent, extractDateString } from '../src/lib/intent';

let passCount = 0;
let failCount = 0;

function assert(cond: boolean, name: string, detail?: string) {
  if (cond) {
    console.log(`  ✓ PASS: ${name}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${name} ${detail ? `(${detail})` : ''}`);
    failCount++;
  }
}

console.log('\n--- 1. DATE PARSING & LEAP YEAR TESTS ---');

// Leap Year
assert(isLeapYear(2024) === true, '2024 is a leap year');
assert(isLeapYear(2026) === false, '2026 is not a leap year');
assert(isLeapYear(2000) === true, '2000 is a leap year (century div by 400)');
assert(isLeapYear(1900) === false, '1900 is not a leap year (century not div by 400)');

assert(getDaysInMonth(2024, 1) === 29, 'Feb 2024 has 29 days');
assert(getDaysInMonth(2026, 1) === 28, 'Feb 2026 has 28 days');

// Reference Date: 25 Nov 2026
const refDate = new Date(2026, 10, 25); // Nov 25, 2026

// Valid formats
{
  const p1 = parseUserDate('2 nov', refDate);
  assert(p1.date !== undefined && p1.date.getDate() === 2 && p1.date.getMonth() === 10 && p1.date.getFullYear() === 2026, 'Parses "2 nov" with implicit current year');

  const p2 = parseUserDate('Nov 2', refDate);
  assert(p2.date !== undefined && p2.date.getDate() === 2 && p2.date.getMonth() === 10, 'Parses "Nov 2"');

  const p3 = parseUserDate('2/11', refDate);
  assert(p3.date !== undefined && p3.date.getDate() === 2 && p3.date.getMonth() === 10, 'Parses "2/11" (day/month)');

  const p4 = parseUserDate('2nd November', refDate);
  assert(p4.date !== undefined && p4.date.getDate() === 2 && p4.date.getMonth() === 10, 'Parses "2nd November"');

  const p5 = parseUserDate('yesterday', refDate);
  assert(p5.date !== undefined && p5.date.getDate() === 24 && p5.date.getMonth() === 10, 'Parses "yesterday"');
}

// Missing year future wrap-around (e.g. if today is 15 Jan 2026 and user says "20 Dec", it should be Dec 2025)
{
  const janRef = new Date(2026, 0, 15); // 15 Jan 2026
  const p = parseUserDate('20 dec', janRef);
  assert(p.date !== undefined && p.date.getFullYear() === 2025 && p.date.getMonth() === 11 && p.date.getDate() === 20, 'Omitted year falls back to previous year if date is in future');
}

// Month boundaries & invalid dates
{
  const invalidFeb = parseUserDate('31 feb', refDate);
  assert(invalidFeb.error !== undefined, 'Rejects invalid date "31 feb"');

  const invalidApr = parseUserDate('31 april', refDate);
  assert(invalidApr.error !== undefined, 'Rejects invalid date "31 april"');

  const invalidDay = parseUserDate('35 nov', refDate);
  assert(invalidDay.error !== undefined, 'Rejects invalid date "35 nov"');
}

console.log('\n--- 2. CYCLE CALCULATION WINDOWS & STATUS ---');

// Case A: User got period on 2 Nov 2026, today is 25 Nov 2026 (23 days elapsed)
{
  const res = calculateNextPeriod('2 nov', refDate);
  assert(res.isValid === true, 'Calculation succeeded for "2 nov"');
  assert(res.startDateFormatted === '2 November', 'Start date formatted correctly');
  assert(res.windowStartFormatted === '23 November', 'Window start is 2 + 21 = 23 Nov');
  assert(res.windowEndFormatted === '17 December', 'Window end is 2 Nov + 45 days = 17 Dec');
  assert(res.typical28Formatted === '30 November', 'Typical 28-day baseline is 30 Nov');
  assert(res.status === 'in_window', 'Status is "in_window" because 23 days have passed (between 21 and 45)');
  assert(res.message.explanation.includes('23 November') && res.message.explanation.includes('17 December'), 'Explanation includes range 23 Nov to 17 Dec');
  assert(res.message.trackerOffer.includes('Cycle Wheel') || res.message.trackerOffer.includes('device'), 'Offers tracker link on device');
}

// Case B: Period started 5 days ago (before window)
{
  const res = calculateNextPeriod('20 nov', refDate);
  assert(res.status === 'before_window', 'Status is "before_window"');
  assert(res.message.explanation.includes('begins in about'), 'Mentions days until window');
}

// Case C: Period started 50 days ago (>45 days)
{
  const pastRef = new Date(2026, 10, 25);
  const res = calculateNextPeriod('1 oct', pastRef);
  assert(res.status === 'over_45_days', 'Status is "over_45_days"');
  assert(res.message.explanation.includes('trusted adult') || res.message.explanation.includes('doctor'), 'Gently suggests trusted adult or doctor');
}

console.log('\n--- 3. INTENT CLASSIFICATION TESTS ---');

{
  const q1 = classifyIntent('hey i got my periods on 2 nov when will i get my next period');
  assert(q1.intent === 'date_prediction', 'Query 1: Classified as date_prediction');
  assert(q1.extractedDateStr === '2 nov', 'Query 1: Extracted date "2 nov"');

  const q2 = classifyIntent('when is my period due');
  assert(q2.intent === 'date_prediction', 'Query 2: "when is my period due" -> date_prediction');

  const q3 = classifyIntent('my period is 10 days late');
  assert(q3.intent === 'date_prediction', 'Query 3: "my period is 10 days late" -> date_prediction');

  const q4 = classifyIntent('I hate getting my period');
  assert(q4.intent === 'emotional_support', 'Query 4: "I hate getting my period" -> emotional_support');

  const q5 = classifyIntent('why do periods happen');
  assert(q5.intent === 'definition_or_science', 'Query 5: "why do periods happen" -> definition_or_science (NOT emotional_support)');

  const q6 = classifyIntent('how do I use a pad');
  assert(q6.intent === 'how_to', 'Query 6: "how do I use a pad" -> how_to');

  const q7 = classifyIntent('is period pain normal');
  assert(q7.intent === 'symptom_check', 'Query 7: "is period pain normal" -> symptom_check');

  const q8 = classifyIntent('what is the capital of France');
  assert(q8.intent === 'out_of_scope', 'Query 8: "what is the capital of France" -> out_of_scope');

  const q9 = classifyIntent('asdfgh');
  assert(q9.intent === 'unclear', 'Query 9: "asdfgh" -> unclear');

  const q10 = classifyIntent('How do I recognize my ovulation window?');
  assert(q10.intent === 'date_prediction' || q10.intent === 'definition_or_science', 'Query 10: "How do I recognize my ovulation window?" classified cleanly');
}

console.log(`\nTEST SUMMARY: ${passCount} PASSED, ${failCount} FAILED\n`);
if (failCount > 0) process.exit(1);
