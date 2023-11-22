import { Analytics } from '@vercel/analytics/react'
import { Lora } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import '@/styles/global-styles.scss'

const lora = Lora({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
