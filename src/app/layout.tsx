import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J. Francisco Robles - Portafolio",
  description:
    "¡Hola! Soy J. Francisco Robles, un apasionado desarrollador de software con un enfoque en la creación de soluciones tecnológicas innovadoras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className={montserrat.className}>
        <div className="container flex flex-col w-full p-6 ">
          <Navbar />
          <main className="flex w-full min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
