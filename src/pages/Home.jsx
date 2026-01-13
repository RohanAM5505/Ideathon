import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import EventDetails from '../components/events/EventDetails'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <EventDetails />
    </div>
  )
}

export default Home
