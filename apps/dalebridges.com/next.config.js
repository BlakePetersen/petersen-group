/** @type {import("next").NextConfig} */

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['artax-ui'])
const { withAxiom } = require('next-axiom')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([withAxiom, withTM], nextConfig)
