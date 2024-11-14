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
    gsap.to(e.currentTarget, {
      xPercent: -10,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const animateOnLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <nav className='w-[8vw] h-screen min-h-96 flex flex-col gap-2 items-start justify-between '>
      <div className='overflow-hidden flex w-full min-h-16'>
        <Link
          href='/'
          className='link-anim relative w-full h-fit flex items-center justify-center py-2 px-1'
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
      <div className='flex flex-col w-full'>
        <div className='overflow-hidden flex'>
          <Link
            href='/projects'
            className={clsx(
              'link-anim relative mr-6 max-h-72 h-full',
              pathname === '/projects' ? 'z-30' : 'z-10'
            )}
            onMouseEnter={animateOnHover}
            onMouseLeave={animateOnLeave}
          >
            <div className='z-10 w-fit abs-center'>
              <p className='rotate-90 text-xl font-astera'>Projects</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 40 190.92'
              className='dark-fill fill-shadow w-full max-w-20 h-full'
            >
              <g>
                <path
                  fill='white'
                  d='M30.8,16s-10.18-1.64-14-2.77C11.2,11.58,0,8.06,0,0V190.92c0-8.06,11.2-11.57,16.8-13.24,3.82-1.13,14-2.77,14-2.77C36.07,174.09,40,169,40,163V27.9C40,21.91,36.07,16.84,30.8,16Z'
                ></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className='overflow-hidden flex'>
          <Link
            href='/about'
            className={clsx(
              'link-anim relative mr-6 max-h-72 h-full',
              pathname === '/about' ? 'z-30' : 'z-10'
            )}
            onMouseEnter={animateOnHover}
            onMouseLeave={animateOnLeave}
          >
            <div className='z-10 abs-center'>
              <p className='rotate-90 text-xl font-astera text-nowrap'>ABOUT</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 40 190.92'
              className='dark-fill fill-shadow w-full max-w-20 h-full'
            >
              <g>
                <path
                  fill='white'
                  d='M30.8,16s-10.18-1.64-14-2.77C11.2,11.58,0,8.06,0,0V190.92c0-8.06,11.2-11.57,16.8-13.24,3.82-1.13,14-2.77,14-2.77C36.07,174.09,40,169,40,163V27.9C40,21.91,36.07,16.84,30.8,16Z'
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
