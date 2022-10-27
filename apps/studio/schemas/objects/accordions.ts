import { Rows } from 'phosphor-react';

export default {
  name: 'accordions',
  title: 'Accordions',
  icon: Rows,
  type: 'object',
  fields: [
    {
      name: 'accordions',
      title: 'Accordions',
      type: 'array',
      of: [{ type: 'accordion' }],
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
        title: props.title ?? 'Accordions',
        subtitle: props.title ? 'Accordions' : undefined
      };
    },
  },
};
