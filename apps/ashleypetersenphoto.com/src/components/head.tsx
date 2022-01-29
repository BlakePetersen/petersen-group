import Head from 'next/head'

import C from '@/config/constants'

const _Head = (title?: string) => {
  return (
    <Head>
      <title>{title || C.DEFAULT.PAGE_TITLE}</title>
    </Head>
  )
}

export default _Head
