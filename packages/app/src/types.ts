import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type NavigationItem = {
  slug: { current: string };
  title: string;
};

export type SiteSettings = {
  title: string;
  url: string;
  logo: SanityImageObject;
};
