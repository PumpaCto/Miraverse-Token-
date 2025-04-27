import React from "react";

function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 animate-fade-in">
        Our Journey
      </h1>
      <div className="space-y-8 max-w-4xl animate-fade-in-delay">
        <div className="p-4 border border-cyan-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Q2 2025</h2>
          <p>Launch of Miraverse Token, community building, and initial airdrops.</p>
        </div>
        <div className="p-4 border border-cyan-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Q3 2025</h2>
          <p>Release of anime teaser trailers, start of NFT collections, and marketing campaigns.</p>
        </div>
        <div className="p-4 border border-cyan-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Q4 2025</h2>
          <p>Launch of the open-world crypto game beta version for selected users.</p>
        </div>
        <div className="p-4 border border-cyan-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Q1 2026</h2>
          <p>Major exchange listings, global expansion, and full open-world game launch.</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
