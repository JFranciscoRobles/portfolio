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
          aria-label={"Dark Mode"}
          light
          auto
          icon={<BiSun />}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <UiButton
          aria-label={"Light Mode"}
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
