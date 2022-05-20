import {
  SiTypescript,
  SiSupabase,
  SiStrapi,
  SiVercel,
  SiDigitalocean,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";

import { Text } from "@nextui-org/react";

export type typeTecnlogias = {
  nombre: string;
  logo: any;
  url: string;
  color: string;
};

export const dataTecnologias: typeTecnlogias[] = [
  {
    nombre: "Github",
    logo: <FaGithub size={30} width={"100%"} />,
    url: "",
    color: "$gray300",
  },
  {
    nombre: "Typescript",
    logo: <SiTypescript size={30} width={"100%"} />,
    url: "",
    color: "$red300",
  },
  {
    nombre: "Supabase",
    logo: <SiSupabase size={30} width={"100%"} />,
    url: "",
    color: "$yellow300",
  },
  {
    nombre: "Strapi",
    logo: <SiStrapi size={30} width={"100%"} />,
    url: "",
    color: "$blue300",
  },
  {
    nombre: "Vercel",
    logo: <SiVercel size={30} width={"100%"} />,
    url: "",
    color: "$gray300",
  },
  {
    nombre: "DigitalOcean",
    logo: <SiDigitalocean size={30} width={"100%"} />,
    url: "",
    color: "$blue300",
  },
  {
    nombre: "React",
    logo: <FaReact size={30} width={"100%"} />,
    url: "",
    color: "$blue300",
  },
  {
    nombre: "Nextjs",
    logo: <SiNextdotjs size={30} width={"100%"} />,
    url: "",
    color: "$gray300",
  },

  {
    nombre: "Graphql",
    logo: <SiGraphql size={30} width={"100%"} />,
    url: "",
    color: "$purple300",
  },
  {
    nombre: "TailwindCss",
    logo: <SiTailwindcss size={30} width={"100%"} />,
    url: "",
    color: "$blue300",
  },
  {
    nombre: "NextUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        NextUI
      </Text>
    ),
    url: "",
    color: "$gray300",
  },

  {
    nombre: "RadixUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        Radix
      </Text>
    ),
    url: "",
    color: "$purple300",
  },

  {
    nombre: "PrismaDB",
    logo: <SiPrisma size={30} width={"100%"} />,
    url: "",
    color: "$green300",
  },
];
