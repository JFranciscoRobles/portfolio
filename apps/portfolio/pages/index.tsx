import {
  Container,
  Grid,
  Text,
  Image,
  Spacer,
  Button,
  Link,
} from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  BackgroundParticles,
  TecnologiesCard,
  TecnologiesContainer,
  ToggleTheme,
} from "ui";
import { I18n } from "nextjs-i18n";
import { useRouter } from "next/router";

export default function Web() {
  const { locale } = useRouter();
  const router = useRouter();

  const handleClick = () => {
    router.push("/", "/", { locale: locale === "en" ? "es" : "en" });
  };
  return (
    <Container sm css={{ my: "$xs" }}>
      <BackgroundParticles.default />
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
                Js Full Stack Developer
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
                  en="Knowledge in technologies such as Figma, React, Nextjs and StrapiCMS."
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
          <TecnologiesContainer.default />
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
