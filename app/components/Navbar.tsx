'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    setApiKey(savedKey);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter an API key');
      return;
    }

    localStorage.setItem('gemini_api_key', apiKey.trim());
    toast.success('API key saved successfully!');
    setIsDropdownOpen(false);
  };

  const handleClear = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    toast.success('API key cleared');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black backdrop-blur-lg bg-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl">💀</span>
            <span className="text-lg font-semibold text-black">Response</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              href="#home" 
              className="text-black hover:text-gray-700 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="text-black hover:text-gray-700 font-medium transition-colors"
            >
              Chat
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-black hover:text-gray-700 font-medium transition-colors"
              >
                API Key
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-96 bg-white rounded-xl shadow-xl border-2 border-black z-50">
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">Manage Gemini API Key</h3>
                      <p className="text-sm text-gray-600">
                        Bring your own Gemini API key to use the AI humanizer feature. Get your free key from{' '}
                        <a 
                          href="https://makersuite.google.com/app/apikey" 
                          target="_blank" 
                          className="text-blue-600 underline hover:text-blue-700"
                        >
                          makersuite.google.com
                        </a>
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Gemini API Key
                      </label>
                      <div className="relative">
                        <input
                          type={showKey ? 'text' : 'password'}
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="gsk_..."
                          className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm text-black placeholder-gray-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowKey(!showKey)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                        >
                          {showKey ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={handleClear}
                        className="flex-1 px-4 py-3 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        Clear
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Save & Test
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
