import Head from 'next/head'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

const Home = () => {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push('/signin');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <Head>
        <title>PaPaPoint</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Navbar/>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;