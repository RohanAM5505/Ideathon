import React from 'react'

const Timeline = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          How it Works
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
 <strong>Round 1: PPT Shortlisting</strong><br />
        Participants must submit a concise and well-structured presentation
        outlining their idea. The PPT should clearly describe the problem
        statement, the proposed solution, the innovative aspect of the idea, and
        its potential impact. Submissions will be evaluated based on clarity,
        originality, feasibility, and alignment with the selected domain.
      </p>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        <strong>Round 2: Final Pitching</strong><br />
        Teams shortlisted from the first round will move on to the final pitching
        stage, where they will present their ideas live before the judging panel.
        Participants are expected to clearly communicate their solution, explain
        the implementation approach, and highlight real-world applicability.
        Detailed pitching guidelines will be shared beforehand to ensure a smooth,
        transparent, and fair evaluation process.
      </p>
      </div>
    </section>
  )
}

export default Timeline;
