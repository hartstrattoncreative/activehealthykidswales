export default {
  name: 'member',
  title: 'Member',
  type: 'object',
  fields: [
    { type: 'image', name: 'profilePicture', title: 'Profile Picture' },
    { type: 'string', name: 'title', title: 'Professional Title' },
    { type: 'string', name: 'firstName', title: 'First Name' },
    { type: 'string', name: 'lastName', title: 'Last Name' },
    { type: 'string', name: 'org', title: 'Organisation' },
    {
      type: 'link',
      name: 'profileLink',
      title: 'Profile Link',
      description:
        'Perhaps link to the staff page of the university or organisation',
    },
    { type: 'localeSimplePortableText', name: 'bio', title: 'Biography' },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      subtitle: 'org',
      media: 'profilePicture',
    },
    prepare({
      firstName,
      lastName,
      media,
    }: {
      firstName: string;
      lastName: string;
      media: any;
    }) {
      return {
        title: `${firstName ?? ''} ${lastName ?? ''}`,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        media,
      };
    },
  },
};
