/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { supportedLanguages } from '../../supportedLanguages';

export default {
  title: 'Localized Portable Text',
  name: 'localeSimplePortableText',
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
    type: 'simplePortableText',
    fieldset: isDefault ? null : 'translations',
  })),
};
