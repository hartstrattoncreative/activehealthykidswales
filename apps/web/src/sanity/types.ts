export type SanityBase = { _type: string };

export type LocaleString = SanityBase & { en: string; cy: string };

export type Slug = SanityBase & { current: string };

export type Page = SanityBase & {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  disallowRobots: boolean;
  metaDescription: LocaleString;
  metaTitle: LocaleString;
  // TODO: add types
  modules: any[];
  slug: Slug;
};

export type SlugPages = { slug: string }[];

export type ActionType = 'internalPage' | 'file' | 'url';
