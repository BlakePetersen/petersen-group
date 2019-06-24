import _Head from 'next/head'

const Head = ({ title }) => (
  <_Head>
    <title>{ title ? title : 'Good Times in Web Development' } &mdash; ʙ ʟ ▲ ĸ ᴇ</title>
    <link rel='shortcut icon' type='image/x-icon' href='/static/assets/favicon.ico' />
    <meta name="viewport" content="width=device-width" />
  </_Head>
);

export default Head
