import S from '@sanity/desk-tool/structure-builder';
// import { communicationsMenu as communications } from './desk/communication';
import { pagesMenu as pages } from './desk/pages';
import { menusMenu as menus } from './desk/menus';
import { indicatorsMenu as indicators } from './desk/indicators';
// import { settingsMenu as settings } from './desk/settings';
// import { modalsMenu as modals } from './desk/modals';
// import { standardViews } from './desk/previews/standard';
// import { MagnifyingGlass } from 'phosphor-react';

export default function deskStructure() {
  return S.list()
    .title('Site management')
    .items([
      pages,
      indicators,
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
            'grade'
          ].includes(item.getId() ?? '')
      ),
    ]);
}
