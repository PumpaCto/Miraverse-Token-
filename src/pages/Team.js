import React from "react";

function Team() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 animate-fade-in">
        Meet the Visionaries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full animate-fade-in-delay">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-gray-700 transition">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-5xl text-yellow-400 mb-4">
            ?
          </div>
          <h2 className="text-2xl font-bold mb-2 text-cyan-400">The Visionary</h2>
          <p className="text-white">Founder of Miraverse</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
