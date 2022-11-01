import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { SiteSettings } from 'sanity/types/documents';

const actionFragment = groq`
"en": en [] {
  ...,
  "markDefs": markDefs[] {
    ...,
    actionType == 'url' => {"url": url, "openInTab": openInTab},
    actionType == 'internalPage' => {"url": internalPage->slug.current},
    actionType == 'file' => {"file": @.file{
      ...asset->{
        url,
        _id
      }
    }},
  }
},
"cy": cy [] {
  ...,
  "markDefs": markDefs[] {
    ...,
    actionType == 'url' => {"url": @.url, "openInTab": @.openInTab},
    actionType == 'internalPage' => {"url": @.internalPage->slug.current},
    actionType == 'file' => {"file": @.file{
      ...asset->{
        url,
        _id
      }
    }},
  }
}
`;

const query = groq`{
  "settings": *[_type == "siteSettings"][0] {
    title,
    lang,
    logo {
      alt,
      ...asset->{
        url,
        metadata,
        _id
      }
    },
    cookieConsent {
      _type,
      buttonText,
      message {
        ...,
        ${actionFragment}
      }
    },
    metaTitle,
    metaDescription
  },
  "appbar": *[_id == 'appbar'][0] {
    ...,
    links[] {
      ...,
      actionType == "internalPage" => {
        "url": internalPage->slug.current,
      }
    }
  },
  "footer": *[_id == "footer"][0] {
    ...,
    links[] {
      ...,
      actionType == "internalPage" => {
        "url": internalPage->slug.current,
      }
    },
    indicators {
      ...,
      indicatorLinks[] {
        ...,
        actionType == "internalPage" => {
          "href": internalPage->slug.current,
        }
      }
    }
  }
}`;

export default async function getSiteContent(
  preview: boolean = false
): Promise<{
  settings: SiteSettings;
}> {
  return getClient(preview).fetch(query);
}
