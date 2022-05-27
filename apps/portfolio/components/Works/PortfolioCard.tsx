import React from "react";
import { Button, Card, Grid, Link, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";

import { SiNextdotjs, SiTurbosquid, SiVercel } from "react-icons/si";

type Props = {};

function PortfolioCard({}: Props) {
  return (
    <Card role="presentation" hoverable>
      <Card.Body>
        <Grid.Container alignContent="flex-start" gap={1}>
          <Grid xs={12}>
            <Link
              href="https://github.com/JFranciscoRobles/portfolio"
              css={{
                fontSize: "$sm",
                color: "$blue800",
                fontWeight: "$semibold",
              }}
            >
              <I18n en="This Portfolio" es="Este Portafolio" />
            </Link>
          </Grid>
          <Grid xs={12}>
            <Text size={18} css={{ lineHeight: "$sm" }}>
              <I18n
                en="My wish was to create a portfolio that is as clear as possible and which has a great set of features, such as I18n, dark mode, animations, accessible and responsive. You are welcome to view the code on Github and feel free to use any part of the code."
                es="Mi deseo fue crear un portafolio lo mas claro posible y el cual tenga una gran serie de funciones, como I18n, modo oscuro, animaciones, accesible y que sea responsivo. Estas invitado a ver el codigo en Github y sientete libre de utilizar cualquier parte del codigo."
              />
            </Text>
          </Grid>

          <Grid xs={12}>
            <Grid.Container
              gap={2}
              justify={"flex-end"}
              alignContent="center"
              alignItems="center"
            >
              <Grid justify="center">
                <SiVercel title="Vercel" size={20} width={"100%"} />
              </Grid>
              <Grid justify="center">
                <SiNextdotjs title="Next.js" size={20} width={"100%"} />
              </Grid>
              <Grid justify="center">
                <Text title="RadixUi" size={20} css={{ lineHeight: 1 }}>
                  RadixUI
                </Text>
              </Grid>
              <Grid justify="center">
                <Text title="NextUI" size={20} css={{ lineHeight: 1 }}>
                  NextUI
                </Text>
              </Grid>
              <Grid justify="center">
                <Text title="Turborepo" size={20} css={{ lineHeight: 1 }}>
                  Turborepo
                </Text>
              </Grid>
              <Grid justify="center">
                <Button size={"sm"}>
                  <I18n
                    en="See this code on Github"
                    es="Ver este código en Github"
                  />
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
