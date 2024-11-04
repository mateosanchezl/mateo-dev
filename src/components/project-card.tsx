import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

function ProjectCard({ name, description, imageSrc }: ProjectCardProps) {
  return (
    <div className="w-full h-52 border border-muted rounded-lg grid-flow-col hover:shadow-lg hover:scale-[1.025] hover:cursor-pointer duration-200 hover:shadow-primary/10 flex flex-col overflow-hidden justify-center items-center">
      <Image
        src={imageSrc}
        alt={`${name}-photo`}
        className="aspect-[16/9]"
        height={100}
        width={200}
      />
      <div>
        <h2 className="font-semibold text-sm">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
