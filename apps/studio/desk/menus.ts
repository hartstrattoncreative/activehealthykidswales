import S from '@sanity/desk-tool/structure-builder';

import { List, Browser, SidebarSimple, SquareHalfBottom } from 'phosphor-react';

export const menusMenu = S.listItem()
  .title('Menus')
  .icon(List)
  .child(
    S.list()
      .title('Menus')
      .items([
        S.listItem()
          .id('appBar')
          .title('App Bar')
          .child(
            S.document()
              .schemaType('appBar')
              .documentId('appBar')
              .title('App Bar')
          )
          .icon(Browser),
       
        // S.listItem()
        //   .id('footer')
        //   .title('Footer')
        //   .child(
        //     S.document()
        //       .schemaType('footer')
        //       .documentId('footer')
        //       .title('Footer')
        //   )
        //   .icon(SquareHalfBottom),
      ])
  );
