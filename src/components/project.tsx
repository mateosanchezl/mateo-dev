import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types";

function Project({
  projectName,
  description,
  technologies,
  tags,
  imageSource,
  alt,
  githubLink,
}: ProjectType) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-lg overflow-hidden ">
        <Image
          src={imageSource}
          alt={`${alt}`}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-2/3 ml-2">
        <div className="flex flex-row items-center">
          <h2 className="text-2xl font-semibold text-primary mr-2">
            {projectName}
          </h2>
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-2">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link href="https://github.com/mateosanchezl" passHref={true}>
          <GitHubLogoIcon className="h-8 w-8 transition duration-200 hover:scale-110 lg:mt-4" />
        </Link>
      </div>
    </div>
  );
}

export default Project;
