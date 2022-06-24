import { _Card } from './card.styles'
import { CardTypes } from './card.types'

import { Children, ReactElement } from 'react'

const Card: CardTypes = ({ children }): ReactElement => {
  return <_Card>{Children.map(children, (child: ReactElement) => child)}</_Card>
}

export default Card
