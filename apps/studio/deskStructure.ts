import S from '@sanity/desk-tool/structure-builder';
// import { communicationsMenu as communications } from './desk/communication';
import { pagesMenu as pages } from './desk/pages';
import { menusMenu as menus } from './desk/menus';
import { indicatorsMenu as indicators } from './desk/indicators';
import {collaboratorsMenu as collaborators } from './desk/collaborators'

export default function deskStructure() {
  return S.list()
    .title('Site management')
    .items([
      pages,
      indicators,
      S.divider(),
      collaborators,
      S.divider(),
      menus,
      ...S.documentTypeListItems()?.filter(
        (item) =>
          ![
            // 'siteSettings',
            // 'siteSeo',
            'page',
            'indicator',
            'menu',
            'grade',
            'member',
            'organisation',
            'media.tag'
          ].includes(item.getId() ?? '')
      ),
    ]);
}
