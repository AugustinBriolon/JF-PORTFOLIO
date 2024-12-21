import { TypeProject, TypePaths } from '@/data/type';
import { fetchPaths } from '@/services/path.services';
import { fetchProject } from '@/services/project.sevices';
import { fetchProjects } from '@/services/projects.sevices';
import { GetStaticPropsContext } from 'next';

export default function Page({
  project,
  projects,
  paths,
}: {
  project: TypeProject;
  projects: TypeProject[];
  paths: TypePaths[];
}) {
  console.log(project);
  console.log(projects);
  console.log(paths);

  return (
    <div>
      <p>Ceci est un test</p>
    </div>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const paths = await fetchPaths();
  const project = await fetchProject(params);
  const projects = await fetchProjects();

  const projectIndex = projects.findIndex(
    (p: TypeProject) => p.slug.current === project.slug.current
  );
  const filteredProjects = [
    projects[(projectIndex + 1) % projects.length],
    projects[(projectIndex - 1 + projects.length) % projects.length],
  ];

  return {
    props: {
      paths,
      project: project || null,
      projects: filteredProjects,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = (await fetchPaths()).map((project: TypeProject) => ({
    params: { project: project.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
