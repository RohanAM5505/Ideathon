import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "../../assets/images/hero-bg.webp";
import unionSvg from "../../assets/images/Union.svg";
import charSvg from "../../assets/images/char.svg";

export default function HeroSection() {
  const navigate = useNavigate();

  // EVENT DATE: Feb 26, 2026 – 9:00 AM
  const eventDate = new Date("2026-02-26T09:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-black/40 to-[#0a0a0a] z-[2]" />

      {/* Union Overlay */}
      <img
        src={unionSvg}
        alt=""
        className="absolute top-1/4 right-0 h-2/3 md:h-3/4
                   opacity-20 sm:opacity-40 md:opacity-70 pointer-events-none"
      />

      {/* Character */}
      <img
        src={charSvg}
        alt=""
        className="absolute bottom-[-10px] right-[-100px] sm:right-[-40px] lg:right-5
                   h-[42vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh]
                   opacity-40 sm:opacity-60 md:opacity-90
                   pointer-events-none z-20"
      />

      {/* CONTENT */}
      <div
        className="relative z-10 flex min-h-screen
                   items-center justify-start
                   px-6 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[680px] w-full">

          {/* TEXT STACK */}
          <div className="space-y-4 sm:space-y-7 mb-6 sm:mb-0">

            {/* Headline */}
            <h1
              className="text-[2.2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         font-bold tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {/* Desktop */}
              <span className="hidden sm:inline bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                From Idea to Impact
              </span>

              {/* Mobile */}
              <span className="inline sm:hidden bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Where Ideas Level Up
              </span>
            </h1>

            {/* Supporting Text */}
            {/* Mobile */}
            <p
              className="block sm:hidden text-sm
                         font-medium text-gray-200 leading-relaxed max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 
                               bg-clip-text text-transparent font-semibold">
                Ideathon 6.0
              </span>{" "}
              — build bold, think fast, and rise above.
            </p>

            {/* Desktop */}
            <p
              className="hidden sm:block text-base md:text-lg lg:text-xl
                         font-medium text-gray-200 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 
                               bg-clip-text text-transparent font-semibold">
                Ideathon 6.0
              </span>{" "}
              — Compete with the best, pitch to impress, and rise above the rest.
            </p>

            {/* MOBILE TIMER – BIG & CENTERED */}
            <div className="flex sm:hidden justify-center gap-2.5 pt-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center
                             px-3.5 py-3 rounded-xl
                             bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40
                             backdrop-blur-lg
                             border border-purple-400/30
                             min-w-[72px]
                             shadow-[0_0_15px_rgba(168,85,247,0.3)]
                             hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                             transition-all duration-300"
                >
                  <span className="text-2xl font-bold bg-gradient-to-br from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-purple-300 mt-1 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* CTA — NEAR CHARACTER HEAD */}
          <div className="pt-8 sm:pt-6">
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center justify-center gap-2 
                         px-8 py-3.5 sm:px-9 sm:py-4 
                         rounded-lg font-bold text-white text-base
                         bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600
                         shadow-[0_0_20px_rgba(168,85,247,0.5)]
                         hover:scale-105 transition-transform duration-200
                         active:scale-95"
            >
              Register Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
