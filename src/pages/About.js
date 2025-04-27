import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 animate-fade-in">
        About Miraverse Token
      </h1>
      <p className="text-lg md:text-xl max-w-3xl animate-fade-in-delay">
        Miraverse Token is not just a cryptocurrency — it's the heartbeat of a whole new anime-inspired crypto universe.
        Our vision is to merge blockchain technology with stunning anime artistry, epic storytelling, and immersive gaming
        to build a vibrant, decentralized world for dreamers across the globe.
      </p>
    </div>
  );
}

export default About;
