import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  const timelineAnimation = () => {
    const tl = gsap.timeline();
    tl.from('.link-anim', {
      duration: 1,
      xPercent: -100,
      stagger: 0.2,
      ease: 'power2.out',
    });
  };

  const animateOnHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      xPercent: -10,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const animateOnLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      xPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  useGSAP(() => {
    timelineAnimation();
  }, []);

  return (
    <nav className='w-screen md:w-[8vw] hfit md:h-screen md:min-h-96 flex md:flex-col items-start justify-between overflow-hidden'>
      <div className='overflow-hidden flex items-center justify-between h-full md:h-auto md:w-full md:min-h-16'>
        <Link
          href='/'
          className='link-anim relative w-full h-fit flex items-center justify-center p-2'
        >
          <Image
            src='/images/logo.webp'
            alt='Logo'
            width={560}
            height={352}
            className='max-w-20 w-full'
          />
        </Link>
      </div>
      <div className='flex md:flex-col items-end justify-between h-full md:h-fit w-full'>
        <div className='overflow-hidden flex w-full h-fit'>
          <Link
            href='/projects'
            className={clsx(
              'link-anim relative max-h-20 md:max-h-72 md:h-full h-fit w-full md:w-auto mt-2 md:mt-0',
              pathname === '/projects' ? 'z-30' : 'z-10'
            )}
            onMouseEnter={animateOnHover}
            onMouseLeave={animateOnLeave}
          >
            <div className='z-10 abs-center'>
              <p className='md:rotate-90 text-xl font-astera text-nowrap'>PROJETS</p>
            </div>
            <Image src='/icons/window-hoz.svg' alt='Logo' width={40} height={190.92} className='md:hidden fill-shadow light-fill w-full h-full' />
            <Image src='/icons/window.svg' alt='Logo' height={40} width={190.92} className='hidden md:flex fill-shadow light-fill w-full h-full' />
          </Link>
        </div>
        <div className='overflow-hidden flex w-full h-fit'>
          <Link
            href='/about'
            className={clsx(
              'link-anim relative max-h-20 md:max-h-72 md:h-full h-fit w-full md:w-auto mt-2 md:mt-0',
              pathname === '/about' ? 'z-30' : 'z-10'
            )}
            onMouseEnter={animateOnHover}
            onMouseLeave={animateOnLeave}
          >
            <div className='z-10 abs-center'>
              <p className='md:rotate-90 text-xl font-astera text-nowrap'>ABOUT</p>
            </div>
            <Image src='/icons/window-hoz.svg' alt='Logo' width={40} height={190.92} className='md:hidden fill-shadow light-fill w-full h-full' />
            <Image src='/icons/window.svg' alt='Logo' height={40} width={190.92} className='hidden md:flex fill-shadow light-fill w-full h-full' />
          </Link>
        </div>
  
      </div>
    </nav>
  );
}
