import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/moon.svg" />
        <meta
          name="description"
          content="This is a collection of my previous work and projects. Links to my Github and LinkedIn are available below."
        />
        <meta property="og:image" content="/images/moon.svg" />
        <meta
          property="og:description"
          content="This is a collection of my previous work and projects. Links to my Github and LinkedIn are available below."
        />
        <meta property="og:title" content="Luna's Portfolio" />

        <title>Luna's Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NRN22JF"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}></iframe>
      </noscript>
    </Html>
  );
}
