import App from 'next/app'
import Layout from '../components/layout/Layout'
import GlobalStyles from '../styles/global-styles'

export default class MyApp extends App {
	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		pageProps.pathname = router.route;
		return { pageProps }
	}

	render () {
		const {Component, pageProps} = this.props;

		return <>
			<GlobalStyles />
			<Layout pathname={pageProps.pathname}>
				<Component {...pageProps} />
			</Layout>
		</>
	}
}
