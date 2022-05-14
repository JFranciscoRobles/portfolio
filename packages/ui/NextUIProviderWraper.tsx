import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactChild } from "react";
import { lightTheme } from "./themes";

type Props = {
  children: ReactChild;
};

function NextUIProviderWraper({ children }: Props) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
        }}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default NextUIProviderWraper;
