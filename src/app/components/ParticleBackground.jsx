"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80 },
          color: { value: "#6366f1" },
          links: { enable: true, color: "#a78bfa", distance: 150 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
    />
  );
}
