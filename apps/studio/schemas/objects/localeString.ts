/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { supportedLanguages } from '../../supportedLanguages';

export default {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(({ title, id, isDefault = false }) => ({
    title,
    name: id,
    type: 'string',
    fieldset: isDefault ? null : 'translations',
  })),
};
