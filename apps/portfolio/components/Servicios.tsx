import { Card, Grid, Text } from "@nextui-org/react";
import { I18n } from "nextjs-i18n";
import React from "react";
import { FaDrawPolygon } from "react-icons/fa";
import {
  MdOutlineLocalGroceryStore,
  MdOutlineSystemSecurityUpdateGood,
} from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsPencilSquare, BsFillGrid1X2Fill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

type Props = {};

function Servicios({}: Props) {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Text
          h2
          size={28}
          weight={"semibold"}
          css={{
            lineHeight: "$xs",
          }}
        >
          <I18n en="Services I offer" es="Servicios que ofrezco" />
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          {options.map((option, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card
                role="presentation"
                hoverable
                css={{
                  "&:hover": {
                    backgroundColor: option.color,
                  },
                }}
              >
                <Card.Body>
                  <Grid.Container justify="center">
                    {option.icon}
                  </Grid.Container>
                </Card.Body>
                <Card.Footer>
                  <Text b css={{ textAlign: "center", w: "100%" }}>
                    {option.name}
                  </Text>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
      <Grid xs={12}>
        <Text
          h2
          size={28}
          weight={"semibold"}
          css={{
            lineHeight: "$xs",
          }}
        >
          <I18n
            en="I can help you develop a"
            es="Puedo ayudarte a desarrollar"
          />
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          {optionsTwo.map((option, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card
                hoverable
                css={{
                  "&:hover": {
                    backgroundColor: option.color,
                  },
                }}
              >
                <Card.Body>
                  <Grid.Container justify="center">
                    {option.icon}
                  </Grid.Container>
                </Card.Body>
                <Card.Footer>
                  <Text b css={{ textAlign: "center", w: "100%" }}>
                    {option.name}
                  </Text>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default Servicios;

const options = [
  {
    name: <I18n en="UI/UX Designer" es="Desarollador UI/UX" />,
    icon: <FaDrawPolygon size={36} />,
    description: "",
    color: "$yellow300",
  },
  {
    name: <I18n en="Front-end Developer" es="Desarollador Front-End" />,
    icon: <RiPagesLine size={36} />,
    description: "",
    color: "$blue300",
  },
  {
    name: <I18n en="Back-end Developer" es="Desarollador Back-End" />,
    icon: <AiOutlineDatabase size={36} />,
    description: "",
    color: "$red300",
  },
  {
    name: <I18n en="Consultant" es="Consultoria" />,
    icon: <BsPencilSquare size={36} />,
    description: "",
    color: "$green300",
  },
];

const optionsTwo = [
  {
    name: <I18n en="E-Commerce" es="Tiendas Online" />,
    icon: <MdOutlineLocalGroceryStore size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    name: <I18n en="Catalogs" es="Catalogos" />,
    icon: <BsFillGrid1X2Fill size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    name: <I18n en="Presentation Sites" es="Sitios de Presentación" />,
    icon: <CgWebsite size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    name: <I18n en="Custom applications" es="Aplicaciónes a medida" />,
    icon: <MdOutlineSystemSecurityUpdateGood size={30} />,
    description: "",
    color: "$blue300",
  },
];
