import Head from 'next/head'
import Navbar from '../components/Navbar';
import TotalPointDisplay from '../components/TotalPointDisplay';
import { Container } from '@material-ui/core'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { getTotalPoint } from '../utils/db';

export async function getServerSideProps() {
  const totalPoint = await getTotalPoint('shota');
  return { props: { totalPoint: JSON.stringify(totalPoint)} }
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '16px',
    }
  }),
);

const Home = (props) => {
  const classes = useStyles();
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
        <Container className={classes.container} maxWidth='sm'>
          <TotalPointDisplay totalPoint={totalPoint}/>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;