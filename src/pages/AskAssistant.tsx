import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, 
  Mic, 
  MicOff, 
  Trash2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { askSheBloom, AssistantMessage, ProgressStep } from '../lib/aiService';
import { useApp } from '../context/AppContext';

export const AskAssistant: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { stage, incrementQuestionsAsked } = useApp();
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState<ProgressStep>('idle');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clean one-line welcome message as requested
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "Hi, I'm SheBloom. Ask me anything about periods or your cycle. It's private and judgment-free.",
      timestamp: 'Just now'
    }
  ]);

  // Exactly 4 starter suggestion chips
  const STARTER_QUESTIONS = [
    'Is period pain normal?',
    'What is a normal cycle length?',
    'How do I use a tampon safely?',
    'What are early signs of my first period?'
  ];

  // Handle URL query ?q=
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      handleSend(q);
    }
  }, [searchParams]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStep]);

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

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    incrementQuestionsAsked();

    try {
      const response = await askSheBloom({
        query: textToSend,
        stage: stage || undefined,
        onStepChange: (step) => setCurrentStep(step)
      });
      setMessages(prev => [...prev, response]);
    } catch (err) {
      console.error(err);
      setCurrentStep('idle');
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: `clear-${Date.now()}`,
        sender: 'assistant',
        text: "Hi, I'm SheBloom. Ask me anything about periods or your cycle. It's private and judgment-free.",
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <div className="min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-10 pb-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
          Ask SheBloom
        </h1>
        <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
          Private, judgment-free answers to your menstrual health questions.
        </p>
      </section>

      {/* Main Chat Interface */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-card border border-petal dark:border-pink-900/50 shadow-soft-purple overflow-hidden flex flex-col h-[580px] max-h-[75vh]">
          
          {/* Chat Window Top Bar */}
          <div className="p-3.5 bg-gradient-to-r from-raspberry to-orchid text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🌸</span>
              <div>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                  <span>SheBloom Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-pink-100 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Private · On-device</span>
                </div>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-[11px] font-semibold text-white transition-colors flex items-center gap-1"
              title="Clear Session History"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-blush/20 dark:bg-plum-night/50">
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
                    {/* Doctor Callout Alert */}
                    {msg.structured?.doctorAlert && (
                      <div className="mb-2.5 p-2.5 rounded-lg bg-coral/15 border border-coral/40 text-coral-dark dark:text-coral-light flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                        <div className="text-[11px] font-semibold leading-snug">
                          {msg.structured.doctorAlert}
                        </div>
                      </div>
                    )}

                    {/* Bot Content */}
                    {msg.structured ? (
                      <div className="space-y-2">
                        <p className="font-bold text-raspberry dark:text-pink-300">
                          {msg.structured.opener}
                        </p>
                        <p className="text-plum/90 dark:text-pink-100">
                          {msg.structured.explanation}
                        </p>

                        {msg.structured.tips.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-petal/50 space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-orchid dark:text-pink-300">
                              Gentle suggestions:
                            </span>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-plum/85 dark:text-pink-100/90">
                              {msg.structured.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p>{msg.text}</p>
                    )}

                    {/* Source Article Badge */}
                    {msg.sourceArticleId && (
                      <div className="mt-2.5 pt-2 border-t border-petal/50 flex items-center justify-between text-xs">
                        <span className="text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Evidence-informed</span>
                        </span>
                        <Link
                          to={`/learn/${msg.sourceArticleId}`}
                          className="text-raspberry font-semibold hover:underline flex items-center gap-1 text-[11px]"
                        >
                          <span>Read guide</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips: Shown only once on the welcome message (exactly 4 chips) */}
                  {index === 0 && messages.length === 1 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 max-w-[90%]">
                      {STARTER_QUESTIONS.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(q)}
                          className="text-[11px] px-3 py-1 rounded-lg bg-white/80 dark:bg-plum-deep hover:bg-petal border border-petal text-plum/80 dark:text-pink-200 transition-colors text-left"
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

          {/* Bottom Input Area */}
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
                className={`p-2 rounded-xl transition-all ${
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
                placeholder="Ask any question about periods, cramps, puberty..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-blush/60 dark:bg-plum text-xs sm:text-sm text-plum dark:text-pink-100 border border-petal focus:outline-none focus:border-raspberry transition-colors placeholder:text-plum/40 dark:placeholder:text-pink-300/40"
              />

              <button
                type="submit"
                disabled={!input.trim() || currentStep !== 'idle'}
                className="px-4 py-2 rounded-xl bg-raspberry text-white font-bold text-xs disabled:opacity-40 hover:bg-raspberry-dark transition-all shadow-xs flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Clean one-line disclaimer under input */}
            <p className="text-[10px] text-center text-plum/50 dark:text-pink-300/50 mt-1.5">
              🔒 SheBloom provides educational guidance, not medical diagnosis or treatment.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
