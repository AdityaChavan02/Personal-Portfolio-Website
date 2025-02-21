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
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
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
    ref.current.rotation.y = t * 0.1; // Y-axis rotation
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.3; // Slight oscillation

    // 🌀 Wormhole Growth - Subtle Scale Increase
    if (isWormhole) {
      ref.current.scale.set(
        Math.min(3, ref.current.scale.x + 0.01),
        Math.min(3, ref.current.scale.y + 0.01),
        Math.min(3, ref.current.scale.z + 0.01)
      );
    }

    // 💨 Dispersal Effect - Gradual outward movement
    if (isDisperse) {
      for (let i = 0; i < posArray.length; i += 3) {
        const speed = 0.001; // Subtle dispersal speed
        velocities[i] += (Math.random() - 0.5) * speed;
        velocities[i + 1] += (Math.random() - 0.5) * speed;
        velocities[i + 2] += (Math.random() - 0.5) * speed;

        posArray[i] += velocities[i];
        posArray[i + 1] += velocities[i + 1];
        posArray[i + 2] += velocities[i + 2];
      }

      ref.current.geometry.attributes.position.needsUpdate = true;

      // Gradual fade-out
      if (ref.current.material) {
        ref.current.material.opacity = Math.max(
          0,
          ref.current.material.opacity - 0.005
        );
      }
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="#00FFFF" // Cyan particles
        size={0.015} // Smaller particles
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
      }, 10000);
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
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </motion.div>
  );
}
