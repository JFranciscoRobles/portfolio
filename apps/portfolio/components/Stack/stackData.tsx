import {
  SiTypescript,
  SiStrapi,
  SiVercel,
  SiDigitalocean,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";

import { Text } from "@nextui-org/react";
import { typeUiCard } from "ui/UiCard";

export const dataTecnologias: typeUiCard[] = [
  {
    nombre: "Github",
    logo: <FaGithub size={30} width={"100%"} />,
    description: "",
    color: "$gray300",
  },
  {
    nombre: "Typescript",
    logo: <SiTypescript size={30} width={"100%"} />,
    description: "",
    color: "$red300",
  },
  {
    nombre: "React",
    logo: <FaReact size={30} width={"100%"} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: "Nextjs",
    logo: <SiNextdotjs size={30} width={"100%"} />,
    description: "",
    color: "$gray300",
  },

  {
    nombre: "TailwindCss",
    logo: <SiTailwindcss size={30} width={"100%"} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: "NextUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        NextUI
      </Text>
    ),
    description: "",
    color: "$gray300",
  },

  {
    nombre: "RadixUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        Radix
      </Text>
    ),
    description: "",
    color: "$purple300",
  },

  {
    nombre: "PrismaDB",
    logo: <SiPrisma size={30} width={"100%"} />,
    description: "",
    color: "$green300",
  },
  {
    nombre: "Strapi",
    logo: <SiStrapi size={30} width={"100%"} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: "Vercel",
    logo: <SiVercel size={30} width={"100%"} />,
    description: "",
    color: "$gray300",
  },
  {
    nombre: "DigitalOcean",
    logo: <SiDigitalocean size={30} width={"100%"} />,
    description: "",
    color: "$blue300",
  },
];
