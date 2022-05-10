import Head from 'next/head'

import { _Page } from './page.styles'
import { PageTypes } from './page.types'

export const Page: PageTypes = ({ title, description, children }) => {
  return (
    <_Page>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      {children}
    </_Page>
  )
}
