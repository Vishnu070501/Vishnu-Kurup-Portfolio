import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Globe = ({ className }) => {
  const meshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [earthTexture, setEarthTexture] = useState(null);
  const [cloudTexture, setCloudTexture] = useState(null);
  const [bumpTexture, setBumpTexture] = useState(null);
  const [specularTexture, setSpecularTexture] = useState(null);

  useEffect(() => {
    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    // Load Earth texture
    textureLoader.load('/textures/earth_daymap.jpg', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      setEarthTexture(texture);
    });

    // Load cloud texture
    textureLoader.load('/textures/earth_clouds.jpg', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      setCloudTexture(texture);
    });

    // Load bump texture for terrain
    textureLoader.load('/textures/earth_normal_map.jpg', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      setBumpTexture(texture);
    });

    // Load specular texture for water reflection
    textureLoader.load('/textures/earth_specular_map.jpg', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      setSpecularTexture(texture);
    });
  }, []);

  // Auto-rotation when not dragging
  useFrame((state, delta) => {
    if (!isDragging && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group className={className}>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light (sun) */}
      <directionalLight
        position={[5, 3, 5]}
        intensity={1.5}
        castShadow
      />

      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.1}
          specularMap={specularTexture}
          specular={new THREE.Color(0x666666)}
          shininess={15}
          emissive={new THREE.Color(0x000000)}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh>
        <sphereGeometry args={[1.01, 128, 128]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.1, 128, 128]} />
        <meshPhongMaterial
          color={0x88ccff}
          transparent={true}
          opacity={0.15}
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