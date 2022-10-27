import { SanityBase, LocaleString } from './base';

export type Page = {
  slug: string;
  content: any[]; // TODO: update any
  metaTitle: string;
  metaDescription?: string;
  disallowRobots?: boolean;
};

export type SiteSettings = SanityBase & {
  title: string;
  logo: any; // TODO: type asset
  cookieConsent: any; // TODO: type notification
  metaTitle: LocaleString;
  metaDescription: LocaleString;
};

export type Menu = SanityBase & {
  links: [];
};
