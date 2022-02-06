import React, { FC } from 'react'

type WrapProps = {
  if: boolean
  with: (
    children:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | string
      | number
      | Record<string, unknown>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | boolean,
  ) => React.ReactElement
}

const Wrap: FC<WrapProps> = ({
  if: condition,
  with: wrapper,
  children,
}): React.ReactElement =>
  (condition ? wrapper(children) : children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >

export default Wrap
