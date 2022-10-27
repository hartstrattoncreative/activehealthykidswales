import { SanityBase } from './base';

export type Page = {
  slug: string;
  content: any[]; // TODO: update any
  metaTitle: string;
  metaDescription?: string;
  disallowRobots?: boolean;
};

export type Menu = SanityBase & {
  links: [];
};
