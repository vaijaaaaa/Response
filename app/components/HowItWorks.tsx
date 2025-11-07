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
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Transform your AI-generated text into natural, human-like content in 6 simple steps
          </p>
        </div>

     
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3 ">{steps[0].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[0].title}</h3>
              <p className="text-black text-sm">{steps[0].description}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3">{steps[1].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[1].title}</h3>
              <p className="text-black text-sm">{steps[1].description}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3">{steps[2].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[2].title}</h3>
              <p className="text-black text-sm">{steps[2].description}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3">{steps[3].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[3].title}</h3>
              <p className="text-black text-sm">{steps[3].description}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3">{steps[4].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[4].title}</h3>
              <p className="text-black text-sm">{steps[4].description}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-black mb-3">{steps[5].number}</div>
              <h3 className="text-xl font-semibold mb-2">{steps[5].title}</h3>
              <p className="text-black text-sm">{steps[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}