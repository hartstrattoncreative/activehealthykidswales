/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export default {
  name: 'menu',
  type: 'document',
  title: 'Main menu',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [
    // 'create',
    //  "delete",
    'update',
    'publish',
  ],
  fields: [
    {
      title: 'Main menu',
      name: 'mainMenu',
      description: 'Define the structure and content for the top menu',
      validation: (Rule: any) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navDropdown' }],
    },
  ],
};
