import React from "react";

function GalaxyBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-80" />
      <div className="absolute w-full h-full animate-stars" />
    </div>
  );
}

export default GalaxyBackground;
