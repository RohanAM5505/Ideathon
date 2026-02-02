import React, { useState } from "react";
import { motion } from "framer-motion";
import health from "../assets/images/health.svg"
import internet from "../assets/images/internet-of-things.svg"
import ai from "../assets/images/microchip.svg"
import block from "../assets/images/blockchain.svg"
import sustainability from "../assets/images/save-the-world.svg"

const domains = [
  {
    title: "HEALTH-TECH",
    subtitle: "Tech that saves lives.",
    description: "Developing solutions that heal, support, and empower putting people at the heart of technological progress.",
    icon: health
  },
  {
    title: "IOT",
    subtitle: "The world, wired and alive.",
    description: "Connecting devices and systems to create smarter, more responsive environments for everyday life.",
    icon: internet
  },
  {
    title: "AI",
    subtitle: "Intelligence, engineered.",
    description: "Harnessing artificial intelligence to solve real-world challenges, uplift communities, and create a more equitable future.",
    icon: ai
  },
  {
    title: "BLOCKCHAIN",
    subtitle: "Trust, rewritten.",
    description: "Building secure, transparent, and decentralized systems that revolutionize how we exchange value and information.",
    icon: block
  },
  {
    title: "SUSTAINABILITY",
    subtitle: "Innovation for tomorrow.",
    description: "Designing technologies that balance convenience with responsibility shaping smarter, greener, and more resilient lifestyles.",
    icon: sustainability
  }
];

const DomainCard = ({ domain, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer h-full"
    >
      {/* Animated zigzag line on left border - shows on hover */}
      {isHovered && (
        <div className="absolute -left-1 top-0 bottom-0 w-1 overflow-hidden pointer-events-none z-10">
          <svg className="absolute w-full h-full" viewBox="0 0 10 100" preserveAspectRatio="none">
            {/* Glowing outer line */}
            <motion.path
              d="M5 0 L10 5 L0 10 L10 15 L0 20 L10 25 L0 30 L10 35 L0 40 L10 45 L0 50 L10 55 L0 60 L10 65 L0 70 L10 75 L0 80 L10 85 L0 90 L10 95 L5 100"
              fill="none"
              stroke="rgba(168, 85, 247, 0.5)"
              strokeWidth="6"
              filter="blur(4px)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Middle glow */}
            <motion.path
              d="M5 0 L10 5 L0 10 L10 15 L0 20 L10 25 L0 30 L10 35 L0 40 L10 45 L0 50 L10 55 L0 60 L10 65 L0 70 L10 75 L0 80 L10 85 L0 90 L10 95 L5 100"
              fill="none"
              stroke="rgba(168, 85, 247, 0.7)"
              strokeWidth="3"
              filter="blur(2px)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Sharp inner line */}
            <motion.path
              d="M5 0 L10 5 L0 10 L10 15 L0 20 L10 25 L0 30 L10 35 L0 40 L10 45 L0 50 L10 55 L0 60 L10 65 L0 70 L10 75 L0 80 L10 85 L0 90 L10 95 L5 100"
              fill="none"
              stroke="rgba(168, 85, 247, 1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )}

      {/* Main card */}
      <motion.div
        className={`relative h-full bg-gradient-to-br from-purple-950/50 via-black/80 to-black/70 
                    border backdrop-blur-xl rounded-xl overflow-hidden
                    transition-all duration-300 p-6 sm:p-8
                    ${isHovered 
                      ? 'border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.3)]' 
                      : 'border-purple-900/30 shadow-xl'}`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.25)',
          borderColor: 'rgba(168, 85, 247, 0.4)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <div className="text-4xl sm:text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 text-center flex justify-center items-center">
          {typeof domain.icon === 'string' && domain.icon.endsWith('.svg') ? (
            <img src={domain.icon} alt={domain.title} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 brightness-0 invert" />
          ) : (
            <span className="grayscale brightness-200 contrast-200">{domain.icon}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors text-center">
          {domain.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-fuchsia-400 font-medium mb-3 text-center">
          {domain.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-center">
          {domain.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Domain = () => {
  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 
            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Domains
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Explore the cutting-edge domains where innovation meets impact
          </p>
        </motion.div>

        {/* Domain cards grid - responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <DomainCard key={index} domain={domain} index={index} />
          ))}
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Domain;