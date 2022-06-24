import { ListBulletIcon } from '@radix-ui/react-icons'

export default {
  name: 'category',
  title: 'Blog Category',
  type: 'document',
  icon: ListBulletIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
