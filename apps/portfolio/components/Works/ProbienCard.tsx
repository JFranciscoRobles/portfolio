import React from "react";
import Image from "next/image";
import { Card, Grid, Link, Text, styled, keyframes } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import * as Tabs from "@radix-ui/react-tabs";
import {
  SiAlgolia,
  SiDigitalocean,
  SiNextdotjs,
  SiPrisma,
  SiStrapi,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

type Props = {};

function ProbienCard({}: Props) {
  return (
    <Card role="presentation" hoverable css={{ minHeight: 300 }}>
      <Card.Body
        css={{ overflow: "hidden", display: "flex", justifyContent: "center" }}
      >
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Grid.Container gap={1}>
            <Grid xs={12} sm={10}>
              <StyledContent value="tab1">
                <Grid.Container gap={1}>
                  <Grid xs={12} sm={4} justify="center">
                    <Image
                      width={320}
                      height={180}
                      src="/Probien.png"
                      alt="Default Image"
                      objectFit="contain"
                    />
                  </Grid>
                  <Grid xs={12} sm={8} css={{ p: 4 }}>
                    <Grid.Container alignContent="flex-start" gap={1}>
                      <Grid xs={12}>
                        <Link
                          href="https://www.probien.com.mx"
                          css={{
                            fontSize: "$sm",
                            color: "$blue800",
                            fontWeight: "$semibold",
                          }}
                        >
                          Probien Bienes Exclusivos
                        </Link>
                      </Grid>
                      <Grid xs={12}>
                        <Text size={18} css={{ lineHeight: "$sm" }}>
                          <I18n
                            en="Probien's Catalog, the company wanted to renew its Public Website, since it was very slow, contained several errors and was very expensive. Probien commissioned me to create a new platform that contains everything you need, a new experience for your customers, a new identity and a new image."
                            es="Catálogo de Probien, la empresa buscaba renovar su Sitio Web Público, ya que esta era muy lenta, contenía diversos errores y era muy costoso. Probien me encargo crear una nueva plataforma que contenga todo lo que necesitaba, una nueva experiencia para sus clientes, una nueva identidad y una nueva imagen."
                          />
                        </Text>
                      </Grid>

                      <Grid xs={12}>
                        <Grid.Container gap={2} justify={"flex-end"}>
                          <Grid justify="center">
                            <SiVercel title="Vercel" size={20} width={"100%"} />
                          </Grid>
                          <Grid justify="center">
                            <SiDigitalocean
                              title="Digital Ocean"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <SiNextdotjs
                              title="Next.js"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <SiTailwindcss
                              title="Tailwindcss"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <SiStrapi title="Strapi" size={20} width={"100%"} />
                          </Grid>
                          <Grid justify="center">
                            <SiAlgolia
                              title="Algolia"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                        </Grid.Container>
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </StyledContent>
              <StyledContent value="tab2">
                <Grid.Container gap={1}>
                  <Grid xs={12} sm={4} justify="center">
                    <Image
                      width={320}
                      height={180}
                      src="/Probien.png"
                      alt="Default Image"
                      objectFit="contain"
                    />
                  </Grid>
                  <Grid xs={12} sm={8} css={{ p: 4 }}>
                    <Grid.Container alignContent="flex-start">
                      <Grid xs={12}>
                        <Text
                          size={22}
                          css={{
                            letterSpacing: "$wide",
                            color: "$blue800",
                            fontWeight: "$medium",
                          }}
                        >
                          Probien BlackMarket
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text size={18} css={{ lineHeight: "$sm" }}>
                          <I18n
                            en="This was Probien's second commission, there are properties that for different reasons cannot be in the public catalog, so they asked me to develop a website in which only Probien's internal team can make use of it."
                            es="Este fue el segundo encargo de Probien, existen propiedades que por distintas razones estas no pueden estar en el catálogo público, así que me pidieron desarrollar un sitio web en el cual solamente el equipo interno de Probien pueda hacer uso de él."
                          />
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Grid.Container gap={2} justify={"flex-end"}>
                          <Grid justify="center">
                            <SiVercel title="Vercel" size={20} width={"100%"} />
                          </Grid>
                          <Grid justify="center">
                            <SiDigitalocean
                              title="Digital Ocean"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <SiNextdotjs
                              title="Next.js"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <Text
                              title="NextUI"
                              size={20}
                              css={{ lineHeight: 1 }}
                            >
                              NextUI
                            </Text>
                          </Grid>
                          <Grid justify="center">
                            <SiPrisma title="Prisma" size={20} width={"100%"} />
                          </Grid>
                        </Grid.Container>
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </StyledContent>
              <StyledContent value="tab3">
                <Grid.Container gap={1}>
                  <Grid xs={12} sm={4} justify="center">
                    <Image
                      width={320}
                      height={180}
                      src="/Probien.png"
                      alt="Default Image"
                      objectFit="contain"
                    />
                  </Grid>
                  <Grid xs={12} sm={8} css={{ p: 4 }}>
                    <Grid.Container alignContent="flex-start">
                      <Grid xs={12}>
                        <Text
                          size={22}
                          css={{
                            letterSpacing: "$wide",
                            color: "$blue800",
                            fontWeight: "$medium",
                          }}
                        >
                          Probien Formatos
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text size={18} css={{ lineHeight: "$sm" }}>
                          <I18n
                            en="Probien Formats is the third order of Probien, this platform was developed to digitalize the company's processes, in which they sought to streamline the process of contracts between the Probien Agent and the clients."
                            es="Probien Formatos es el tercer encargo de Probien, esta plataforma fue desarrollada para digital los procesos de la empresa, en el cual buscaban agilizar el proceso de contratos entre el Agente de Probien y los clientes."
                          />
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Grid.Container gap={2} justify={"flex-end"}>
                          <Grid justify="center">
                            <SiVercel title="Vercel" size={20} width={"100%"} />
                          </Grid>

                          <Grid justify="center">
                            <SiNextdotjs
                              title="Next.js"
                              size={20}
                              width={"100%"}
                            />
                          </Grid>
                          <Grid justify="center">
                            <Text
                              title="NextUI"
                              size={20}
                              css={{ lineHeight: 1 }}
                            >
                              NextUI
                            </Text>
                          </Grid>
                          <Grid justify="center">
                            <SiPrisma title="Prisma" size={20} width={"100%"} />
                          </Grid>
                        </Grid.Container>
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </StyledContent>
            </Grid>
            <Grid xs={12} sm={2}>
              <StyledList aria-label="tabs">
                <StyledTrigger value="tab1">Probien Catálogo</StyledTrigger>
                <StyledTrigger value="tab2">Probien BlackMarket</StyledTrigger>
                <StyledTrigger value="tab3">Probien Formatos</StyledTrigger>
              </StyledList>
            </Grid>
          </Grid.Container>
        </Tabs.Root>
      </Card.Body>
    </Card>
  );
}

export default ProbienCard;

const enterFromRight = keyframes({
  from: { transform: "translateX(300px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const StyledList = styled(Tabs.List, {
  display: "flex",
  w: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 12,
  "@sm": {
    flexDirection: "column",
    justifyContent: "center",
  },
});

const StyledTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontWeight: "$semibold",
  cursor: "pointer",
  fontSize: "$xs",
  '&[data-state="active"]': {
    color: "$blue600",
    boxShadow: "inset 0 -1px 0 0 currentColor",
  },
  "@md": {
    fontSize: "$base",
  },
});

const StyledContent = styled(Tabs.Content, {
  animationDuration: "1000ms",
  animationTimingFunction: "ease",
  //@ts-ignore
  animationName: enterFromRight,
});
