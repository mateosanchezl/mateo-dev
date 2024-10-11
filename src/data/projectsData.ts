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
    tags: ["mobile app development"],
    imageSource: "/project-images/habify.jpeg",
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
    imageSource: "/project-images/efficientvis.png",
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
    alt: "/project-images/conwaysgol-photo",
    githubLink: "https://github.com/mateosanchezl/conways-game-of-life",
  },
  {
    projectName: "mnist dataset classification",
    description:
      "a simple pytorch model for the mnist classfication with tunable hyperparameters.",
    technologies: ["python", "pytorch", "numpy"],
    tags: ["data science", "deep learning", "machine learning"],
    imageSource: "/project-images/mnist.png",
    alt: "mnist-photo",
    githubLink: "https://github.com/mateosanchezl/mnist-torch",
  },
  {
    projectName: "movi",
    description:
      "the frontend of a movie searching website where users can search for trending movies.",
    technologies: ["vanilla js", "html", "css"],
    tags: ["front-end development"],
    imageSource: "/project-images/movi.png",
    alt: "movi-photo",
    githubLink: "https://github.com/mateosanchezl/movi",
  },
  {
    projectName: "percolation union-find",
    description:
      "implementation and performance comparison of union find algorithms for a monte carlo simulation of the percolation problem.",
    technologies: ["python"],
    tags: ["data structures and algorithms"],
    imageSource: "/project-images/percolation.png",
    alt: "percolation-photo",
    githubLink: "https://github.com/mateosanchezl/percolation",
  },
  {
    projectName: "4-bit binary neural network",
    description:
      "a neural network for classifying whether a binary number is odd or even, made using only the math and random python modules.",
    technologies: ["python"],
    tags: ["machine learning", "deep learning"],
    imageSource: "/project-images/4bitnn.png",
    alt: "4bitnn-photo",
    githubLink: "https://github.com/mateosanchezl/4bitbinary-nn",
  },
];
