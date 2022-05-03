export default {
  name: 'navPage',
  title: 'Nav Page',
  type: 'object',
  fields: [
    { name: 'name', type: 'string' },
    {
      name: 'route',
      title: 'Route',
      type: 'reference',
      to: [
        {
          type: 'route',
        },
      ],
    },
  ],
};
