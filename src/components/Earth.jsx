import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Earth = ({ className }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const dragStartRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Gentle auto-rotation when not interacting
    let animationId;
    let lastTime = performance.now();
    
    const animate = (time) => {
      if (!isGrabbing) {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + deltaTime * 0.005 // Gentle rotation speed
        }));
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isGrabbing]);

  const handleMouseDown = (e) => {
    setIsGrabbing(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    rotationRef.current = rotation;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsGrabbing(true);
      dragStartRef.current = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
      rotationRef.current = rotation;
    }
  };

  const handleMouseMove = (e) => {
    if (isGrabbing && dragStartRef.current) {
      const sensitivity = 0.3;
      const deltaX = (e.clientX - dragStartRef.current.x) * sensitivity;
      const deltaY = (e.clientY - dragStartRef.current.y) * sensitivity;
      
      setRotation({
        x: rotationRef.current.x + deltaY,
        y: rotationRef.current.y + deltaX
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isGrabbing && dragStartRef.current && e.touches.length === 1) {
      const sensitivity = 0.3;
      const deltaX = (e.touches[0].clientX - dragStartRef.current.x) * sensitivity;
      const deltaY = (e.touches[0].clientY - dragStartRef.current.y) * sensitivity;
      
      setRotation({
        x: rotationRef.current.x + deltaY,
        y: rotationRef.current.y + deltaX
      });
      
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Handle events outside if the pointer leaves during dragging
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
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
      <div className="absolute inset-0 rounded-full bg-earth-glow opacity-30 blur-xl animate-pulse-glow" />
      
      {/* Earth sphere */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden shadow-xl cosmic-glow"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
          backgroundSize: 'cover',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Cloud layer - subtle overlay */}
        <div 
          className="absolute inset-0 bg-white opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
            backgroundSize: 'cover',
            transform: `rotateY(${rotation.y * -0.5}deg)` // Clouds move at a different speed
          }}
        />
        
        {/* Atmosphere rim light effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, transparent 60%, rgba(100, 185, 255, 0.2) 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default Earth;
