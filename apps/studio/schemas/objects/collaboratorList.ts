import { UsersFour } from 'phosphor-react';
import { localeStringFieldsets} from './localeString';

export default {
  name: 'collaboratorList',
  title: 'Collaborator List',
  icon: UsersFour,
  fieldsets: localeStringFieldsets,
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'List Type',
      type: 'string',
      options: {
        list: [{title: 'Members', value: 'member'}, {title: 'Organisations', value: 'organisation'}],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'List Title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      name: 'memberList',
      title: 'List of Members',
      type: 'array',
      of: [{
        name: 'members',
        type: 'reference',
        description: 'Add members to the list',
        to: { type: 'member' },
      }],
      hidden: ({ parent }) => {
        return parent.type !== 'member';
      },
    },
    {
      name: 'orgList',
      title: 'List of Organisations',
      type: 'array',
      of: [{
        name: 'organisations',
        type: 'reference',
        description: 'Add organisations to the list',
        to: { type: 'organisation' },
      }],
      hidden: ({ parent }) => {
        return parent.type !== 'organisation';
      },
    },
  ], 
  preview: {
    select: {
      type: 'type',
      title: 'title.en',
      members: 'memberList',
      organisations: 'orgList',
    },
    prepare(props) {
      return {
        title: props.title ?? 'Collaborator list',
        subtitle: props.members || props.organisations ? `Collaborators: ${props[props.type === 'member' ? 'members' : 'organisations'].length}` : props.title ? 'Collaborator List' : ''
      };
    },
  },
};
