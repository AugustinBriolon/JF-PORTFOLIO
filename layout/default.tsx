import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import CustomCursor from '@/components/CustomCursor';


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-screen w-screen'>
      {children}
      <NavBar />
      <CustomCursor />
    </div>
  );
};

export default Layout;
