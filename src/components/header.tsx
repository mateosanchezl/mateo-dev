import React from "react";
import ModeToggle from "./theme-toggle";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import PageLink from "./page-link";

function Header() {
  return (
    <header className="flex justify-center items-center">
      <div className="absolute right-10 top-10">
        <ModeToggle />
      </div>
      <div className="w-96 text-center text-lg">
        <h1>Mateo Sanchez</h1>
      </div>
    </header>
  );
}

export default Header;
