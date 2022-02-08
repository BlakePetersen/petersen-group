import { styled } from '@stitches/react'

import Link from 'next/link'

const _Link = styled('a', {
  margin: '0.5rem',
})

const SocialLinks = () => {
  return (
    <nav>
      <Link href="https://www.facebook.com/ashleypetersenphoto" passHref>
        <_Link>Facebook</_Link>
      </Link>

      <Link href="https://www.linkedin.com/in/ashleypetersenphoto" passHref>
        <_Link>LinkedIn</_Link>
      </Link>

      <Link href="https://www.pinterest.com/ashley_petersen/" passHref>
        <_Link>Pinterest</_Link>
      </Link>

      <Link href="https://twitter.com/ashleydpetersen" passHref>
        <_Link>Twitter</_Link>
      </Link>

      <Link href="https://500px.com/ashleypetersen" passHref>
        <_Link>500px</_Link>
      </Link>

      <Link href="https://instagram.com/ashleypetersen" passHref>
        <_Link>Instagram</_Link>
      </Link>

      <Link
        href="https://www.youtube.com/channel/UCrdXvnJxT6A7OdL4bilbKzQ"
        passHref
      >
        <_Link>Youtube</_Link>
      </Link>
    </nav>
  )
}

export default SocialLinks
