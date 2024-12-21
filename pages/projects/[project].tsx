import Section from '@/components/Section';
import { TypeProject } from '@/data/type';
import { urlFor } from '@/sanity/lib/image';
import { fetchPaths } from '@/services/path.services';
import { fetchProject } from '@/services/project.sevices';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';

export default function Page({ project }: { project: TypeProject }) {
  console.log(project);

  return (
    <Section className='h-screen p-2 md:p-4 flex justify-center items-center gap-8'>
      <div className='w-full overflow-hidden h-full'>
        <div className='flex flex-col items-start overflow-scroll noscrollbar h-full'>
          <ul className='w-full max-w-screen-lg flex flex-wrap gap-2'>
            <Image
              src={urlFor(project.mainImage).toString()}
              priority
              className='w-full h-[250px] object-cover'
              alt={`Image principale du projet ${project.title}`}
              width={5760}
              height={4320}
            />
            {project.gallery &&
              project.gallery.map(
                (image, index) =>
                  image.asset && (
                    <li key={index} className='h-[250px] flex flex-grow list-none	'>
                      <Image
                        src={urlFor(image.asset).toString()}
                        priority
                        className='w-full h-full object-cover'
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

      <div className='separator w-1 h-full bg-blue rounded-full'></div>

      <div className='w-full h-full flex flex-col justify-start items-start'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-blue text-3xl font-bold uppercase'>
            Description
          </h2>
          <p>{project.description}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-blue text-3xl font-bold uppercase'>
            Infos Bonus
          </h2>
          <p></p>
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
