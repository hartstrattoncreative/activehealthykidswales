import { SanityBase, Asset } from './base';
import { LocaleString, Action } from './objects';

export type Page = {
  slug: string;
  content: any[]; // TODO: update any
  metaTitle: string;
  metaDescription?: string;
  disallowRobots?: boolean;
};

export type SiteSettings = SanityBase & {
  title: string;
  logo: Asset;
  cookieConsent: any; // TODO: type notification
  metaTitle: LocaleString;
  metaDescription: LocaleString;
};

export type Menu = SanityBase & {
  links: [];
};

export type Grade = {
  gradeKey: string;
  keyRefinement?: string;
  label?: LocaleString;
};

export type Indicator = SanityBase & {
  _key: string;
  title: LocaleString;
  year: string;
  grade: Grade['gradeKey'];
  gradeRefinement: Grade['keyRefinement'];
  gradeLabel: Grade['label'];
  media?: Asset;
};

export type IndicatorCard = SanityBase &
  Indicator &
  Action & {
    asLink?: boolean;
  };

export type IndicatorCardGallery = SanityBase & {
  _key: string;
  indicators: IndicatorCard[];
  header: LocaleString;
};
