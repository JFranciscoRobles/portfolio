import React from "react";
import Hero from "../components/Hero";
import { CardTitle } from "@/ui/card";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full my-12 md:my-24  space-y-24">
      <Hero />
      <div className="my-12 p-4 text-center">
        <CardTitle className="max-w-md">Sitio Web en construcción </CardTitle>
      </div>
    </div>
  );
};

export default Page;
