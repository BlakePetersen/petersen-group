import { useAccount, useConnect } from 'wagmi'
import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { ThemeSelector } from '@/components/ThemeSelector'
import WalletConnector from '@/components/ConnectWallet'
import Link from 'next/link'

import {
  _Arrow,
  _Content,
  _Item,
  _Label,
  _Separator,
  _TriggerIcon,
  _TriggerItem,
} from '@/components/Menu/styles'

const Menu = () => {
  const [{ data: connectData }] = useConnect(),
    [{ data: accountData }] = useAccount({
      fetchEns: true,
    })

  console.log('accountData', accountData)

  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content>
        <Link href={`/`}>
          <a>
            <_Item>Home</_Item>
          </a>
        </Link>

        <Link href={`/portfolio`}>
          <a>
            <_Item>Portfolio</_Item>
          </a>
        </Link>

        <Root>
          <Link href={`/services`}>
            <a>
              <_TriggerItem>Services</_TriggerItem>
            </a>
          </Link>

          <_Content>
            <Link href={`/services/photography/portraits`}>
              <a>
                <_Item>Portraits</_Item>
              </a>
            </Link>

            <Link href={`/services/photography/underwater`}>
              <a>
                <_Item>Underwater</_Item>
              </a>
            </Link>

            <Link href={`/services/photography/fine-art`}>
              <a>
                <_Item>Conceptual Fine-Art</_Item>
              </a>
            </Link>

            <Link href={`/services/retouching`}>
              <a>
                <_Item>Retouching</_Item>
              </a>
            </Link>

            <Link href={`/services`}>
              <a>
                <_Item>See All</_Item>
              </a>
            </Link>

            <_Arrow />
          </_Content>
        </Root>

        <_Separator />
        <_Label>
          Authenticate
          {connectData.connected && `d via ${connectData?.connector?.name}`}
        </_Label>
        <WalletConnector />
        <_Separator />
        <_Label>Theme Selection</_Label>
        <ThemeSelector />
        <_Arrow />
      </_Content>
    </Root>
  )
}

export default Menu
