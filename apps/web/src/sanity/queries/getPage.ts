import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { Page } from 'sanity/types';

export const query = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  ...
}
`;

export default async function getPage(slug: string, preview: boolean = false) {
  return getClient(preview).fetch<Page>(query, { slug });
}
