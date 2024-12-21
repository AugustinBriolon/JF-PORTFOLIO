import { Image, Slug } from "sanity";

export interface ButtonType {
  name: string;
  icon?: boolean;
  className?: string;
}

export interface HomeCardType {
  title: string;
  link: string;
  image: string;
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProjectsViewProps {
  projects: TypeProject[];
}

export type TypeProject = {
  title: string;
  slug: Slug;
  projectIndex: number;
  publishedAt: string;
  description: string;
  mainImage: Image;
  gallery: Image[];
  type: string;
};

export type TypePaths = {
  slug: string;
  title: string;
};