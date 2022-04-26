/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Navigation')
  .child(
    S.list()
      .title('Navigation')
      .items([
        S.documentListItem()
          .id('navigation')
          .schemaType('navigation')
          .title('Main Navigation'),
        S.documentListItem()
          .id('footer')
          .schemaType('footer')
          .title('Footer Navigation'),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(
            S.documentTypeList('route')
              .title('Routes')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('route')
                  .views([S.view.form()])
              )
          ),
      ])
  );
