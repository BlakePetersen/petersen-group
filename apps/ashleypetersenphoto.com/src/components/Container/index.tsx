'use client'

import { _Container } from './styles'
import { ContainerTypes } from './types'

export const Container: ContainerTypes = ({ css, children }) => {
  return <_Container css={{ ...css }}>{children}</_Container>
}

export { Container as default, _Container }
