import { ProjectType } from "@/types";

export const projects: ProjectType[] = [
  {
    projectName: "habify",
    description:
      "an open-source mobile app aiming to gamify self-development. where users can level up by completing daily quests in real life.",
    technologies: [
      "typescript",
      "react native",
      "expo",
      "firebase",
      "tanstack query",
    ],
    tags: ["app development"],
    imageSource: "/habify.jpeg",
    alt: "habify-photo",
    githubLink: "https://github.com/mateosanchezl/habify",
  },
  {
    projectName: "efficient-vis",
    description:
      "a full-stack web application where users can test their images on efficient-net pre-trained computer vision models.",
    technologies: [
      "javascript",
      "react",
      "python",
      "pytorch",
      "numpy",
      "flask",
    ],
    tags: ["full-stack development", "data science", "machine learning"],
    imageSource: "/efficientvis.png",
    alt: "efficientvis-photo",
    githubLink: "https://github.com/mateosanchezl/efficient-vis",
  },
  {
    projectName: "conway's game of life",
    description:
      "john horton conway's famous cellular automation game where cells can evolve following four simple rules.",
    technologies: ["python", "pygame", "numpy"],
    tags: ["game development"],
    imageSource: "/conwaysgol1.png",
    alt: "conwaysgol-photo",
    githubLink: "https://github.com/mateosanchezl/conways-game-of-life",
  },
  {
    projectName: "mnist dataset classification",
    description:
      "a simple pytorch model for the mnist classfication with tunable hyperparameters.",
    technologies: ["python", "pytorch", "numpy"],
    tags: ["data science", "machine learning"],
    imageSource: "/mnist.png",
    alt: "mnist-photo",
    githubLink: "https://github.com/mateosanchezl/mnist-torch",
  },
  {
    projectName: "movi",
    description:
      "the frontend of a movie searching website where users can search for trending movies.",
    technologies: ["vanilla js", "html", "css"],
    tags: ["front-end development"],
    imageSource: "/movi.png",
    alt: "movi-photo",
    githubLink: "https://github.com/mateosanchezl/movi",
  },
];
