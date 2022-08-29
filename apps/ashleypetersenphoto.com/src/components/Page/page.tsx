import Head from 'next/head'
import C from '@/config/constants'
import { _Page } from './page.styles'
import { PageTypes } from './page.types'

export const Page: PageTypes = ({ title, children }) => {
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
