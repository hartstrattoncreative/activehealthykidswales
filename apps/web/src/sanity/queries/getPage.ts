import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { Page } from 'sanity/types';

export const query = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  "content": modules[] {
    ...,
    _type == "indicatorCardGallery" => {
      _type,
      indicators[] {
        _type,
        indicator-> {
          _type,
          title,
          "year": grades[0].year,
          "grade": grades[0].gradeType->gradeKey,
          "gradeRefinement": grades[0].gradeType->keyRefinement
        },
        asLink,
        actionType == "internalPage" && asLink => {
          "path": internalPage->slug.current
        },
      }
    }
  },
  ...
}
`;

export default async function getPage(slug: string, preview: boolean = false) {
  return getClient(preview).fetch<Page>(query, { slug });
}
