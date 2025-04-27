import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-12 border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://t.me/miraversetoken"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-yellow-400 transition text-2xl"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://x.com/miraversetoken"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-yellow-400 transition text-2xl"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Miraverse Token. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
