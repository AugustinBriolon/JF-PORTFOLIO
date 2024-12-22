import Button from '@/components/Button';
import Section from '@/components/Section';

export default function About() {
  return (
    <Section className='h-screen p-2 md:p-4'>
      <h1 className='text-4xl text-blue font-astera'>About</h1>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc nec ligula</p>
      <Button name='Me contacter' href='mailto:jf1607@gmail.com'/>
    </Section>
  );
}
