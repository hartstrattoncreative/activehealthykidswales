export default {
  supportedLanguages: [
    { id: 'cy', title: 'Welsh' },
    { id: 'en', title: 'English' },
  ],
  // Select Norwegian (Bokmål) by default
  defaultLanguages: ['en'],
  // Only show language filter for document type `page` (schemaType.name)
  documentTypes: ['page'],
  filterField: (
    enclosingType: { name: string },
    field: { name: string },
    selectedLanguageIds: string[]
  ) =>
    !enclosingType.name.startsWith('locale') ||
    selectedLanguageIds.includes(field.name),
};
