import useSWR from 'swr'
import path from 'path'
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
    <_Footer>
      <div>&copy; {new Date().getFullYear()}</div>
      <div>{profile?.handle}</div>
    </_Footer>
  )
}
