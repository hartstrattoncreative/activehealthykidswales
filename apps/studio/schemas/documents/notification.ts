import { Megaphone } from 'phosphor-react';

export default {
  title: 'Notification',
  name: 'notification',
  type: 'document',
  icon: Megaphone,
  fields: [
    {
      name: 'notificationNote',
      type: 'note',
      options: {
        headline: 'Note',
        message:
          'Notifications will be rendered site-wide meaning they are not optionally included on a per-page-basis. If several notifications are published at a given time, they will be stacked vertically when presented to the user',
        tone: 'primary',
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      description:
        'Currently only used in Sanity to give your notification a title',
    },
    {
      title: 'Message',
      name: 'message',
      type: 'localePortableText',
      description: 'Your notification message',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button text',
      type: 'localeString',
      description: 'Clicking the button will close the notification',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare(props) {
      return {
        title: props.title ?? 'Notification',
      };
    },
  },
};
