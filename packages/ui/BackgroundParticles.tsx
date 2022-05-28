import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles, ISourceOptions } from "tsparticles-engine";

type Props = {};

function BackgroundParticles({}: Props) {
  const particlesInit = async () => {
    await loadFull(tsParticles);
  };
  return <Particles id="tsparticles" options={options} init={particlesInit} />;
}

export default BackgroundParticles;

let options: ISourceOptions = {
  fpsLimit: 60,
  motion: {
    disable: true,
  },
  background: {
    color: "transparent",
  },
  particles: {
    number: {
      value: 7,
    },
    color: {
      value: ["#C9C9C9"],
    },
    shape: {
      type: "edge",
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 30, max: 50 },
    },
    move: {
      enable: true,
      speed: {
        min: 1,
        max: 1,
      },
      outModes: {
        default: "bounce",
      },
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 80,
        color: "random",
      },
    },
  },
};
