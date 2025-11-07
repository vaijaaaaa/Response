export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Paste AI Text",
      description: "Copy your AI-generated content that needs to sound more human and natural"
    },
    {
      number: "02",
      title: "Select Tone",
      description: "Choose between Casual, Professional, or Friendly writing style"
    },
    {
      number: "03",
      title: "AI Processing",
      description: "Our Gemini AI analyzes and understands your content context"
    },
    {
      number: "04",
      title: "Humanization",
      description: "Text is rewritten to sound natural, conversational, and authentic"
    },
    {
      number: "05",
      title: "Quality Check",
      description: "Content is refined to remove robotic patterns and add human touches"
    },
    {
      number: "06",
      title: "Get Results",
      description: "Receive perfectly humanized text ready to use anywhere"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Transform your AI-generated text into natural, human-like content in 6 simple steps
          </p>
        </div>

        {/* First Row - Cards 1, 2, 3 */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[0].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[0].title}</h3>
              <p className="text-gray-600 text-sm">{steps[0].description}</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex justify-center -mx-3">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[1].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[1].title}</h3>
              <p className="text-gray-600 text-sm">{steps[1].description}</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex justify-center -mx-3">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[2].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[2].title}</h3>
              <p className="text-gray-600 text-sm">{steps[2].description}</p>
            </div>
          </div>
        </div>

        {/* Down Arrow between rows */}
        <div className="flex justify-end mb-8 pr-12 md:pr-32">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Second Row - Cards 4, 5, 6 (Reversed) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Card 6 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors md:order-3">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[5].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[5].title}</h3>
              <p className="text-gray-600 text-sm">{steps[5].description}</p>
            </div>

            {/* Arrow 5 */}
            <div className="hidden md:flex justify-center -mx-3 md:order-2">
              <svg className="w-8 h-8 text-gray-400 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Card 5 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors md:order-1">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[4].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[4].title}</h3>
              <p className="text-gray-600 text-sm">{steps[4].description}</p>
            </div>

            {/* Arrow 4 */}
            <div className="hidden md:flex justify-center -mx-3 md:order-0">
              <svg className="w-8 h-8 text-gray-400 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-black transition-colors md:order-[-1]">
              <div className="text-3xl font-bold text-gray-300 mb-3">{steps[3].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[3].title}</h3>
              <p className="text-gray-600 text-sm">{steps[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}