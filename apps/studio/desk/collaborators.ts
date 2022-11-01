import S from '@sanity/desk-tool/structure-builder';
import {
  User,
  UsersFour,
  Buildings
} from 'phosphor-react';
import { standardViews } from './previews/standard';

export const collaboratorsMenu = S.listItem()
  .title('Collaborators')
  .id('collaborators')
  .icon(UsersFour)
  .child(
    S.list()
      .title('Collaborators')
      .items([
        S.listItem()
        .title('Members')
        .schemaType('member')
        .icon(User)
        .child(
          S.documentTypeList('member')
            .title('Project Members')
            .filter(
              `_type == "member"`
            )
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('member')
                .views(standardViews)
            )
        ),
        S.listItem()
        .title('Organisations')
        .schemaType('organisation')
        .icon(Buildings)
        .child(
          S.documentTypeList('organisation')
            .title('Supporting Organisations')
            .filter(
              `_type == "organisation"`
            )
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('organisation')
                .views(standardViews)
            )
        ),
      ])
  );
