import { _Section } from './section.styles'
import { SectionTypes } from './section.types'

export const Section: SectionTypes = ({ css, children }) => {
  return <_Section css={{ ...css }}>{children}</_Section>
}
