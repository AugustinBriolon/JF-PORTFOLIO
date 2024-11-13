import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import Layout from '@/layout/default';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname?.includes('studio') ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
