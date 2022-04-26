/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import S from '@sanity/desk-tool/structure-builder';
import * as intlStructure from '@sanity/document-internationalization/lib/structure';
import navigation from './stucture/navigation';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem: any) =>
  !['page', 'route', 'site-config', 'navigation', 'footer'].includes(
    (listItem?.getId?.() as string) ?? (listItem.id as string)
  );

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return S.list()
    .title('Active Healthy Kids Wales')
    .items([
      S.documentListItem()
        .id('site-config')
        .schemaType('site-config')
        .title('Site Settings'),
      navigation,
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        // .icon(GoHome)
        .child(
          S.document()
            .title('Frontpage')
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form()])
        ),
      S.listItem().title('Pages').schemaType('page').child(
        S.documentTypeList('page')
          .title('Pages')
          // .menuItems(S.documentTypeList('page').getMenuItems())
          .filter('_type == "page" && _id != "frontpage"')
      ),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...intlStructure
        .getFilteredDocumentTypeListItems()
        .filter(hiddenDocTypes),
    ]);
};
