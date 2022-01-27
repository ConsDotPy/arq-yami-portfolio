import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />

        {/* TSK */}
        {/* <link href="/static/site.webmanifest" rel="manifest" /> */}

        {/* <link
          href="/static/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#0ea5e9" name="theme-color" />
        <meta content="#f9fafb" name="msapplication-TileColor" />
        <meta content="/static/browserconfig.xml" name="msapplication-config" /> */}
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
