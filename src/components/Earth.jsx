
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Earth = ({ className }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const dragStartRef = useRef(null);
  const rotationRef = useRef(0);

  // Auto-rotation effect
  useEffect(() => {
    let animationId;
    
    const autoRotate = () => {
      if (!isGrabbing) {
        setRotation(prev => (prev + 0.2) % 360);
      }
      animationId = requestAnimationFrame(autoRotate);
    };
    
    animationId = requestAnimationFrame(autoRotate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isGrabbing]);

  // Handle mouse/touch interactions
  const handleMouseDown = (e) => {
    setIsGrabbing(true);
    dragStartRef.current = e.clientX;
    rotationRef.current = rotation;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsGrabbing(true);
      dragStartRef.current = e.touches[0].clientX;
      rotationRef.current = rotation;
    }
  };

  const handleMouseMove = (e) => {
    if (isGrabbing && dragStartRef.current !== null) {
      const delta = (e.clientX - dragStartRef.current) * 0.5;
      setRotation((rotationRef.current + delta) % 360);
    }
  };

  const handleTouchMove = (e) => {
    if (isGrabbing && dragStartRef.current !== null && e.touches.length === 1) {
      const delta = (e.touches[0].clientX - dragStartRef.current) * 0.5;
      setRotation((rotationRef.current + delta) % 360);
      e.preventDefault(); // Prevent scrolling while dragging
    }
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
    dragStartRef.current = null;
  };

  const handleTouchEnd = () => {
    setIsGrabbing(false);
    dragStartRef.current = null;
  };

  // Handle scroll for rotation
  const handleScroll = (e) => {
    setRotation(prev => (prev + Math.sign(e.deltaY) * 5) % 360);
    e.preventDefault();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add scroll event listener
    container.addEventListener('wheel', handleScroll, { passive: false });
    
    // Handle events outside if the pointer leaves during dragging
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      container.removeEventListener('wheel', handleScroll);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "earth-container select-none", 
        isGrabbing ? "cursor-grabbing" : "cursor-grab", 
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Earth glow effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse-glow" />
      
      {/* 2D Cartoon Earth */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Ocean base */}
        <div className="absolute inset-0 bg-blue-500" />
        
        {/* Rotating continent layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Continents */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0">
            {/* Africa */}
            <path d="M100 70 Q110 80 105 100 Q100 120 110 130 Q120 135 115 145 L105 150 Q95 145 90 130 Q85 120 88 110 Q92 90 95 80 Z" fill="#4ab06c" />
            
            {/* Europe */}
            <path d="M90 60 Q100 55 110 60 Q115 65 120 60 Q125 58 130 62 Q128 70 120 75 Q110 78 100 70 Q95 65 90 60" fill="#4ab06c" />
            
            {/* Asia */}
            <path d="M130 62 Q135 55 145 60 Q155 58 165 70 Q170 85 165 95 Q160 105 150 110 Q140 105 135 95 Q130 90 125 80 Q120 70 125 65 Z" fill="#4ab06c" />
            
            {/* Australia */}
            <path d="M150 140 Q160 138 170 145 Q175 155 165 160 Q155 165 145 155 Q145 145 150 140" fill="#4ab06c" />
            
            {/* North America */}
            <path d="M50 60 Q60 50 70 55 Q80 60 85 70 Q80 80 75 90 Q70 95 60 90 Q50 80 45 70 Q48 65 50 60" fill="#4ab06c" />
            
            {/* South America */}
            <path d="M65 110 Q70 105 75 110 Q80 120 75 135 Q70 145 60 140 Q55 130 60 120 Q63 113 65 110" fill="#4ab06c" />
          </svg>
          
          {/* Clouds */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0">
            {/* Cloud groups */}
            <g fill="white" opacity="0.7">
              {/* Cloud group 1 */}
              <circle cx="110" cy="65" r="8" />
              <circle cx="115" cy="62" r="10" />
              <circle cx="120" cy="67" r="7" />
              
              {/* Cloud group 2 */}
              <circle cx="65" cy="100" r="12" />
              <circle cx="75" cy="96" r="9" />
              <circle cx="60" cy="108" r="11" />
              
              {/* Cloud group 3 */}
              <circle cx="140" cy="120" r="10" />
              <circle cx="150" cy="115" r="8" />
              <circle cx="142" cy="128" r="12" />
            </g>
          </svg>
        </div>
        
        {/* Shadow overlay for 3D effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, transparent 60%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />
        
        {/* Highlight overlay for 3D effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, transparent 60%, rgba(255, 255, 255, 0.2) 100%)'
          }}
        />
      </div>
      
      {/* Globe border/rim */}
      <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
    </div>
  );
};

export default Earth;
