export default {
  name: 'navDropdown',
  title: 'Navigation Dropdown',
  type: 'object',
  fields: [
    { name: 'name', type: 'string' },
    {
      name: 'route',
      title: 'Route',
      type: 'array',
      of: [
        {
          type: 'navPage',
        },
      ],
    },
  ],
};
