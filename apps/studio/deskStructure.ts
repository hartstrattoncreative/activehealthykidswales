import S from '@sanity/desk-tool/structure-builder';
// import { communicationsMenu as communications } from './desk/communication';
import { pagesMenu as pages } from './desk/pages';
import { menusMenu as menus } from './desk/menus';
// import { settingsMenu as settings } from './desk/settings';
// import { modalsMenu as modals } from './desk/modals';
// import { standardViews } from './desk/previews/standard';
// import { MagnifyingGlass } from 'phosphor-react';

export default function deskStructure() {
  return S.list()
    .title('Site management')
    .items([
      menus,
      pages
    ]);
}
