import { Card, Container, Spacer, Text } from "@nextui-org/react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import StackContainer from "../components/StackContainer";
import Servicios from "../components/Servicios";
import { I18n } from "nextjs-i18n";

export default function Web() {
  return (
    <Layout>
      <Header />
      <Spacer y={1} />
      <Servicios />
      <StackContainer />

      <Text
        h2
        size={28}
        weight={"semibold"}
        css={{
          lineHeight: "$xs",
        }}
      >
        <I18n en="Works" es="Trabajos" />
      </Text>

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
