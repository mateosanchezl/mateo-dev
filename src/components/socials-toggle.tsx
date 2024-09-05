"use client";

import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface SocialsToggleProps {
  isVisible: boolean;
}

function SocialsToggle({ isVisible }: SocialsToggleProps) {
  return (
    <div className="flex flex-row pt-4 h-24 w-48">
      <div
        className={`flex transition-all duration-500 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <Link href="https://github.com/mateosanchezl" passHref={true}>
          <GitHubLogoIcon className="h-8 w-8 transition-transform duration-300 ease-in-out hover:scale-110" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mateo-sanchez-lopez-b6288a183/"
          passHref={true}
        >
          <LinkedInLogoIcon className="h-8 w-8 ml-3 transition-transform duration-300 ease-in-out hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}

export default SocialsToggle;
