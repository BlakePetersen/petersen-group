import { NextPage } from 'next'
import { Head } from 'next/document'
import C from '@/config/constants'
import { _Page } from './styles'

const Page: NextPage<{ title: string }> = ({ title, children }) => {
  return (
    <_Page>
      <Head>
        <title>
          {title} - {C.DEFAULT.PAGE_TITLE}
        </title>
      </Head>

      {children}
    </_Page>
  )
}

export default Page
