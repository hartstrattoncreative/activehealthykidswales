import { Exam } from 'phosphor-react';
import actionFields from '../partials/action';

export default {
  name: 'indicatorCard',
  title: 'Indicator Card',
  type: 'object',
  icon: Exam,
  fieldsets: [{ title: 'Link Config', name: 'linkConfig', options: { collapsible: true },}],
  fields: [
    { title: 'Indicator', name: 'indicator', type: 'reference', to: [{type: 'indicator'}], validation: Rule => Rule.required() },
    {
      name: 'asLink',
      title: 'Make linkable',
      type: 'boolean',
      initialValue: false,
      description: 'If true, the indicator can be used to link to an internal or external page',
      
    },
    ...actionFields.map(field => ({...field, fieldset: 'linkConfig', readOnly: ({parent}) => !parent.asLink}))
  ],
  preview: {
    select: {
      title: 'indicator.title.en',
    },
    prepare(props) {
      return {
        title: props.title ?? 'Indicator Card',
        subtitle: props.title ? 'Indicator Card' : undefined
      };
    },
  },
};
