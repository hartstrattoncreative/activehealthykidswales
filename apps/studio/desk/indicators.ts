import S from '@sanity/desk-tool/structure-builder';
import { standardViews } from './previews/standard';
import { BookmarkSimple, Exam } from 'phosphor-react';

export const indicatorsMenu = S.listItem()
  .title('Indicators')
  .icon(Exam)
  .child(
    S.list()
      .title('Indicators and Grades')
      .items([
        S.listItem()
        .title('Indicators')
        .icon(Exam)
        .child(
          S.documentTypeList('indicator')
          .title('Indicators')
          .filter(`_type == "indicator"`)
          .child((documentId) =>
            S.document()
              .documentId(documentId)
              .schemaType('indicator')
              .views(standardViews)
          )
        ),
        S.divider(),
        S.listItem()
          .id('indicatorPages')
          .title('Grades')
          .schemaType('grade')
          .icon(BookmarkSimple)
          .child(
            S.documentTypeList('grade')
              .title('Grades')
              .filter(`_type == "grade"`)
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('grade')
                  .views(standardViews)
              )
          ),
        
      ])

  );
