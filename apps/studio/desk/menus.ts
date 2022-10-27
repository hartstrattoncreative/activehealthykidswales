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
          .icon(Browser)
          .child(
            S.document()
              .schemaType('menu')
              .documentId('appbar')
              .title('App Bar')
          ),
       
        S.listItem()
          .id('footer')
          .title('Footer')
          .child(
            S.document()
              .schemaType('menu')
              .documentId('footer')
              .title('Footer')
          )
          .icon(SquareHalfBottom),
      ])
  );
