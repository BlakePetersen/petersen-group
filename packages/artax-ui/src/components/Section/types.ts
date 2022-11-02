import { FC } from 'react'
import type * as Stitches from '@stitches/react'
import { KitchenSinkType } from '../../utilities/Types'

export type SectionTypes = FC<{
  css?: Stitches.CSS
  children: KitchenSinkType
}>
