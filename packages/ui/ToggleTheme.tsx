import React from "react";
import { Button, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

type Props = {};

function ToggleTheme({}: Props) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      {!isDark ? (
        <Button
          css={{
            "&:hover": {
              backgroundColor: "$gray300",
            },
          }}
          light
          auto
          icon={<BiSun />}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <Button
          css={{
            "&:hover": {
              backgroundColor: "$gray300",
            },
          }}
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
