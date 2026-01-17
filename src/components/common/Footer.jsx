"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            SRM <span className="text-pink-400">Hackathon</span>
          </h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            From idea to impact. Compete with the best, build bold solutions,
            and turn innovation into reality.
          </p>
        </div>

        {/* Event Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-400">
            Event Info
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="text-white">Date:</span> TBA
            </li>
            <li>
              <span className="text-white">Duration:</span> TBA
            </li>
            <li>
              <span className="text-white">Venue:</span> SRM University
            </li>
            <li>
              <span className="text-white">Prize Pool:</span> TBA
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-pink-400" />
              srmhackathon5@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-pink-400" />
              +91 63819 49898
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-pink-400" />
              SRM Institute of Science & Technology
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SRM Hackathon. All rights reserved.
        <span className="block mt-2 text-gray-500">
          Built by{" "}
          <span className="text-pink-400 font-medium">
            SRM Hackathon Web Team
          </span>
        </span>
      </div>

    </footer>
  );
}
