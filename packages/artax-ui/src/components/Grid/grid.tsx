import { _Grid } from './grid.styles'
import { GridTypes } from './grid.types'

export const Grid: GridTypes = ({ children }) => {
  return <_Grid>{children}</_Grid>
}
