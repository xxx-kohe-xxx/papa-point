import { Button, Card, CardContent, CardHeader, Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar';
import { useAuth } from '../lib/auth';

const useStyles = makeStyles( theme =>
  createStyles({
    offset: {
      marginTop: 60,
    },
  }));

const Signin = () => {
  const classes = useStyles();
  const { auth, signInWithGoogle } = useAuth();
  const router = useRouter();

  if (auth) {
    router.push((router.query.next as string) || '/');
  }

  return (
    <>
      <Head>
        <title>PaPaPoint</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Container>
        <Card className={classes.offset}>
          <CardHeader title="Googleアカウントでログインする" />
          <CardContent>
            <Button 
              startIcon={<FcGoogle/>}
              onClick={() => signInWithGoogle()}
            >
              Sign In with Google
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Signin;