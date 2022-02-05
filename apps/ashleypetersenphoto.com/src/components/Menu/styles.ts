import { styled } from '@stitches/react'
import { blackA, mauve, violet } from '@radix-ui/colors'
import {
  Arrow,
  Content,
  Item,
  Label,
  Separator,
  TriggerItem,
} from '@radix-ui/react-dropdown-menu'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from 'ui/src/Animations'

export const _Arrow = styled(Arrow, {
  fill: 'white',
  transform: 'translateX(-.95rem)',
})

export const _Content = styled(Content, {
  minWidth: 200,
  fontFamily: '"Public Sans", sans-serif;',
  fontSize: '.75rem',
  backgroundColor: 'white',
  borderRadius: '.25rem',
  padding: '.5rem',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const _Separator = styled(Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: `.5rem`,
})

export const _TriggerIcon = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '.5rem',
  height: '2.5rem',
  width: '2.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 1px 5px ${blackA.blackA7}, 0 2px 10px ${blackA.blackA7}`,
  transition: `box-shadow 200ms ease`,
  '&:hover': {
    boxShadow: `0 1px 5px ${blackA.blackA8}, 0 3px 15px ${blackA.blackA8}`,
  },
  '&:focus, &:active': {
    boxShadow: `0 0 0 2px black`,
  },
})

const itemStyles = {
  all: 'unset',
  fontSize: 12,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  padding: '.5rem',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
}

export const _Item = styled(Item, { ...itemStyles })

export const _Label = styled(Label, {
  fontSize: 10,
  color: mauve.mauve11,
  paddingLeft: '.5rem',
})

export const _TriggerItem = styled(TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
})
