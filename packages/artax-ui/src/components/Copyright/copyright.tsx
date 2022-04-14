import Link from 'next/link'
import { CopyrightTypes } from './copyright.types'

export const Copyright: CopyrightTypes = ({ siteName, statement }) => {
  return (
    <div>
      <Link href="/" passHref>
        <a>{siteName}</a>
      </Link>{' '}
      &mdash; &copy;
      {new Date().getFullYear()} {statement && statement}
    </div>
  )
}
