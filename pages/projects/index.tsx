import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { TypeProject } from '@/data/type';
import { fetchProjects } from '@/services/projects.sevices';
import Section from '@/components/Section';

export default function Projects({ projects }: { projects: TypeProject[] }) {
  const marqueesRef = useRef<(HTMLDivElement | null)[]>([]);

  const timelineAnimation = () => {
    const tl = gsap.timeline();
    tl.from('.project-container', {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power1.out',
    })

    marqueesRef.current.forEach((marqueeRef) => {
      if (!marqueeRef) return;

      const titles = marqueeRef.querySelectorAll('.text-project');

      gsap.to(titles, {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: 'none',
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    });
  };

  useGSAP(() => {
    timelineAnimation();
  }, []);

  return (
    <Section className='h-screen p-2 md:p-4 space-y-8'>
      <h1 className='uppercase font-astera text-blue font-bold text-5xl'>
        Tous mes projets
      </h1>
      <div className='project-container grid grid-cols-2 gap-8 w-full h-fit'>
        {projects.map((project, index) => (
          <Link
            key={project.projectIndex}
            className='group relative overflow-hidden rounded-lg select-none cursor-none'
            href={`/projects/${project.slug.current}`}
          >
            <Image
              src={urlFor(project.mainImage).toString()}
              alt={project.title}
              height={1350}
              width={1080}
              className='object-cover aspect-square select-none'
            />
            <div className='w-full absolute bottom-0 left-0 flex items-center invisible group-hover:visible transition bg-black bg-opacity-50 p-2 overflow-hidden'>
              <div
                ref={(el) => {
                  marqueesRef.current[index] = el;
                }}
                className='flex whitespace-nowrap'
              >
                {[...Array(8)].map((_, arrayIndex) => (
                  <h2
                    className='text-project text-white text-3xl font-astera mr-2'
                    key={`${project.projectIndex}-${arrayIndex}`}
                  >
                    {project.title} <span className='font-serif'>•</span>
                  </h2>
                ))}
              </div>
            </div>
          </Link>
        ))}
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
