import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Trianglify from '@wordbots/trianglify-no-canvas'

interface TrianglesProps {
  trianglespattern: string
}

const _Triangles = styled.div<TrianglesProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('${props => props.trianglespattern}');
  background-size: cover;
  background-position: center;
  box-shadow:
    inset 0 0 10px rgba(0, 0, 0, 0.1),
    inset 0 0 25px rgba(0, 0, 0, 0.15),
    inset 0 0 125px rgba(0, 0, 0, 0.2);

  opacity: 1;
`

const _generatePattern = current => {
  const _canvasHeight = current.offsetHeight || 120,
    _canvasWidth = current.clientWidth || 2400

  const _patternOptions = {
    variance: 0.85,
    palette: Trianglify.colorbrewer,
    color_space: 'rgb',
    height: _canvasHeight * 2,
    width: _canvasWidth * 2,
    stroke_width: 100 * 2,
    x_colors: [
      '#a6bddb',
      '#67a9cf',
      '#3690c0',
      '#02818a',
      '#016c59',
      '#014636'
    ],
    y_colors: [
      '#ffffff',
      // "#f0f0f0",
      '#d9d9d9',
      // "#bdbdbd",
      '#969696',
      // "#737373",
      '#525252',
      // "#252525",
      '#000000'
    ],
    cell_size: 60 * 2
  }

  const _pattern = new Trianglify(_patternOptions)
  return _pattern.png()
}

const Triangles = () => {
  const trianglesRef = useRef()

  const [trianglesPattern, setTrianglesPattern] = useState('')

  useEffect(() => {
    const { current } = trianglesRef
    setTrianglesPattern(_generatePattern(current))
  }, [])

  return <_Triangles ref={trianglesRef} trianglespattern={trianglesPattern} />
}

export default Triangles
