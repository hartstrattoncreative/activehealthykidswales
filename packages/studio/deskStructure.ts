/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import S from '@sanity/desk-tool/structure-builder';
import * as intlStructure from '@sanity/document-internationalization/lib/structure';
import navigation from './stucture/navigation';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem: any) =>
  !['route', 'site-config', 'menu', 'team'].includes(
    (listItem?.getId?.() as string) ?? (listItem.id as string)
  );

S.documentList()
  .id('frontpage')
  .title('Frontpage')
  .schemaType('page')
  .filter('_id == $id && _type == $type')
  .params({
    id: 'frontpage',
    type: 'frontpage',
  })
  .menuItems([
    {
      title: 'Create new',
      intent: {
        type: 'create',
        params: {
          id: 'frontpage',
          type: 'page',
          template: 'frontpage',
        },
      },
    },
  ]);

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const items = intlStructure.getFilteredDocumentTypeListItems();
  const pageStructure = intlStructure
    .getFilteredDocumentTypeListItems()
    .find((item) => item.id === 'page');

  console.log(pageStructure);

  return S.list()
    .id('__root__')
    .title('Site Content')
    .items([
      navigation,
      S.divider(),
      ...items.filter(hiddenDocTypes),
      S.documentListItem().id('team').schemaType('team').title('Team Members'),
      S.divider(),
      S.documentListItem()
        .id('site-config')
        .schemaType('site-config')
        .title('Site Settings'),
    ]);
  // .items([
  // S.documentListItem()
  //   .id('site-config')
  //   .schemaType('site-config')
  //   .title('Site Settings'),
  // navigation,
  // S.documentListItem()
  //   .title('Frontpage')
  //   .schemaType('page')
  //   // .icon(GoHome)
  //   .child(
  //     S.document()
  //       .title('Frontpage')
  //       .schemaType('page')
  //       .documentId('frontpage')
  //       .views([S.view.form()])
  //   ),
  // S.listItem().title('Pages').schemaType('page').child(
  //   S.documentTypeList('page')
  //     .title('Pages')
  //     // .menuItems(S.documentTypeList('page').getMenuItems())
  //     .filter('_type == "page" && _id != "frontpage"')
  // ),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // ...S.documentTypeListItems().filter(hiddenDocTypes),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  // ]);
};
