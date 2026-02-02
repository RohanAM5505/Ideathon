import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import GridBackground from "../ui/GridBackground";
import surprise from "../../assets/images/surprise-box.svg"

const Sponsers = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <GridBackground />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(168,85,247,0.3)'
            }}
          >
            <span className="bg-gradient-to-r from-gray-100 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-purple-950/40 via-black/70 to-black/50 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 md:p-12 shadow-xl overflow-hidden">
            
            {/* Subtle Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              
              {/* Lock Icon with Pulse */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-2"
              >
                <img src={surprise} alt="Locked Content" className="text-white w-16 h-16 md:w-20 md:h-20 brightness-0 invert" />
              </motion.div>

              {/* Description Text */}
              <p className="text-gray-300 text-base md:text-lg max-w-2xl">
                We're partnering with incredible brands to make this event unforgettable. 
                The big reveal is just around the corner!
              </p>

              {/* Animated Dots */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent my-6"></div>

              {/* Bottom CTA */}
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsers;
