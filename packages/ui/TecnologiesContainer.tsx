import { Grid } from "@nextui-org/react";
import { dataTecnologias } from "./stackData";
import TecnologiesCard from "./TecnologiesCard";

const TecnologiesContainer = () => {
  return (
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
  );
};

export default TecnologiesContainer;
