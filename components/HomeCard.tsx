import { HomeCardType } from '@/data/type';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeCard({ title, link, image, className }: HomeCardType) {
  return (
    <Link
      className={`h-full w-full relative rounded-xl overflow-hidden group ${className}`}
      href={link}
    >
      <Image
        src={image}
        priority
        alt={title}
        width={436}
        height={435}
        className='w-full h-full object-cover grayscale blur-sm group-hover:grayscale-0'
      />
      <h2 className='text-white text-4xl font-astera absolute bottom-0 left-4'>{title}</h2>
    </Link>
  );
}
