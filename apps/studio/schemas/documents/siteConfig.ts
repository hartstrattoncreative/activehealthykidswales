import { Gear } from 'phosphor-react';
import bcp47 from 'bcp47';

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Configuration',
  icon: Gear,
  groups: [
    { title: 'Settings', name: 'settings', default: true },
    { title: 'SEO Configuration', name: 'seo' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      group: 'settings',
    },
    {
      title: 'Site languages',
      description:
        'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule: any) =>
            Rule.custom((lang: string) =>
              bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
            ),
        },
      ],
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
      type: 'notification'
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
