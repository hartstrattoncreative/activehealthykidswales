import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';

const query = groq`
 *[_type == "page" && defined(path) && !(_id in path('drafts.**')) && !(_id in [
    // document ignore list
   ]) ] {
   "slug": path.current,
  }
`;

export default async function getPages(preview: boolean = false) {
  return await getClient(preview).fetch(query);
}
