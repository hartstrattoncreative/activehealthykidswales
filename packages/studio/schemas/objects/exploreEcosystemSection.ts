/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'exploreEcosystemSection',
  title: 'Explore Ecosystem Section',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'The main headline for the explore section',
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
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'headline',
    },
    prepare(selection: { subtitle: string }) {
      return {
        ...selection,
        title: 'Explore Ecosystem Section',
      };
    },
  },
};
