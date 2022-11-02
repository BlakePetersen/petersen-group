import { styled } from '@stitches/react'
// import { blackA } from '@radix-ui/colors'

export const _Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: `.5rem`,
})

// export const _Switch = styled(Root, {
//   all: 'unset',
//   width: 42,
//   height: 21,
//   backgroundColor: `$accentTextContrast`,
//   borderRadius: '9999px',
//   position: 'relative',
//   border: `solid 2px $accentBorderHover`,
//   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
// })
//
// export const _Thumb = styled(Thumb, {
//   display: 'block',
//   width: 18,
//   height: 18,
//   backgroundColor: `$accentBgHover`,
//   borderRadius: '9999px',
//   boxShadow: `0 2px 2px ${blackA.blackA7}`,
//   transition: 'transform 100ms',
//   transform: 'translateX(2px)',
//   '&[data-state="checked"]': { transform: 'translateX(22px)' },
// })

export const _ButtonIcon = styled('button', {
  all: 'unset',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
})
