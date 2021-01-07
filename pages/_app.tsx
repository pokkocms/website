import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/app.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-176777547-1`}
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=1"
      />

      <link rel="icon" href="https://cdn.pokko.io/p/favicon.svg" />
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
      <link
        rel="stylesheet"
        href="https://cdn.pokko.io/p/fonts/Inter/inter.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.pokko.io/p/fonts/IBM-Plex-Mono/ibm-plex-mono.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
