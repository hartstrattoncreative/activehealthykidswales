import { SanityBase } from './base';

export type Page = {
  slug: string;
  modules: any[]; // TODO: update any
  metaTitle: string;
  metaDescription?: string;
  disallowRobots?: boolean;
};

export type Menu = SanityBase & {
  links: [];
};
