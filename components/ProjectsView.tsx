import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TypeProject } from '@/data/type';
import { useRef } from 'react';

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
      <h2 className='text-5xl text-blue font-astera'>{title ? title : 'Mes derniers projets'}</h2>

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
            <div key={index} className='flex flex-col items-start gap-4 group'>
              <div className='w-96 h-96 aspect-square bg-white rounded-lg overflow-hidden'>
                <Image
                  src={urlFor(project.mainImage).toString()}
                  alt={project.title}
                  height={1350}
                  width={1080}
                  className='rounded-lg object-cover group-hover:scale-105 transition-all duration-500'
                />
              </div>
              <div className='w-full flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                  <p className='text-4xl font-astera text-blue'>{index + 1}.</p>
                  <h3 className='text-2xl text-blue uppercase'>
                    {project.title}
                  </h3>
                </div>
                <div className='flex items-center justify-center p-1 border border-blue rounded-full text-blue'>
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
