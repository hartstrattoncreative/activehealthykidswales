import { SanityBase } from './base';

export type Page = {
  slug: string;
  content: any[]; // TODO: update any
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
