import Link from 'next/link'
import { LinkTypes } from './link.types'

export const ArtaxLink: LinkTypes = ({ href, children }) => {
  return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
  )
}
