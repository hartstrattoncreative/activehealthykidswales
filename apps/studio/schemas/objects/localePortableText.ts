import { supportedLanguages } from '../../supportedLanguages';

export default {
  title: 'Localized Portable Text',
  name: 'localePortableText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: false },
    },
  ],
  fields: supportedLanguages.map(({ title, id, isDefault = false }) => ({
    title,
    name: id,
    type: 'portableText',
    fieldset: isDefault ? null : 'translations',
  })),
};
