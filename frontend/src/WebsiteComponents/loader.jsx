import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

// 🌌 Particle System Component
const ParticleSystem = ({ isWormhole, isDisperse }) => {
  const ref = useRef();
  const count = 5000;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3); // For dispersal movement

  // 🎯 Fibonacci Sphere Distribution (uniform particle arrangement)
  function generateFibonacciSphere() {
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 4; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // Golden angle increment

      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = radius * Math.sin(theta);
    }
  }
  generateFibonacciSphere();

  // 🎮 Frame Update Loop
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const posArray = ref.current.geometry.attributes.position.array;

    // 🔁 Sphere Rotation
    ref.current.rotation.y = t * 0.2; // Y-axis rotation
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.8; // Slight oscillation

  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="teal" // Cyan particles
        size={0.3} // Smaller particles
        sizeAttenuation
        depthWrite={false}
        opacity={1}
      />
    </Points>
  );
};

// 🚀 Main Loader Component
export default function Loader() {
  const [isWormhole, setIsWormhole] = useState(false);
  const [isDisperse, setIsDisperse] = useState(false);
  const navigate = useNavigate();

  // ⏱ Animation Timing
  useEffect(() => {
    setTimeout(() => {
      setIsWormhole(true); // Grow sphere for 3 seconds
      setTimeout(() => {
        setIsDisperse(true); // Particles start dispersing
        setTimeout(() => navigate("/"), 10000); // Navigate after dispersal
      }, 14000);
    }, 800); // Start after 1 second
  }, [navigate]);

  return (
    <motion.div
      className="w-full h-screen bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isDisperse ? 0 : 1 }}
      transition={{ duration: 5 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} />
        <ParticleSystem isWormhole={isWormhole} isDisperse={isDisperse} />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </motion.div>
  );
}
