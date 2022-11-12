import { Lora } from '@next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import '@/styles/global-styles.scss'

const lora = Lora()

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
