
import { ProjectType } from '@/data/type';
import { client } from '@/sanity/lib/client';

export const fetchPaths = async () => {
  const query = `
    *[_type == "projects"] {
      "slug": slug.current
    }
  `;

  const projects = await client.fetch(query);

  const paths = projects.map((project: ProjectType) => ({
    slug: project.slug,
  }));

  return paths;
};
