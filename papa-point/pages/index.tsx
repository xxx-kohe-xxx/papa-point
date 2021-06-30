import Head from 'next/head'
import Navbar from '../components/Navbar';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const { auth } = useAuth();
  const router = useRouter();

  if (!auth) {
    router.push('/signin');
  }

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
