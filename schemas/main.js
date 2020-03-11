export default {
    name: 'main',
    title: 'Main',
    type: 'document',
    __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'text',
            rows: 2
        },
        {
            title: 'Image Carousel',
            name: 'images',
            description: 'Add images to be displayed in the slider on the front page',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
        {
            title: 'Menus',
            name: 'menuitems',
            description: 'Add pages below to feature in the main menu',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { title: 'Menu text', name: 'text', type: 'string' },
                        {
                            title: 'Child pages',
                            name: 'childpages',
                            type: 'array',
                            of: [
                                {
                                    type: 'reference',
                                    title: 'Child page',
                                    description: 'Pick a page from the dropdown list below',
                                    to: [
                                        { type: 'page' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'welcome',
            title: 'Welcome Text',
            type: 'block-content'
        }
    ]
};
