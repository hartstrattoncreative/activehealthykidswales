export default [
  {
    name: 'actionType',
    title: 'Action type',
    type: 'string',
    initialValue: 'internalPage',
    options: {
      list: [
        { title: 'Internal Page', value: 'internalPage' },
        { title: 'External URL', value: 'url' },
        {title: 'File', value: 'file'}
      ],
      layout: 'radio',
      direction: 'horizontal',
    },
  },
  {
    title: 'Internal Page',
    name: 'internalPage',
    type: 'reference',
    to: [{ type: 'string' }],
    hidden: ({ parent }) => {
      return parent.actionType !== 'internalPage';
    },
  },
  {
    title: 'URL',
    name: 'url',
    type: 'url',
    description: 'Enter an external URL',
    validation: (Rule) =>
      Rule.uri({
        scheme: ['https', 'mailto', 'tel'],
      }),
    hidden: ({ parent }) => {
      return parent.actionType !== 'url';
    },
  },
  {
    title: 'Open in separate tab',
    name: 'openInTab',
    type: 'boolean',
    description: 'Set to true if you want the link to open in separate tab',
    initialValue: false,
    hidden: ({ parent }) => {
      return parent.actionType === 'file';
    },
  },
  {
    name: 'file',
    title: 'File',
    type: 'file',
    description: 'Upload or select a file to link to',
    accept: 'pdf',
    storeOriginalFileName: true,
    hidden: ({ parent }) => {
      return parent.actionType !== 'file';
    },
  },
];
