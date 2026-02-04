"use client";

import { Mail, Phone, MapPin, Calendar, Clock, Trophy } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        {/* Bottom section - Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">

          {/* Brand / About */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IDEATHON</span>{" "}
              <span className="text-white">6.0</span>
            </h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              From idea to impact. Compete with the best, build bold solutions,
              and turn innovation into reality. Where ideas level up.
            </p>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Event Details
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Calendar size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Date:</span> 26th February 2026
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Duration:</span> 8 Hours
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Venue:</span> SRM Institute of Science & Technology
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Trophy size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Prize Pool:</span> ₹25,000+
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:srmhackathon5@gmail.com" className="hover:text-pink-400 transition-colors">
                  srmhackathon5@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+916381949898" className="block hover:text-pink-400 transition-colors">
                    +91 63819 49898
                  </a>
                  <a href="tel:+917067585490" className="block hover:text-pink-400 transition-colors">
                    +91 70675 85490
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <span>SRM Institute of Science & Technology</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} IDEATHON 6.0. All rights reserved.</p>
        <p className="mt-2 text-gray-500">
          Built {" "}
          <span className="text-pink-400"></span>
          {" "}by{" "}
          <span className="text-pink-400 font-medium">
            SRM Hackathon Tech Team
          </span>
        </p>
      </div>

    </footer>
  );
}
