import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Trophy, Users, Zap } from "lucide-react";
import GridBackground from "../ui/GridBackground";
import Godimage from "../../assets/images/God.svg";
import guide from "../../assets/images/info.svg";
import detail from "../../assets/images/infoo.svg"

const EventDetails = () => {
  return (
    <section
      id="timeline"
      className="relative py-12 md:py-20 overflow-hidden scroll-mt-28"
    >
      <GridBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
              Event
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Details
            </span>
          </motion.h2>
        </div>

        {/* Desktop Layout - True Asymmetric L-Shape */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-[240px_1fr] gap-6 xl:gap-8">
          
          {/* LEFT L-SHAPED CARD - Narrower (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-5 row-span-2 relative overflow-hidden rounded-[2rem] 
                       bg-gradient-to-br from-purple-950/40 via-black/70 to-black/50
                       backdrop-blur-xl border border-purple-400/20 shadow-2xl"
          >
            {/* Glow Effects */}
            <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px]" />

            {/* Top Section of L-Shape */}
            <div className="relative z-10 p-8 xl:p-10 pb-6 border-b border-white/5">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl xl:text-4xl font-bold text-white tracking-tight"
              >
                IDEATHON 6.0
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base xl:text-lg text-pink-400 font-semibold mt-2"
              >
                Where Ideas Level Up
              </motion.p>
            </div>

            {/* Bottom Section of L-Shape */}
            <div className="relative z-10 p-8 xl:p-10 pt-6 h-[calc(100%-240px)] flex flex-col justify-between">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-sm xl:text-base leading-relaxed"
              >
                Step into the arena where innovation meets execution. Transform your concepts into reality 
                through 8 hours of intense creation, collaboration, and breakthrough thinking. 
                Rise through the ranks and claim your victory.
              </motion.p>

              {/* Bottom Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mt-6"
              >
                <div className="h-px bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-transparent" />
                
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-2xl xl:text-3xl font-bold text-pink-400">₹25K</div>
                    <div className="text-xs text-gray-400 mt-1">Prize Pool</div>
                  </div>
                  <div>
                    <div className="text-2xl xl:text-3xl font-bold text-pink-400">8hrs</div>
                    <div className="text-xs text-gray-400 mt-1">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl xl:text-3xl font-bold text-pink-400">2-4</div>
                    <div className="text-xs text-gray-400 mt-1">Team Size</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TOP RIGHT CARD - Wider (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-7 row-span-1 relative rounded-[2rem] 
                       bg-black/80 backdrop-blur-xl border border-pink-400/20
                       shadow-[0_0_40px_rgba(236,72,153,0.08)] overflow-hidden"
          >
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-transparent to-purple-400/5" />
            
            <div className="relative z-10 p-8 xl:p-10 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pink-400/10 flex items-center justify-center">
                  <Zap size={20} className="text-pink-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Event Guidelines</h4>
              </div>

              <ul className="space-y-3">
                {([
                  "Open to all students nationwide",
                  "Original ideas only - plagiarism disqualifies",
                  "Working prototype demonstration is a plus",
                  "Final pitch presentation to judges"
                ]).map((rule, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span className="text-sm xl:text-base leading-relaxed">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT CARD - Wider (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-7 row-span-1 relative rounded-[2rem] 
                       bg-gradient-to-br from-purple-950/50 via-black/60 to-black/40
                       backdrop-blur-xl border border-purple-400/30 shadow-2xl overflow-hidden"
          >
            {/* Visual Accent */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-[100px]" />
            
            {/* Character Image Subtle */}
            
            <div className="relative z-10 p-8 xl:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
                  <Trophy size={20} className="text-purple-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Event Snapshot</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {([
                  { icon: MapPin, label: "Venue", value: "Mini Hall 2, SRMIST" },
                  { icon: Calendar, label: "Date", value: "February 26, 2026" },
                  { icon: Clock, label: "Time", value: "9 AM Onwards" },
                  { icon: Users, label: "Registration", value: "₹150 + Taxes" }
                ]).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 
                               hover:border-pink-400/30 transition-all"
                  >
                    <item.icon size={18} className="text-pink-400 mb-2" />
                    <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {/* Top Row - Two Cards Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main IDEATHON Card - Spans both rows on left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-950/40 via-black/60 to-black/40
                         backdrop-blur-xl border border-purple-400/20"
            >
              <div className="absolute inset-0">
                <img src={Godimage} alt="" className="absolute right-0 bottom-0 h-full opacity-[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
              </div>
              
              <div className="relative z-10">
                {/* Top Section */}
                <div className="p-5 pb-3 border-b border-white/5">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                    IDEATHON 6.0
                  </h3>
                  <p className="text-sm sm:text-base text-pink-400 font-semibold">
                    Where Ideas Level Up
                  </p>
                </div>
                
                {/* Bottom Section */}
                <div className="p-5 pt-3">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Step into the arena where innovation meets execution. Transform concepts into reality 
                    through intense creation and breakthrough thinking.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-pink-400">₹25K</div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Prize</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-pink-400">8hrs</div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Duration</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-pink-400">2-4</div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Guidelines and Snapshot Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Guidelines Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-black/80 backdrop-blur-xl border border-pink-400/20 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-pink-400/10 flex items-center justify-center flex-shrink-0">
                  <img src={guide} alt="Guidelines Icon" className="w-4 h-4 brightness-0 invert" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">Guidelines</h4>
              </div>
              <ul className="space-y-2">
                {([
                  "Open to all students",
                  "Original ideas only",
                  "Prototype Optional",
                  "Final pitch to judges"
                ]).map((rule, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                    <div className="w-1 h-1 rounded-full bg-pink-400 mt-1.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Event Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-br from-purple-950/50 via-black/60 to-black/40
                         backdrop-blur-xl border border-purple-400/30 p-5 overflow-hidden"
            >
              
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                    <img src={detail} alt="Info Icon" className="w-4 h-4 text-purple-400 brightness-0 invert" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Info</h4>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {([
                    { icon: MapPin, label: "Venue", value: "Mini Hall 2" },
                    { icon: Calendar, label: "Date", value: "Feb 26" },
                    { icon: Clock, label: "Time", value: "9 AM" },
                    { icon: Users, label: "Fee", value: "₹150" }
                  ]).map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                      <item.icon size={14} className="text-pink-400 mb-1.5" />
                      <div className="text-[10px] text-gray-400 mb-0.5">{item.label}</div>
                      <div className="text-xs font-semibold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tablet View - Alternative Layout */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-3 gap-4 mt-6">
              {/* Stats Cards */}
              {([
                { icon: Trophy, label: "Prize Pool", value: "₹50,000", color: "pink" },
                { icon: Users, label: "Team Size", value: "2-4 Members", color: "purple" },
                { icon: Clock, label: "Duration", value: "24 Hours", color: "blue" }
              ]).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-4 text-center"
                >
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-${stat.color}-400/10 flex items-center justify-center`}>
                    <stat.icon size={18} className={`text-${stat.color}-400`} />
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-sm font-bold text-white">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;