import { Container, Grid, Button, Link, Text, Spacer } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { I18n } from "nextjs-i18n";
import React from "react";
import { BackgroundParticles, ToggleTheme, UiButton } from "ui";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { locale } = useRouter();
  const router = useRouter();

  const handleClick = () => {
    router.push("/", "/", { locale: locale === "en" ? "es" : "en" });
  };
  return (
    <Container sm css={{ my: "$xs" }}>
      <Head>
        <title>J.Francisco Robles - Portfolio</title>
        <meta
          name="description"
          content="J. Francisco Robles Js Full Stack Developer, actualmente viviendo en Tijuana - Mexico, diseñando y desarrollando aplicaciones web."
        />
      </Head>
      <Grid.Container justify="flex-end" alignItems="center">
        <ToggleTheme />
        <UiButton auto light onClick={() => handleClick()}>
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
        </UiButton>
        <Link href="mailto:josefrancisco.roblesacost    a@gmail.com">
          <Button size={"sm"}>
            <I18n en="Hire me!" es="¡Contratame!" />
          </Button>
        </Link>
      </Grid.Container>
      <Spacer y={1} />
      {children}
    </Container>
  );
}

export default Layout;
