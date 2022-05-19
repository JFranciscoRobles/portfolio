import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactChild } from "react";
import { lightTheme, darkTheme } from "./themes";

type Props = {
  children: ReactChild;
};

function NextUIProviderWraper({ children }: Props) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default NextUIProviderWraper;
