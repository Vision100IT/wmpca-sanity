export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // Will be ignored if slugify is set
                slugify: input =>
                  input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
              }
        },
        {
            name: 'mainImage',
            title: 'Page Header Image',
            type: 'image'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'block-content'
        }
    ],
    preview: {
        select: {
          title: 'title',
          id: '_id'
        }
    }
}