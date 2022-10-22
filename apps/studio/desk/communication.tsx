import S from '@sanity/desk-tool/structure-builder';
import {
  Broadcast,
  Megaphone,
  Notification,
  Cookie,
  CircleWavyWarning,
} from 'phosphor-react';
import { standardViews } from './previews/standard';

export const communicationsMenu = S.listItem()
  .id('communication')
  .title('Communication')
  .icon(Broadcast)
  .child(
    S.list()
      .title('Communication')
      .items([
        S.listItem()
          .id('notification')
          .title('Notifications')
          .schemaType('notification')
          .child(
            S.list()
              .title('Notifications')
              .items([
                S.listItem()
                  .title('Cookie')
                  .child(
                    S.editor()
                      .id('cookieNotification')
                      .schemaType('notification')
                      .documentId('cookieNotification')
                  )
                  .icon(Cookie),
                S.listItem()
                  .title('Other Notifications')
                  .schemaType('notification')
                  .icon(Megaphone)
                  .child(
                    S.documentTypeList('notification')
                      .title('Other Notifications')
                      .filter(
                        `_type == "notification" && !(_id in [
                 ${['cookieNotification'].map((n) => `"${n}", "drafts.${n}"`)}
                ])`
                      )
                      .child((documentId) =>
                        S.document()
                          .documentId(documentId)
                          .schemaType('notification')
                          .views(standardViews)
                      )
                      .canHandleIntent(
                        (intent, { type }) =>
                          ['create', 'edit'].includes(intent) &&
                          type === 'notification'
                      )
                  ),
              ])
          )
          .icon(Megaphone),
        S.listItem()
          .id('toast')
          .title('Toast Messages')
          .child(
            S.documentTypeList('toast')
              .title('Toast Messages')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('toast')
                  .views(standardViews)
              )
          )
          .icon(Notification),
        S.listItem()
          .id('error')
          .title('Error Messages')
          .child(
            S.list()
              .title('Error Messages')
              .items([
                S.listItem()
                  .title('Default Error Message')
                  .child(
                    S.document()
                      .id('defaultErrorMessage')
                      .schemaType('error')
                      .documentId('defaultErrorMessage')
                  )
                  .icon(CircleWavyWarning),
                S.listItem()
                  .title('Other Error Messages')
                  .schemaType('error')
                  .icon(CircleWavyWarning)
                  .child(
                    S.documentTypeList('error')
                      .title('Other Error Messages')
                      .filter(
                        `_type == "error" && !(_id in [
                 ${['defaultErrorMessage'].map((n) => `"${n}", "drafts.${n}"`)}
                ])`
                      )
                      .child((documentId) =>
                        S.document()
                          .documentId(documentId)
                          .schemaType('error')
                          .views(standardViews)
                      )
                      .canHandleIntent(
                        (intent, { type }) =>
                          ['create', 'edit'].includes(intent) &&
                          type === 'error'
                      )
                  ),
              ])
          )
          .icon(CircleWavyWarning),
      ])
  );
