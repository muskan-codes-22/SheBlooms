import { findBestMatch, MatcherResponse } from './matcher';
import { checkSafety } from './safety';

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

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined;

const GROQ_MODELS = ['openai/gpt-oss-20b', 'openai/gpt-oss-120b', 'qwen/qwen3.8-27b'];

const STAGE_CONTEXTS: Record<string, string> = {
  puberty: 'First Period & Puberty (young bloomers / adolescent girls curious or recently started their period). Be extra gentle, comforting, and clear without scary terms.',
  cycle: 'Cycle & Period Care (monthly rhythm, cramp soothing, PMS, fertility awareness, contraception basics).',
  menopause: 'Perimenopause & Menopause (midlife hormonal shifts, hot flushes, sleep comfort, emotional ease).',
  educator: 'Educators & Caregivers (parents, teachers, and mentors guiding young girls with shame-free language).'
};

// Helper to parse streamed Markdown/text answer into structured components
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
      // It's a clean bullet list of tips
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

// Call Groq API with streaming SSE line-by-line
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

  const systemPrompt = `You are SheBloom, a friendly, warm, empathetic, and understanding elder-sister-like friend guide for menstrual and reproductive health.
User life stage context: ${stageDesc}.
The user is speaking to you as a trusting friend. Answer as a kind, caring, deeply understanding friend who listens without judgment.

Formatting & tone rules:
- Start with a warm, caring 1-2 sentence friendly opening acknowledging their specific query.
- Give a reassuring, clear explanation in 1-2 short paragraphs.
- If the user says hello or a greeting ('hi', 'hello', 'hey'), warmly greet them back, let them know you are here to listen and help with any cycle or body questions, and DO NOT include any bullet points or assume unprompted symptoms.
- Only include bullet points ("- ") when the user asks an actual health problem, symptom, or practical product question (2-3 gentle tips).
- If severe symptoms (fainting, vomiting, fever, soaking through a pad in an hour) are mentioned, add a line starting with "Doctor: " with gentle medical advice.
- End with 1-2 friendly follow-up questions starting with "Follow-up: ".
- Use simple, comforting words. Speak like a loving sister or best friend.`;

  for (const model of GROQ_MODELS) {
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
          temperature: 0.65,
          max_tokens: 650
        })
      });

      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = '';
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

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
                // Ignore parse errors on incomplete SSE frames
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
      // Try next model or fallback
    }
  }

  return null;
}

export async function askSheBloom({
  query,
  stage,
  onStepChange,
  onPartialText
}: AskAssistantOptions): Promise<AssistantMessage> {
  // Rapid safety check (crisis/self-harm)
  onStepChange?.('understanding');

  // Check safety triggers (e.g. crisis/self-harm) first
  const safety = checkSafety(query);
  if (safety.isCrisis) {
    onStepChange?.('idle');
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: safety.message,
      structured: {
        opener: 'Dear bloom, please take a gentle breath 🌸',
        explanation: safety.message || 'Please reach out to someone who cares about you or a professional helpline.',
        tips: [
          'Talk with a trusted friend, family member, or doctor right now.',
          'Call a free, confidential helpline: 14416 (Tele-MANAS in India) or local emergency services.',
          'Your health, feelings, and life truly matter.'
        ],
        doctorAlert: 'Crisis Support: Please reach out for caring help immediately.'
      },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }

  // Step 2: Query Groq AI with live streaming or match knowledge base
  onStepChange?.('searching');

  let groqResult = null;
  try {
    groqResult = await callGroqAIStream(query, stage, onPartialText);
  } catch {
    groqResult = null;
  }

  // Fallback to built-in knowledge base if Groq is unavailable
  const matchResult: MatcherResponse = !groqResult
    ? findBestMatch(query, stage)
    : {
        answer: {
          opener: groqResult.opener,
          explanation: groqResult.explanation,
          tips: groqResult.tips,
          doctorAlert: groqResult.doctorAlert || (safety.isRedFlag ? safety.doctorRecommendation : undefined)
        },
        followUps: groqResult.followUps || [],
        safety: {
          isRedFlag: safety.isRedFlag || Boolean(groqResult.doctorAlert),
          isCrisis: false,
          doctorRecommendation: groqResult.doctorAlert || safety.doctorRecommendation
        }
      };

  // Step 3: Fast answer assembly
  onStepChange?.('writing');

  // If using offline fallback and onPartialText was provided, stream word-by-word
  const fullText = groqResult
    ? groqResult.fullRawText
    : `${matchResult.answer.opener}\n\n${matchResult.answer.explanation}`;

  if (!groqResult && onPartialText) {
    const words = fullText.split(' ');
    let current = '';
    for (let i = 0; i < words.length; i++) {
      current += (i === 0 ? '' : ' ') + words[i];
      onPartialText(current);
      await new Promise((r) => setTimeout(r, 14));
    }
  }

  onStepChange?.('idle');

  return {
    id: `msg-${Date.now()}`,
    sender: 'assistant',
    text: fullText,
    structured: matchResult.answer,
    sourceArticleId: matchResult.sourceArticleId,
    followUps: matchResult.followUps,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isAiGenerated: Boolean(groqResult)
  };
}

