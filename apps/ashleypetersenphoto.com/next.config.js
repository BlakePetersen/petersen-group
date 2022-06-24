/** @type {import("next").NextConfig} */

const path = require('path')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['artax-ui'])

const nextConfig = {
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['mint.sacredskullsnft.io', 'cdn.sanity.io'],
  },
}

module.exports = withPlugins([withTM], nextConfig)
