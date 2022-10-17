import {styled} from '@stitches/react'
import {Content, Item, Label, Separator, SubTrigger,} from '@radix-ui/react-dropdown-menu'

import {slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade,} from 'artax-ui'

export const _Content = styled(Content, {
    fontFamily: '"Public Sans", sans-serif;',
    display: `flex`,
    flexDirection: `column`,
    fontSize: '1rem',
    position: 'relative',
    border: '1px solid $accentBorder',
    backgroundColor: '$accentBg',
    borderRadius: '.25rem',
    padding: '1rem',
    gap: `1rem`,
    boxShadow: '0px 10px 38px -10px $blackA7, 0px 10px 20px -15px $blackA7',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        '&[data-state="open"]': {
            '&[data-side="top"]': {animationName: slideDownAndFade},
            '&[data-side="right"]': {animationName: slideLeftAndFade},
            '&[data-side="bottom"]': {animationName: slideUpAndFade},
            '&[data-side="left"]': {animationName: slideRightAndFade},
        },
    },
    a: {
        textDecoration: 'none',
    },
})

export const _Separator = styled(Separator, {
    height: 1,
    backgroundColor: `$accentBorder`,
})

export const _TriggerIcon = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '.35rem',
    height: '2rem',
    width: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$accentTextContrast',
    backgroundColor: '$accentBg',
    border: '1px solid $accentBorder',
    transition: `box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    cursor: 'pointer',

    '&:hover': {
        boxShadow: `0 1px 5px $blackA5, 0 3px 15px $blackA5`,
        borderColor: '$accentBorderHover',
        transform: 'translateY(-1px)',
    },

    '&:focus, &:active': {
        boxShadow: `0 1px 4px $blackA7, 0 2px 10px $blackA7`,
        borderColor: '$accentSolid',
    },
})

const itemStyles = {
    all: 'unset',
    fontSize: 12,
    lineHeight: 1,
    color: '$accentTextContrast',
    textShadow: `1px 1px 1px $blackA2`,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    userSelect: 'none',

    '&[data-disabled]': {
        color: '$gray12',
        pointerEvents: 'none',
    },

    '&:focus': {
        backgroundColor: '$accentBg',
        color: '$accentTextContrast',
    },
}

export const _Item = styled(Item, {
    ...itemStyles,
})

export const _Label = styled(Label, {
    fontSize: 10,
})

export const _TriggerItem = styled(SubTrigger, {
    '&[data-state="open"]': {
        backgroundColor: '$accentBgA',
        color: '$accentTextContrast',
    },
    ...itemStyles,
})
