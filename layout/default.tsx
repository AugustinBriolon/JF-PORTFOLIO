import NavBar from '@/components/NavBar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-screen w-screen'>
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
