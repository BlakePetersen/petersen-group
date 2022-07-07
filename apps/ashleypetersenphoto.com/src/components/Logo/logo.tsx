import React from 'react'
import Link from 'next/link'
import { _LogoAnchor, _LogoLine1, _LogoLine2 } from './logo.styles'

export const Logo = () => (
  <Link href="/" passHref>
    <_LogoAnchor>
      <_LogoLine1>Ashley Petersen</_LogoLine1>
      <_LogoLine2>Photography</_LogoLine2>
    </_LogoAnchor>
  </Link>
)
