import React from "react";

import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import IconLink from "./icon-link";

function Header() {
  return (
    <header className="flex justify-center items-center">
      <div className="w-96 h-28 text-center text-lg relative">
        <h1 className="font-semibold">Mateo Sanchez</h1>
        <div className="flex justify-center pb-4 pt-3">
          <div className="h-[1px] w-1/6 bg-primary justify-center items-center"></div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <IconLink Icon={GitHubLogoIcon} href="https://github.com/mateosanchezl" />
          <IconLink Icon={EnvelopeClosedIcon} href="https://github.com/mateosanchezl" />
          <IconLink Icon={LinkedInLogoIcon} href="https://www.linkedin.com/in/mateosanchezl/" />
        </div>
      </div>
    </header>
  );
}

export default Header;
