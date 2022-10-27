export type LocaleString = { _type: string; en: string; cy: string };

export type Slug = { _type: string; current: string };

export type Page = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'page';
  _updatedAt: string;
  disallowRobots: boolean;
  metaDescription: LocaleString;
  metaTitle: LocaleString;
  // TODO: add types
  modules: any[];
  slug: Slug;
};

export type SlugPages = { slug: string }[];
