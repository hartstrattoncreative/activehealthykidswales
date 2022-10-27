import { User } from 'phosphor-react';

export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  icon:  User,
  fields: [
    { type: 'string', name: 'title', title: 'Professional Title', validation: Rule => Rule.required() },
    { type: 'localeString', name: 'org', title: 'Organisation', validation: Rule => Rule.required() },
    { type: 'asset', name: 'profilePicture', title: 'Profile Picture', description: 'Optional picture' },
  ],
  preview: {
    select: {
      title: 'title',
      org: 'org.en',
      media: 'profilePicture',
    },
    prepare({
      title,
      org,
      media,
    }: {
      title: string;
      org: string;
      media: any;
    }) {
      return {
        title: title ?? 'Member',
        subtitle: org ?? '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        media: media ?? User,
      };
    },
  },
};
