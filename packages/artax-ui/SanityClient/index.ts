import sanityClient from '@sanity/client'
import C from 'config/constants'

export const SanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: C.SANITY.API.VERSION,
  useCdn: process.env.NODE_ENV === 'production',
})
