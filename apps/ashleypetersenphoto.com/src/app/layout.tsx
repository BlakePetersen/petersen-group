'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
