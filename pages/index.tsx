import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '@/components/Button';
import HomeCard from '@/components/HomeCard';
import Section from '@/components/Section';
import { fetchProjects } from '@/services/projects.sevices';
import { TypeProject } from '@/data/type';
import ProjectsView from '@/components/ProjectsView';

export default function Home({ projects }: { projects: TypeProject[] }) {
  const aboutText =
    "Passionné par le mariage de l'art et de la mode, je suis un jeune designer fraîchement diplômé, prêt à révolutionner le monde du prêt-à-porter avec mes créations uniques. Découvrez mon univers où chaque pièce raconte une histoire.".split(
      ' '
    );

  const timelineAnimation = () => {
    const tl = gsap.timeline();
    tl.from('.title-anim', {
      yPercent: 100,
      duration: 0.8,
      ease: 'power2.out',
    })
      .from(
        '.anim-text',
        {
          yPercent: 100,
          stagger: 0.01,
          duration: 0.8,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.btn-anim div',
        {
          yPercent: 100,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.card-anim',
        {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.1,
        },
        '<'
      );
  };

  useGSAP(() => {
    timelineAnimation();
  }, []);

  return (
    <Section className='h-full md:h-screen'>
      <div className='h-full md:h-screen w-full grid grid-cols-2 grid-rows-2 gap-8 p-2 md:p-4'>
        <div className='h-full flex flex-col justify-start items-start gap-8'>
          <div className='overflow-hidden'>
            <h1 className='title-anim font-astera text-4xl text-strock text-white'>
              Jean Francois rabbi
            </h1>
          </div>
          <div className='overflow-hidden'>
            <p className='overflow-hidden text-pretty'>
              {aboutText.map((word, index) => (
                <span key={index} className='inline-block overflow-hidden'>
                  <span className='anim-text inline-block'>
                    {word}
                    {index !== aboutText.length - 1 && '\u00A0'}
                  </span>
                </span>
              ))}
            </p>
          </div>
          <div className='overflow-hidden'>
            <Button name='Me contacter' icon className='btn-anim' />
          </div>
        </div>
        <HomeCard
          className='card-anim'
          title='Pro'
          link='/projects/pro'
          image='/images/pro.webp'
        />
        <HomeCard
          className='card-anim'
          title='Perso'
          link='/projects/perso'
          image='/images/perso.webp'
        />
        <HomeCard
          className='card-anim'
          title='Autres'
          link='/projects/autre'
          image='/images/autres.webp'
        />
      </div>
      <div className='h-full md:h-screen p-2 md:p-4'>
        <div className='bg-black rounded-3xl h-full'>
          <ProjectsView projects={projects} />
        </div>
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
