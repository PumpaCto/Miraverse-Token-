import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg fixed w-full z-50">
      <div className="text-2xl font-bold tracking-widest text-cyan-400">
        Miraverse
      </div>
      <div className="space-x-4 text-sm font-semibold">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
        <Link to="/roadmap" className="hover:text-yellow-400 transition">Roadmap</Link>
        <Link to="/community" className="hover:text-yellow-400 transition">Community</Link>
        <Link to="/faq" className="hover:text-yellow-400 transition">FAQ</Link>
        <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
        <Link to="/tokenomics" className="hover:text-yellow-400 transition">Tokenomics</Link>
        <Link to="/partners" className="hover:text-yellow-400 transition">Partners</Link>
        <Link to="/newsletter" className="hover:text-yellow-400 transition">Newsletter</Link>
        <Link to="/lore" className="hover:text-yellow-400 transition">Lore</Link>
        <Link to="/team" className="hover:text-yellow-400 transition">Team</Link>
        <Link to="/openworld" className="hover:text-yellow-400 transition">Open World</Link>
        <Link to="/playtoearn" className="hover:text-yellow-400 transition">Play to Earn</Link>
      </div>
    </nav>
  );
}

export default Navbar;
