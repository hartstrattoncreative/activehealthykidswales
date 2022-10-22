import {Crown} from 'phosphor-react'
import actionTypeFields from '../partials/action'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: Crown,
  fields: [
    {
      name: 'media',
      title: 'Background Media',
      type: 'asset',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Text',
      type: 'localePortableText',
      description: 'Optional text content for the hero'
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      description: 'Optional button to include in the hero'
    },
    ...actionTypeFields
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare(props) {
      return {
        title: 'Hero'
      };
    },
  },
};
