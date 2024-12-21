import Section from '@/components/Section';
import { TypeProject, TypePaths } from '@/data/type';
import { fetchPaths } from '@/services/path.services';
import { fetchProject } from '@/services/project.sevices';
import { GetStaticPropsContext } from 'next';

export default function Page({
  project,
  paths,
}: {
  project: TypeProject;
  paths: TypePaths[];
}) {
  console.log(project);
  console.log(paths);

  return (
    <Section className='h-screenp p-2 md:p-4'>
        <h1>{project.title}</h1>
    </Section>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const paths = await fetchPaths();
  const project = await fetchProject(params);

  return {
    props: {
      paths,
      project: project || null,
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
