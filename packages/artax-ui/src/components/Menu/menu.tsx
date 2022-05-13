import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { _Content, _TriggerIcon } from './menu.styles'
import { MenuTypes } from './menu.types'

export const Menu: MenuTypes = ({ children }) => {
  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content>{children}</_Content>
    </Root>
  )
}
