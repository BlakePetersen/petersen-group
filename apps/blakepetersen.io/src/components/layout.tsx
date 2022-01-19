import { AnimatePresence, motion } from 'framer-motion'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Content from '@/components/primitives/content'

const variants = {
  hidden: { opacity: 0, y: -50, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 0, x: -50 },
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AnimatePresence
        // exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
        >
          <Content>{children}</Content>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
