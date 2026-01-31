
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GridBackground from '../ui/GridBackground'

const faqs = [
  {
    q: 'Who can participate in Ideathon 6.0?',
    a: 'Open to all students nationwide passionate about innovation and technology. Whether you’re a beginner or an experienced developer, everyone is welcome to participate.'
  },
  {
    q: 'What should I bring to Ideathon 6.0?',
    a: "Bring your laptop, charger, student ID, and enthusiasm for innovation. We'll provide the workspace, internet, and refreshments throughout the event."
  },
  {
    q: 'Can I participate individually or in a team?',
    a: 'You can participate in teams of 2-4 members. Solo participation is also allowed if you prefer to work independently.'
  },
  {
    q: 'Is there any registration fee?',
    a: 'Yes, there is a registration fee of ₹150 + taxes per participant to cover event costs and resources.'
  },
  {
    q: "What if I'm a beginner?",
    a: 'Perfect! We welcome beginners and provide mentorship and support throughout the hackathon to help you learn and build something amazing.'
  },
  {
    q: 'How are submissions judged?',
    a: 'Submissions are evaluated based on innovation, technical implementation, presentation quality, and real-world impact. Our expert panel will assess your pitch and working prototype.'
  }
]

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)]"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(168,85,247,0.3)'
            }}
          >
            <span className="bg-gradient-to-r from-gray-100 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know before joining Ideathon 6.0
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div
                onClick={() => toggleFaq(index)}
                className={`
                  relative bg-gradient-to-br from-purple-950/40 via-black/70 to-black/50 
                  backdrop-blur-xl rounded-xl border transition-all duration-300 
                  cursor-pointer overflow-hidden
                  ${openIndex === index 
                    ? 'border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                    : 'border-purple-900/30 shadow-lg hover:border-purple-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  }
                `}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-5 sm:p-6">
                  {/* Question */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white pr-4 leading-relaxed">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-purple-400/10 mt-4">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Still have questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              Reach out to our team!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection

