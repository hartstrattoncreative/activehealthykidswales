/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { supportedLanguages } from '../../supportedLanguages';
export const localeStringFieldsets = [{
  title: 'Translations',
  name: 'translations',
  options: { collapsible: true },
}]
export const localeStringFields = supportedLanguages.map(({ title, id, isDefault = false }) => ({
  title,
  name: id,
  type: 'string',
  fieldset: isDefault ? null : 'translations',
}))

export default {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: localeStringFieldsets,
  fields: localeStringFields
};
