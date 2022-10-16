/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'membersSection',
  title: 'Members Section',
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
      type: 'simplePortableText',
      description: 'The tagline to accompany the headline',
    },
    // {
    //   name: 'members',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'team' }] }],
    //   title: 'Members',
    // },
  ],
  preview: {
    select: {
      subtitle: 'headline',
    },
    prepare(selection: { subtitle: string }) {
      return {
        ...selection,
        title: 'Members Section',
      };
    },
  },
};
