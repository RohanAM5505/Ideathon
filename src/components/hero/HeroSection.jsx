import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GridBackground from "../ui/GridBackground";
import ideathonLogo from "../../assets/images/ideathon.png";
import ideathon from '../../assets/images/ideathonn.png'

export default function HeroSection() {
  const navigate = useNavigate();

  const eventDate = new Date("2026-02-26T09:00:00");

  const getTimeLeft = () => {
    const diff = eventDate - new Date();
    if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <GridBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl w-full text-center space-y-6">

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="hidden sm:inline bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              From Idea to Impact
            </span>
            <span className="sm:hidden bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Where Ideas Level Up
            </span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent font-semibold text-xl md:text-2xl">
              Ideathon 6.0
            </span>{" "}
            — build bold, think fast, and rise above.
          </p>

          {/* TIMER */}
          <div className="flex gap-1.5 sm:gap-3 md:gap-4 pt-4 justify-center max-w-md mx-auto">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="px-2 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl bg-black/50 border border-purple-400/30 backdrop-blur-lg text-center flex-1"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none">{value}</div>
                <div className="text-[10px] sm:text-xs uppercase text-purple-300 tracking-wider sm:tracking-widest mt-1">
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-4 rounded-lg font-semibold text-white text-base md:text-lg
                         bg-gradient-to-r from-purple-600 to-purple-700
                         border border-purple-400/30
                         shadow-[0_4px_20px_rgba(168,85,247,0.3)]
                         hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)] hover:border-purple-400/50 hover:-translate-y-0.5
                         active:translate-y-0
                         transition-all duration-300"
            >
              Register Now →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
