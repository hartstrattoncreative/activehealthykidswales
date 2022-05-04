/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import S from '@sanity/desk-tool/structure-builder';
import { MdMenu, MdNavigation } from 'react-icons/md';

export default S.listItem()
  .title('Navigation')
  .icon(MdNavigation)
  .child(
    S.list()
      .title('Navigation')
      .items([
        S.documentListItem()
          .id('menu')
          .icon(MdMenu)
          .schemaType('menu')
          .title('Main menu'),
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
