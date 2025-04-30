import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Globe from './Globe';
import Astronaut from './Astronaut';

const GlobeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-space/80 backdrop-blur-sm transition-opacity duration-500">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-blue-200 font-medium">Loading Earth...</p>
          </div>
        </div>
      )}

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        className="absolute inset-0"
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe onLoad={() => setIsLoading(false)} />
      </Canvas>

      {/* Astronaut */}
      <div className="absolute -left-10 top-1/4 z-10">
        <Astronaut />
      </div>
    </div>
  );
};

export default GlobeContainer; 