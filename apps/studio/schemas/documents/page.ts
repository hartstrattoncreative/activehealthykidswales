import { Browser } from 'phosphor-react';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: Browser,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Settings', name: 'settings' },
    { title: 'SEO Configuration', name: 'seo' },
  ],
  fields: [
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: 'Path for the page, e.g about => domain.com/about',
      validation: Rule => Rule.required(),
      group: 'settings',
    },
    {
      title: 'Page Content',
      name: 'modules',
      type: 'array',
      of: [{type: 'textSection'}, {type: 'accordion'}, {type: 'hero'}, {type: 'indicatorCard'}, {type: 'collaboratorList'}],
      group: 'content',
    },
    {
      name: 'metaTitle',
      title: 'Page Title',
      type: 'localeString',
      validation: Rule => Rule.required(),
      group: 'seo',
      description: 'Used as meta title for page'
    },
    {
      name: 'metaDescription',
      title: 'Page Description',
      type: 'localeString',
      group: 'seo',
      description: 'Used as meta description for page'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this page for search engines',
      group: 'seo',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'metaTitle',
      slug: 'slug',
    },
    prepare({
      title,
      slug = {},
    }: {
      title: { en:string };
      slug: { current?: string };
    }) {      
      return {
        title: title.en ?? slug.current ?? 'Page (missing slug)',
        subtitle: !!(title.en && slug.current) ? slug.current : undefined,
      };
    },
  },
};
