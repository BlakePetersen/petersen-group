import sanityClient, { ClientConfig } from '@sanity/client'
import sanityImage from '@sanity/image-url'

import C from 'config/constants'

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: C.SANITY.API.VERSION,
  // useCdn: process.env.NODE_ENV === 'production',
  useCdn: true,
}

export const SanityClient = sanityClient(config)
export const ImageBuilder = sanityImage(SanityClient)
