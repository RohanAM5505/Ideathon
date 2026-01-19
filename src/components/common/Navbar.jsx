import React, { useState } from 'react';
import logoImage from '../../assets/images/hack-logo.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'register', label: 'Register' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-2xl">
        {/* Gradient overlay for glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
        
        <div className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-20 h-20 md:w-12 md:h-12 rounded-lg  flex items-center justify-center shadow-lg">
              {/* Placeholder for logo - replace with <img src={logoImage} alt="Logo" /> */}
              <img className='w-20 h-12' src={logoImage} alt="Hackathon Logo" />
        
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`
                  px-4 md:px-6 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300
                  ${activeSection === item.id 
                    ? ' text-white shadow-lg shadow-purple-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;