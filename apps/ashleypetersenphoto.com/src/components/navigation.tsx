import { keyframes, styled } from '@stitches/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

const StyledContent = styled(DropdownMenu.Content, {
  transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',
  animation: `${scaleIn} 0.5s ease-out`,
})

const Navigation = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>click</DropdownMenu.Trigger>

    <StyledContent>
      <DropdownMenu.Label>ding</DropdownMenu.Label>

      <DropdownMenu.Item>dong</DropdownMenu.Item>

      <DropdownMenu.Separator />
      <DropdownMenu.Arrow />
    </StyledContent>
  </DropdownMenu.Root>
)

export default Navigation
