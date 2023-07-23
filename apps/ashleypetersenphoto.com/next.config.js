/** @type {import("next").NextConfig} */

const path = require('path')

const withPlugins = require('next-compose-plugins')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ['artax-ui'],
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = withPlugins([withAxiom], nextConfig)
