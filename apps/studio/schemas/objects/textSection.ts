import {TextAlignLeft} from 'phosphor-react'

export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  icon: TextAlignLeft,
  fields: [
    {
      name: 'header',
      type: 'localeString',
      title: 'Header',
      description: 'Optional header for the text',
    },
    {
      name: 'body',
      title: 'Text',
      type: 'localePortableText',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      header: 'header',
    },
    prepare(props) {
      return {
        title: props.header['en'] ?? 'Text Section',
        subtitle: !props.header['en'] ? 'Text Section' : undefined,
      };
    },
  },
};
