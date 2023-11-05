import { motion } from 'framer-motion'
import { _Wordmark, _H1 } from '@/components/Wordmark/wordmark.styles'
import { WordmarkType } from '@/components/Wordmark/wordmark.types'

export const Wordmark: WordmarkType = () => {
  return (
    <_H1 className={`hero-wordmark`}>
      <_Wordmark
        href={`https://twitter.com/search?q=%23iriganggang`}
        target={`_blank`}
      >
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
          IRI
          <wbr />
          GANG
          <wbr />
          GANG
        </motion.div>
      </_Wordmark>
    </_H1>
  )
}
