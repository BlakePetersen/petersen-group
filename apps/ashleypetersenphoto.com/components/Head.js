import Head from "next/head";

export default function _Head({ title = "Ashley Dawn Photos" }) {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    );
}
