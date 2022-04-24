import { motion } from 'framer-motion'
import { _Wordmark } from '@/components/Wordmark/wordmark.styles'
import { WordmarkType } from '@/components/Wordmark/wordmark.types'
import { _H1 } from '@/components/Wordmark'

export const Wordmark: WordmarkType = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <_H1 className={`hero-wordmark`}>
        <_Wordmark
          href={`https://twitter.com/search?q=%23iriganggang`}
          target={`_blank`}
        >
          #IRI
          <wbr />
          GANG
          <wbr />
          GANG
        </_Wordmark>
      </_H1>
    </motion.div>
  )
}
