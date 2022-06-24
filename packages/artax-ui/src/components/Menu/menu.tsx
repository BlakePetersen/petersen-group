import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { _Content, _Root, _TriggerIcon } from './menu.styles'
import { MenuTypes } from './menu.types'

export const Menu: MenuTypes = ({ css, children }) => {
  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content css={{ ...css }}>{children}</_Content>
    </Root>
  )
}
