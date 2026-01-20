import heroBg from "../../assets/images/hero-bg.webp";
import unionSvg from "../../assets/images/Union.svg";
import charSvg from "../../assets/images/char.svg";

export default function HeroSection({ onNavigateToRegistration }) {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/55 z-[1]" />

      {/* Union SVG Overlay - Responsive positioning */}
      <img 
        src={unionSvg}
        alt="Geometric Overlay"
        className="absolute top-1/4 md:top-1/4 right-0 h-2/3 md:h-3/4 w-auto opacity-40 md:opacity-70 pointer-events-none hidden sm:block"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Character SVG - Responsive sizing */}
      <img 
        src={charSvg}
        alt="Character"
        className="absolute bottom-0 -right-20 sm:-right-16 md:-right-10 lg:right-5 xl:right-15 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-auto pointer-events-none z-20 opacity-60 sm:opacity-80 md:opacity-100"
        style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-start sm:items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-24 sm:pt-20 md:pt-24">
        <div className="max-w-full sm:max-w-[580px] md:max-w-[650px] lg:max-w-[680px] space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {/* Premium Serif Headline */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)] sm:drop-shadow-[0_4px_20px_rgba(168,85,247,0.5)]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(168,85,247,0.3)'
            }}
          >
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-gradient">
              From Idea to Impact
            </span>
          </h1>

          {/* Supporting Text */}
          <p 
            className="max-w-full sm:max-w-[480px] md:max-w-[540px] lg:max-w-[560px] text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-100 sm:text-gray-200 md:text-gray-300 leading-relaxed sm:leading-relaxed md:leading-loose tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            Turn bold ideas into real solutions. Compete with the best, pitch to
            impress, and rise above the rest.
          </p>

          
          <div className="pt-2 sm:pt-3 md:pt-4">
            <button 
              className="group relative inline-flex items-center justify-center w-auto px-5 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white font-bold text-xs sm:text-base md:text-lg rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 border border-purple-400/30"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-pink-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:animate-ping"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
