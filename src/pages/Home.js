import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 animate-fade-in">
        Welcome to Miraverse Token
      </h1>
      <p className="text-lg md:text-2xl text-white max-w-2xl animate-fade-in-delay">
        Explore a new dimension where crypto, anime, and dreams collide. The journey begins here.
      </p>
    </div>
  );
}

export default Home;
