import React from 'react'

import { WrapProps } from './conditional-wrap.types'

const ConditionalWrap: WrapProps = ({
  if: condition,
  with: wrapper,
  children,
}): React.ReactElement =>
  (condition ? wrapper(children) : children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >

export default ConditionalWrap
