import React from "react";
import Image from "next/image";
import { Card, Grid, Link, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";

type Props = {};

function WorkCard({}: Props) {
  return (
    <Card role="presentation">
      <Card.Body>
        <Grid.Container>
          <Grid xs={12} sm={4}>
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
                    es="Catalogo de Probien, la empresa buscaba renovar su Sitio Web Publico, ya que esta era muy lenta, contenia diversos errores y era muy costoso. Probien me encargo crear una nueva plataforma que contenga todo lo que necesitaba, una nueva experiencia para sus clientes, una nueva identidad y una nueva imagen."
                  />
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
