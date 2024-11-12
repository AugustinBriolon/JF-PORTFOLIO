import { ButtonType } from '@/data/type';
import { ArrowUpRight } from 'lucide-react';

export default function Button({ name, icon, className }: ButtonType) {
  return (
    <div
      className={`group relative border border-black rounded-xl flex items-center justify-between gap-4 w-fit px-4 py-[.5rem] cursor-pointer overflow-hidden ${className}`}
    >
      <p className='font-astera text-lg text-center mix-blend-difference z-0'>
        {name}
      </p>
      {icon && (
        <div className='target text-white p-1 w-8 h-8 aspect-square'>
          <ArrowUpRight className='w-full h-full' />
        </div>
      )}
      <div className='absolute right-4 top-2 group-hover:top-0 group-hover:right-0 rounded-full group-hover:rounded-none -z-10 bg-black w-8 h-8 group-hover:w-full group-hover:h-full transition-all ' />
    </div>
  );
}
