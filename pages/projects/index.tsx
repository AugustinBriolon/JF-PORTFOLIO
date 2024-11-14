import Section from '@/components/Section';
import { fetchProjects } from '@/services/projects.sevices';

export default function Projects() {
  return (
    <Section className='h-screen'>
      <div className='flex flex-col md:flex-col-reverse'>
        <p>Ceci est un test</p>
        <p>Ceci est un test</p>
      </div>
    </Section>
  );
}

export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects,
    },
  };
}