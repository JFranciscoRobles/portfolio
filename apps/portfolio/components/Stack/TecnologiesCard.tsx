import { Card, Text, Grid } from "@nextui-org/react";
import { typeTecnlogias } from "./stackData";

type CardProps = {
  data: typeTecnlogias;
};

const TecnologiesCard = ({ data }: CardProps) => {
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
};

export default TecnologiesCard;
