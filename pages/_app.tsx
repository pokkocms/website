import * as React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-176777547-1`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-176777547-1');
          `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
