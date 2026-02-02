import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GridBackground from "../ui/GridBackground";

const Timeline = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  const milestones = [
    {
      date: "3rd Feb",
      title: "Registrations Begin",
      description: "Form your duos or squads... it's time to gear up, brainstorm, and register for the challenge of innovation!"
    },
    {
      date: "19th Feb",
      title: "Forms Close & WhatsApp Group Access",
      description: "Registration closes. Participants will be added to the WhatsApp group and drive link will be shared for PPT submission."
    },
    {
      date: "21st Feb",
      title: "PPT Submission Deadline",
      description: "Submit your presentation decks showcasing your innovative solutions and project details."
    },
    {
      date: "22nd Feb",
      title: "Shortlisted Teams Announced",
      description: "Top teams selected to pitch their ideas. Check if your team made it to the next round!"
    },
    {
      date: "26th Feb",
      title: "IDEATHON 6.0 Finale",
      description: "The grand finale! Present your ideas to judges and compete for the ultimate prize."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const timelineRect = timelineElement.getBoundingClientRect();
      
      // Increased multiplier to make line flow much faster/earlier
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 1.5 - timelineRect.top) / (window.innerHeight + timelineRect.height))
      );

      setLineHeight(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <GridBackground />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(168,85,247,0.3)'
            }}
          >
            <span className="bg-gradient-to-r from-gray-100 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Event Timeline
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Follow the journey from registration to the grand finale
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated Line - Grows with scroll */}
          <div 
            className="absolute left-4 sm:left-8 lg:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 lg:transform lg:-translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-200 ease-out" 
            style={{ height: `${lineHeight}%` }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-8 lg:gap-0 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Timeline Dot - Fixed positioning for mobile */}
                <div className="absolute left-4 sm:left-8 lg:left-1/2 top-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-4 border-black/80 shadow-[0_0_20px_rgba(168,85,247,0.5)] lg:transform lg:-translate-x-1/2 z-20 flex items-center justify-center -translate-x-1/2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>

                {/* Content Container */}
                <div className={`w-full pl-16 sm:pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-gradient-to-br from-purple-950/40 via-black/70 to-black/50 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-6 sm:p-8 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                  >
                    {/* Date Badge */}
                    <div className={`inline-flex items-center gap-2 mb-3 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      <span className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {milestone.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
