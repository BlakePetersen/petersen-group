import React from 'react'

import { WrapProps } from './conditional-wrap.types'

export const ConditionalWrap: WrapProps = ({
  if: condition,
  with: wrapper,
  children,
}): React.ReactElement => {
  return (condition ? wrapper(children) : children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >
}
