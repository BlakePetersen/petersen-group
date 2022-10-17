import {ConnectButton} from '@rainbow-me/rainbowkit'
import {styled} from '@stitches/react'

export const _ConnectButton = styled(ConnectButton, {
    borderRadius: '0.05rem',
})

export const _Header = styled('header', {
    position: `sticky`,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '$accentBgA',
    borderBottom: `1px solid $accentBorderA`,
    boxShadow: `0px 10px 50px -10px $blackA7, 0px 10px 30px -15px $blackA7`,
    width: '100%',
    padding: '1rem',
    zIndex: 2,
    top: '0',
    backdropFilter: 'blur(.5rem)',
    a: {
        textDecoration: 'none',
    },
})

export const _LogoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
})
