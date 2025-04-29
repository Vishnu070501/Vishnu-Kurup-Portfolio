
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Astronaut = ({ className }) => {
  const floatRef = useRef(null);
  
  useEffect(() => {
    // Create more complex floating animation
    const element = floatRef.current;
    if (!element) return;
    
    let startTime = Date.now();
    let rafId;
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      // Complex movement
      const yOffset = Math.sin(elapsed * 0.8) * 15;
      const xOffset = Math.sin(elapsed * 0.5) * 10;
      const rotation = Math.sin(elapsed * 0.3) * 10;
      
      element.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
      
      rafId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <div className={cn("relative w-40 h-40 pointer-events-none", className)}>
      <div 
        ref={floatRef}
        className="w-full h-full drop-shadow-lg"
      >
        {/* Astronaut SVG - more cartoonish style */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Helmet */}
          <circle cx="100" cy="75" r="40" fill="#C2D7E8" />
          <circle cx="100" cy="75" r="33" fill="#2D3748" />
          
          {/* Face reflection */}
          <ellipse cx="90" cy="70" rx="10" ry="15" fill="#4A5568" opacity="0.7" />
          <ellipse cx="95" cy="85" rx="5" ry="3" fill="#FFFFFF" opacity="0.7" />
          
          {/* Suit body */}
          <path d="M70 100 L70 140 Q85 150 115 150 Q130 140 130 100 L120 95 Q100 110 80 95 Z" fill="#E0E6ED" />
          
          {/* Backpack */}
          <rect x="80" y="100" width="40" height="40" rx="8" fill="#3A4159" />
          <rect x="85" y="105" width="10" height="5" rx="2" fill="#505A6E" />
          <rect x="105" y="105" width="10" height="5" rx="2" fill="#505A6E" />
          
          {/* Arms - left */}
          <path d="M70 105 Q60 110 55 100 Q50 90 60 85 Q65 83 70 85 Z" fill="#E0E6ED" />
          <circle cx="55" cy="92" r="9" fill="#C2D7E8" />
          
          {/* Arms - right */}
          <path d="M130 105 Q140 110 145 100 Q150 90 140 85 Q135 83 130 85 Z" fill="#E0E6ED" />
          <circle cx="145" cy="92" r="9" fill="#C2D7E8" />
          
          {/* Legs */}
          <path d="M80 150 L75 175 Q77 185 85 180 L85 150 Z" fill="#E0E6ED" />
          <path d="M120 150 L125 175 Q123 185 115 180 L115 150 Z" fill="#E0E6ED" />
          
          {/* Feet */}
          <rect x="70" y="180" width="15" height="8" rx="4" fill="#3A4159" />
          <rect x="115" y="180" width="15" height="8" rx="4" fill="#3A4159" />
          
          {/* Oxygen tubes */}
          <path d="M75 100 Q70 85 75 70" stroke="#A0AEC0" strokeWidth="3" fill="none" />
          <path d="M125 100 Q130 85 125 70" stroke="#A0AEC0" strokeWidth="3" fill="none" />
          
          {/* NASA logo */}
          <circle cx="100" cy="120" r="10" fill="#1A365D" />
          <path d="M95 120 Q100 112 105 120 Q100 128 95 120" stroke="white" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="120" r="3" fill="#E53E3E" />
        </svg>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10 animate-pulse-glow" />
      
      {/* Tether line connecting to somewhere off-screen */}
      <svg 
        className="absolute top-1/2 -left-[100px] w-[100px] h-4"
        viewBox="0 0 100 4"
      >
        <path 
          d="M0,2 Q 25,-4 50,2 T 100,2" 
          stroke="rgba(255,255,255,0.6)" 
          strokeWidth="1.5" 
          strokeDasharray="4 3"
          fill="none"
          className="animate-pulse-glow" 
        />
      </svg>
      
      {/* Small stars floating around astronaut */}
      <div className="absolute -top-5 -left-10 h-3 w-3 rounded-full bg-white/80 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-10 -right-5 h-2 w-2 rounded-full bg-white/80 animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
      <div className="absolute bottom-0 right-10 h-2 w-2 rounded-full bg-white/80 animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
    </div>
  );
};

export default Astronaut;
