import { GearIcon } from '@radix-ui/react-icons'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: GearIcon,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
  ],
}
