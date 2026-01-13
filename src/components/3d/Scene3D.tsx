"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingParticles() {
  const count = 100;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ];
      const scale = Math.random() * 0.1 + 0.05;
      temp.push({ position, scale });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.elapsedTime;
      particles.forEach((particle, i) => {
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3(
          particle.position[0] + Math.sin(time + i) * 0.5,
          particle.position[1] + Math.cos(time + i * 0.5) * 0.5,
          particle.position[2] + Math.sin(time * 0.5 + i) * 0.3
        );
        matrix.setPosition(position);
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
        mesh.current!.setMatrixAt(i, matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
    </instancedMesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[4, 2, -2]}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#EC4899"
          metalness={0.9}
          roughness={0.1}
          emissive="#EC4899"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-4, -1, -1]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#10B981"
          metalness={0.7}
          roughness={0.2}
          emissive="#10B981"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 5, 25]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#EC4899"
        />
        
        <AnimatedSphere />
        <FloatingTorus />
        <FloatingCube />
        <FloatingParticles />
        
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
