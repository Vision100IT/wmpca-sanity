export default {
    title: 'Newsletter',
    name: 'newsletter',
    type: 'file',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
          name: 'year',
          type: 'number',
          title: 'Year'
      },
      {
          name: 'issue',
          type: 'string',
          title: 'Issue'
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{type: 'string'}],
        options: {
            layout: 'tags'
        }
      }
    ]
  }