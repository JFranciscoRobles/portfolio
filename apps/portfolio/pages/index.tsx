import {
  Container,
  Grid,
  Text,
  Image,
  Spacer,
  Button,
  Card,
  Link,
} from "@nextui-org/react";

import { MdEmail } from "react-icons/md";
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
import { ToggleTheme } from "ui";
import { I18n } from "nextjs-i18n";
import { useRouter } from "next/router";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles, ISourceOptions } from "tsparticles-engine";

export default function Web() {
  const particlesInit = async (main: any) => {
    await loadFull(tsParticles);
  };

  const { locale } = useRouter();
  const router = useRouter();

  const handleClick = () => {
    router.push("/", "/", { locale: locale === "en" ? "es" : "en" });
  };
  return (
    <Container sm css={{ my: "$xs" }}>
      <Particles id="tsparticles" options={options} init={particlesInit} />
      <Grid.Container justify="flex-end" alignItems="center">
        <ToggleTheme.default />
        <Button auto light onClick={() => handleClick()}>
          <Text
            size={14}
            css={{ fontWeight: locale === "en" ? "bold" : "normal" }}
          >
            EN
          </Text>
          /
          <Text
            size={14}
            css={{ fontWeight: locale === "es" ? "bold" : "normal" }}
          >
            ES
          </Text>
        </Button>
        <Link href="mailto:josefrancisco.roblesacosta@gmail.com">
          <Button size={"sm"}>
            <I18n en="Hire me!" es="¡Contratame!" />
          </Button>
        </Link>
      </Grid.Container>
      <Spacer y={1} />
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
                JS Full Stack Developer
              </Text>
            </Grid>
            <Grid xs={12} direction={"column"}>
              <Text size={18} css={{ lineHeight: "$sm" }}>
                <I18n
                  en=" Currently living in Tijuana - Mexico, designing and developing web applications, modernizing the websites of companies and small businesses."
                  es="Actualmente viviendo en Tijuana - Mexico, diseñando y
              desarrollando aplicaciónes web, modernizando los sitios web de
              empresas y pequeños negocios."
                />
              </Text>
              <Spacer y={0.2} />
              <Text size={18} css={{ lineHeight: "$sm" }}>
                <I18n
                  en="knowledge in technologies such as Figma, React, Nextjs and StrapiCMS."
                  es="Familiarizado con tecnologias como Figma, React, Nextjs y
                  StrapiCMS."
                />
              </Text>
            </Grid>
            <Grid xs={12}>
              <Grid.Container justify="flex-end">
                <Grid>
                  <Link
                    href="https://github.com/JFranciscoRobles"
                    target="_blank"
                  >
                    <Button
                      auto
                      light
                      icon={<FaGithub size={20} fill="currentColor" />}
                    />
                  </Link>
                </Grid>
                <Grid>
                  <Link
                    href="https://www.linkedin.com/in/jfranciscorobles/"
                    target="_blank"
                  >
                    <Button
                      auto
                      light
                      icon={<FaLinkedin size={20} fill="currentColor" />}
                    />
                  </Link>
                </Grid>
                <Grid>
                  <Link href="mailto:josefrancisco.roblesacosta@gmail.com">
                    <Button
                      auto
                      light
                      icon={<MdEmail size={20} fill="currentColor" />}
                    />
                  </Link>
                </Grid>
                <Grid>
                  <Link href="https://twitter.com/JFrankRobles" target="_blank">
                    <Button
                      auto
                      light
                      icon={<FaTwitter size={20} fill="currentColor" />}
                    />
                  </Link>
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
            <I18n
              en="Technologies I love to use"
              es="Tecnologías que amo utilizar"
            />
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

      <Grid.Container as="footer" justify="flex-end">
        <Grid>
          <Link href="https://github.com/JFranciscoRobles" target="_blank">
            <Button
              auto
              light
              icon={<FaGithub size={20} fill="currentColor" />}
            />
          </Link>
        </Grid>
        <Grid>
          <Link
            href="https://www.linkedin.com/in/jfranciscorobles/"
            target="_blank"
          >
            <Button
              auto
              light
              icon={<FaLinkedin size={20} fill="currentColor" />}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="mailto:josefrancisco.roblesacosta@gmail.com">
            <Button
              auto
              light
              icon={<MdEmail size={20} fill="currentColor" />}
            />
          </Link>
        </Grid>
        <Grid>
          <Link href="https://twitter.com/JFrankRobles" target="_blank">
            <Button
              auto
              light
              icon={<FaTwitter size={20} fill="currentColor" />}
            />
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

const TecnologiesCard = ({ data }: CardProps) => {
  return (
    <Card
      hoverable
      css={{
        "&:hover": {
          backgroundColor: data.color,
        },
      }}
    >
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
  color: string;
};

type CardProps = {
  data: typeTecnlogias;
};

const dataTecnlogiasFront: typeTecnlogias[] = [
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

const dataTecnologiasBack: typeTecnlogias[] = [
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
];

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
      type: "circle",
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
        max: 2,
      },
      outModes: {
        default: "bounce",
      },
    },
  },

  detectRetina: true,
};
