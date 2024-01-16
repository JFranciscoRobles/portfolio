import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import React from "react";
import { StickyScroll } from "./StickyScroll";

type Props = {};

function Projects({}: Props) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <StickyScroll content={data} />
    </section>
  );
}

export default Projects;

type ProjectCardProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const ProjectCard = ({
  title,
  subtitle,
  description,
  src,
}: ProjectCardProps) => {
  return (
    <Card className="flex flex-col justify-between bg-background hover:scale-105 duration-300 transform">
      <div className="flex flex-col p-4">
        <Badge className="w-fit mt-2 ml-auto">Job</Badge>
        <CardHeader className="flex flex-row gap-4 items-center">
          <Avatar>
            <AvatarImage src={src} alt="@shadcn" />
            <AvatarFallback>
              {title[0]}
              {title[1]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </div>
      <CardFooter>
        <Button className="w-full mt-auto">Ver sitio web</Button>
      </CardFooter>
    </Card>
  );
};

const data: ProjectCardProps[] = [
  {
    title: "Probien",
    subtitle: "Plataforma inmobiliaria",
    src: "/probien.png",
    description:
      "Plataforma inmobiliaria moderna que sirve como un catálogo integral de propiedades y agentes. Ofrece secciones informativas y de contacto, un blog, búsqueda elástica y funcionalidad de geobúsqueda.",
  },
  {
    title: "PokeApi",
    subtitle: "Nextjs Pokeapi",
    src: "/pokeapi.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis dolorum adipisci porro nisi nostrum et animi, ratione minima, facere, ex obcaecati! Aliquid eos fuga nulla? Aliquam, perferendis tempora? Sunt..",
  },
];
