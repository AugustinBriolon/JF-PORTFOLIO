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
