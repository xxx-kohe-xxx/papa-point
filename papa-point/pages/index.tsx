import Head from 'next/head'
import Navbar from '../components/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <title>PaPaPoint</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Navbar/>
      </main>
      <footer></footer>
    </MuiThemeProvider>
  );
}
