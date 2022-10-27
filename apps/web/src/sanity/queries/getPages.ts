import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { Page } from 'sanity/types/documents';

const query = groq`
*[_type == "page" && defined(slug) && !(_id in path('drafts.**')) && !(_id in [
  // document ignore list
  ]) ] {
  "slug": slug.current,
}
`;

export default async function getPages(preview: boolean = false) {
  return getClient(preview).fetch<Page[]>(query);
}
