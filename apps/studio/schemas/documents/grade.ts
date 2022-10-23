import {BookmarkSimple} from 'phosphor-react'

export default {
  name: 'grade',
  title: 'Grade',
  type: 'document',
  icon: BookmarkSimple,
  fields: [
    {
      
      name: 'gradeKey',
      title: 'Grade Key',
      type: 'string',
      initialValue: 'a',
      options: {
        list: [
          {
            title: 'A',
            value: 'a',
          },
          {
            title: 'B',
            value: 'b',
          },
          {
            title: 'C',
            value: 'c',
          },
          {
            title: 'D',
            value: 'd',
          },
          {
            title: 'E',
            value: 'e',
          },
          {
            title: 'F',
            value: 'f',
          },
          {
            title: 'Inconclusive',
            value: 'inc',
          },
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Grade Label',
      type: 'localeString',
      hidden: ({parent}) => parent.gradeKey !== 'inc'
    },
    {
      name: 'keyRefinement',
      title: 'Key Refinement',
      type: 'string',
      description: 'Optionally refine the grade by specifying + or - when relevant',
      options: {
        list: [
          {
            title: '+',
            value: 'plus',
          },
          {
            title: '-',
            value: 'minus',
          },
        ],
      },
      hidden: ({parent}) => parent.gradeKey === 'inc'
    },
  ],
  preview: {
    select: {
      gradeKey: 'gradeKey',
      keyRefinement: 'keyRefinement'
    },
    prepare({gradeKey, year, keyRefinement}: any) {
      let title = gradeKey?.toUpperCase() ?? 'Grade'
      if (gradeKey && keyRefinement) {
        title = `${gradeKey.toUpperCase()}${keyRefinement === 'plus' ? '+' : '-'}`
      } 
      return {
        title,
      };
    },
  },
};
