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
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NRN22JF');`}
        </script>
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
