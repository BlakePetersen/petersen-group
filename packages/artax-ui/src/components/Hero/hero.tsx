import { _Copy, _H1, _H2, _Hero, _Lead } from './hero.styles'
import { HeroTypes } from './hero.types'

export const Hero: HeroTypes = ({ css, h1, h2, background, children }) => {
  return (
    <_Hero
      css={{
        ...css,
        backgroundImage: background ? `url(${background.src})` : 'none',
      }}
    >
      {(h1 || h2) && (
        <_Lead>
          {h1 && <_H1>{h1}</_H1>}
          {h2 && <_H2>{h2}</_H2>}
        </_Lead>
      )}
      {children && <_Copy>{children}</_Copy>}
    </_Hero>
  )
}
