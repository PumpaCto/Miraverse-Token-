import React from "react";

function Community() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 animate-fade-in">
        Join the Miraverse Community
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-delay">
        Be part of a movement that blends anime, gaming, and blockchain into a single breathtaking universe. 
        Connect with fellow visionaries, gamers, and crypto enthusiasts today!
      </p>
      <div className="flex space-x-6">
        <a href="https://t.me/miraversetoken" target="_blank" rel="noopener noreferrer" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-6 rounded-full transition">
          Telegram
        </a>
        <a href="https://x.com/miraversetoken" target="_blank" rel="noopener noreferrer" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-6 rounded-full transition">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Community;
