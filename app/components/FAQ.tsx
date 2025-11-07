'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is AI text humanization?",
      answer: "AI text humanization transforms robotic, overly formal AI-generated content into natural, conversational text that sounds like it was written by a real person. It removes common AI patterns and adds human-like imperfections and personality."
    },
    {
      question: "How does the tone selection work?",
      answer: "You can choose from three tones: Casual (for friendly chats and social media), Professional (for job applications and business emails), or Friendly (for approachable yet polished content). Each tone adjusts the writing style accordingly."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! We don't store any of your input text. Your content is processed in real-time through Google's Gemini AI and immediately discarded after humanization. We never save, share, or use your data for training."
    },
    {
      question: "Can I use this for job applications?",
      answer: "Absolutely! Our humanizer is perfect for making AI-generated cover letters, resumes, and application responses sound more authentic and personal. Choose the 'Professional' tone for best results."
    },
    {
      question: "Is there a limit to how much text I can humanize?",
      answer: "Currently, you can humanize up to 5,000 characters per request. For longer documents, simply break them into smaller sections. We're working on increasing this limit in future updates."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-black-200  border-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Everything you need to know about AI text humanization
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-xl overflow-hidden transition-colors hover:border-gray-400"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="text-lg font-semibold pr-8 text-black">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-black transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-black leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}