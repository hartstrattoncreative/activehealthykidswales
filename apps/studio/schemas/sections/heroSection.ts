/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'The main headline for the hero section',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'The label to accompany the headline',
    },
    {
      title: 'Tagline',
      name: 'tagline',
      validation: (Rule: any) => Rule.required(),
      type: 'simplePortableText',
      description: 'The tagline to accompany the headline',
    },
    {
      name: 'media',
      type: 'array',
      title: 'Hero media',
      validation: (Rule: any) =>
        Rule.max(1).error('You can select only one hero media item'),
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'headline',
    },
    prepare(selection: { subtitle: string }) {
      return {
        ...selection,
        title: 'Hero Section',
      };
    },
  },
};
