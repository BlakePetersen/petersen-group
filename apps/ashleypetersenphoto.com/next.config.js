/** @type {import("next").NextConfig} */

const path = require('path')
const withPlugins = require('next-compose-plugins')
const {withAxiom} = require('next-axiom');
const withTM = require('next-transpile-modules')(['artax-ui'])

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        domains: ['cdn.sanity.io']
    },
}

module.exports = withPlugins([withTM, withAxiom], nextConfig)
