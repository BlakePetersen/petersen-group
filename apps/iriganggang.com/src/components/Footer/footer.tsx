import useSWR from 'swr'
import path from 'path'
import {
  _Attribution,
  _AttributionLink,
  _Avatar,
  _AvatarFallback,
  _AvatarImage,
  _Footer,
} from './footer.styles'

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = 'https://blakepetersen.io'
const apiPath = 'api/twitter/profile'
const screenName = 'blake_petersen'

export const Footer = () => {
  const profileApiUrl = new URL(
    path.join(apiPath, screenName),
    baseUrl,
  ).toString()

  const { data: profile, error } = useSWR(profileApiUrl, fetcher)

  return (
    <_Footer style={{ color: `white`, lineHeight: `1.5` }}>
      <_Avatar>
        <_AvatarImage src={profile?.pfp} alt={profile?.handle} />
        <_AvatarFallback delayMs={600}>{profile?.handle}</_AvatarFallback>
      </_Avatar>

      <_Attribution>
        <div>
          by{' '}
          <_AttributionLink
            href={`https://twitter.com/${screenName}`}
            target={`_blank`}
          >
            <b>{profile?.handle}</b>
          </_AttributionLink>
        </div>

        <div>&copy; {new Date().getFullYear()}</div>
      </_Attribution>
    </_Footer>
  )
}
