/** @type {import("next").NextConfig} */

const withPlugins = require('next-compose-plugins')
const path = require('path')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  experimental: {
    transpilePackages: ['artax-ui']
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['degentoonz-app-gfcxi.ondigitalocean.app', 'gateway.ipfs.io']
  }
}

module.exports = withPlugins([withAxiom], nextConfig)
