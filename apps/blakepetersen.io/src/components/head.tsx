import _Head from 'next/head'

import Colors from '../styles/colors'

const Head = () => (
    <_Head>
        {/* SEO */}
        <title key="title">Good Times in Web Development &mdash; ʙ ʟ Λ ĸ ᴇ</title>
        <meta
            name="description"
            content="Web Engineer, Blake Petersen, brings the hot takes on common mistakes in web development. Come have a good time with ya boy, Blake!"
            key="description"
        />

        {/* UX */}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content={Colors.onyx}/>

        {/* Favicons */}
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" sizes="any" type="image/x-icon"/>
        <link rel="icon" href="/assets/icons/icon.svg" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/assets/icons/icon-196.png"/>

        {/* PWA */}
        <link rel="manifest" href="/manifest/bpio.webmanifest"/>
    </_Head>
)

export default Head
