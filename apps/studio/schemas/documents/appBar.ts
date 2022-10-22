import { Browser, Wallet } from 'phosphor-react';

export default {
  name: 'appBar',
  title: 'App Bar',
  type: 'object',
  fields: [
    {
      name: 'appbarNote',
      type: 'note',
      options: {
        icon: Browser,
        headline: 'The AHKW AppBar',
        message: `The top App is used for branding and navigation. You can configure links that will appear in the menu.`,
      },
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}]
    }  
  ],
  preview: {
    select: {
      title: 'App Bar',
    },
  },
};
