import { getPersons, getPosts } from '@/pages/api/contentful'
import { Entry } from 'contentful'

const _routes = {
    '/': {
      page: '/',
    },
  },
  _tags = []

const _getPersons = async () => {
  return await getPersons()
}

const _getPosts = async () => {
  return await getPosts()
}

const getRoutes = async () => {
  return await Promise.all([_getPersons(), _getPosts()])
    .then((data) => {
      data[0].items.forEach((person: Entry<Record<string, unknown>>) => {
        _routes['/about/' + person.fields.slug] = {
          page: '/about',
          query: { slug: person.fields.slug },
        }
      })

      data[1].items.forEach((post: Entry<Record<string, [unknown]>>) => {
        post.fields.tags &&
          post.fields.tags.forEach((tag) => {
            if (!_tags.includes(tag)) {
              _tags.push(tag)
            }
          })

        _routes['/posts/' + post.fields.slug] = {
          page: '/post',
          query: { slug: post.fields.slug },
        }
      })

      _tags.forEach((tag) => {
        _routes['/tags/' + tag] = {
          page: '/tag',
          query: { tag: tag },
        }
      })

      return _routes
    })
    .catch((error) => {
      console.log('error', error)
    })
}

module.exports = {
  getRoutes,
}
