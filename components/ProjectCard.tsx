import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import { TypeProject } from '@/data/type';

export default function ProjectCard({
  project,
  index,
}: {
  project: TypeProject;
  index: number;
}) {
  return (
    <Link
      key={index}
      className='flex flex-col items-start gap-4 group'
      href={`/projects/${project.slug.current}`}
    >
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
          <h3 className='text-2xl text-blue uppercase'>{project.title}</h3>
        </div>
        <div className='flex items-center justify-center p-1 border border-blue rounded-full text-blue'>
          <ArrowUpRight size={24} />
        </div>
      </div>
    </Link>
  );
}
