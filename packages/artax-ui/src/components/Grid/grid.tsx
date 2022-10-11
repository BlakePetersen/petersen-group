import { _Grid } from './grid.styles'
import { GridTypes } from './grid.types'

export const Grid: GridTypes = ({ children, css }) => {
  return <_Grid css={css}>{children}</_Grid>
}
