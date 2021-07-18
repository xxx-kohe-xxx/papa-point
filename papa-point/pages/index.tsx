import Head from 'next/head'
import Navbar from '../components/Navbar';
import TotalPointDisplay from '../components/TotalPointDisplay';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { getTotalPoint } from '../utils/db';

export async function getServerSideProps() {
  const totalPoint = await getTotalPoint('shota');
  return { props: { totalPoint: JSON.stringify(totalPoint)} }
}

const Home = (props) => {
  const { auth } = useAuth();
  const router = useRouter();
  const totalPoint = props.totalPoint;

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
        <TotalPointDisplay totalPoint={totalPoint}/>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;