import Head from 'next/head'

const _Head = ({ title = `Ashley Petersen Photography` }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default _Head
