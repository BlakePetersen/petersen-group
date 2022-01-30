import {
  Content,
  Item,
  Root,
  Separator,
  Trigger,
} from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import WalletConnector from '@/components/connect-wallet'
import Link from 'next/link'

const Menu = () => {
  return (
    <Root>
      <Trigger>
        <HamburgerMenuIcon height={`24`} />
      </Trigger>

      <Content>
        <Item>
          <Link href={`/`}>
            <a>Home</a>
          </Link>
        </Item>
        <Item>
          <Link href={`/retouching`}>
            <a>Retouching</a>
          </Link>
        </Item>
        <Separator />
        <WalletConnector />
      </Content>
    </Root>
  )
}

export default Menu
