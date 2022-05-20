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
  fpsLimit: 120,
  background: {
    color: "transparent",
  },
  particles: {
    number: {
      value: 13,
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
        min: 2,
        max: 3,
      },
      outModes: {
        default: "bounce",
      },
    },
  },
  detectRetina: true,
};
