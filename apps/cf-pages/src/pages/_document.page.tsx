import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
