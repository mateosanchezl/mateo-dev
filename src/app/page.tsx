import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projectsData";

export default function Home() {
  return (
    <div className="flex min-w-screen flex-col items-center justify-between ">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <Header />
        <div className="w-full pt-4">
          <div>
            <h2 className="font-normal ">about me 👨🏽‍💻</h2>
            <div className="w-full h-[1px] bg-zinc-800 mt-1"></div>
            <p className="mt-4">
              i am bolivian software engineering student & lab demonstrator at manchester met.
            </p>
            <p className="mt-2">
              i love to build cool things, swim, run and lift weights. and when i&apos;m back home,
              i love spending time with my family and luke.
            </p>
          </div>
        </div>
        <div className="w-full pt-10">
          <div>
            <h2 className="font-normal ">projects 🚀</h2>
            <div className="w-full h-[1px] bg-zinc-800 mt-1"></div>
            <div className="grid gap-2 grid-cols-2 mt-4">
              {projects.map((project, index) => (
                <ProjectCard
                  name={project.projectName}
                  slug={project.slug}
                  description={project.description}
                  key={index}
                  imageSrc={project.imageSource}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
