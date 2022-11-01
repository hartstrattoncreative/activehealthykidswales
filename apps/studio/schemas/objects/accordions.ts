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
      accordions: 'accordions',
    },
    prepare(props) {      
      return {
        title: 'Accordions',
        subtitle: `${props.accordions.length ?? undefined} accordions configured: ${props.accordions.map(acc => acc.title.en).join(', ')}`
      };
    },
  },
};
