import Header from "@/components/header";
import MouseBackground from "@/components/mouseBackground";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projectsData";

export default function Home() {
  return (
    <div className="relative flex min-w-screen flex-col items-center justify-between">
      <MouseBackground />

      <div className="relative z-10 flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <Header />
        <div className="w-full pt-4">
          <div>
            <h2 className="font-normal ">about me 👨🏽‍💻</h2>
            <div className="w-full h-[1px] bg-zinc-800 mt-1"></div>
            <p className="mt-4">
              i am a software engineering student & teaching assistant at manchester met.
            </p>
            <p className="mt-2">
              i made this website to share the (hopefully) cool things i&apos;ve built, as well as
              things i am passionate about.
            </p>

            <a
              className="hover:cursor-pointer hover:underline text-primary/70 hover:text-primary"
              href="/MateoSanchezLopezCV1124.pdf"
              download
            >
              <p className="mt-2">cv download</p>
            </a>
          </div>
        </div>
        <div className="w-full pt-5">
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
