import { Link } from 'phosphor-react';
import actionFields from '../partials/action'
import {localeStringFields, localeStringFieldsets} from './localeString';

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fieldsets: localeStringFieldsets,
  icon: Link,
  fields: [
    ...localeStringFields,
    ...actionFields
  ],
};
