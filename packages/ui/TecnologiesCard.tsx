import { Card, Text, Grid } from "@nextui-org/react";
import { typeTecnlogias } from "./stackData";

type CardProps = {
  data: typeTecnlogias;
};

const TecnologiesCard = ({ data }: CardProps) => {
  return (
    <Card
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
      <Card.Footer>
        <Text b>{data.nombre}</Text>
      </Card.Footer>
    </Card>
  );
};

export default TecnologiesCard;
