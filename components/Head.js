import _Head from 'next/head'

const Head = ({ title }) => (
  <_Head>
    <title>{ title ? title : 'Modern Web Development with Blake Petersen' } &mdash; ʙ ʟ ▲ ĸ ᴇ</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu+Mono" rel="stylesheet" />
    <meta name="viewport" content="width=device-width" />
  </_Head>
);

export default Head
