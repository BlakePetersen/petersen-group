import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang={`en`}>
        <Head>
          {/* Fonts */}
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
