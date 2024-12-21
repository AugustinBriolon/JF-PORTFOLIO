import ProjectsView from '@/components/ProjectsView';
import Section from '@/components/Section';
import { TypeProject } from '@/data/type';
import { fetchProjects } from '@/services/projects.sevices';

export default function Projects({ projects }: { projects: TypeProject[] }) {
  return (
    <Section className='h-screenp p-2 md:p-4'>
      <div className='bg-black rounded-3xl h-full'>
        <ProjectsView projects={projects} title='Mes projets personnels' />
      </div>
    </Section>
  );
}

export async function getStaticProps() {
  const allProjects = await fetchProjects();
  const projects: TypeProject[] = allProjects.filter((project: TypeProject): boolean => project.type === 'pro');

  return {
    props: {
      projects,
    },
  };
}