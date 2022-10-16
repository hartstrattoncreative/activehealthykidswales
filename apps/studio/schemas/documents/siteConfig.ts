/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import bcp47 from 'bcp47';

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [
    // 'create',
    //  "delete",
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      name: 'homepage',
      type: 'reference',
      description: 'Choose page to be the homepage',
      to: { type: 'page' },
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
    },
  ],
};