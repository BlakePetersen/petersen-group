import { _Wordmark } from '@/components/Wordmark/workmark.styles'
import { WordmarkType } from '@/components/Wordmark/wordmark.types'

export const Wordmark: WordmarkType = () => {
  return (
    <_Wordmark
      href={`https://twitter.com/search?q=%23iriganggang`}
      target={`_blank`}
    >
      #IRIGANGGANG
    </_Wordmark>
  )
}
