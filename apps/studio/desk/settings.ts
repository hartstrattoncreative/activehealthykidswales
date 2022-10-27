import S from '@sanity/desk-tool/structure-builder';
import { standardViews } from './previews/standard';
import { Gear } from 'phosphor-react';

export const settingsMenu = S.listItem()
  .id('siteSettings')
  .title('Settings')
  .icon(Gear)
  .child(
    S.list()
      .title('Settings')
      .items([
        S.listItem()
          .title('Site Settings')
          .icon(Gear)
          .child(
            S.document()
              .documentId('siteSettings')
              .schemaType('siteConfig')
              .views(standardViews)
          ),       
      ])
  )


