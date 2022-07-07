import { styled } from '@stitches/react'
import { blackA } from '@radix-ui/colors'
import { Root, Thumb } from '@radix-ui/react-switch'

export const _Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '.5rem;',
})

export const _Switch = styled(Root, {
  all: 'unset',
  width: 42,
  height: 21,
  backgroundColor: blackA.blackA9,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': {
    boxShadow: `0 2px 10px ${blackA.blackA10}, 0 0 0 2px ${blackA.blackA12}`,
  },
  '&[data-state="checked"]': { backgroundColor: 'black' },
})

export const _Thumb = styled(Thumb, {
  display: 'block',
  width: 18,
  height: 18,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  '&[data-state="checked"]': { transform: 'translateX(22px)' },
})

export const _ButtonIcon = styled('button', {
  all: 'unset',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
})
