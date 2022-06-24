import { GlobeIcon } from '@radix-ui/react-icons'

export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  icon: GlobeIcon,
  fields: [
    {
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [{ type: 'navigation.link' }],
    },
  ],
}
