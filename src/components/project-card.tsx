import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
}

function ProjectCard({ name, slug, description, imageSrc }: ProjectCardProps) {
  const projectUrl = `/projects/${slug}`;

  return (
    <Link href={projectUrl} passHref>
      <div className="w-full h-64 lg:h-52 border border-muted hover:border-primary transition rounded-lg grid-flow-col hover:shadow-lg hover:scale-[1.025] hover:cursor-pointer duration-200 hover:shadow-primary/10 flex flex-col overflow-hidden justify-center items-center p-2">
        <div className="aspect-[16/9] relative rounded-lg overflow-hidden w-full">
          <Image src={imageSrc} alt={`${name}-photo`} fill style={{ objectFit: "contain" }} />
        </div>
        <div className="w-full p-1 h-[40%]">
          <h2 className="font-semibold text-sm">{name}</h2>
          <p className="text-sm pt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
