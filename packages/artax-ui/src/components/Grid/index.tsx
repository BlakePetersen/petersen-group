import { _Grid } from './styles'
import { GridTypes } from './types'

export const Grid: GridTypes = ({ children, css }) => {
  return <_Grid css={css}>{children}</_Grid>
}
