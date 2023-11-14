import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Trianglify from '@wordbots/trianglify-no-canvas'
import { useTheme } from 'next-themes'

import { useThemeContext } from '@radix-ui/themes'

interface TrianglesProps {
  $trianglesPattern: string
}

const _Triangles = styled.div<TrianglesProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('${props => props.$trianglesPattern}');
  background-size: cover;
  background-position: center;
  box-shadow:
    inset 0 0 10px rgba(0, 0, 0, 0.05),
    inset 0 0 25px rgba(0, 0, 0, 0.075),
    inset 0 0 125px rgba(0, 0, 0, 0.1);

  opacity: 1;
`
const _generatePattern = (current, palette) => {
  const _canvasHeight = current.offsetHeight || 120,
    _canvasWidth = current.clientWidth || 2400

  const _patternOptions = {
    variance: 0.85,
    color_space: 'rgb',
    height: _canvasHeight * 2,
    width: _canvasWidth * 2,
    stroke_width: 100 * 2,
    x_colors: palette.accentColors,
    y_colors: palette.grayColors,
    cell_size: 60 * 2
  }

  const _pattern = new Trianglify(_patternOptions)
  return _pattern.png()
}

const Triangles = () => {
  const trianglesRef = useRef()
  const { resolvedTheme } = useTheme()
  const colorContext = useThemeContext()
  const [trianglesPattern, setTrianglesPattern] = useState('')

  const activeTheme =
    colorContext.appearance === 'inherit'
      ? resolvedTheme
      : colorContext.appearance

  console.log(activeTheme)

  const palette = {
    accentColors:
      activeTheme === 'dark'
        ? ['#061e24', '#0a4554', '#0a647b', '#0099bd', '#00b1cc']
        : ['#f2fcfd', '#d8f3f6', '#aadee6', '#3db9cf', '#0894b3'],
    grayColors:
      activeTheme === 'dark'
        ? ['#787f85', '#4c5155', '#313538', '#17191a', '#1a1d1e']
        : ['#7e868c', '#c1c8cd', '#dfe3e6', '#eceef0', '#f8f9fa']
  }

  useEffect(() => {
    const { current } = trianglesRef
    setTrianglesPattern(_generatePattern(current, palette))
  }, [activeTheme])

  return <_Triangles ref={trianglesRef} $trianglesPattern={trianglesPattern} />
}

export default Triangles
