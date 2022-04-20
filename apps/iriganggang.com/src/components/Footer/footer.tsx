import { useTheme } from 'next-themes'
import { _Footer } from './footer.styles'
import { ThemeSelector } from 'artax-ui'

export const Footer = () => {
  return (
    <_Footer>
      <ThemeSelector useTheme={useTheme} />
    </_Footer>
  )
}
