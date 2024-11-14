import { Image, Slug, TypedObject } from "sanity";

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
  projects: ProjectType[];
}

export type ProjectType = {
  title: string;
  slug: Slug;
  projectIndex: number;
  publishedAt: string;
  description: string;
  story: TypedObject[];
  mainImage: Image;
  gallery: Image[];
  types: TypesType[];
};

export type TypesType = {
  title: string;
};
