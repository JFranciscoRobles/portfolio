import { Grid, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import React from "react";
import { dataTecnologias } from "./stackData";
import TecnologiesCard from "./TecnologiesCard";

type Props = {};

function StackContainer({}: Props) {
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
          <I18n
            en="Technologies I love to use"
            es="Tecnologías que amo utilizar"
          />
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          {dataTecnologias.map((item, index) => (
            <Grid
              xs={item.nombre !== "DigitalOcean" ? 4 : 8}
              md={item.nombre !== "DigitalOcean" ? 3 : 6}
              key={index}
            >
              <TecnologiesCard data={item} />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default StackContainer;
