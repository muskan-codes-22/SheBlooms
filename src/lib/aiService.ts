import { findBestMatch, MatcherResponse } from './matcher';

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
}

export type ProgressStep = 'understanding' | 'searching' | 'writing' | 'idle';

export interface AskAssistantOptions {
  query: string;
  stage?: string;
  onStepChange?: (step: ProgressStep) => void;
  onPartialText?: (text: string) => void;
}

export async function askSheBloom({
  query,
  stage,
  onStepChange,
  onPartialText
}: AskAssistantOptions): Promise<AssistantMessage> {
  // Step 1: Rapid understanding & intent parsing
  onStepChange?.('understanding');
  await new Promise(r => setTimeout(r, 80));

  // Step 2: Instant knowledge base matching
  onStepChange?.('searching');
  const matchResult: MatcherResponse = findBestMatch(query, stage);
  await new Promise(r => setTimeout(r, 100));

  // Step 3: Fast answer assembly
  onStepChange?.('writing');
  await new Promise(r => setTimeout(r, 50));

  // Stream text word-by-word if onPartialText is provided
  const fullText = `${matchResult.answer.opener}\n\n${matchResult.answer.explanation}`;
  if (onPartialText) {
    const words = fullText.split(' ');
    let current = '';
    for (let i = 0; i < words.length; i++) {
      current += (i === 0 ? '' : ' ') + words[i];
      onPartialText(current);
      await new Promise(r => setTimeout(r, 12));
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
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
}

