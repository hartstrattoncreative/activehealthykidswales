import S from '@sanity/desk-tool/structure-builder';

import { Gear, IdentificationCard } from 'phosphor-react';

export const settingsMenu = S.listItem()
  .id('siteSettings')
  .title('Settings')
  .child(
    S.list()
      .title('Settings')
      .items([
        S.listItem()
          .title('General')
          .child(
            S.editor()
              .id('siteSettings')
              .schemaType('siteSettings')
              .documentId('siteSettings')
          )
          .icon(Gear),
        S.listItem()
          .title('Licenses')
          .schemaType('license')
          .icon(IdentificationCard)
          .child(
            S.documentTypeList('license')
              .title('Licenses')

              .child((documentId) =>
                S.document().documentId(documentId).schemaType('license')
              )
              .canHandleIntent(
                (intent, { type }) =>
                  ['create', 'edit'].includes(intent) && type === 'license'
              )
          ),

        // TODO: implement schemas below
        // S.divider(),
        // S.listItem()
        // 	.title('Colors')
        // 	.child(S.documentTypeList('solidColor').title('Colors'))
        // 	.icon(PaintBucket),
        // S.divider(),

        // S.listItem()
        // 	.title('Header')
        // 	.child(
        // 		S.editor()
        // 			.id('headerSettings')
        // 			.schemaType('headerSettings')
        // 			.documentId('headerSettings')
        // 	)
        // 	.icon(NavigationArrow),
        // S.listItem()
        // 	.title('Footer')
        // 	.child(
        // 		S.editor()
        // 			.id('footerSettings')
        // 			.schemaType('footerSettings')
        // 			.documentId('footerSettings')
        // 	)
        // 	.icon(AnchorSimple),
        // S.divider(),

        // S.listItem()
        // 	.title('Promo Bar')
        // 	.child(
        // 		S.editor()
        // 			.id('promoSettings')
        // 			.schemaType('promoSettings')
        // 			.documentId('promoSettings')
        // 	)
        // 	.icon(FlagBanner),
        // S.divider(),
        // S.listItem()
        // 	.title('Default SEO / Share')
        // 	.child(
        // 		S.editor().id('siteSeo').schemaType('siteSeo').documentId('siteSeo')
        // 	)
        // 	.icon(GlobeSimple),
        // S.listItem()
        // 	.title('Redirects')
        // 	.child(S.documentTypeList('redirect').title('Redirects'))
        // 	.icon(Shuffle),
      ])
  )
  .icon(Gear);
