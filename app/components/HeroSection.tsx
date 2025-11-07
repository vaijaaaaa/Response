'use client';

export default function HeroSection(){
    return (
        <section id = "home" className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white flex items-center">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-black">
                    Transform AI Text into <br />
                    Human-Like Writing
                </h1>

                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                Make your AI-generated content sound natural and authentic. Perfect for job applications, 
                emails, essays, and more. Powered by Google's Gemini AI.
                </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        className="px-8 py-4 bg-white border-2 border-black text-black font-semibold rounded-lg 
                        hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50 
                        transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                        Watch Demo
                    </button>
                    <button
                        className="px-8 py-4 bg-black text-white font-semibold rounded-lg 
                        hover:-translate-y-1 hover:shadow-lg hover:bg-gray-800 
                        transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                        Get Started
                    </button>
                    </div>
            </div>
        </section>
    )
}