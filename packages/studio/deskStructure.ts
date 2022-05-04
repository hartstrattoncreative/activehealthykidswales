/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import S from '@sanity/desk-tool/structure-builder';
import navigation from './stucture/navigation';
import { MdSettings, MdStarRate, MdSupervisorAccount } from 'react-icons/md';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem: any) =>
  !['route', 'site-config', 'menu', 'team', 'indicators'].includes(
    (listItem?.getId?.() as string) ?? (listItem.id as string)
  );

export default () => {
  return S.list()
    .id('__root__')
    .title('Site Content')
    .items([
      navigation,
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.divider(),
      S.listItem()
        .title('Key Indicators')
        .schemaType('indicators')
        .id('indicators')
        .icon(MdStarRate)
        .child(
          S.document()
            .title('Key Indicators')
            .schemaType('indicators')
            .documentId('indicators')
            .views([S.view.form()])
        ),
      S.listItem()
        .title('Group Members')
        .schemaType('team')
        .id('team')
        .icon(MdSupervisorAccount)
        .child(
          S.document()
            .title('Group Members')
            .schemaType('team')
            .documentId('members')
            .views([S.view.form()])
        ),
      S.divider(),
      S.documentListItem()
        .id('site-config')
        .icon(MdSettings)
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
