import React from "react";

function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 animate-fade-in">
        Newsletter - Coming Soon
      </h1>
      <p className="text-lg md:text-xl max-w-2xl animate-fade-in-delay">
        Subscribe soon to receive the latest news, exclusive updates, and early access opportunities from the Miraverse world!
      </p>
    </div>
  );
}

export default Newsletter;
