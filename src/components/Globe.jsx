import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Globe = ({ className, onLoad }) => {
  const meshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  // Load Earth texture
  const earthTexture = useTexture('/textures/earth_daymap.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    onLoad?.();
  });

  // Auto-rotation when not dragging
  useFrame((state, delta) => {
    if (!isDragging && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group className={className}>
      {/* Ambient light */}
      <ambientLight intensity={0.7} />
      
      {/* Directional light (sun) */}
      <directionalLight
        position={[5, 3, 5]}
        intensity={2}
        castShadow
      />

      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          shininess={30}
          specular={0x444444}
          emissive={0x000000}
          emissiveIntensity={0}
          transparent={false}
          opacity={1}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.1, 128, 128]} />
        <meshPhongMaterial
          color={0x88ccff}
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Controls for manual rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI * 2 / 3}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
    </group>
  );
};

export default Globe; 