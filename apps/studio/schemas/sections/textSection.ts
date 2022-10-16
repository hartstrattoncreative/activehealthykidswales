export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'localeString',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'localePortableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }: { heading: string }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      };
    },
  },
};
