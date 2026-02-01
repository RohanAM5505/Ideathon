import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import EventDetails from '../components/events/EventDetails'
import Domain from './Domain'
import FaqSection from '../components/faq/FaqSection'
import Footer from '../components/common/Footer'
import Timeline from '../components/eventtimeline/Timeline'
import Sponsers from '../components/sponsers/Sponsers'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div data-section="home">
        <HeroSection />
      </div>
      <div data-section="about">
        <Domain />
      </div>
      <EventDetails />
      <div data-section="timeline">
        <Timeline />
      </div>
      <Sponsers />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Home
