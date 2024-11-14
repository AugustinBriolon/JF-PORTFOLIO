import Section from '@/components/Section';
import { fetchProjects } from '@/services/projects.sevices';

export default function Projects() {
  return (
    <Section className='p-4'>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
        <p className='text-9xl'>Ceci est un test</p>
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