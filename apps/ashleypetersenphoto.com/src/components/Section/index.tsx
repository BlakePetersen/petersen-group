'use client'

import { _Section } from './styles'
import { SectionTypes } from './types'

export const Section: SectionTypes = ({ css, children }) => {
  return <_Section css={{ ...css }}>{children}</_Section>
}
