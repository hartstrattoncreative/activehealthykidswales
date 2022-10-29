import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { SiteSettings } from 'sanity/types/documents';

const query = groq`{
  "settings": *[_type == "siteSettings"][0] {
    title,
    lang,
    logo,
    cookieConsent,
    metaTitle,
    metaDescription
  },
  "appbar": *[_id == 'appbar'][0] {
    ...,
    links[] {
      ...,
      actionType == "internalPage" => {
        "href": internalPage->slug.current,
      }
    }
  },
  "footer": *[_id == "footer"][0] {
    ...,
    links[] {
      ...,
      actionType == "internalPage" => {
        "href": internalPage->slug.current,
      }
    }
  },
  "settings": *[_id == 'siteSettings'][0]
}`;

export default async function getSiteContent(
  preview: boolean = false
): Promise<{
  settings: SiteSettings;
}> {
  return getClient(preview).fetch(query);
}
