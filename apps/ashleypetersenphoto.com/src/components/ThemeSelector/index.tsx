import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { _ButtonIcon, _Flex, _Switch, _Thumb } from './styles'

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <_Flex>
      <_ButtonIcon onClick={() => setTheme('light')}>
        <SunIcon />
      </_ButtonIcon>

      <_Switch
        checked={theme === 'dark'}
        onCheckedChange={() => toggleTheme()}
        id="s1"
      >
        <_Thumb />
      </_Switch>

      <_ButtonIcon onClick={() => setTheme('dark')}>
        <MoonIcon />
      </_ButtonIcon>
    </_Flex>
  )
}
