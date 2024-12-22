import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TypeProject } from '@/data/type';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsView({
  projects,
  title,
}: {
  projects: TypeProject[];
  title?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollContainerRef.current || !progressBarRef.current) return;
    const scrollContainer = scrollContainerRef.current;
    ScrollTrigger.create({
      trigger: scrollContainer,
      start: 'left left',
      end: () => {
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;
        return `+=${scrollWidth - clientWidth}`;
      },
      horizontal: true,
      scroller: scrollContainer,
      scrub: 0.1,
      onUpdate: (self) => {
        gsap.to(progressBarRef.current, {
          width: `${self.progress * 100}%`,
          duration: 0.1,
          ease: 'power2.out',
        });
      },
    });
  }, []);

  return (
    <div className='h-full w-full flex flex-col items-start justify-center gap-8 px-4 py-4'>
      <h2 className='text-5xl text-blue font-astera'>
        {title ? title : 'Mes derniers projets'}
      </h2>

      <div className='w-full flex justify-between items-center gap-2 text-blue'>
        <p className='font-astera text-4xl'>01</p>
        <div className='w-full h-[3px] bg-white rounded-full overflow-hidden relative'>
          <div
            ref={progressBarRef}
            className='advanced-bar w-0 h-full bg-blue rounded-full'
          ></div>
        </div>
        <p className='font-astera text-4xl'>
          {projects.length > 10 ? projects.length : `0${projects.length}`}
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className='w-full h-max overflow-x-scroll noscrollbar'
      >
        <div className='flex gap-8 min-w-max'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
