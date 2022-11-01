import { Megaphone } from 'phosphor-react';

export default {
  title: 'Notification',
  name: 'notification',
  type: 'document',
  icon: Megaphone,
  fields: [
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
