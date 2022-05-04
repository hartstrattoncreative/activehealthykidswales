/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'accordionSection',
  title: 'Accordion Section',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: (Rule: any) => Rule.required(),
      description: 'The main title for the accordion',
    },
    {
      type: 'localePortableText',
      name: 'content',
      title: 'Content',
    },
  ],
};
