import Link from 'next/link'

const ArtaxLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default ArtaxLink
