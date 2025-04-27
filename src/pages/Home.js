import React from "react";
import Typewriter from "../components/Typewriter";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8">
      <Typewriter text="Welcome to Miraverse Token" speed={100} />
      <p className="text-base md:text-lg text-white max-w-2xl mt-4 animate-fade-in-delay">
        Explore a new dimension where crypto, anime, and dreams collide. The journey begins here.
      </p>
    </div>
  );
}

export default Home;
