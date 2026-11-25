import { findBestMatch, MatcherResponse } from './matcher';
import { SafetyCheckResult } from './safety';

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

/**
 * Main Ask SheBloom Assistant Pipeline.
 * 
 * 100% local, deterministic, and privacy-first.
 * Strictly uses locally stored, clinically reviewed Q&A data and the Central Medical Safety Layer.
 * Zero external LLMs, zero third-party APIs, zero telemetry, and zero tracking.
 */
export async function askSheBloom({
  query,
  stage,
  onStepChange,
  onPartialText
}: AskAssistantOptions): Promise<AssistantMessage> {
  // Step 1: Understanding & Safety Check
  onStepChange?.('understanding');

  // Step 2: Clinical Match & Safety Layer Evaluation
  onStepChange?.('searching');
  const matchResult: MatcherResponse = findBestMatch(query, stage);

  // Step 3: Fast, gentle text assembly
  onStepChange?.('writing');

  // Format full combined text
  const fullText = `${matchResult.answer.opener}\n\n${matchResult.answer.explanation}` +
    (matchResult.answer.tips.length > 0 
      ? '\n\n' + matchResult.answer.tips.map(t => `• ${t}`).join('\n')
      : '') +
    (matchResult.answer.doctorAlert 
      ? `\n\n${matchResult.answer.doctorAlert}`
      : '');

  // Simulate gentle conversational word-by-word streaming for smooth visual UX
  if (onPartialText) {
    const words = fullText.split(' ');
    let current = '';
    for (let i = 0; i < words.length; i++) {
      current += (i === 0 ? '' : ' ') + words[i];
      onPartialText(current);
      // Fast, comfortable reading speed
      await new Promise((r) => setTimeout(r, 12));
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
    isAiGenerated: false
  };
}
