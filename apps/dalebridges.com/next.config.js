/** @type {import("next").NextConfig} */

const path = require('path')

const withPlugins = require('next-compose-plugins')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  reactStrictMode: true,
  transpilePackages: ['artax-ui']
}

module.exports = withPlugins([withAxiom], nextConfig)
