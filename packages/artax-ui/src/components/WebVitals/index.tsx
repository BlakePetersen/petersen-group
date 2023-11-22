'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { ReactNode } from 'react'

export const WebVitals = () => {
  useReportWebVitals(metric => {
    console.log(metric)
  })

  return <>{console.log('WebVitals loaded.')}</>
}
