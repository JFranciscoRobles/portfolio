import { Grid, Link } from "@nextui-org/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { UiButton } from "ui";

type Props = {};

function SocialBar({}: Props) {
  return (
    <Grid.Container justify="flex-end">
      {options.map((option) => (
        <Grid key={option.name}>
          <Link href={option.href} target={option.target ? "_blank" : "_self"}>
            <UiButton
              css={{ zIndex: 0 }}
              aria-label={option.name}
              auto
              light
              icon={option.icon}
            />
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );
}

export default SocialBar;

type typeOption = {
  name: string;
  href: string;
  target: boolean;
  icon: React.ReactNode;
};

const options: typeOption[] = [
  {
    name: "Github",
    href: "https://github.com/JFranciscoRobles",
    target: true,
    icon: <FaGithub size={20} fill="currentColor" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jfranciscorobles/",
    target: true,
    icon: <FaLinkedin size={20} fill="currentColor" />,
  },
  {
    name: "Email",
    href: "mailto:josefrancisco.roblesacosta@gmail.com",
    target: false,
    icon: <MdEmail size={20} fill="currentColor" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/JFrankRobles",
    target: true,
    icon: <FaTwitter size={20} fill="currentColor" />,
  },
];
