import Head from 'next/head'

import { _Page } from './page.styles'
import { PageTypes } from './page.types'

export const Page: PageTypes = ({ title, children }) => {
  return (
    <_Page>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </_Page>
  )
}
