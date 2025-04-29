import { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolio.json';
import GlobeContainer from './GlobeContainer';

const Hero = () => {
  const { name, title, githubUrl, linkedinUrl, bio } = portfolioData.personalInfo;
  const starsRef = useRef(null);

  useEffect(() => {
    // Create animated stars background
    const createStars = () => {
      if (!starsRef.current) return;
      
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = '';
      
      // Create stars
      const starCount = 100;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (smaller ones are more common)
        const size = Math.random() < 0.8 ? 
          Math.random() * 2 + 1 : // 80% small stars
          Math.random() * 3 + 2;  // 20% larger stars
        
        // Random twinkle animation delay
        const delay = Math.random() * 5;
        
        // Apply styles
        star.style.cssText = `
          position: absolute;
          top: ${y}%;
          left: ${x}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random() * 0.7 + 0.3};
          animation: twinkle 4s infinite ease-in-out;
          animation-delay: ${delay}s;
        `;
        
        starsContainer.appendChild(star);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />
      
      {/* Cosmic background overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-space to-space-dark z-0" />
      
      <div className="absolute top-[5%] left-[10%] w-60 h-60 bg-blue-500/20 rounded-full blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 py-8">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-200">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            {bio || "Creating stunning web experiences with modern technologies like React, Next.js, Django, and Spring Boot."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-colors"
            >
              GitHub
            </a>
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Globe and Astronaut */}
        <div className="relative flex-1 flex items-center justify-center w-full h-[400px] md:h-[500px]">
          <GlobeContainer />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium text-gray-300 mb-2">Scroll Down</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L10 10L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
