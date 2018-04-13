import _Head from 'next/head'

const Head = ({ title }) => (
  <_Head>
    <title>{ title ? title : 'Modern Web Development with Blake Petersen' } &mdash; BlakePetersen.io</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu+Mono" rel="stylesheet" />
  </_Head>
);

export default Head
