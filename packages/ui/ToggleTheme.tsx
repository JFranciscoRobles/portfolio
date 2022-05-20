import React from "react";
import { useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import UiButton from "./UiButton";

type Props = {};

function ToggleTheme({}: Props) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      {!isDark ? (
        <UiButton
          light
          auto
          icon={<BiSun />}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <UiButton
          light
          auto
          icon={<BiMoon />}
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}

export default ToggleTheme;
