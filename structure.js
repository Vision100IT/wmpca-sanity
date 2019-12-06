import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('WMPCA Admin')
        .items([
            S.listItem()
                .title('Front Page and Menu')
                .child(
                    S.editor()
                        .title('Front Page and Menu')
                        .id('global-main')
                        .schemaType('main')
                        .documentId('global-main')
                ),
            S.listItem()
                .title('Blog Post')
                .child(S.documentTypeList('blog_post').title('Blog Post')),
            S.listItem()
                .title('Pages')
                .child(S.documentTypeList('page').title('Page')),
            S.listItem()
                .title('Newsletter')
                .child(S.documentTypeList('newsletter').title('Newsletter')),
            S.listItem()
                .title('Video')
                .child(S.documentTypeList('video').title('Video')),
            S.listItem()
                .title('Other')
                .child(
                    S.list()
                        .title('Other')
                        .items([
                            S.listItem()
                                .title('Author')
                                .child(S.documentTypeList('author').title('Author')),
                            S.listItem()
                                .title('Category')
                                .child(S.documentTypeList('category').title('Category')),
                            S.listItem()
                                .title('Speaker')
                                .child(S.documentTypeList('speaker').title('Speaker')),
                            S.listItem()
                                .title('Series')
                                .child(S.documentTypeList('videoseries').title('Video Series'))
                        ])
                ),


        ])