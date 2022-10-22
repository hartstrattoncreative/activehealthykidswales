import actionFields from '../partials/action'
import {localeStringFields, localeStringFieldsets} from './localeString';

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fieldsets: localeStringFieldsets,
  fields: [
    ...localeStringFields,
    ...actionFields
  ],
};
