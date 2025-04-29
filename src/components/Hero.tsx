
import Earth from './Earth';
import Astronaut from './Astronaut';

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Cosmic background overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-space to-space-dark z-0" />
      
      <div className="absolute top-[5%] left-[10%] w-60 h-60 bg-blue-500/20 rounded-full blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 py-8">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Vishnu Kurup</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-200">
            Full-Stack Web Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Creating stunning web experiences with modern technologies like React, Next.js, Django, and Spring Boot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a 
              href="https://github.com/Vishnu070501" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        
        {/* Earth and Astronaut */}
        <div className="relative flex-1 flex items-center justify-center">
          <Earth className="max-w-[80vw] md:max-w-full" />
          <Astronaut className="absolute -left-10 top-1/4" />
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
