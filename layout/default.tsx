import NavBar from '@/components/NavBar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen flex'>
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
