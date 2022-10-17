import {Suspense} from 'react'
import dynamic from 'next/dynamic'
import Logo from '@/components/Logo'
import {_Header, _LogoContainer} from './header.styles'

const DynamicMenu = dynamic(() => import('@/components/Menu'), {
    suspense: true,
    ssr: false,
})

export const Header = () => {
    return (
        <_Header>
            <Suspense fallback={null}>
                <DynamicMenu/>
            </Suspense>

            <_LogoContainer>
                <Logo/>
            </_LogoContainer>

            {/*<_ConnectButton*/}
            {/*    label="Login"*/}
            {/*    chainStatus="none"*/}
            {/*    accountStatus="avatar"*/}
            {/*/>*/}
        </_Header>
    )
}
