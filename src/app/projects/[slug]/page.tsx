import Image from "next/image";
import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import IconLink from "@/components/icon-link";

export default async function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-w-screen flex-col items-center justify-between">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <div className="container mx-auto p-4">
          <div className="relative w-full h-64 mb-4">
            <Image
              src={project.imageSource}
              alt={`${project.projectName} image`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-row mt-12 items-center mb-4">
            <h1 className="text-lg font-bold">{project.projectName}</h1>{" "}
            {project.githubLink && (
              <IconLink Icon={GitHubLogoIcon} href={project.githubLink} height={24} width={24} />
            )}
          </div>

          <p className="leading-8">
            {project.extendedDescription ? project.extendedDescription : project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
