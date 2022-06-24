import React from 'react'
import Link from 'next/link'
import { _LogoAnchor } from './logo.styles'

const Logo = () => (
  <Link href="/" passHref>
    <_LogoAnchor>
      Ashley Petersen
      <br />
      Photography
    </_LogoAnchor>
  </Link>
)

export default Logo
