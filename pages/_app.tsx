import '@styles/globals.css';
import { AppProps } from 'next/app';

import Layout from '@components/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
