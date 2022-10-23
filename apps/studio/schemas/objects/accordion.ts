import { CaretCircleDown } from 'phosphor-react';
import {localeStringFields, localeStringFieldsets} from './localeString';

export default {
  name: 'accordion',
  title: 'Accordion',
  icon: CaretCircleDown,
  type: 'object',
  fieldsets: localeStringFieldsets,
  fields: [
    ...localeStringFields,
    {
      name: 'body',
      title: 'Text',
      type: 'localePortableText',
      validation: Rule => Rule.required()
    },
  ], 
  preview: {
    select: {
      // TODO: fix
      title: 'en.title',
    },
    prepare(props) {
      return {
        title: props.title ?? 'Accordion',
        subtitle: props.title ? 'Accordion' : undefined
      };
    },
  },
};
