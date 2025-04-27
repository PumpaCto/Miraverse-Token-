import React, { useEffect, useState } from "react";

function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 saniye loading göster

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-cyan-400 text-4xl font-bold animate-fade-in">
        Loading the Miraverse...
      </div>
    );
  }

  return <>{children}</>;
}

export default LoadingScreen;
