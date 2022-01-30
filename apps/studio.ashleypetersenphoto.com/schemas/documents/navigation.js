//File name: navigation.js
//File location: schemas/documents

import { Globe } from '@radix-ui/react-icons/Globe'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Globe,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
  ],
}
