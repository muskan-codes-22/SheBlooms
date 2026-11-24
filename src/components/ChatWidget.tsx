import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Trash2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { askSheBloom, AssistantMessage, ProgressStep } from '../lib/aiService';
import { useApp } from '../context/AppContext';
import { getStageContent, DEFAULT_STAGE_CONTENT } from '../data/stageContent';

export const ChatWidget: React.FC = () => {
  const location = useLocation();
  const { stage, incrementQuestionsAsked } = useApp();
  const stageContent = getStageContent(stage);
  const starterQuestions = stageContent ? stageContent.starterQuestions : DEFAULT_STAGE_CONTENT.starterQuestions;
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Hello, bloom! 🌸 I am SheBloom, your gentle menstrual health guide. What is on your mind today? No question is silly or awkward here.',
      structured: {
        opener: 'Hello, bloom! 🌸',
        explanation: 'I am SheBloom, your educational menstrual health guide. You can ask me about first periods, cramps, hygiene, cycle phases, or perimenopause.',
        tips: [
          'Ask in your own words — whether short or detailed.',
          'Everything stays private in your device browser.',
          'Based on guidance from WHO and public health literature.'
        ]
      },
      followUps: [
        'Is period pain normal?',
        'What is a normal cycle length?',
        'How do I use a tampon?',
        'What are early signs of first period?'
      ],
      timestamp: 'Just now'
    }
  ]);
  const [currentStep, setCurrentStep] = useState<ProgressStep>('idle');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, currentStep]);

  // HIDE the floating chat button on the /ask page (placed after all hooks to prevent React Hook rules violation)
  if (location.pathname === '/ask') {
    return null;
  }

  // Voice speech recognition
  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser. Please type your question.');
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      if (!isListening) {
        setIsListening(true);
        recognition.start();

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);
      } else {
        setIsListening(false);
      }
    } catch (e) {
      setIsListening(false);
    }
  };

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || currentStep !== 'idle') return;

    const userMsg: AssistantMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const assistantMsgId = `assistant-${Date.now()}`;
    const streamingMsg: AssistantMessage = {
      id: assistantMsgId,
      sender: 'assistant',
      text: '',
      isStreaming: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg, streamingMsg]);
    setInput('');
    incrementQuestionsAsked();

    try {
      const response = await askSheBloom({
        query: textToSend,
        stage: stage || undefined,
        onStepChange: (step) => setCurrentStep(step),
        onPartialText: (partial) => {
          setMessages(prev => prev.map(m => m.id === assistantMsgId ? { ...m, text: partial, isStreaming: true } : m));
        }
      });
      setMessages(prev => prev.map(m => m.id === assistantMsgId ? { ...response, id: assistantMsgId, isStreaming: false } : m));
    } catch (err) {
      console.error(err);
      setCurrentStep('idle');
      setMessages(prev => prev.map(m => m.id === assistantMsgId ? {
        ...m,
        isStreaming: false,
        text: 'I am right here with you, but I had a little connection hiccup. Please ask again in a moment!'
      } : m));
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: `clear-${Date.now()}`,
        sender: 'assistant',
        text: 'Chat cleared. Private session restarted 🌸 What would you like to explore next?',
        followUps: [
          'Is period pain normal?',
          'What is a normal cycle length?',
          'How do I use a tampon?'
        ],
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Bubble - positioned cleanly, slightly smaller */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-raspberry to-violet text-white shadow-soft-pink hover:shadow-lg transition-all"
            aria-label="Ask SheBloom"
          >
            <span className="text-lg leading-none">🌸</span>
            <span className="font-bold text-xs tracking-wide">
              Ask SheBloom
            </span>
          </motion.button>
        )}
      </div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className={`fixed z-50 rounded-2xl glass-card border border-petal dark:border-pink-900/40 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? 'inset-3 sm:inset-6 max-w-4xl mx-auto'
                : 'bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[460px] h-[620px] max-h-[85vh]'
            }`}
          >
            {/* Header */}
            <div className="p-3.5 bg-gradient-to-r from-raspberry to-orchid text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg shadow-inner">
                  🌸
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <span>SheBloom Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" title="Online" />
                  </div>
                  <div className="text-[11px] text-pink-100 flex items-center gap-1">
                    <span>Private · Educational guidance</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-pink-100 transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-pink-100 transition-colors hidden sm:block"
                  title={isExpanded ? 'Minimize' : 'Expand'}
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Live Progress Bar */}
            {currentStep !== 'idle' && (
              <div className="bg-lavender-light dark:bg-plum-night px-4 py-2 border-b border-petal/50 flex items-center justify-between text-xs text-orchid dark:text-pink-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-raspberry border-t-transparent animate-spin" />
                  <span className="font-semibold">
                    {currentStep === 'understanding' && '1. Understanding your question…'}
                    {currentStep === 'searching' && '2. Finding public health guidance…'}
                    {currentStep === 'writing' && '3. Writing a gentle answer…'}
                  </span>
                </div>
                <span className="text-[10px] text-raspberry font-bold">Public Health Aligned</span>
              </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-blush/30 dark:bg-plum-night/60">
              {messages.map((msg, index) => {
                const isBot = msg.sender === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                        isBot
                          ? 'bg-white dark:bg-plum-deep text-plum dark:text-pink-100 border border-petal dark:border-pink-900/40 rounded-tl-sm'
                          : 'bg-raspberry text-white rounded-tr-sm'
                      }`}
                    >
                      {/* Red Flag Doctor Alert */}
                      {msg.structured?.doctorAlert && (
                        <div className="mb-3 p-2.5 rounded-lg bg-coral/15 border border-coral/40 text-coral-dark dark:text-coral-light flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                          <div className="text-xs font-semibold leading-snug">
                            {msg.structured.doctorAlert}
                          </div>
                        </div>
                      )}

                      {/* Bot Answer Rendering */}
                      {msg.isStreaming ? (
                        <div>
                          {msg.text ? (
                            <div className="whitespace-pre-wrap leading-relaxed text-plum/90 dark:text-pink-100">
                              {msg.text}
                              <span className="inline-block w-1.5 h-3.5 ml-1 bg-raspberry animate-pulse align-middle" />
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 py-1 text-xs text-orchid dark:text-pink-300">
                              <span className="w-2 h-2 rounded-full bg-raspberry animate-bounce" />
                              <span className="w-2 h-2 rounded-full bg-raspberry animate-bounce [animation-delay:0.2s]" />
                              <span className="w-2 h-2 rounded-full bg-raspberry animate-bounce [animation-delay:0.4s]" />
                              <span className="italic ml-1 font-medium">SheBloom is writing your answer…</span>
                            </div>
                          )}
                        </div>
                      ) : msg.structured ? (
                        <div className="space-y-2">
                          <p className="font-semibold text-raspberry dark:text-pink-300">
                            {msg.structured.opener}
                          </p>
                          <p className="text-plum/90 dark:text-pink-100">
                            {msg.structured.explanation}
                          </p>
                          {msg.structured.tips.filter(t => t && t.trim().length > 0).length > 0 && (
                            <div className="mt-2 pt-2 border-t border-petal/40 space-y-1.5">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-orchid dark:text-pink-300">
                                Practical Suggestions:
                              </span>
                              <ul className="list-disc pl-4 space-y-1 text-xs">
                                {msg.structured.tips.filter(t => t && t.trim().length > 0).map((tip, idx) => (
                                  <li key={idx}>{tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p>{msg.text}</p>
                      )}

                      {/* Source Badge */}
                      {msg.sourceArticleId && (
                        <div className="mt-3 pt-2 border-t border-petal/40 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Evidence-informed guide</span>
                          </span>
                          <Link
                            to={`/learn/${msg.sourceArticleId}`}
                            onClick={() => setIsOpen(false)}
                            className="text-raspberry font-semibold hover:underline flex items-center gap-0.5"
                          >
                            <span>Read guide</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}

                      {/* AI Powered Badge */}
                      {msg.isAiGenerated && (
                        <div className="mt-2.5 pt-2 border-t border-petal/40 flex items-center justify-between text-[11px]">
                          <span className="text-violet font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-violet" />
                            <span>SheBloom AI</span>
                          </span>
                          <span className="text-[10px] text-orchid font-medium">
                            Friendly & Understanding
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Stage starter question chips: only on initial welcome message (hides after first message) */}
                    {index === 0 && messages.length === 1 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                        {starterQuestions.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(q)}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-lavender/60 dark:bg-plum-deep hover:bg-petal/60 border border-violet/20 text-orchid dark:text-pink-200 transition-colors text-left"
                          >
                            💬 {q}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Follow-up question chips on subsequent bot responses */}
                    {index > 0 && isBot && msg.followUps && msg.followUps.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                        {msg.followUps.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(q)}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-lavender/60 dark:bg-plum-deep hover:bg-petal/60 border border-violet/20 text-orchid dark:text-pink-200 transition-colors text-left"
                          >
                            💬 {q}
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[10px] text-plum/40 dark:text-pink-300/40 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-plum-deep border-t border-petal/60 dark:border-pink-900/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2 rounded-xl transition-colors ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'text-plum/50 hover:text-raspberry dark:text-pink-300 hover:bg-petal/30'
                  }`}
                  title="Voice input"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-blush/60 dark:bg-plum text-xs sm:text-sm text-plum dark:text-pink-100 border border-petal focus:outline-none focus:border-raspberry transition-colors placeholder:text-plum/40 dark:placeholder:text-pink-300/40"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || currentStep !== 'idle'}
                  className="p-2.5 rounded-xl bg-raspberry text-white disabled:opacity-40 hover:bg-raspberry-dark transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Disclaimer */}
              <p className="text-[10px] text-center text-plum/50 dark:text-pink-300/50 mt-2">
                🔒 SheBloom provides educational guidance, not medical diagnosis or treatment.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
