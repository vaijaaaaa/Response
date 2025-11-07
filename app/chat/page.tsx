'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

type Tone = 'casual' | 'professional' | 'friendly';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [tone, setTone] = useState<Tone>('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [showToneDropdown, setShowToneDropdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowToneDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (input.length > 5000) {
      toast.error('Text exceeds 5,000 character limit');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const savedApiKey = localStorage.getItem('gemini_api_key') || '';
      
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: userMessage.content,
          tone: tone,
          apiKey: savedApiKey
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to humanize text');
        setIsLoading(false);
        return;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.humanizedText,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const toneDescriptions = {
    casual: 'Relaxed and conversational',
    professional: 'Formal and polished',
    friendly: 'Warm and approachable'
  };

  return (
    <div className="flex flex-col h-screen bg-white">
   
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

    
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-7xl mb-6">💀</div>
              <h1 className="text-4xl font-bold text-black mb-3">
                Response AI
              </h1>
              <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
                Transform AI-generated text into natural, human-like writing
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                  <div className="text-2xl mb-2">✍️</div>
                  <h3 className="font-semibold text-sm mb-1">Natural Writing</h3>
                  <p className="text-xs text-gray-600">Removes robotic patterns</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-sm mb-1">Tone Control</h3>
                  <p className="text-xs text-gray-600">Match your style</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-sm mb-1">Fast Results</h3>
                  <p className="text-xs text-gray-600">Instant processing</p>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                    message.role === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-black border border-gray-200'
                  }`}
                >
                  <div className="whitespace-pre-wrap wrap-break-word text-[15px] leading-relaxed">
                    {message.content}
                  </div>
                  
                  {message.role === 'assistant' && (
                    <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard(message.content)}
                        className="text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-1.5 text-gray-700"
                        title="Copy to clipboard"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-5 py-3 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">Humanizing...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

   
      <div className="border-t border-gray-200 bg-white px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-3xl px-3 py-2 focus-within:border-gray-400 transition-colors">
         
              <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowToneDropdown(!showToneDropdown)}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 whitespace-nowrap"
                  title="Select tone"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="capitalize">{tone}</span>
                  <svg className={`w-3 h-3 transition-transform ${showToneDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showToneDropdown && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
                    <div className="p-2">
                      {(['casual', 'professional', 'friendly'] as Tone[]).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setTone(t);
                            setShowToneDropdown(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                            tone === t
                              ? 'bg-gray-100 text-black font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium capitalize">{t}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{toneDescriptions[t]}</div>
                            </div>
                            {tone === t && (
                              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

         
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Paste your AI-generated text here..."
                className="flex-1 bg-transparent resize-none focus:outline-none text-black placeholder-gray-400 max-h-40 text-[15px] py-2"
                rows={1}
                disabled={isLoading}
              />

          
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0 p-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black"
                title="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
          
          <div className="mt-2 px-2 flex items-center justify-between text-xs text-gray-500">
            <span>Press Enter to send, Shift+Enter for new line</span>
            <span>{input.length} / 5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}