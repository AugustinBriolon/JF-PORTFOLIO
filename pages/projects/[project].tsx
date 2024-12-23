import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { urlFor } from '@/sanity/lib/image';
import { fetchPaths } from '@/services/path.services';
import { fetchProject } from '@/services/project.sevices';
import { TypeProject } from '@/data/type';
import Section from '@/components/Section';

export default function Page({ project }: { project: TypeProject }) {
  const aboutText = project.description.split(' ');

  const timelineAnimation = () => {
    const tl = gsap.timeline();
    tl.from('.img-project', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.out',
    })
      .from(
        '.separator-project',
        {
          duration: 1,
          scale: 0,
          ease: 'power1.out',
        },
        '<'
      )
      .from(
        '.title-project',
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: 'power1.out',
        },
        '<'
      )
      .from(
        '.subtitle-project',
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: 'power1.out',
        },
        '<'
      )
      .from(
        '.anim-text',
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.subtitle-project-2',
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: 'power1.out',
        },
        '<'
      );
  };

  useGSAP(() => {
    timelineAnimation();
  }, []);

  return (
    <Section className='h-screen p-2 md:p-4 flex flex-col md:flex-row justify-start md:justify-center items-center gap-4'>
      <div className='w-full h-fit md:h-full flex flex-col justify-start items-start gap-8'>
        <div className='overflow-hidden'>
          <h1 className='text-5xl text-blue font-bold font-astera title-project'>
            {project.title}
          </h1>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='overflow-hidden'>
            <h2 className='text-blue text-3xl font-bold uppercase subtitle-project'>
              Description
            </h2>
          </div>
          <p>
            {aboutText.map((word, index) => (
              <span key={index} className='inline-block overflow-hidden'>
                <span className='anim-text inline-block'>
                  {word}
                  {index !== aboutText.length - 1 && '\u00A0'}
                </span>
              </span>
            ))}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='overflow-hidden'>
            <h2 className='text-blue text-3xl font-bold uppercase subtitle-project-2'>
              Infos Bonus
            </h2>
          </div>
          <p></p>
        </div>
      </div>

      <div className='separator-project hidden md:block w-1 h-full bg-blue rounded-full origin-top'></div>

      <div className='w-full md:overflow-hidden h-fit md:h-full'>
        <div className='image-container flex flex-col items-start md:overflow-scroll noscrollbar h-fit md:h-full'>
          <ul className='w-full h-fit max-w-screen-lg flex flex-wrap gap-2'>
            <Image
              src={urlFor(project.mainImage).toString()}
              priority
              className='rounded-lg img-project w-full h-[250px] object-cover'
              alt={`Image principale du projet ${project.title}`}
              width={5760}
              height={4320}
            />
            {project.gallery &&
              project.gallery.map(
                (image, index) =>
                  image.asset && (
                    <li
                      key={index}
                      className='h-[250px] overflow-hidden flex  flex-grow list-none	img-project'
                    >
                      <Image
                        src={urlFor(image.asset).toString()}
                        priority
                        className='rounded-lg w-full h-full object-cover object-center'
                        alt={`Image ${index} du projet ${project.title}`}
                        width={1080}
                        height={1080}
                      />
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const paths = await fetchPaths();
  const project = await fetchProject(params);

  return {
    props: {
      paths,
      project: project || null,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = (await fetchPaths()).map((project: TypeProject) => ({
    params: { project: project.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
