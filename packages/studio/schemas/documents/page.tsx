/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import * as sections from '../sections';
import { Browser } from 'phosphor-react';

console.log(Object.keys(sections).map((key) => ({ type: key })));

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: () => <Browser />,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule?.required?.(),
      group: 'settings',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule?.required?.(),
      group: 'settings',
    },
    {
      title: 'Overlay header with transparency?',
      name: 'hasTransparentHeader',
      type: 'boolean',
      description:
        'When activated the header will overlay the first content module with a transparent background and white text until scrolling is engaged.',
      initialValue: false,
      group: 'settings',
    },
    {
      title: 'Page Content',
      name: 'modules',
      type: 'array',
      of: Object.keys(sections).map((key) => ({ type: key })),
      group: 'content',
    },
    // {
    //   title: 'SEO / Share Settings',
    //   name: 'seo',
    //   type: 'seo',
    //   group: 'settings',
    // },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({
      title = 'Untitled',
      slug = {},
    }: {
      title: string;
      slug: { current?: string };
    }) {
      return {
        title,
        subtitle: slug.current ? `/${slug.current}` : '(missing slug)',
      };
    },
  },
};
