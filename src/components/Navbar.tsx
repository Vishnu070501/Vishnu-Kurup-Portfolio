
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-space/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-gradient">
          Vishnu Kurup
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg md:hidden"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Vishnu070501"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-kurup-622658210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-space-dark/95 backdrop-blur-lg border-t border-cosmic-light/20 py-4 shadow-lg md:hidden">
            <div className="container flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 hover:bg-cosmic-dark/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-4 py-2">
                <a
                  href="https://github.com/Vishnu070501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishnu-kurup-622658210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
