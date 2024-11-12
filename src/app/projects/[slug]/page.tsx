import Image from "next/image";
import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import IconLink from "@/components/icon-link";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.projectName,
    description: project.description,
    image: project.imageSource,
    url: `https://mateocodes.com/projects/${project.slug}`,
  };

  return {
    title: `${project.projectName} - Mateo Sanchez`,
    description: project.description,
    keywords: project.technologies ? project.technologies.join(", ") : undefined,
    openGraph: {
      title: project.projectName,
      description: project.description,
      images: [
        {
          url: project.imageSource,
        },
      ],
      url: `https://mateocodes.com/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
    other: {
      "application/ld+json": JSON.stringify(structuredData),
    },
    metadataBase: new URL("https://mateocodes.com"),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.projectName,
    description: project.description,
    image: project.imageSource,
    url: `https://mateocodes.com/projects/${project.slug}`,
  };

  return (
    <div className="flex min-w-screen flex-col items-center justify-between relative">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <div className="container mx-auto p-4">
          <div className="relative w-full h-64 mb-4">
            <Image
              src={project.imageSource}
              alt={project.alt}
              fill
              style={{ objectFit: "contain" }}
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

          <Link href={"/"} passHref>
            <Button variant={"secondary"} className="mt-8">
              <ArrowLeftIcon className="mr-2" />
              Go back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
