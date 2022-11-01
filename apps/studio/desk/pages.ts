import S from '@sanity/desk-tool/structure-builder';
import {
  House,
  Browser,
  Files,
  PersonSimpleRun,
  Exam
} from 'phosphor-react';
import { standardViews } from './previews/standard';
import { corePages } from '../resolveDocumentActions';

export const pagesMenu = S.listItem()
  .title('Pages')
  .id('pages')
  .icon(Browser)
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .id('home')
          .title('Home')
          .child(
            S.document()
              .schemaType('page')
              .documentId('home')
              .views(standardViews)
          )
          .icon(House),
          S.listItem()
          .id('indicatorPages')
          .title('Key Indicactor Pages')
          .schemaType('page')
          .icon(Exam)
          .child(
            S.list()
              .title('Key Indicator Pages')
              .items([
                S.listItem()
                  .id('overallPhysicalActivity')
                  .title('Overall Physical Activity')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('overallPhysicalActivity')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('communityAndBuiltEnvironment')
                  .title('Community and the Built Environment')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('communityAndBuiltEnvironment')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('school')
                  .title('School')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('school')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('activeTransportation')
                  .title('Active Transportation')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('activeTransportation')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('sedentaryBehaviours')
                  .title('Sedentary Behaviours')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('sedentaryBehaviours')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('outdoorAndActivePlay')
                  .title('Outdoor and Active Play')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('outdoorAndActivePlay')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('policiesAndInvestments')
                  .title('Government Policies, Strategies and Investments')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('policiesAndInvestments')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('familyAndPeer')
                  .title('Family and Peer Influences')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('familyAndPeer')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('organisedSports')
                  .title('Organised Sports')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('organisedSports')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('physicalLiteracy')
                  .title('Physical Literacy')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('physicalLiteracy')
                      .views(standardViews)
                  ),
                S.listItem()
                  .id('physicalFitness')
                  .title('Physical Fitness')
                  .icon(Exam)
                  .child(
                    S.document()
                      .schemaType('page')
                      .documentId('physicalFitness')
                      .views(standardViews)
                  )
              ])
          ),
        S.listItem()
          .id('reports')
          .title('Reports')
          .child(
            S.document()
              .schemaType('page')
              .documentId('reports')
              .views(standardViews)
          )
          .icon(Files), 
          S.listItem()
          .id('about')
          .title('About')
          .child(
            S.document()
              .schemaType('page')
              .documentId('about')
              .views(standardViews)
          )
          .icon(PersonSimpleRun),       
        S.listItem()
          .title('Other Pages')
          .schemaType('page')
          .icon(Browser)
          .child(
            S.documentTypeList('page')
              .title('Other Pages')
              .filter(
                `_type == "page" && !(_id in [
                 ${corePages.map((p) => `"${p}", "drafts.${p}"`)}
                ])`
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('page')
                  .views(standardViews)
              )
              .canHandleIntent(
                (intent, { type }) =>
                  ['create', 'edit'].includes(intent) && type === 'page'
              )
          ),
      ])
  );
