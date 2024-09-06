import Project from "@/components/project";
import { projects } from "@/data/projectsData";
import React from "react";

function Projects() {
  return (
    <div className="h-screen w-full flex  items-center text-muted-foreground lg:text-lg text-md">
      <div className="w-1/2 mx-auto">
        <h1 className="lg:text-3xl text-primary">projects</h1>
        <div className="pt-12">
          <ul>
            {projects.map((project) => (
              <li key={project.projectName} className="py-8">
                <Project
                  projectName={project.projectName}
                  description={project.description}
                  imageSources={project.imageSources}
                  technologies={project.technologies}
                  alt={project.alt}
                  githubLink={project.githubLink}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
