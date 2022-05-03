export default {
  supportedLanguages: [
    { id: 'cy', title: 'Welsh' },
    { id: 'en', title: 'English' },
  ],
  defaultLanguages: ['en'],
  documentTypes: ['menu'],
  // filterField: (
  //   enclosingType: { name: string },
  //   field: { name: string },
  //   selectedLanguageIds: string[]
  // ) =>
  //   !enclosingType.name.startsWith('locale') ||
  //   selectedLanguageIds.includes(field.name),
};
