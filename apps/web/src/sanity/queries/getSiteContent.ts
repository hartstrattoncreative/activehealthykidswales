import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';

const query = groq`{
  // "siteSettings": ...,
  // "appbar": ...,
  // "sideBar": ...,
  // "footer": ...,
}`;

export default async function getSiteContent(preview: boolean = false) {
  return getClient(preview).fetch(query);
}
