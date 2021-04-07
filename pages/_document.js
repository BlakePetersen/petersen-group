import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class SiteDocument extends Document {
	render () {
		const sheet = new ServerStyleSheet();
		const main = sheet.collectStyles(<Main />);
		const styleTags = sheet.getStyleElement();

		return (
			<Html lang={`en`}>
				<Head>
					{/* Meta */}
					{/* Favicon */}
					{/* OpenGraph */}
					{/* Twitter */}
					{/* PWA */}
					{/* Fonts */}
					{ styleTags }
				</Head>
				<body>
					{ main }
					<NextScript />
				</body>
			</Html>
		)
	}
}
