import { NextPage } from 'next'
import Head from 'next/head'
import { _Page } from './styles'

const Page: NextPage<{ title: string }> = ({ title, children }) => {
  return (
    <_Page>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </_Page>
  )
}

export default Page
