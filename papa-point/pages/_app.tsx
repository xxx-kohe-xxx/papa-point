import { AppProps } from 'next/app';
import { AuthProvider } from '../lib/auth';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default App;
