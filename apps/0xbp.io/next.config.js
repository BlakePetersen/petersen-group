/** @type {import("next").NextConfig} */

const withPlugins = require('next-compose-plugins')
const path = require('path')
const withTM = require('next-transpile-modules')(['artax-ui'])

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPlugins([withTM], nextConfig)
