import {
  Paperclip,
  Globe,
  MagicWand,
  PaintBrush,
  Headphones,
  HandPointing,
} from 'phosphor-react';
import actionFields from '../partials/action'

const textColorField = {
  name: 'color',
  type: 'string',
  options: {
    list: [
      { value: 'text.primary', title: 'text.primary' },
      { value: 'text.secondary', title: 'text.secondary' },
      { value: 'primary', title: 'primary.main' },
      { value: 'secondary', title: 'secondary.main' },
      { value: 'info.main', title: 'info.main' },
      { value: 'warning.main', title: 'important (warning)' },
    ],
  },
};

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Body1', value: 'body1' },
        { title: 'Body2', value: 'body2' },
        { title: 'Subtitle1', value: 'subtitle1' },
        { title: 'Subtitle2', value: 'subtitle2' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Overline', value: 'overline' },
        { title: 'Caption', value: 'caption' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [{
          name: 'color',
          type: 'object',
          title: 'Text Color',
          blockEditor: { icon: PaintBrush },
          fields: [textColorField],
        }, {
          name: 'portableTextLink',
          type: 'object',
          title: 'Action / Link',
          blockEditor: {
            icon: HandPointing,
          },
          fields: [...actionFields, textColorField],
        },],
      },
    },
  ],
};
