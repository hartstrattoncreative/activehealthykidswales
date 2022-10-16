export default {
  name: 'team',
  type: 'document',
  title: 'Group members',
  __experimental_actions: [
    'create',
    //  "delete",
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'members',
      type: 'array',
      title: 'Members',
      of: [{ type: 'member', name: 'name', title: 'Name' }],
    },
    // {
    //   name: 'otherContributors',
    //   type: 'array',
    //   title: 'Other Contributors',
    //   of: [{ type: 'member', name: 'name', title: 'Name' }],
    // },
  ],
};
