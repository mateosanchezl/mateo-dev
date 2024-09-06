import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types";

function Project({
  projectName,
  imageSources,
  alt,
  description,
  githubLink,
}: ProjectType) {
  return (
    <div>
      <h2 className="text-2xl text-primary">{projectName}</h2>
      {imageSources && imageSources.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {imageSources.map((src, index) => (
            <Image
              key={`${projectName}-image-${index}`}
              src={src}
              alt={`${alt} ${index + 1}`}
              width={200}
              height={150}
              className="object-cover"
            />
          ))}
        </div>
      )}
      <p>{description}</p>
      <Link href={githubLink}>
        <GitHubLogoIcon className="h-8 w-8" />
      </Link>
    </div>
  );
}

export default Project;
