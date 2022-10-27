import S from '@sanity/desk-tool/structure-builder';
// import { communicationsMenu as communications } from './desk/communication';
import { pagesMenu as pages } from './desk/pages';
import { menusMenu as menus } from './desk/menus';
import { indicatorsMenu as indicators } from './desk/indicators';
import {collaboratorsMenu as collaborators } from './desk/collaborators'
import {settingsMenu as settings } from './desk/settings'

export default function deskStructure() {
  return S.list()
    .title('Site management')
    .items([
      pages,
      indicators,
      collaborators,
      S.divider(),
      menus,
      settings,
      ...S.documentTypeListItems()?.filter(
        (item) =>
          ![
            'siteSettings',
            'page',
            'indicator',
            'menu',
            'grade',
            'member',
            'organisation',
            'media.tag',
            'notification',
          ].includes(item.getId() ?? '')
      ),
    ]);
}
