import { ArrowBendRightDown } from 'phosphor-react';

export default {
  name: 'navDropdown',
  title: 'Navigation Dropdown',
  type: 'object',
  icon: ArrowBendRightDown,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display',
    },
    {
      title: 'Dropdown Items',
      name: 'dropdownItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }],
    },
  ],
};
