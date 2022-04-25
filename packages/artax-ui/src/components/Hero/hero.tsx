import { _Copy, _Hero, _Lead } from './hero.styles'
import { HeroTypes } from './hero.types'

export const Hero: HeroTypes = ({ css, h1, h2, background, children }) => {
  return (
    <_Hero
      css={{
        ...css,
        backgroundImage: background ? `url(${background.src})` : 'none',
        backgroundSize: `cover`,
      }}
    >
      {(h1 || h2) && (
        <_Lead>
          {h1 && h1}
          {h2 && h2}
        </_Lead>
      )}
      {children && <_Copy>{children}</_Copy>}
    </_Hero>
  )
}
