/** @type {import("next").NextConfig} */

const path = require('path')

const withPlugins = require('next-compose-plugins')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'gateway.pinata.cloud',
      'degentoonz-app-gfcxi.ondigitalocean.app',
      'degentoonz.fra1.cdn.digitaloceanspaces.com',
      '1sc60ixn9c.execute-api.us-east-1.amazonaws.com',
      'nervous.mypinata.cloud',
      'api.passage.xyz',
      'images.mirror-media.xyz',
      'thugslady.site',
      'fanggang.s3.us-east-2.amazonaws.com',
      'y.at',
      'ipfs.io',
      'lh3.googleusercontent.com',
      'mint.sacredskullsnft.io',
      'toonsquad-public-prereveal.s3.amazonaws.com',
      'mint.womenfromvenus.io',
      'gateway.ipfs.io',
      'res.cloudinary.com',
      'eth-mainnet.alchemyapi.io',
      'safe-nft-metadata-provider-3-5mgae.ondigitalocean.app',
      'nft-cdn.alchemy.com',
      'secopi.site'
    ],
    dangerouslyAllowSVG: true
  },
  transpilePackages: ['artax-ui']
}

module.exports = withPlugins([withAxiom], nextConfig)
