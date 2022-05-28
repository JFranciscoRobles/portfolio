import { Grid, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import React from "react";
import { UiCard } from "ui";
import { optionsHelps, optionsServices } from "./serviciosData";

type Props = {};

function Servicios({}: Props) {
  return (
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
          <I18n en="Services I offer" es="Servicios que ofrezco" />
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          {optionsServices.map((option, index) => (
            <Grid xs={6} sm={3} key={index}>
              <UiCard data={option} />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
      <Grid xs={12}>
        <Text
          h2
          size={28}
          weight={"semibold"}
          css={{
            lineHeight: "$xs",
          }}
        >
          <I18n en="I can help you develop" es="Puedo ayudarte a desarrollar" />
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          {optionsHelps.map((option, index) => (
            <Grid xs={6} sm={3} key={index}>
              <UiCard data={option} />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default Servicios;
