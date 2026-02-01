import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../../assets/images/hack-logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on current route
  useEffect(() => {
    if (location.pathname === '/register') {
      setActiveSection('register');
    } else if (location.pathname === '/') {
      // Optionally detect which section is in view on home page
      setActiveSection('home');
    }
  }, [location.pathname]);

  const navItems = [
    { id: "home", label: "Home", hash: "#home" },
    { id: "about", label: "About", hash: "#about" },
    { id: "timeline", label: "Timeline", hash: "#timeline" },
    { id: "register", label: "Register", path: "/register" },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    setMenuOpen(false);

    if (item.path) {
      navigate(item.path);
    } else if (item.hash) {
      if (location.pathname !== '/') {
        navigate('/' + item.hash);
      } else {
        const element = document.querySelector(`[data-section="${item.id}"]`);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        } else if (item.id === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}>
      <div className={`mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-black/40 shadow-2xl shadow-purple-500/10' 
          : 'backdrop-blur-md bg-black/20 shadow-xl'
      }`}>
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-50 blur-sm" />
        
        <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4">

          {/* Logo with glow effect */}
          <div 
            className="flex items-center gap-2 md:gap-3 group cursor-pointer"
            onClick={() => handleNavClick({ id: 'home', hash: '#home' })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md group-hover:bg-purple-500/50 transition-all duration-300" />
              <img 
                src={logoImage} 
                alt="Logo" 
                className="relative w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" 
              />
            </div>
            <h1 className="text-white font-bold tracking-wide text-sm md:text-base lg:text-lg">
              TEAM SRM{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
                HACKATHON
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  relative px-4 lg:px-6 py-2 rounded-xl font-medium text-sm lg:text-base
                  transition-all duration-300 group overflow-hidden
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {/* Active/Hover background */}
                <span className={`
                  absolute inset-0 rounded-xl transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 opacity-100 shadow-lg shadow-purple-500/50"
                      : "bg-white/5 opacity-0 group-hover:opacity-100"
                  }
                `} />
                
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 space-y-2 pt-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  block w-full text-left px-4 py-3 rounded-xl font-medium
                  transition-all duration-300 transform
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: menuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
