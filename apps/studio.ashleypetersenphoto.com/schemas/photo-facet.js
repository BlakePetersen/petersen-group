import { DropdownMenuIcon } from '@radix-ui/react-icons'

export default {
  name: 'facet',
  title: 'Photo Facet',
  type: 'document',
  icon: DropdownMenuIcon,
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
