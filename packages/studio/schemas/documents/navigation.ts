/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'navigation',
  type: 'document',
  title: 'Site navigation',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [
    'create',
    //  "delete",
    'update',
    'publish',
  ],
  fields: [
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule: any) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
  ],
};
