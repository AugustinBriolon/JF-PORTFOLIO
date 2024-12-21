import { client } from '@/sanity/lib/client';
import { ParsedUrlQuery } from 'querystring';

export const fetchProject = async (params: ParsedUrlQuery | undefined) => {
  const query = `
    *[_type == "projects" && slug.current == $project][0] {
      title,
      slug,
      projectIndex,
      publishedAt,
      description,
      mainImage,
      gallery,
      type,
    }
  `;

  const project = await client.fetch(query, {
    project: params?.project,
  });

  return project;
};
