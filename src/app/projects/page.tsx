import Project from "@/components/project";
import { projects } from "@/data/projectsData";
import React from "react";

function Projects() {
  return (
    <div className="min-h-screen w-full py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-20 underline decoration-wavy decoration-primary/25 decoration-2 decoration underline-offset-4">
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

export default Projects;
