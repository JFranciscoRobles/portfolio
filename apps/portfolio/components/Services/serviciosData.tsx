import { FaDrawPolygon } from "react-icons/fa";
import {
  MdOutlineLocalGroceryStore,
  MdOutlineSystemSecurityUpdateGood,
} from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsPencilSquare, BsFillGrid1X2Fill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { I18n } from "nextjs-i18n";
import { typeUiCard } from "ui/UiCard";

export const optionsServices: typeUiCard[] = [
  {
    nombre: <I18n en="UI/UX Designer" es="Desarrollador UI/UX" />,
    logo: <FaDrawPolygon size={36} />,
    description: "",
    color: "$yellow300",
  },
  {
    nombre: <I18n en="Front-end Developer" es="Desarrollador Front-End" />,
    logo: <RiPagesLine size={36} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: <I18n en="Back-end Developer" es="Desarrollador Back-End" />,
    logo: <AiOutlineDatabase size={36} />,
    description: "",
    color: "$red300",
  },
  {
    nombre: <I18n en="Consultant" es="Consultoría" />,
    logo: <BsPencilSquare size={36} />,
    description: "",
    color: "$green300",
  },
];

export const optionsHelps: typeUiCard[] = [
  {
    nombre: <I18n en="E-Commerce" es="Tiendas Online" />,
    logo: <MdOutlineLocalGroceryStore size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: <I18n en="Catalogs" es="Catálogos" />,
    logo: <BsFillGrid1X2Fill size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: <I18n en="Presentation Sites" es="Sitios de Presentación" />,
    logo: <CgWebsite size={30} />,
    description: "",
    color: "$blue300",
  },
  {
    nombre: <I18n en="Custom applications" es="Aplicaciónes a medida" />,
    logo: <MdOutlineSystemSecurityUpdateGood size={30} />,
    description: "",
    color: "$blue300",
  },
];
