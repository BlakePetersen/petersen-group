import React from 'react'

import { ConditionalWrapTypes } from './types'

export const ConditionalWrap: ConditionalWrapTypes = ({
  if: condition,
  with: wrapper,
  children,
}): React.ReactElement => {
  return (condition ? wrapper(children) : children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >
}
