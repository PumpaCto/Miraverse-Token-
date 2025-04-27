import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-cyan-400 text-2xl font-bold animate-fade-in-glow">
            Miraverse
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </Link>
              <Link to="/roadmap" className="hover:text-yellow-400 transition-colors duration-300">
                Roadmap
              </Link>
              <Link to="/community" className="hover:text-yellow-400 transition-colors duration-300">
                Community
              </Link>
              <Link to="/faq" className="hover:text-yellow-400 transition-colors duration-300">
                FAQ
              </Link>
              <Link to="/gallery" className="hover:text-yellow-400 transition-colors duration-300">
                Gallery
              </Link>
              <Link to="/tokenomics" className="hover:text-yellow-400 transition-colors duration-300">
                Tokenomics
              </Link>
              <Link to="/partners" className="hover:text-yellow-400 transition-colors duration-300">
                Partners
              </Link>
              <Link to="/newsletter" className="hover:text-yellow-400 transition-colors duration-300">
                Newsletter
              </Link>
              <Link to="/lore" className="hover:text-yellow-400 transition-colors duration-300">
                Lore
              </Link>
              <Link to="/team" className="hover:text-yellow-400 transition-colors duration-300">
                Team
              </Link>
              <Link to="/openworld" className="hover:text-yellow-400 transition-colors duration-300">
                Open World
              </Link>
              <Link to="/playtoearn" className="hover:text-yellow-400 transition-colors duration-300">
                Play to Earn
              </Link>
            </div>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-cyan-400 hover:text-yellow-400 focus:outline-none">
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              About
            </Link>
            <Link to="/roadmap" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Roadmap
            </Link>
            <Link to="/community" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Community
            </Link>
            <Link to="/faq" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              FAQ
            </Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Gallery
            </Link>
            <Link to="/tokenomics" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Tokenomics
            </Link>
            <Link to="/partners" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Partners
            </Link>
            <Link to="/newsletter" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Newsletter
            </Link>
            <Link to="/lore" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Lore
            </Link>
            <Link to="/team" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Team
            </Link>
            <Link to="/openworld" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Open World
            </Link>
            <Link to="/playtoearn" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">
              Play to Earn
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
