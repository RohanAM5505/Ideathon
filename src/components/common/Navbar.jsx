import React, { useState } from "react";
import logoImage from "../../assets/images/hack-logo.png";

const Navbar = ({ onNavigateToRegistration }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "register", label: "Register" },
  ];

  const handleNavClick = (itemId) => {
    setActiveSection(itemId);

    if (itemId === "register" && onNavigateToRegistration) {
      onNavigateToRegistration();
    }

    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-2xl">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />

        <div className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Logo" className="w-10 h-10" />
            <h1 className="text-white font-bold tracking-wide text-lg">
              TEAM SRM <span className="text-pink-400 font-extrabold">HACKATHON</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-6 py-2 rounded-lg transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white py-2 border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
