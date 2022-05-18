import {
  Container,
  Grid,
  Text,
  Image,
  Spacer,
  Button,
  Card,
} from "@nextui-org/react";

import { MdEmail, MdOutlineLightMode } from "react-icons/md";
import { FaGithub, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
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

export default function Web() {
  return (
    <Container sm css={{ my: "$xl" }}>
      <Grid.Container justify="flex-end">
        <Button auto light icon={<MdOutlineLightMode fill="currentColor" />} />
        <Button auto light>
          EN / ES
        </Button>
        <Button auto>!Contratame!</Button>
      </Grid.Container>
      <Spacer y={2} />
      <Grid.Container>
        <Grid xs={12} md={4}>
          <Image
            width={180}
            height={210}
            src="/avatar.jpg"
            alt="Default Image"
            objectFit="cover"
          />
        </Grid>
        <Grid xs={12} md={8} css={{ height: "fit-content" }}>
          <Grid.Container gap={0.8}>
            <Grid xs={12}>
              <Text h1 css={{ lineHeight: "$xs" }} size={32}>
                J. Francisco Robles
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                h2
                size={22}
                color="$blue500"
                weight={"semibold"}
                css={{
                  lineHeight: "$xs",
                }}
              >
                A JS Full-Stack Developer
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text size={18} css={{ lineHeight: "$sm" }}>
                Actualmente viviendo en Tijuana - Mexico, diseñando y
                desarrollando aplicaciónes web, modernizando los sitios web de
                empresas y pequeños negocios. Familiarizado con tecnologias como
                Figma, React, Nextjs y Strapi.
              </Text>
            </Grid>
            <Grid xs={12}>
              <Grid.Container justify="flex-end">
                <Grid>
                  <Button
                    auto
                    light
                    icon={<FaGithub size={20} fill="currentColor" />}
                  />
                </Grid>
                <Grid>
                  <Button
                    auto
                    light
                    icon={<FaLinkedin size={20} fill="currentColor" />}
                  />
                </Grid>
                <Grid>
                  <Button
                    auto
                    light
                    icon={<MdEmail size={20} fill="currentColor" />}
                  />
                </Grid>
                <Grid>
                  <Button
                    auto
                    light
                    icon={<FaTwitter size={20} fill="currentColor" />}
                  />
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Text
            h2
            size={28}
            weight={"semibold"}
            css={{
              lineHeight: "$xs",
            }}
          >
            Tecnologias que amo utilizar
          </Text>
        </Grid>
        <Grid xs={12}>
          <Grid.Container gap={2}>
            {dataTecnologiasBack.map((item, index) => (
              <Grid key={index}>
                <TecnologiesCard data={item} />
              </Grid>
            ))}
            {dataTecnlogiasFront.map((item, index) => (
              <Grid key={index}>
                <TecnologiesCard data={item} />
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Text
            h2
            size={28}
            weight={"semibold"}
            css={{
              lineHeight: "$xs",
            }}
          >
            Proyectos en los que he trabajado
          </Text>
        </Grid>
        <Grid xs={12}>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Text h3>Probien Bienes Raices Exclusivos (en proceso)</Text>
            </Grid>

            <Grid xs={12}>
              <Container>
                <Image src={"/probienPrincipal.png"} alt={"asds"} />
              </Container>
            </Grid>
            <Grid xs={12} direction={"column"}>
              <Text size={18} css={{ lineHeight: "$sm" }}>
                Proyecto Full-Stack Probien Bienes Raices es una Inmobiliaria de
                la Ciudad de Tijuana - Mexico.
              </Text>
              <Spacer y={0.2} />
              <Text size={18} css={{ lineHeight: "$sm" }}>
                Me contrataron para desarrollar un nuevo Catalogo para la
                empresa.
              </Text>
              <Spacer y={0.2} />
              <Text size={18} css={{ lineHeight: "$sm" }}>
                Debido a que la velocidad de carga de cada pagina es muy
                importante y los datos no se actualizan de forma masiva, se opto
                por utilizar Nextjs y aprovechar la tenica de SSG(static site
                generation).
              </Text>
              <Spacer y={0.2} />
              <Text size={18} css={{ lineHeight: "$sm" }}>
                Por la corta duración de desarrollo se decidio utilizar Strapi
                como CMS debido a su sencilla implementación.
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
      <Grid.Container as="footer" justify="flex-end">
        <Grid>
          <Button
            auto
            light
            icon={<FaGithub size={20} fill="currentColor" />}
          />
        </Grid>
        <Grid>
          <Button
            auto
            light
            icon={<FaLinkedin size={20} fill="currentColor" />}
          />
        </Grid>
        <Grid>
          <Button auto light icon={<MdEmail size={20} fill="currentColor" />} />
        </Grid>
        <Grid>
          <Button
            auto
            light
            icon={<FaTwitter size={20} fill="currentColor" />}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

const TecnologiesCard = ({ data }: CardProps) => {
  return (
    <Card hoverable>
      <Card.Body>
        <Grid.Container justify="center">{data.logo}</Grid.Container>
      </Card.Body>
      <Card.Footer>
        <Text b>{data.nombre}</Text>
      </Card.Footer>
    </Card>
  );
};

type typeTecnlogias = {
  nombre: string;
  logo: any;
  url: string;
};

type CardProps = {
  data: typeTecnlogias;
};

const dataTecnlogiasFront: typeTecnlogias[] = [
  {
    nombre: "React",
    logo: <FaReact size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "Nextjs",
    logo: <SiNextdotjs size={30} width={"100%"} />,
    url: "",
  },

  {
    nombre: "Graphql",
    logo: <SiGraphql size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "TailwindCss",
    logo: <SiTailwindcss size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "NextUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        NextUI
      </Text>
    ),
    url: "",
  },

  {
    nombre: "RadixUi",
    logo: (
      <Text size={30} css={{ lineHeight: 1 }}>
        Radix
      </Text>
    ),
    url: "",
  },

  {
    nombre: "PrismaDB",
    logo: <SiPrisma size={30} width={"100%"} />,
    url: "",
  },
];

const dataTecnologiasBack: typeTecnlogias[] = [
  {
    nombre: "Github",
    logo: <FaGithub size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "Typescript",
    logo: <SiTypescript size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "Supabase",
    logo: <SiSupabase size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "Strapi",
    logo: <SiStrapi size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "Vercel",
    logo: <SiVercel size={30} width={"100%"} />,
    url: "",
  },
  {
    nombre: "DigitalOcean",
    logo: <SiDigitalocean size={30} width={"100%"} />,
    url: "",
  },
];
