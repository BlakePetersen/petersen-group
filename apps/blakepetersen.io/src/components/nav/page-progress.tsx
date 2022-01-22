import { useEffect, useRef } from 'react'
import ProgressBar from '@/lib/progress-bar'

import styled from 'styled-components'

const _ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  display: flex;
`

const PageProgress = () => {
  const _ProgressBarRef = useRef(null)

  useEffect(() => {
    ProgressBar(_ProgressBarRef.current)
  })

  return <_ProgressBar ref={_ProgressBarRef} />
}

export default PageProgress
