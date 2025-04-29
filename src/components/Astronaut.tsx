
import { cn } from '@/lib/utils';

interface AstronautProps {
  className?: string;
}

const Astronaut = ({ className }: AstronautProps) => {
  return (
    <div 
      className={cn(
        "relative w-40 h-40 animate-float pointer-events-none", 
        className
      )}
    >
      {/* Astronaut image - using SVG for better control */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Astronaut suit */}
        <g transform="translate(35, 30) scale(0.65)">
          {/* Backpack */}
          <rect x="70" y="60" width="60" height="80" rx="10" fill="#3A4159" />
          
          {/* Main body / suit */}
          <rect x="45" y="60" width="110" height="100" rx="50" fill="#E0E6ED" />
          
          {/* Helmet */}
          <circle cx="100" cy="60" r="40" fill="#C2D7E8" />
          <circle cx="100" cy="60" r="33" fill="#2D3748" />
          
          {/* Face reflection */}
          <ellipse cx="90" cy="50" rx="10" ry="15" fill="#4A5568" opacity="0.5" />
          
          {/* Arms */}
          <rect x="25" y="75" width="50" height="25" rx="12" fill="#E0E6ED" />
          <rect x="125" y="75" width="50" height="25" rx="12" fill="#E0E6ED" />
          
          {/* Hands */}
          <circle cx="25" cy="87" r="12" fill="#C2D7E8" />
          <circle cx="175" cy="87" r="12" fill="#C2D7E8" />
          
          {/* Oxygen tube */}
          <path d="M70 70 Q 60 50, 70 30" stroke="#A0AEC0" strokeWidth="4" fill="none" />
          
          {/* Legs */}
          <rect x="65" y="140" width="25" height="40" rx="12" fill="#E0E6ED" />
          <rect x="110" y="140" width="25" height="40" rx="12" fill="#E0E6ED" />
          
          {/* Feet */}
          <rect x="60" y="170" width="35" height="15" rx="7" fill="#3A4159" />
          <rect x="105" y="170" width="35" height="15" rx="7" fill="#3A4159" />
          
          {/* NASA logo */}
          <circle cx="100" cy="100" r="15" fill="#1A365D" />
          <path d="M90 100 Q 100 85, 110 100 Q 100 115, 90 100" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="5" fill="#E53E3E" />
        </g>
      </svg>

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
          strokeWidth="1" 
          strokeDasharray="4 2"
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default Astronaut;
