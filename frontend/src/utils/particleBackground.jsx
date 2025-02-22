// ParticleBackground.jsx
import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const mouse = { x: null, y: null };

  // Particle Class
  class Particle {
    constructor(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Boundary Check
      if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
      if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(160, 160, 160, 0.4)";
      ctx.fill();
    }
  }

  // Initialize Particles
  const initParticles = () => {
    particles.length = 0;
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const speedX = (Math.random() - 0.4) * 0.8;
      const speedY = (Math.random() - 0.4) * 0.8;
      particles.push(new Particle(x, y, size, speedX, speedY));
    }
  };

  // Draw Lines Between Particles
  const drawLines = (ctx) => {
    particles.forEach((particleA, index) => {
      particles.slice(index + 1).forEach((particleB) => {
        const distance = Math.sqrt(
          (particleA.x - particleB.x) ** 2 + (particleA.y - particleB.y) ** 2
        );
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particleA.x, particleA.y);
          ctx.lineTo(particleB.x, particleB.y);
          ctx.strokeStyle = "rgba(160, 160, 160, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
  };

  // Draw Line to Mouse
  const drawMouseLines = (ctx) => {
    particles.forEach((particle) => {
      const distance = Math.sqrt(
        (particle.x - mouse.x) ** 2 + (particle.y - mouse.y) ** 2
      );
      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = "rgba(160, 160, 160, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  };

  // Animation Loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw(ctx);
    });

    drawLines(ctx);
    if (mouse.x && mouse.y) drawMouseLines(ctx);

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
