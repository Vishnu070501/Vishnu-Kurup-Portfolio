import { Canvas } from '@react-three/fiber';
import Globe from './Globe';
import Astronaut from './Astronaut';

const GlobeContainer = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        className="absolute inset-0"
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
      </Canvas>

      {/* Astronaut */}
      <div className="absolute -left-10 top-1/4 z-10">
        <Astronaut />
      </div>
    </div>
  );
};

export default GlobeContainer; 