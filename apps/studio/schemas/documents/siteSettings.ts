import { Gear } from 'phosphor-react';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Configuration',
  icon: Gear,
  groups: [
    { title: 'Settings', name: 'settings', default: true },
    { title: 'SEO Configuration', name: 'seo' },
    { title: 'Cookie Consent', name: 'consent' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      group: 'settings',
    },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
      group: 'settings',
    },
    {
      name: 'cookieConsent',
      title: 'Cookie Consent Notification',
      type: 'notification',
      group: 'consent'
    },
    {
      name: 'metaTitle',
      title: 'Site Meta Title',
      type: 'localeString',
      validation: Rule => Rule.required(),
      group: 'seo',
      description: 'Used as meta title for page'
    },
    {
      name: 'metaDescription',
      title: 'Site Description',
      type: 'localeString',
      group: 'seo',
      description: 'Used as meta description for page',
      
    },
  ],
};
