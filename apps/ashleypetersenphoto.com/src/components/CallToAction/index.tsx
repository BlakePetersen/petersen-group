import { CallToActionTypes } from './types'
import { _CallToAction } from './styles'

export const CallToAction: CallToActionTypes = ({ css, href, children }) => {
  return (
    <_CallToAction href={href} css={{ ...css }}>
      {children}
    </_CallToAction>
  )
}
