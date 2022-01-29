import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang={`en`}>
        <Head>
          {/* Meta */}
          {/* Favicon */}
          {/* OpenGraph */}
          {/* Twitter */}
          {/* PWA */}
          {/* Fonts */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
