import { Html, Head, Main, NextScript } from "next/document";
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ED7F1Y8X3R"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ED7F1Y8X3R');`}
        </script>

        <title>Luna's Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
