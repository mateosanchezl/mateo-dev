import Project from "@/components/project";
import { projects } from "@/data/projectsData";
import React from "react";

function ProjectsPage() {
  return (
    <div className="min-h-screen w-full py-32 px-6 lg:py-24 lg:px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-16 font-bold text-primary lg:mb-20 underline decoration-wavy decoration-primary/25 decoration-1 decoration underline-offset-4">
          projects
        </h1>
        <ul className="space-y-12">
          {projects.map((project) => (
            <li key={project.projectName}>
              <Project {...project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsPage;
