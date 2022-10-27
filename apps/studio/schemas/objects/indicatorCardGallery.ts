import { SquaresFour } from 'phosphor-react';

export default {
  name: 'indicatorCardGallery',
  title: 'Indicator Card Gallery',
  type: 'object',
  icon: SquaresFour,
  fields: [
    { title: 'Indicators', name: 'indicators', type: 'array', of: [{ type: 'indicatorCard'}], validation: Rule => Rule.required() },
  ],
  preview: {
    prepare() {
      return {
        title:  'Indicator Card Gallery',
      };
    },
  },
};
