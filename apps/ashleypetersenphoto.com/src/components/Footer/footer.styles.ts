import {styled} from '@stitches/react'

export const _Footer = styled('footer', {
    width: '100%',
    textAlign: 'center',
    fontSize: '0.8rem',
    backdropFilter: 'blur(.5rem)',
    display: `flex`,
    flexDirection: `column`,
    gap: `2rem`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: `2rem 0`,
    a: {
        color: '$accentTextContrast',
        textDecoration: 'none',
    },
})

export const _Copyright = styled('div', {
    display: `flex`,
    flexDirection: `column`,
    gap: `0.5rem`,
})
