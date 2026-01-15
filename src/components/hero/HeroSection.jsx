import heroBg from "../../assets/images/hero-bg.webp";
import unionSvg from "../../assets/images/Union.svg";
import charSvg from "../../assets/images/char.svg";

export default function HeroSection() {
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

      {/* Union SVG Overlay */}
      <img
        src={unionSvg}
        alt="Geometric Overlay"
        className="absolute top-1/4 right-0 h-3/4 w-auto opacity-70 pointer-events-none z-[2]"
        style={{ mixBlendMode: "normal" }}
      />

      {/* Character SVG */}
      <img
        src={charSvg}
        alt="Character"
        className="absolute bottom-0 right-0 h-[85vh] w-auto pointer-events-none z-20"
        style={{ objectFit: "contain", objectPosition: "bottom right" }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-[680px] space-y-10">

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            From{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Idea
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            className="max-w-[560px] text-base md:text-lg lg:text-xl font-normal text-gray-300 leading-relaxed tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Turn bold ideas into real solutions. Compete with the best, pitch to
            impress, and rise above the rest.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <button
              className="group relative px-8 py-3.5
              bg-gradient-to-r from-purple-600 to-pink-600
              text-white font-semibold text-base rounded-lg
              shadow-xl
              transition-all duration-300
              hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Register Now
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20 group-hover:ring-white/40 transition-all"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
