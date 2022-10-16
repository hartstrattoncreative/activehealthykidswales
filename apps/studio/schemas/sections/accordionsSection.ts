/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CaretCircleDown } from 'phosphor-react';

export default {
  title: 'Accordion Section',
  name: 'accordionsSection',
  type: 'object',
  icon: CaretCircleDown,
  fields: [
    {
      title: 'Accordions',
      name: 'items',
      type: 'array',
      of: [{ type: 'accordion' }],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }: { items: any[] }) {
      return {
        title: 'Accordion List',
        subtitle: `${items.length} item(s)`,
      };
    },
  },
};
