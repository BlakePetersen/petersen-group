import styled from 'styled-components'
import React from 'react'

const _Triangles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1),
    inset 0 0 25px rgba(0, 0, 0, 0.15), inset 0 0 125px rgba(0, 0, 0, 0.2);

  opacity: 1;
`

const Triangles = () => {
  return <_Triangles />
}

export default Triangles
