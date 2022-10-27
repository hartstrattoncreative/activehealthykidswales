export default {
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}]
    }  
  ],
  preview: {
    select: {
      title: 'Menu',
    },
  },
};
