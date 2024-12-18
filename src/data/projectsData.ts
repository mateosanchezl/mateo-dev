import { ProjectType } from "@/types";

export const projects: ProjectType[] = [
  {
    projectName: "habify",
    slug: "habify",
    description: "a hackathon-winning IOS/Android mobile app aiming to gamify self-development.",
    extendedDescription:
      "Winner of 'Best Overall Concept' at a university Hackathon, Habify is a gamified self-development mobile application that transforms personal growth into an engaging daily adventure. Built with React Native and Expo, this cross-platform solution delivers a native experience to both iOS and Android users while maintaining a single codebase.",
    technologies: ["typescript", "react native", "expo", "firebase", "tanstack query"],
    tags: ["mobile app development"],
    imageSource: "/project-images/habify.jpeg",
    alt: "screenshot of a mobile application",
  },
  {
    projectName: "crawly-ai",
    slug: "crawly-ai",
    description: "an open source, simple and efficient AI web scraping tool.",
    extendedDescription:
      "Crawly AI is a simple web scraping tool. Users can choose from a variety of LLMs to do AI-assisted web scraping elegantly in their projects.",
    imageSource: "/project-images/crawly.png",
    alt: "a screenshot of the npm package page for crawly-ai",
    githubLink: "https://github.com/mateosanchezl/crawly-ai",
  },
  {
    projectName: "applyfast",
    slug: "applyfast",
    description:
      "a full-stack web app where users can use AI to generate  cover letters with their CV.",
    extendedDescription:
      "ApplyFast is a web app where users can create an account and make personalised cover letters by using Google's Gemini API along with their parsed CV information and other tunable options.",
    imageSource: "/project-images/applyfast.png",
    alt: "a screenshot of the applyfast landing page",
  },
  {
    projectName: "efficient-vis",
    slug: "efficient-vis",
    description:
      "a full-stack web app where users can test their images on computer vision models.",
    extendedDescription:
      "A full-stack web application for interactive exploration of EfficientNet neural networks, enabling users to experiment with state-of-the-art computer vision models through an intuitive interface.",
    technologies: ["javascript", "react", "python", "pytorch", "numpy", "flask"],
    tags: ["full-stack development", "data science", "deep learning"],
    imageSource: "/project-images/efficientvis.png",
    alt: "a screenshot of a dog being predicted by a computer vision model",
    githubLink: "https://github.com/mateosanchezl/efficient-vis",
  },
  {
    projectName: "conway's game of life",
    slug: "conways-game-of-life",
    description: "john horton conway's famous cellular automation game made using numpy.",
    extendedDescription:
      "A high-performance implementation of Conway's Game of Life, showcasing efficient array operations and real-time visualization. This project demonstrates the power of vectorized operations in NumPy for complex simulation scenarios while providing an interactive and educational platform for exploring cellular automata.",
    technologies: ["python", "pygame", "numpy"],
    tags: ["game development"],
    imageSource: "/project-images/conwaysgol1.png",
    alt: "a screenshot of conway's game of life",
    githubLink: "https://github.com/mateosanchezl/conways-game-of-life",
  },
  {
    projectName: "mnist classification",
    slug: "mnist-classification",
    description: "a simple pytorch model for the mnist dataset with tunable hyperparameters.",
    extendedDescription:
      "A flexible and efficient deep learning implementation for the MNIST handwritten digit classification task, featuring intelligent device detection and comprehensive hyperparameter tuning capabilities. This project demonstrates fundamental deep learning concepts while maintaining production-grade code quality and usability.",
    technologies: ["python", "pytorch", "numpy"],
    tags: ["data science", "deep learning", "machine learning"],
    imageSource: "/project-images/mnist.png",
    alt: "a command line running a machine learning model",
    githubLink: "https://github.com/mateosanchezl/mnist-torch",
  },
  {
    projectName: "movi",
    slug: "movi",
    description: "the frontend of a movie searching website where users can search for movies.",
    technologies: ["vanilla js", "html", "css"],
    tags: ["front-end development"],
    imageSource: "/project-images/movi.png",
    alt: "the landing page of a movie website",
    githubLink: "https://github.com/mateosanchezl/movi",
  },
  {
    projectName: "percolation union-find",
    slug: "percolation-union-find",
    description: "performance comparison of union find algorithms for the percolation problem.",
    technologies: ["python"],
    tags: ["data structures and algorithms"],
    imageSource: "/project-images/percolation.png",
    alt: "a percolation image",
    githubLink: "https://github.com/mateosanchezl/percolation",
  },
  {
    projectName: "4-bit binary neural network",
    slug: "4-bit-binary-neural-network",
    description: "a multilayer perceptrion made using only the math and random python modules.",
    technologies: ["python"],
    tags: ["machine learning", "deep learning"],
    imageSource: "/project-images/4bitnn.png",
    alt: "a neural network",
    githubLink: "https://github.com/mateosanchezl/4bitbinary-nn",
  },
  {
    projectName: "mateo.dev",
    slug: "mateo-dev",
    description: "the website you are looking at right now!",
    imageSource: "/mateo-dev.png",
    alt: "a screenshot of a website",
    githubLink: "https://github.com/mateosanchezl/mateo-dev",
  },
];
