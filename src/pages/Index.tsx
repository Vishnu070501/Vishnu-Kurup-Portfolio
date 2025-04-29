
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-space-dark border-t border-cosmic-light/10">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vishnu Kurup. All rights reserved.</p>
          <p className="text-sm mt-2">Full-Stack Web Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
