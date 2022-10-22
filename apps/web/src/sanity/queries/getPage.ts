import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';

export type PageType = {
  slug: string;
};

export const query = groq`{
  "page": *[_type == "page" && path.current == $slug][0] {
    _id,
    ...
  }
}`;

export default async function getPage(slug: string, preview: boolean = false) {
  return getClient(preview).fetch(query, { slug });
}
