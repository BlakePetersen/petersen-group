/** @type {import("next").NextConfig} */

const path = require('path')

const withPlugins = require('next-compose-plugins')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  transpilePackages: ['artax-ui']
}

module.exports = withPlugins([withAxiom], nextConfig)
