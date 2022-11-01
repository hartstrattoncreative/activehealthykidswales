import { Buildings } from 'phosphor-react';

export default {
  name: 'organisation',
  title: 'Organisation',
  type: 'document',
  icon:  Buildings,
  fields: [
    { type: 'asset', name: 'logo', title: 'Organisation Logotype', validation: Rule => Rule.required() },
    { type: 'url', name: 'href', title: 'Organisation Website', validation: Rule => Rule.required().uri({
      scheme: ['https']
    }) },
  ],
  preview: {
    select: {
      title: 'href',
      media: 'logo',
    },
    prepare({
      title,
      media,
    }: {
      title: string;
      media: any;
    }) {
      return {
        title,
        subtitle: 'Organisation',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        media,
      };
    },
  },
};
