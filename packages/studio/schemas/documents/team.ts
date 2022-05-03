export default {
  name: 'team',
  type: 'document',
  title: 'Team members',
  fields: [
    {
      name: 'members',
      type: 'array',
      title: 'Members',
      of: [{ type: 'string', name: 'name', title: 'Name' }],
    },
  ],
};
