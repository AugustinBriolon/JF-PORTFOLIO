import { SectionProps } from '@/data/type';
import clsx from 'clsx';

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx(
        'md:w-[92vw] z-20 shadow-up md:shadow-right overflow-y-scroll noscrollbar',
        className
      )}
    >
      {children}
    </section>
  );
}
