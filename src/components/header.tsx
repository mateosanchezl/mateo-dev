import React from "react";
import ModeToggle from "./theme-toggle";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import PageLink from "./page-link";

function Header() {
  return (
    <header>
      <div className="absolute left-10 top-10">
        <Link href="/" passHref>
          <Button variant="outline" size="icon">
            <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>
      </div>
      <div className="absolute right-10 top-10">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
