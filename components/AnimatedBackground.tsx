import { useMemo } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const bubbles: Bubble[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 5,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Animated glow orbs */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(0 85% 55% / 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(35 100% 55% / 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 55% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "2s",
        }}
      />

      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 100%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 100%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
