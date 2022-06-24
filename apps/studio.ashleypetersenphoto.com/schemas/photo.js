import { ImageIcon } from '@radix-ui/react-icons'

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: ImageIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'uneditedImage',
      title: 'Unedited Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'capturedAt',
      title: 'Capture Date',
      type: 'datetime',
    },
    {
      name: 'facets',
      title: 'Facets',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'facet' } }],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
