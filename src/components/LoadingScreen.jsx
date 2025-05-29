import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 1000);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (loadingComplete) return null;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Ring */}
        <div className="relative w-40 h-40 mb-10">
          <div className="w-full h-full border-4 border-purple-500/30 rounded-full relative flex items-center justify-center">
            <div className="absolute inset-4 border-4 border-cyan-400/50 rounded-full" />
            <svg className="absolute inset-0 w-full h-full">
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - progress / 100)}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {progress}%
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-5xl font-bold text-white mb-10">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Mayank Negi
          </span>
        </h2>

        {/* Dots */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-5 h-5 bg-purple-500 rounded-full animate-bounce" />
          <div className="w-5 h-5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-5 h-5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-lg mt-4">Full Stack Web Developer....</p>
      </div>
    </div>
  );
}
