import '@styles/globals.css';
import { AppProps } from 'next/app';

import Layout from '@components/Layout';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-YGE8T2MQ0K"
    />
    <Script strategy="lazyOnload" id="load-gtm">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YGE8T2MQ0K');
      `}
    </Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
