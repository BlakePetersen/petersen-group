/** @type {import("next").NextConfig} */

const withPlugins = require('next-compose-plugins')
const path = require('path')
const withTM = require('next-transpile-modules')(['artax-ui'])

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'gateway.pinata.cloud',
      'degentoonz-app-gfcxi.ondigitalocean.app',
      'fanggang.s3.us-east-2.amazonaws.com',
      'y.at',
      'ipfs.io',
      'lh3.googleusercontent.com',
      'mint.sacredskullsnft.io',
      'toonsquad-public-prereveal.s3.amazonaws.com',
      'mint.womenfromvenus.io',
      'gateway.ipfs.io',
    ],
  },
}

module.exports = withPlugins([withTM], nextConfig)
