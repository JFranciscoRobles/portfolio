import { Card, Grid, Text } from "@nextui-org/react";
import React from "react";

export type typeUiCard = {
  nombre: any;
  logo: any;
  description: string;
  color: string;
};

type Props = {
  data: typeUiCard;
};

function UiCard({ data }: Props) {
  return (
    <Card
      role="presentation"
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
      <Card.Footer
        css={{
          "@media screen and (max-width: 640px)": {
            p: 2,
          },
        }}
      >
        <Text b css={{ textAlign: "center", w: "100%" }}>
          {data.nombre}
        </Text>
      </Card.Footer>
    </Card>
  );
}

export default UiCard;
