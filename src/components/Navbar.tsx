import React from "react";
import { Button } from "@/ui/button";

import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="top-0 p-4 sticky bg-background z-10">
      <div className="flex  items-center w-full gap-4 ">
        <div>
          <Link passHref href={"/"}>
            <Button variant="ghost" className="text-xl font-bold uppercase ">
              JFR
            </Button>
          </Link>
        </div>
        <div className="flex ml-auto gap-4">
          <Link href={"https://www.linkedin.com/in/jfranciscorobles/"}>
            <Button>Contáctame</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
