import { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <div className='max-w-screen-2xl mx-auto overflow-hidden'>
        {children}
      </div>
    </>
  );
};

export default Layout;
