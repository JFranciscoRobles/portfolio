import { Card, Container, Spacer } from "@nextui-org/react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import StackContainer from "../components/Stack/StackContainer";
import Servicios from "../components/Servicios";
import WorksContainer from "../components/Works/WorksContainer";
import dynamic from "next/dynamic";
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
