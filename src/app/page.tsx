"use client";

import PageLink from "@/components/page-link";
import SocialsToggle from "@/components/socials-toggle";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="h-screen flex justify-center items-center text-primary lg:text-xl text-md">
      <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-1/2">
        <h1 className="lg:text-3xl text-2xl">mateo sanchez</h1>
        <p className="pt-5 lg">
          bolivian software engineering student & <br />
          lab demonstrator at manchester met.
        </p>
        <p className="pt-4">
          learn more <PageLink href="/about">about me</PageLink> and my previous{" "}
          <PageLink href="/experience">experience</PageLink>.
        </p>
        <p className="pt-4">
          this site is a work in progress. in the meantime, check out the{" "}
          <PageLink href="/projects">cool stuff i&apos;ve built</PageLink>!
        </p>
        <SocialsToggle isVisible={true} />
      </div>
    </div>
  );
}
