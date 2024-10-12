"use client";

import PageLink from "@/components/page-link";
import SocialsToggle from "@/components/socials-toggle";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="h-screen flex justify-center items-center text-primary/75 lg:text-lg text-md">
      <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-1/2">
        <h1 className="lg:text-3xl text-2xl text-primary">mateo sanchez</h1>
        <p className="pt-5 lg">
          bolivian software engineering student & <br />
          lab demonstrator at{" "}
          <a href="https://www.mmu.ac.uk/">
            <span className="underline text-primary">manchester met</span>
          </a>
        </p>
        <p className="pt-4">
          i am currently based in{" "}
          <span className="text-primary">manchester</span>. before that, i
          finished my last two years of school in{" "}
          <span className="text-primary">la paz</span> after living in{" "}
          <span className="text-primary">dubai</span> and{" "}
          <span className="text-primary">london</span>.
        </p>
        <p className="pt-4">
          this website is a work in progress. in the meantime, you can learn
          more <PageLink href="/about">about me</PageLink>.
        </p>
        <p className="pt-4">
          check out the{" "}
          <PageLink href="/projects">cool stuff i&apos;ve built</PageLink>, and
          feel free to{" "}
          <button
            className="text-primary relative inline-block"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary animate-pulse"></span>
            get in touch
          </button>
          .
        </p>
        <SocialsToggle isVisible={isVisible} />
      </div>
    </div>
  );
}
