import { ButtonType } from '@/data/type';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const createLetterSpans = (text: string) => {
  return text.split('').map((letter, i) => (
    <span key={i} className="inline-block">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));
};

export default function Button({ name, icon, className }: ButtonType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const textBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textTopRef.current || !textBottomRef.current || !containerRef.current) return;

    const topLetters = textTopRef.current.querySelectorAll('span');
    const bottomLetters = textBottomRef.current.querySelectorAll('span');

    const tl = gsap.timeline({ paused: true });
    
    gsap.set(bottomLetters, { yPercent: 100 });

    tl.to(topLetters, {
      yPercent: -100,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.inOut"
    })
    .to(bottomLetters, {
      yPercent: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.inOut"
    }, "<0.1");

    const container = containerRef.current;
    
    container.addEventListener('mouseenter', () => tl.play());
    container.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      container.removeEventListener('mouseenter', () => tl.play());
      container.removeEventListener('mouseleave', () => tl.reverse());
      tl.kill();
    };
  }, [name]);

  return (
    <div
      ref={containerRef}
      className={`border border-black rounded-xl flex items-center justify-between gap-4 w-fit px-4 py-2 cursor-pointer ${className}`}
    >
      <div className="overflow-hidden relative">
        <div ref={textTopRef} className="min-w-20">
          <p className="font-astera text-lg text-center">
            {createLetterSpans(name)}
          </p>
        </div>
        <div ref={textBottomRef} className="min-w-20 absolute top-0 left-0">
          <p className="font-astera text-lg text-center">
            {createLetterSpans(name)}
          </p>
        </div>
      </div>
      
      {icon && (
        <div className="p-1 w-8 h-8 aspect-square bg-black rounded-full">
          <ArrowUpRight className="w-full h-full text-white" />
        </div>
      )}
    </div>
  );
}