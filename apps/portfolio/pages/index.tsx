import { Card, Container, Spacer } from "@nextui-org/react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header";

import dynamic from "next/dynamic";
import Servicios from "../components/Services/Servicios";
import StackContainer from "../components/Stack/StackContainer";
import WorksContainer from "../components/Works/WorksContainer";
import SocialBar from "../components/SocialBar";
const BackgroundParticles = dynamic(() => import("ui/BackgroundParticles"), {
  ssr: false,
});

export default function Web() {
  return (
    <Layout>
      <BackgroundParticles />
      <Header />
      <Spacer y={1} />
      <Servicios />
      <StackContainer />
      <WorksContainer />

      <Spacer y={1} />
      <Container>
        <Card role={"alert"} color={"primary"}>
          This website is under developed
        </Card>
      </Container>
      <SocialBar />
    </Layout>
  );
}
