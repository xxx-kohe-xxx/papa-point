import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../lib/auth';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      minHeight: 30,
    },
    title: {
      flexGrow: 1,
      cursor: "pointer",
    }
  }),
);


const Navbar: React.FC<{}> = () => {
  const classes = useStyles();
  const { auth, signOut } = useAuth();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h5" onClick={() => router.push('/')}>PaPaPoint</Typography>
          {auth ? (
            <>
              <Button color="inherit">{auth.name}</Button>
              <Button color="inherit" onClick={() => signOut()}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => router.push('/signin')}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;
