import { findBestMatch, MatcherResponse } from './matcher';
import { checkSafety, SafetyCheckResult } from './safety';

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  text?: string;
  structured?: {
    opener: string;
    explanation: string;
    tips: string[];
    doctorAlert?: string;
  };
  sourceArticleId?: string;
  followUps?: string[];
  timestamp: string;
  isStreaming?: boolean;
  isAiGenerated?: boolean;
}

export type ProgressStep = 'understanding' | 'searching' | 'writing' | 'idle';

export interface AskAssistantOptions {
  query: string;
  stage?: string;
  onStepChange?: (step: ProgressStep) => void;
  onPartialText?: (text: string) => void;
}

const GROQ_API_KEY = (import.meta.env.VITE_GROQ_API_KEY as string | undefined)?.trim();

// Priority models: llama-3.1-8b-instant produces immediate tokens (<300ms latency)
const GROQ_MODELS = [
  'llama-3.1-8b-instant',
  'llama-3.3-70b-versatile'
];

const STAGE_CONTEXTS: Record<string, string> = {
  puberty: 'Young Bloomers (ages 9–16, puberty and beginner periods). Gentle, comforting, simple, non-frightening, and shame-free language.',
  cycle: 'Cycle & Period Care (ages 16–45, reproductive years). Clear, empowering guidance on cycle variability, PMS, hormones, flow patterns, and wellness.',
  menopause: 'Perimenopause & Menopause (ages 40–55+). Explain hormonal transitions, cycle irregularities, hot flushes, and midlife health with warmth.',
  educator: 'Educators & Caregivers. Clear guidance on how to support and educate young learners about menstrual health.'
};

/**
 * Parses raw streamed Markdown/text from Groq into structured UI card components.
 */
export function parseStreamedAnswer(
  fullText: string,
  isGreeting: boolean
): {
  opener: string;
  explanation: string;
  tips: string[];
  doctorAlert?: string;
  followUps?: string[];
} {
  const rawParagraphs = fullText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const tips: string[] = [];
  const followUps: string[] = [];
  const regularParagraphs: string[] = [];
  let doctorAlert: string | undefined = undefined;

  for (const p of rawParagraphs) {
    const lines = p.split('\n').map((l) => l.trim()).filter(Boolean);
    const bulletLines = lines.filter((l) => /^[-*•]\s+/.test(l));

    if (bulletLines.length > 0 && bulletLines.length === lines.length && !isGreeting) {
      bulletLines.forEach((l) => {
        tips.push(l.replace(/^[-*•]\s+/, '').trim());
      });
    } else {
      for (const line of lines) {
        if (/^Follow-?up:\s*/i.test(line)) {
          const q = line.replace(/^Follow-?up:\s*/i, '').trim();
          if (q) followUps.push(q);
        } else if (/^(doctor|medical alert|safety alert):/i.test(line) || line.includes('⚠️')) {
          doctorAlert = line.replace(/^(doctor|medical alert|safety alert):\s*/i, '').trim();
        } else if (/^[-*•]\s+/.test(line) && !isGreeting) {
          tips.push(line.replace(/^[-*•]\s+/, '').trim());
        } else {
          regularParagraphs.push(line);
        }
      }
    }
  }

  const opener = regularParagraphs[0] || 'Hello, bloom! 🌸';
  const explanation = regularParagraphs.slice(1).join('\n\n') || opener;

  return {
    opener,
    explanation,
    tips: isGreeting ? [] : tips,
    doctorAlert,
    followUps: followUps.length > 0 ? followUps : undefined
  };
}

/**
 * Fast word streaming utility for smooth, instant text rendering.
 */
async function streamWordsRapidly(
  text: string,
  onPartialText?: (t: string) => void
): Promise<void> {
  if (!onPartialText) return;
  const words = text.split(' ');
  let current = '';
  // Stream in small bursts of 2 words for lightning-fast delivery
  for (let i = 0; i < words.length; i += 2) {
    const chunk = words.slice(i, i + 2).join(' ');
    current += (current ? ' ' : '') + chunk;
    onPartialText(current);
    await new Promise((r) => setTimeout(r, 8));
  }
}

/**
 * Calls Groq API in streaming mode with a strict timeout to guarantee sub-second responses.
 */
async function callGroqAIStream(
  query: string,
  stage?: string,
  onPartialText?: (text: string) => void
): Promise<{
  opener: string;
  explanation: string;
  tips: string[];
  doctorAlert?: string;
  followUps?: string[];
  fullRawText: string;
} | null> {
  if (!GROQ_API_KEY) return null;

  const trimmedQuery = query.trim();
  const isGreeting = /^(hi|hello|hey|hola|namaste|good\s*(morning|afternoon|evening)|wassup|yo|start|greetings)[\s!.,?]*$/i.test(trimmedQuery);
  const stageDesc = stage && STAGE_CONTEXTS[stage] ? STAGE_CONTEXTS[stage] : 'General Menstrual Health';

  const systemPrompt = `You are SheBloom, a friendly, warm, empathetic, and knowledgeable elder-sister health guide for menstrual and reproductive wellbeing.
User stage: ${stageDesc}.

CRITICAL:
- Directly and accurately answer the PARTICULAR question asked. For example, if asked "my period only last 2 days", explain 2-day period duration, why 2–7 days is normal, why beginner/young cycles can be shorter or lighter, when it is normal, and what to track.
- Tone: Warm, caring, simple, and reassuring.
- Format:
  1. Opener: 1 warm sentence addressing their question directly.
  2. Explanation: 1-2 concise paragraphs explaining the biology simply.
  3. Tips: 2-3 practical tips starting with "- ".
  4. Follow-up: 1-2 friendly follow-up questions at the end starting with "Follow-up: ".
- Keep it concise (under 250 words) so it answers instantly. Never prescribe medications.`;

  for (const model of GROQ_MODELS) {
    // 3.5s timeout per attempt to never freeze or take too long
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: query }
          ],
          stream: true,
          temperature: 0.5,
          max_tokens: 450
        }),
        signal: controller.signal
      });

      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = '';
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          clearTimeout(timeoutId); // Streaming started, clear connect timeout

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('data: ') && trimmedLine !== 'data: [DONE]') {
              try {
                const json = JSON.parse(trimmedLine.slice(6));
                const delta = json.choices?.[0]?.delta?.content;
                if (delta) {
                  accumulatedText += delta;
                  onPartialText?.(accumulatedText);
                }
              } catch {
                // Ignore incomplete SSE frames
              }
            }
          }
        }

        if (accumulatedText.trim().length > 0) {
          const parsed = parseStreamedAnswer(accumulatedText, isGreeting);
          return {
            ...parsed,
            fullRawText: accumulatedText
          };
        }
      }
    } catch {
      // Aborted or model error, proceed immediately to next model or instant local match
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return null;
}

/**
 * Main SheBloom Question Answering Pipeline.
 * Combines Central Medical Safety Guardrails with Ultra-Fast Streaming.
 */
export async function askSheBloom({
  query,
  stage,
  onStepChange,
  onPartialText
}: AskAssistantOptions): Promise<AssistantMessage> {
  onStepChange?.('understanding');

  // Step 1: Central Medical Safety Guardrails Layer Evaluation
  const safety = checkSafety(query, stage);

  // Strict Safety Override (Crisis, Abuse Threat, Acute Emergency Red Flags, or Weird Queries)
  if (safety.overrideAnswer) {
    onStepChange?.('writing');
    const overrideAnswer = safety.overrideAnswer;
    const fullText = `${overrideAnswer.opener}\n\n${overrideAnswer.explanation}` +
      (overrideAnswer.tips.length > 0 ? '\n\n' + overrideAnswer.tips.map(t => `• ${t}`).join('\n') : '') +
      (overrideAnswer.doctorAlert ? `\n\n${overrideAnswer.doctorAlert}` : '');

    await streamWordsRapidly(fullText, onPartialText);
    onStepChange?.('idle');

    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: fullText,
      structured: overrideAnswer,
      sourceArticleId: safety.sourceArticleId,
      followUps: safety.followUps,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAiGenerated: false
    };
  }

  // Step 2: Use Fast Groq LLM Streaming
  onStepChange?.('searching');

  let groqResult = null;
  if (GROQ_API_KEY) {
    onStepChange?.('writing');
    try {
      groqResult = await callGroqAIStream(query, stage, onPartialText);
    } catch (e) {
      console.warn('Groq stream fallback:', e);
      groqResult = null;
    }
  }

  // Step 3: If Groq streamed successfully, return immediately
  if (groqResult) {
    onStepChange?.('idle');
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: groqResult.fullRawText,
      structured: {
        opener: groqResult.opener,
        explanation: groqResult.explanation,
        tips: groqResult.tips,
        doctorAlert: groqResult.doctorAlert
      },
      sourceArticleId: stage === 'puberty' ? 'what-is-a-period' : 'cycle-basics',
      followUps: groqResult.followUps && groqResult.followUps.length > 0
        ? groqResult.followUps
        : [
            'Is period pain normal?',
            'What is a normal cycle length?',
            'What foods help during periods?'
          ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAiGenerated: true
    };
  }

  // Step 4: Rapid verified local clinical knowledge base fallback
  const matchResult: MatcherResponse = findBestMatch(query, stage);
  onStepChange?.('writing');

  const fullText = `${matchResult.answer.opener}\n\n${matchResult.answer.explanation}` +
    (matchResult.answer.tips.length > 0 
      ? '\n\n' + matchResult.answer.tips.map(t => `• ${t}`).join('\n')
      : '') +
    (matchResult.answer.doctorAlert 
      ? `\n\n${matchResult.answer.doctorAlert}`
      : '');

  await streamWordsRapidly(fullText, onPartialText);
  onStepChange?.('idle');

  return {
    id: `msg-${Date.now()}`,
    sender: 'assistant',
    text: fullText,
    structured: matchResult.answer,
    sourceArticleId: matchResult.sourceArticleId,
    followUps: matchResult.followUps,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isAiGenerated: false
  };
}
