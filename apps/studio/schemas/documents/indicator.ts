import { Exam } from 'phosphor-react';

export default {
  title: 'Indicator',
  name: 'indicator',
  type: 'document',
  icon: Exam,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'Name of the indicator',
      validation: Rule => Rule.required(),
    },
    {
      name: 'grades',
      title: 'Grades',
      description: 'The grade of the indicator for a specific year',
      type: 'array',
      of: [
        {
          name: 'yearlyGrade',
          title: 'Yearly Grade',
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
              validation: Rule => Rule.custom((year) => {
                if (typeof year === 'undefined') {
                  return true;
                }
            
                const regex = /(?:(?:19|20)[0-9]{2})/g;
                if (!regex.test(year)) {
                  return 'Invalid year. Enter a year between 1900 - 2100';
                }
            
                return true;
              }).error()
            },
            {
              name: 'gradeType',
              title: 'Grade Type',
              type: 'reference',
              to: [{ type: 'grade' }],
              validation: Rule => Rule.required(),
            }
          ],
          
        }
      ],
      validation: Rule => Rule.min(1),
    },
    {
      name: 'media',
      title: 'Indicator Media',
      type: 'asset',
    },
    
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({
      title = 'Untitled'
    }: {
      title: string;
      slug: { current?: string };
    }) {
      return {
        title,
        subtitle: 'Indicator',
      };
    },
  },
};
