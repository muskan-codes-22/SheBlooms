// SheBloom Deterministic Cycle Calculator Utility
// Computes teen-calibrated menstrual cycle projections without server calls.
// Clinical Reference: ACOG Committee Opinion No. 651 / AAP Guideline (adolescent cycle length: 21–45 days).

export interface CycleCalculationResult {
  isValid: boolean;
  errorMessage?: string;
  startDate?: Date;
  startDateFormatted?: string;
  windowStart?: Date;
  windowStartFormatted?: string;
  windowEnd?: Date;
  windowEndFormatted?: string;
  typical28?: Date;
  typical28Formatted?: string;
  daysSinceStart?: number;
  daysUntilTypical?: number;
  daysUntilWindow?: number;
  status?: 'before_window' | 'in_window' | 'over_45_days' | 'future_date';
  message: {
    opener: string;
    explanation: string;
    tips: string[];
    trackerOffer: string;
  };
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_SHORT = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun',
  'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
];

export function formatDatePretty(date: Date): string {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  return `${day} ${month}`;
}

/**
 * Checks if year is a leap year.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Returns number of days in a given month.
 */
export function getDaysInMonth(year: number, monthIndex: number): number {
  if (monthIndex === 1) { // February
    return isLeapYear(year) ? 29 : 28;
  }
  const days30 = [3, 5, 8, 10]; // Apr, Jun, Sep, Nov
  if (days30.includes(monthIndex)) return 30;
  return 31;
}

/**
 * Parses user date string in local timezone.
 * Handles "2 nov", "Nov 2", "2/11", "2nd November", "last Monday", etc.
 * Missing year defaults to the most recent past occurrence of that date.
 */
export function parseUserDate(input: string, referenceDate: Date = new Date()): { date?: Date; error?: string } {
  const text = input.trim().toLowerCase();
  const refYear = referenceDate.getFullYear();

  // 1. Relative dates: "today", "yesterday", "last monday", etc.
  if (text === 'today') {
    return { date: new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate()) };
  }
  if (text === 'yesterday') {
    const d = new Date(referenceDate);
    d.setDate(d.getDate() - 1);
    return { date: new Date(d.getFullYear(), d.getMonth(), d.getDate()) };
  }

  const lastDayMatch = text.match(/\blast\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i);
  if (lastDayMatch) {
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const targetDay = dayNames.indexOf(lastDayMatch[1].toLowerCase());
    const currentDay = referenceDate.getDay();
    let diff = currentDay - targetDay;
    if (diff <= 0) diff += 7; // Go back to last week's day
    const d = new Date(referenceDate);
    d.setDate(d.getDate() - diff);
    return { date: new Date(d.getFullYear(), d.getMonth(), d.getDate()) };
  }

  // 2. Format: "2/11", "02/11", "2-11", "2/11/2026"
  const slashMatch = text.match(/\b(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?\b/);
  if (slashMatch) {
    const day = parseInt(slashMatch[1], 10);
    const month = parseInt(slashMatch[2], 10) - 1; // 0-indexed
    let year = slashMatch[3] ? parseInt(slashMatch[3], 10) : undefined;
    if (year !== undefined && year < 100) year += 2000;

    if (month < 0 || month > 11) {
      return { error: 'Invalid month in date' };
    }

    const testYear = year ?? refYear;
    const maxDays = getDaysInMonth(testYear, month);
    if (day < 1 || day > maxDays) {
      return { error: `Invalid date: ${day} does not exist in this month` };
    }

    if (year === undefined) {
      // Find most recent past occurrence
      let d = new Date(refYear, month, day);
      if (d > referenceDate) {
        d = new Date(refYear - 1, month, day);
      }
      return { date: d };
    } else {
      return { date: new Date(year, month, day) };
    }
  }

  // 3. Formats: "2 nov", "2nd november", "nov 2", "november 2nd"
  // Try pattern: Day Month (Year)
  const dayMonthMatch = text.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+)(?:\s+(\d{2,4}))?\b/i);
  // Try pattern: Month Day (Year)
  const monthDayMatch = text.match(/\b([a-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?(?:\s+(\d{2,4}))?\b/i);

  let rawDay: number | undefined;
  let rawMonthStr: string | undefined;
  let rawYearStr: string | undefined;

  if (dayMonthMatch && isNaN(parseInt(dayMonthMatch[2], 10))) {
    rawDay = parseInt(dayMonthMatch[1], 10);
    rawMonthStr = dayMonthMatch[2];
    rawYearStr = dayMonthMatch[3];
  } else if (monthDayMatch && isNaN(parseInt(monthDayMatch[1], 10))) {
    rawDay = parseInt(monthDayMatch[2], 10);
    rawMonthStr = monthDayMatch[1];
    rawYearStr = monthDayMatch[3];
  }

  if (rawDay !== undefined && rawMonthStr !== undefined) {
    const cleanMonth = rawMonthStr.slice(0, 3).toLowerCase();
    const monthIndex = MONTH_SHORT.indexOf(cleanMonth);
    if (monthIndex === -1) {
      return { error: 'Could not recognize the month name' };
    }

    let year = rawYearStr ? parseInt(rawYearStr, 10) : undefined;
    if (year !== undefined && year < 100) year += 2000;

    const testYear = year ?? refYear;
    const maxDays = getDaysInMonth(testYear, monthIndex);
    if (rawDay < 1 || rawDay > maxDays) {
      return { error: `Invalid date: ${rawDay} ${rawMonthStr} is not a valid calendar day` };
    }

    if (year === undefined) {
      let d = new Date(refYear, monthIndex, rawDay);
      if (d > referenceDate) {
        d = new Date(refYear - 1, monthIndex, rawDay);
      }
      return { date: d };
    } else {
      return { date: new Date(year, monthIndex, rawDay) };
    }
  }

  return { error: 'Could not parse a valid date' };
}

/**
 * Calculates next period window and answers user query with clinical accuracy.
 */
export function calculateNextPeriod(
  dateInput: string, 
  referenceDate: Date = new Date(),
  isPuberty: boolean = true
): CycleCalculationResult {
  const parseResult = parseUserDate(dateInput, referenceDate);
  if (!parseResult.date) {
    return {
      isValid: false,
      errorMessage: parseResult.error || 'Please provide a valid date like "2 Nov" or "Nov 2nd".',
      message: {
        opener: "I'd love to help calculate your next period!",
        explanation: 'Could you share the date your last period started? You can type something like "2 Nov", "Nov 2nd", or "2/11".',
        tips: [
          'Type the day your bleeding first started.',
          'Your dates stay 100% private on your own device.',
          'You can also track your cycle visually using our Cycle Wheel.'
        ],
        trackerOffer: 'Want me to help you start tracking your cycle? Your dates stay on your device.'
      }
    };
  }

  const startDate = parseResult.date;
  const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const refDay = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());

  // Difference in calendar days
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSinceStart = Math.round((refDay.getTime() - startDay.getTime()) / msPerDay);

  if (daysSinceStart < 0) {
    return {
      isValid: false,
      errorMessage: 'The date provided is in the future.',
      message: {
        opener: 'That date appears to be in the future 🌸',
        explanation: 'Period calculations are based on the day your last period started. Please enter a past or current date when your bleeding began.',
        tips: ['Enter the first day of your last period, e.g. "2 Nov".'],
        trackerOffer: 'Track your dates privately on your device anytime with SheBloom.'
      }
    };
  }

  // Windows: Teen range: 21 to 45 days (ACOG/AAP Guideline)
  // Baseline example: 28 days
  const windowStart = new Date(startDay);
  windowStart.setDate(windowStart.getDate() + 21);

  const windowEnd = new Date(startDay);
  windowEnd.setDate(windowEnd.getDate() + 45);

  const typical28 = new Date(startDay);
  typical28.setDate(typical28.getDate() + 28);

  const startFmt = formatDatePretty(startDay);
  const winStartFmt = formatDatePretty(windowStart);
  const winEndFmt = formatDatePretty(windowEnd);
  const typ28Fmt = formatDatePretty(typical28);

  const daysUntilWindow = Math.round((windowStart.getTime() - refDay.getTime()) / msPerDay);
  const daysUntilTypical = Math.round((typical28.getTime() - refDay.getTime()) / msPerDay);

  let status: 'before_window' | 'in_window' | 'over_45_days' = 'before_window';
  let statusExplanation = '';
  const tips: string[] = [];

  if (daysSinceStart > 45) {
    status = 'over_45_days';
    statusExplanation = `It has been ${daysSinceStart} days since your period started on ${startFmt}. While cycle lengths vary naturally and teens frequently experience delays during the first 2–3 years, more than 45 days between periods is a gentle cue to check in with a trusted adult, school nurse, or healthcare provider.`;
    tips.push('Talk gently with a trusted adult, mom, or doctor to check on stress or nutrition.');
    tips.push('Keep noting your dates: irregular cycles are very common while teen hormones mature.');
    tips.push('If you have severe pelvic pain or feel unwell, seek medical advice.');
  } else if (daysSinceStart >= 21) {
    status = 'in_window';
    statusExplanation = `You are currently right inside your expected window (${winStartFmt} to ${winEndFmt}), which is completely normal. Keep a pad or your preferred menstrual product handy in your bag so you feel prepared wherever you are.`;
    tips.push('Pack a small pouch in your school bag with a pad, clean underwear, and a tissue pack.');
    tips.push('Track subtle body signs like mild cramping, breast tenderness, or clear discharge.');
    tips.push('Stay hydrated and get restful sleep to support your body right now.');
  } else {
    status = 'before_window';
    const daysLeft = daysUntilWindow > 0 ? daysUntilWindow : 1;
    statusExplanation = `Your estimated window begins in about ${daysLeft} days (around ${winStartFmt}). If your cycle follows a typical 28-day baseline, expect it around ${typ28Fmt}.`;
    tips.push('Remember that this is an estimate, not a promise—cycles often vary by several days.');
    tips.push('Teen cycles commonly range anywhere from 21 to 45 days.');
    tips.push('Log your Day 1 on a calendar or our Cycle Wheel so you learn your personal rhythm.');
  }

  const opener = `Based on your period starting on ${startFmt}, your next period is expected between ${winStartFmt} and ${winEndFmt}.`;
  const explanation = `${opener} If your cycle follows a 28-day baseline, expect it around ${typ28Fmt}.\n\n${statusExplanation}\n\n*(Note: Cycles in teens typically range from 21 to 45 days and are often irregular for the first 2 to 3 years after menarche. This calculation is an estimate for learning, not a medical diagnosis.)*`;

  return {
    isValid: true,
    startDate: startDay,
    startDateFormatted: startFmt,
    windowStart,
    windowStartFormatted: winStartFmt,
    windowEnd,
    windowEndFormatted: winEndFmt,
    typical28,
    typical28Formatted: typ28Fmt,
    daysSinceStart,
    daysUntilTypical,
    daysUntilWindow,
    status,
    message: {
      opener,
      explanation,
      tips,
      trackerOffer: 'Want me to help you start tracking your cycle? Your dates stay on your device.'
    }
  };
}
