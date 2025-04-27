import React, { useState, useEffect } from "react";

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6">
      {displayedText}
    </h1>
  );
}

export default Typewriter;
