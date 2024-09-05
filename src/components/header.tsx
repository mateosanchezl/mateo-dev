import React from "react";
import ModeToggle from "./theme-toggle";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="absolute left-10 top-10"></div>
      <div className="absolute right-10 top-10">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
