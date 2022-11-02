import { _Card } from './styles'
import { CardTypes } from './types'

export const Card: CardTypes = ({ children }) => {
  return <_Card>{children}</_Card>
}
