import type { NextPage } from 'next'

import React from 'react'
import { Page } from 'artax-ui'
import Frame from '@/components/Frame'

const ContactPage: NextPage = () => {
  return (
    <Page
      title={`Contact Ashley to Book Your Next Photo Shoot`}
      description={`Contact Ashley to book your next conceptual portraiture, boudoir, or underwater photo shoot.`}
    >
      <Frame>
        bing bong
      </Frame>
    </Page>
  )
}

export default ContactPage
