import Image from "next/image";

export default function HeroPost() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      
      <div className="bg-white rounded-3xl border border-gray-200 p-6 lg:p-8 shadow-sm">
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex-1">
            
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Featured
            </p>

            <h1 className="mt-4 text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Google supercharges Chrome with Gemini and image AI across Asia Pacific
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Google is bringing powerful Gemini AI features and image generation
              tools to Chrome users across Asia Pacific, enhancing productivity,
              creativity, and the browsing experience.
            </p>

            {/* AUTHOR */}
            <div className="mt-8 flex items-center gap-4 text-gray-500 text-sm">
              
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>

              <span>Rohit Sharma</span>

              <span>•</span>

              <span>Apr 20, 2026</span>

              <span>•</span>

              <span>5 min read</span>
            </div>

            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-medium">
              Read Full Story
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[300px] lg:h-[500px] rounded-3xl overflow-hidden">
              
              <Image
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="Featured Post"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}