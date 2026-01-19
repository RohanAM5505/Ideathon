import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/registration'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToRegistration = () => {
    setCurrentPage('registration')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  return (
    <>
      {currentPage === 'home' ? (
        <Home onNavigateToRegistration={navigateToRegistration} />
      ) : (
        <Registration onNavigateToHome={navigateToHome} />
      )}
    </>
  )
}

export default App
