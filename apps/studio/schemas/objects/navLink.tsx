/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ArrowSquareOut } from 'phosphor-react';

export default {
  title: 'Link',
  name: 'navLink',
  type: 'object',
  icon: ArrowSquareOut,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }: { title: string; url: string }) {
      return {
        title: title ?? url,
        subtitle: title && url,
      };
    },
  },
};