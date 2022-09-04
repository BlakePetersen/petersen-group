/** @type {import("next").NextConfig} */

const withPlugins = require('next-compose-plugins')
const path = require('path')
const withTM = require('next-transpile-modules')(['artax-ui'])
const {withAxiom} = require('next-axiom');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['degentoonz-app-gfcxi.ondigitalocean.app', 'gateway.ipfs.io'],
    },
}

module.exports = withPlugins([withAxiom, withTM], nextConfig)
