import { Grid } from "@nextui-org/react";
import PortfolioCard from "./PortfolioCard";
import ProbienCard from "./ProbienCard";

type Props = {};

function WorkCard({}: Props) {
  return (
    <>
      <Grid xs={12}>
        <ProbienCard />
      </Grid>
      <Grid xs={12}>
        <PortfolioCard />
      </Grid>
    </>
  );
}

export default WorkCard;
