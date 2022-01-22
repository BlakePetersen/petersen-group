import { createClient } from 'contentful'

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export const getBlake = () =>
  client.getEntries({
    content_type: 'person',
    'fields.slug': 'blake-petersen',
  })

export const getPersons = () =>
  client.getEntries({
    content_type: 'person',
  })

export const getPerson = (slug) =>
  client.getEntries({
    content_type: 'person',
    'fields.slug': slug,
  })

export const getPosts = () =>
  client.getEntries({
    content_type: 'blogPost',
  })

export const getPost = (slug) =>
  client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  })

export const getPostsByTag = (tag) =>
  client.getEntries({
    content_type: 'blogPost',
    'fields.tags': tag,
  })
