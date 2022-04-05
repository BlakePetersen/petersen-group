import { _Card } from './card.styles'
import { CardTypes } from './card.types'

export const Card: CardTypes = ({ children }) => {
  return <_Card>{children}</_Card>
}
