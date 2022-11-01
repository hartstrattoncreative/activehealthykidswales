import { CaretCircleDown } from 'phosphor-react';
import { localeStringFieldsets} from './localeString';

export default {
  name: 'accordion',
  title: 'Accordion',
  icon: CaretCircleDown,
  type: 'object',
  fieldsets: localeStringFieldsets,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
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
      title: 'title.en',
    },
    prepare(props) {
      return {
        title: props.title ?? 'Accordion',
        subtitle: props.title ? 'Accordion' : undefined
      };
    },
  },
};
