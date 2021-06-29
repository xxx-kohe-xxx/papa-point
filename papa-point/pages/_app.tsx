import { AppProps } from 'next/app';
import { AuthProvider } from '../lib/auth';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
