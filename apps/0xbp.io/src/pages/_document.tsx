import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'config/stitches.config'

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang={`en`}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
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
