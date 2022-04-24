import useSWR from 'swr'
import path from 'path'
import * as Avatar from '@radix-ui/react-avatar'
import { _Footer } from './footer.styles'

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
      <div>
        <Avatar.Root>
          <Avatar.Image />
          <Avatar.Fallback />
        </Avatar.Root>

        <div>
          <div>&copy; {new Date().getFullYear()}</div>
          <div>
            🌈 by {` `}
            <a href={`https://twitter.com/${screenName}`} target={`_blank`}>
              {profile?.handle}
            </a>
          </div>
          <div>
            <a
              href={`https://y.at/%F0%9F%92%BB%F0%9F%A4%93%F0%9F%91%8D`}
              target={`_blank`}
            >
              💻🤓👍
            </a>
          </div>
        </div>
      </div>
    </_Footer>
  )
}
