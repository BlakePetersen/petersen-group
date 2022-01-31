export default {
  name: 'navigation.link',
  type: 'object',
  title: 'Link',
  preview: {
    select: {
      title: 'title',
      targetTitle: 'target.title',
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'post' }],
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{ type: 'navigation.link' }],
    },
  ],
}
