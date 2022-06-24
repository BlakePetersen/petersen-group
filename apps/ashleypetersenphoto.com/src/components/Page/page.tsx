import { NextPage } from 'next'
import Head from 'next/head'
import C from '@/config/constants'
import { _Page } from './page.styles'

export const Page: NextPage<{ title: string }> = ({ title, children }) => {
  return (
    <_Page>
      <Head>
        <title>
          {title} - {C.SITE_TITLE}
        </title>
      </Head>

      {children}
    </_Page>
  )
}
