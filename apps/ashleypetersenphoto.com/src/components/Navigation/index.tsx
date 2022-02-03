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

const Index = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>

    <StyledContent>
      <DropdownMenu.Separator />
      <DropdownMenu.Arrow />
    </StyledContent>
  </DropdownMenu.Root>
)

export default Index
