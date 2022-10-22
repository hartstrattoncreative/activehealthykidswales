import { Image, FrameCorners } from 'phosphor-react';

export default {
  name: 'asset',
  title: 'Asset',
  type: 'image',
  icon: Image,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternate text (for SEO and image fallback)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true, // <-- make this field accessible without having to click on the image
      },
    },
  ],
};
