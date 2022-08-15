import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '@components/Footer';
import Nav from '@components/Nav';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Renz Calangi - Web Developer',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Renz Calangi" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Renz Calangi" />
      <meta
        property="og:description"
        content="I'm a Full Stack developer with experience in Frontend, DevOps and Backend development."
      />
    </Head>

    <div className="flex flex-col min-h-screen  ">
      <Nav />
      <div className="grow flex flex-col items-center justify-center my-0 mx-auto h-full max-w-screen-xl overflow-hidden">
        <main className="flex flex-col items-center justify-center flex-grow my-12 max-w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
