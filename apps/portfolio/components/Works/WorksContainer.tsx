import { Grid, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import React from "react";
import WorkCard from "./WorkCard";

type Props = {};

function WorksContainer({}: Props) {
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
          <I18n en="Works" es="Trabajos" />
        </Text>
      </Grid>
      <Grid xs={12}>
        <WorkCard />
      </Grid>
    </Grid.Container>
  );
}

export default WorksContainer;
