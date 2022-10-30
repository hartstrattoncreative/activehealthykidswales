import { SquareHalfBottom } from "phosphor-react";

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: SquareHalfBottom,
  fields: [
    { title: 'Footer Text Section', name: 'footerText', type: 'localePortableText' },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      name: 'indicators', type: 'object', title:'Indicators', fields: [
        { name: 'header', title: 'Header', type: 'localeString' },
        {
          name: 'indicatorLinks',
          title: 'Links',
          type: 'array',
          of: [{type: 'link'}]
        },
      ]
    },
    {
      type: 'string',
      name: 'copyright',
      title: 'Copyright',
      initialValue: 'Copyright',
      description: 'Note: the symbol (©) and date are automatically suppended',
      validation: (Rule) => Rule.required(),
    },
  ]
}