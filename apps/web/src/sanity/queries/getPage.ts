import { groq } from 'next-sanity';
import { getClient } from 'sanity/server';
import { Page } from 'sanity/types/documents';

export const query = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  "content": modules[] {
    ...,
    _type == "indicatorCardGallery" => {
      _type,
      _key,
      indicators[] {
        _key,
        _type,
        ...indicator->{
          _type,
          title,
          "year": grades[0].year,
          "grade": grades[0].gradeType->gradeKey,
          "gradeRefinement": grades[0].gradeType->keyRefinement,
          "gradeLabel": grades[0].gradeType->label
        },
        asLink,
        asLink => {
          actionType
        },
        asLink && actionType == "internalPage" => {
          "path": internalPage->slug.current,
        },
      }
    },
    _type == "collaboratorList" => {
      _type,
      _key,
      "memberList": memberList[]->{
        title,
        org,
        profilePicture,
        _id
      },
      "orgList": orgList[]->{
        href,
        logo {
          alt,
          ...asset->{
            url,
            metadata,
            _id
          }
        },
        _id
      }
    }
  },
  ...
}
`;

export default async function getPage(slug: string, preview: boolean = false) {
  return getClient(preview).fetch<Page>(query, { slug });
}
