import {styled} from '@stitches/react'
import Link from 'next/link'

export const _LogoAnchor = styled(Link, {
    textAlign: 'center',
})

export const _LogoLine1 = styled('div', {
    fontSize: '1.5rem',
    letterSpacing: '-.0175rem',
    fontWeight: 'bold',
    color: '$accentSolid',
    textAlign: 'center',
    marginBottom: '0.25rem',
})

export const _LogoLine2 = styled('div', {
    fontSize: '.8rem',
    letterSpacing: '0.225rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '$accentSolid',
    textAlign: 'center',
})
