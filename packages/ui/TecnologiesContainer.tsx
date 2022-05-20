import { Grid } from "@nextui-org/react";
import { dataTecnologias } from "./stackData";
import TecnologiesCard from "./TecnologiesCard";

const TecnologiesContainer = () => {
  return (
    <Grid.Container gap={1}>
      {dataTecnologias.map((item, index) => (
        <Grid key={index}>
          <TecnologiesCard data={item} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default TecnologiesContainer;
