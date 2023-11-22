import Link from 'next/link'

const ArtaxLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>
}

export default ArtaxLink
