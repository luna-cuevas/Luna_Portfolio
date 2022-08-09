import { Html, Head, Main, NextScript } from "next/document";

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
    </Html>
  );
}
