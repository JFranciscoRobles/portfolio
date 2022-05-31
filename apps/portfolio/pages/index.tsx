import { Spacer } from "@nextui-org/react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header";
import Servicios from "../components/Services/Servicios";
import StackContainer from "../components/Stack/StackContainer";
import WorksContainer from "../components/Works/WorksContainer";
import SocialBar from "../components/SocialBar";

export default function Web() {
  return (
    <Layout>
      <Header />
      <Spacer y={1} />
      <Servicios />
      <StackContainer />
      <WorksContainer />
      <Spacer y={1} />
      <SocialBar />
    </Layout>
  );
}
