import { SanityBase } from './base';

export type Page = {
  slug: string;
  modules: any[]; // TODO: type modules
  metaTitle: string;
  metaDescription?: string;
  disallowRobots?: boolean;
};

export type SiteSettings = SanityBase & {
  title: string;
  lang: string[];
  logo: any; // TODO: type asset
  cookieConsent: any; // TODO: type notification
  metaTitle: string;
  metaDescription: string;
};

export type Menu = SanityBase & {
  links: [];
};
