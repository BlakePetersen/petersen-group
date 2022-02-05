import React, { FC } from 'react'

type WrapProps = {
  if: boolean
  with: (children: React.ReactNode) => React.ReactNode
}

const Wrap: FC<WrapProps> = ({
  if: condition,
  with: wrapper,
  children,
}): React.ReactNode => condition ? wrapper(children) : children

export default Wrap
