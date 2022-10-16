/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'indicator',
  title: 'Indicator',
  type: 'object',
  fields: [
    { type: 'string', name: 'name', title: 'Name' },
    {
      type: 'string',
      description:
        'Choose the score for the current key indicator from the list of options available',
      options: {
        list: [
          'A+',
          'A',
          'A-',
          'B+',
          'B',
          'B-',
          'C+',
          'C',
          'C-',
          'D+',
          'D',
          'D-',
          'E+',
          'E',
          'E-',
          'F+',
          'F',
          'F-',
          'INC',
        ],
      },
      validation: (Rule: any) => Rule.required(),
      name: 'score',
      title: 'Score',
    },
    {
      type: 'localePortableText',
      name: 'indicatorContent',
      title: 'Indicator Content',
    },
  ],
  preview: {
    select: {
      name: 'name',
      score: 'score',
    },
    prepare({ name, score, ...rest }: { name: string; score: string }) {
      return {
        ...rest,
        title: name,
        subtitle: score,
      };
    },
  },
};
