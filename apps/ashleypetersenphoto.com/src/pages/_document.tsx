import Document, { Head, Html, Main, NextScript } from 'next/document'
import C from '@/config/constants'

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang={`en`}>
        <Head>
          {/* Meta */}
          <title>{C.DEFAULT.PAGE_TITLE}</title>

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
