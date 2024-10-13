import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen w-full py-32 px-16 lg:py-24 lg:px-4 text-primary/75">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8 font-bold text-primary lg:mb-20 underline decoration-wavy decoration-primary/25 decoration-1 decoration underline-offset-4">
          about me
        </h1>

        <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
          <div className="flex flex-col lg:mx-20 lg:text-xl md:text-xl">
            <p>
              i love to <span className="text-primary">code</span>,{" "}
              <span className="text-primary">swim</span>,{" "}
              <span className="text-primary">run</span> and{" "}
              <span className="text-primary">lift weights</span>. <br />
              and when i&apos;m back home, i love spending time with my{" "}
              <span className="text-primary">family </span>
              and{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="underline underline-offset-2 decoration-wavy decoration-1 decoration-primary text-primary hover:text-primary/75">
                    luke
                  </button>
                </DialogTrigger>

                <DialogContent className="w-fit max-w-96 md:max-w-md lg:max-w-xl xl:max-w-xl p-2">
                  <Image
                    src={"/luke.jpg"}
                    alt="luke"
                    height={800}
                    width={400}
                    className="rounded-lg shadow-lg items-center justify-center"
                  />
                </DialogContent>
              </Dialog>
              .
              <br />
              <br />
            </p>
            <p>
              i am originally from <span className="text-primary">bolivia</span>
              , where i lived until i was seven before moving to{" "}
              <span className="text-primary">dubai</span> in 2010.
              <br />
              <br /> in 2013 i then moved to{" "}
              <span className="text-primary">london</span>, where i lived for
              six years before moving back to bolivia to finish my last two
              years of school.
              <br /> <br />
              after two years of online lessons due to the pandemic, i moved
              back to the uk and have been studying{" "}
              <span className="text-primary">
                software engineering in manchester
              </span>{" "}
              since.
            </p>
          </div>
          <div className="w-full max-w-64 md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <Image
              src={"/me.JPG"}
              alt="me"
              width={700}
              height={475}
              className="rounded-lg shadow-lg items-center justify-center mb-8 lg:mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
