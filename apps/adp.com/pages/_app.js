import App from "next/app";
import Layout from "../components/layout/Main";
import "../styles/_global-styles.scss";

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        pageProps.pathname = router.route;
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Layout pathname={pageProps.pathname}>
                <Component {...pageProps} />
            </Layout>
        );
    }
}
