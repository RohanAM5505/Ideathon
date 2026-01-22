import './FaqSection.css'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Who can participate in Ideathon 6.0?',
    a: 'Open to all SRMIST students passionate about coding. Whether you’re a beginner or an experienced coder, everyone is welcome to participate.'
  },
  {
    q: 'What should I bring to Ideathon 6.0?',
    a: "Bring your laptop, charger, student ID, and enthusiasm for coding. We'll provide the workspace, internet, and refreshments."
  },
  {
    q: 'Can I participate individually or in a team?',
    a: 'This is an individual coding competition. Each participant will compete on their own.'
  },
  {
    q: 'Is there any registration fee?',
    a: 'Yes, there is a registration fee of ₹150 for all participants.'
  },
  {
    q: "What if I'm a beginner?",
    a: 'Perfect! We welcome beginners and provide mentorship and support throughout the competition to help you learn and improve.'
  },
  {
    q: 'How are submissions judged?',
    a: 'Submissions are evaluated based on correctness, efficiency, and passing all test cases. Our panel of judges will verify your solutions against predefined test cases.'
  }
]

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section
      className="section pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto pt-32 px-6">


{/* HEADER */}
<div className="mb-14 text-center flex flex-col items-center">
  <h2 className="
    text-4xl md:text-5xl font-extrabold
    tracking-tight
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
    bg-clip-text text-transparent
  ">
    Frequently Asked Questions
  </h2>

  <p className="
    mt-3 max-w-2xl
    text-sm md:text-base
    text-slate-400
    leading-relaxed
  ">
    Everything you need to know before entering Ideathon 6.0
  </p>
</div>





        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-card ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
<div className="flex items-center justify-between">
  <h3 className="faq-question">
    {faq.q}
  </h3>

  <ChevronDown
    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
      openIndex === index ? 'rotate-180' : ''
    }`}
  />
</div>
              <p className="faq-answer">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default FaqSection

