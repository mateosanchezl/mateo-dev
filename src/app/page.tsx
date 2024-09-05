"use client";

import ModeToggle from "@/components/theme-toggle";
import SocialsToggle from "@/components/socials-toggle";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="h-screen bg-primary flex justify-center items-center text-muted-foreground ">
      <div className="absolute right-10 top-10">
        <ModeToggle />
      </div>
      <div className="w-1/4 h-4/6">
        <h1 className="text-2xl text-primary-foreground">mateo sanchez</h1>
        <p className="pt-5 lg">
          bolivian software engineering student & <br />
          lab demonstrator at{" "}
          <a href="https://www.mmu.ac.uk/">
            <span className="underline text-primary-foreground">
              manchester met
            </span>
          </a>
        </p>
        <p className="pt-4">
          i am currently based in{" "}
          <span className="text-primary-foreground">manchester</span>. before
          that, i finished my last two years of school in{" "}
          <span className="text-primary-foreground">la paz</span> after living
          in <span className="text-primary-foreground">dubai</span> and{" "}
          <span className="text-primary-foreground">london</span>.
        </p>
        <p className="pt-4">
          this website is a work in progress. in the meantime, you can learn
          more{" "}
          <Link className="text-primary-foreground underline" href={"/about"}>
            about me
          </Link>
          .
        </p>
        <p className="pt-4">
          check out the{" "}
          <Link
            href={"/projects"}
            className="text-primary-foreground underline"
          >
            cool stuff i&apos;ve built
          </Link>
          , and feel free to{" "}
          <button
            className="text-primary-foreground underline"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            get in touch
          </button>
        </p>
        <SocialsToggle isVisible={isVisible} />
      </div>
    </div>
  );
}
