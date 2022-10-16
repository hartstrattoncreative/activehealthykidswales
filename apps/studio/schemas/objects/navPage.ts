import { LinkSimpleHorizontal } from 'phosphor-react';
export default {
  name: 'navPage',
  title: 'Page',
  icon: LinkSimpleHorizontal,
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  // TODO: review this
  // preview: {
  //   select: {
  //     title: 'title',
  //     pageType: 'page._type',
  //     pageSlug: 'page.slug.current',
  //   },
  //   prepare({ title, pageType, pageSlug }) {
  //     const isStatic = getStaticRoute(pageType);
  //     const isDynamic = getDynamicRoute(pageType);

  //     return {
  //       title: title,
  //       subtitle:
  //         isStatic !== false
  //           ? `/${isStatic}`
  //           : `/${isDynamic ? `${isDynamic}/` : ''}${pageSlug}`,
  //     };
  //   },
  // },
};
