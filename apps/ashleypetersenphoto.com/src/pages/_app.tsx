import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/global-styles.scss'
import { darkTheme } from '../../stitches.config'
import Header from '@/components/Header'
import useSWR from '@zeit/swr'
import groq from 'groq'
import { SanityClient } from 'artax-ui'

const App = ({ Component, pageProps }: AppProps) => {
  const { data: menuData } = useSWR(
    groq`*[_type == "navigation"][0]{...,
    sections[] { ... ,
      _type == "navigation.link" => {
      ...,
      internalLink {
        ...,
        "slug": @->slug
      },
      links[] {
        ...,
        internalLink {
          ...,
          "slug": @->slug
        },
        links[] {
          ...,
          internalLink {
            ...,
            "slug": @->slug
          },
        }
      }
     }}}`,
    query => SanityClient.fetch(query),
  )

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Header menuData={menuData} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
