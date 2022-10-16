/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CaretCircleDown } from 'phosphor-react';

export default {
  name: 'accordion',
  title: 'Accordion',
  icon: CaretCircleDown,
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'The main title for the accordion',
    },
    {
      type: 'portableText',
      name: 'content',
      title: 'Content',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
