import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import EventDetails from '../components/events/EventDetails'
import FaqSection from '../components/faq/FaqSection'
import Footer from '../components/common/Footer'

const Home = ({ onNavigateToRegistration }) => {
  return (
    <div>
      <Navbar onNavigateToRegistration={onNavigateToRegistration} />
      <HeroSection onNavigateToRegistration={onNavigateToRegistration} />
      <About />
      <EventDetails />
      <FaqSection />

      <Footer />
    </div>
  )
}

export default Home
