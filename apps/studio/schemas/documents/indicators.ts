export default {
  name: 'indicators',
  id: 'indicators',
  type: 'document',
  title: 'Indicators',
  __experimental_actions: [
    'create',
    //  "delete",
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'indicators',
      type: 'array',
      title: 'Indicators',
      of: [{ type: 'indicator', name: 'name', title: 'Name' }],
    },
    // {
    //   name: 'otherContributors',
    //   type: 'array',
    //   title: 'Other Contributors',
    //   of: [{ type: 'member', name: 'name', title: 'Name' }],
    // },
  ],
};
