import { Spacer } from "@nextui-org/react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import StackContainer from "../components/StackContainer";

export default function Web() {
  return (
    <Layout>
      <Header />
      <Spacer y={1} />
      <StackContainer />
      <SocialBar />
    </Layout>
  );
}
