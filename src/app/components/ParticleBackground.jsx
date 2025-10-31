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
      className="fixed inset-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 100 },
          color: { value: "#6366f1" },
          links: { 
            enable: true, 
            color: "#a78bfa", 
            distance: 150,
            opacity: 0.4
          },
          move: { 
            enable: true, 
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          opacity: { value: 0.3 },
          size: { value: 3 },
          shape: {
            type: "circle"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100
            },
            push: {
              quantity: 4
            }
          }
        }
      }}
    />
  );
}
