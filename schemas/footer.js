export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
    fields: [
        {
            title: 'Copyright',
            name: 'copyright',
            type: 'string'
        },
        {
            name: 'social',
            title: 'Social Icons',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'type',
                        title: 'Type',
                        type: 'string',
                        options: {
                        layout: 'dropdown',
                        list: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'vimeo', 'rss', 'podcast']
                        }
                    },
                    {
                        type: 'url',
                        name: 'url',
                        title: 'URL'
                    }
                ]
            }]
        }
    ]
};
