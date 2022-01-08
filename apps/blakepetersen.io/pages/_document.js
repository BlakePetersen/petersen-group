import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
	render () {

		return (
			<Html lang={`en`}>
				<Head>
					{/* Meta */}
					{/* Favicon */}
					{/* OpenGraph */}
					{/* Twitter */}
					{/* PWA */}
					{/* Fonts */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
