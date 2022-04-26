/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'footer',
  type: 'document',
  title: 'Site footer',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [
    'create',
    //  "delete",
    'update',
    'publish',
  ],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: (Rule: any) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Footer end navigation items',
      name: 'footerEndNavigation',
      type: 'array',
      validation: (Rule: any) => [
        Rule.max(3).warning('Are you sure you want more than 3 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    },
  ],
};
