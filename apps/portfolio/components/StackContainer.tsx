import { Grid, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import React from "react";
import { TecnologiesContainer } from "ui";

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
        <TecnologiesContainer />
      </Grid>
    </Grid.Container>
  );
}

export default StackContainer;
