import { Grid, Spacer, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import Image from "next/image";
import React from "react";
import SocialBar from "./SocialBar";

type Props = {};

function Header({}: Props) {
  return (
    <Grid.Container gap={1}>
      <Grid xs={12} md={4} justify="center">
        <Image
          style={{ borderRadius: "7%" }}
          width={180}
          height={210}
          priority
          src="/avatar.webp"
          placeholder="blur"
          blurDataURL={"/avatar.webp"}
          alt="Jose Francisco Robles Acosta"
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
              color="$blue800"
              weight={"semibold"}
              css={{
                lineHeight: "$xs",
              }}
            >
              Js Full Stack Developer
            </Text>
          </Grid>
          <Grid xs={12} direction={"column"}>
            <Text
              size={18}
              css={{
                display: "inline-block",
                borderBottomWidth: "0px",
                backgroundImage:
                  "linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)",
                backgroundSize: "0 3px",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
                transition: "background-size .5s ease-in-out",
                "&:hover": {
                  backgroundSize: "100% 3px",
                  backgroundPosition: "0 100%",
                },
              }}
            >
              <I18n
                en="Currently living in Tijuana - Mexico, designing and developing web applications, modernizing the websites of companies and small businesses."
                es="Actualmente viviendo en Tijuana - M??xico, dise??ando y desarrollando aplicaciones web, modernizando los sitios web de empresas y peque??os negocios."
              />
            </Text>
            <Spacer y={0.2} />
            <Text size={18} css={{ lineHeight: "$sm" }}>
              <I18n
                en="Knowledge in technologies such as Figma, React, Nextjs and StrapiCMS."
                es="Familiarizado con tecnolog??as como Figma, React, Nextjs y StrapiCMS."
              />
            </Text>
          </Grid>
          <Grid xs={12}>
            <SocialBar />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default Header;
