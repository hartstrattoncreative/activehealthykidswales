import {TextAlignLeft} from 'phosphor-react'

export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  icon: TextAlignLeft,
  fieldsets: [{
    title: 'Header Styles Configuration',
    name: 'headerStyles',
    options: { columns: 2 }
  }],
  groups: [
    { title: 'Header', name: 'header' },
    { title: 'Body', name: 'body' },
  ],
  fields: [
    {
      name: 'header',
      type: 'localeString',
      title: 'Header Text',
      description: 'Optional header for the text',
      group: 'header'
    },
    {
      title: 'Header Variant',
      name: 'headerVariant',
      type: 'string',
      group: 'header',
      initialValue: 'h5',
      fieldset: 'headerStyles',
      options: {
        list: [
          {value: 'h1', title: 'H1 (use only 1 per page)'},
          {value: 'h2', title: 'H2'},
          {value: 'h3', title: 'H3'},
          {value: 'h4', title: 'H4'},
          {value: 'h5', title: 'H5'},
          {value: 'h6', title: 'H6'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Text',
      type: 'localePortableText',
      group: 'body',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      header: 'header',
    },
    prepare(props) {
      return {
        title: props?.header?.['en'] ?? 'Text Section',
        subtitle: !props?.header?.['en'] ? 'Text Section' : undefined,
      };
    },
  },
};
