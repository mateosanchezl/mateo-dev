export interface ProjectType {
  projectName: string;
  slug: string;
  imageSource: string;
  alt: string;
  technologies?: string[];
  tags?: string[];
  description: string;
  extendedDescription?: string;
  githubLink?: string;
}
