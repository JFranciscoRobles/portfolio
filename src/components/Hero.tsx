"use client";

import { Button } from "@/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeDescription } from "./TypeDescription";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="text-center mb-12">
      <Image
        alt="J. Francisco Robles"
        className="rounded-full mx-auto"
        height="200"
        src="/yobw.jpg"
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="200"
      />
      <h1 className="text-3xl font-bold mt-4">J. Francisco Robles</h1>
      <TypeDescription />
      <div className="flex gap-8 w-full flex-wrap mt-6 justify-center">
        <Link href={"https://github.com/JFranciscoRobles"}>
          <Button variant={"ghost"}>
            <GithubIcon className=" w-6 h-6 fill-foreground" />
          </Button>
        </Link>
        <Link href={"https://twitter.com/JFrankRobles"}>
          <Button variant={"ghost"}>
            <TwitterIcon className=" w-6 h-6 fill-foreground" />
          </Button>
        </Link>
        <Link href={"https://github.com/JFranciscoRobles"}>
          <Button variant={"ghost"}>
            <LinkedinIcon className=" w-6 h-6 fill-foreground" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
