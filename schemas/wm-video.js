export default {
    name: 'wmvideo',
    title: 'WM Video',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'string'
        },
        {
            name: 'speaker',
            title: 'Speaker',
            type: 'reference',
            to: [
                {
                    type: 'speaker'
                }
            ]
        },
        {
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: [
                {
                    type: 'wmvideoseries'
                }
            ]
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file'
        },
        {
            name: 'thumbnail',
            title: 'Video Thumbnail',
            type: 'image'
        }
    ]

}