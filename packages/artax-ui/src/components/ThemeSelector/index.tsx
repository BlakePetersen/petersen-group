import { _ButtonIcon, _Flex } from './styles'

export const ThemeSelector = ({ useTheme }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <_Flex>
      <_ButtonIcon onClick={() => setTheme('light')}>Light</_ButtonIcon>

      <_ButtonIcon onClick={() => setTheme('dark')}>Dark</_ButtonIcon>
    </_Flex>
  )
}
