import { GetStaticProps } from 'next/types';
import { Page } from 'sanity/types/documents';
import RenderContent from 'components/RenderContent';
import { usePreviewSubscription } from 'sanity/client';
import filterDataToSingleItem from 'utils/filterDataToSingleItem';

export type SlugPageProps = {
  data: Page[];
  preview: boolean;
  query: string;
  queryParams: any;
};

export default function SlugPage(props: SlugPageProps) {
  const { data: initialData, preview, query, queryParams } = props;

  const { data: previewData } = usePreviewSubscription(query, {
    params: queryParams ?? {},
    initialData,
    enabled: preview,
  });

  const data = filterDataToSingleItem(previewData, preview);

  return <>{data?.content && <RenderContent content={data?.content} />}</>;
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  const { default: getPage, query } = await import('sanity/queries/getPage');

  const getSiteContent = (await import('sanity/queries/getSiteContent'))
    .default;
  const siteContent = await getSiteContent(preview);

  // NOTE: if no params then its the index route
  if (!params?.slug) {
    console.warn(
      '/pages/[[...slug]]: no params provided assuming index route "/"'
    );
    const page = await getPage('/', preview);

    if (!page) {
      return { notFound: true };
    }

    return {
      props: {
        preview,
        query,
        data: filterDataToSingleItem(page, preview),
        queryParams: { slug: '/' },
        ...siteContent,
      },
    };
  }

  const slug = `/${(params.slug as string[]).join('/')}`;
  const page = await getPage(slug, preview);

  if (!page || page.length === 0) {
    console.error('/pages/[[...slug]]: no page found');
    return { notFound: true };
  }

  return {
    props: {
      preview,
      query,
      queryParams: { slug },
      data: filterDataToSingleItem(page, preview),
      ...siteContent,
    },
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const getPages = (await import('sanity/queries/getPages')).default;
  const pages = await getPages();

  if (pages.length === 0) {
    console.error('/pages/[[...slug]]: no pages found');
    return { paths: [], fallback: false };
  }

  const paths = ['en', 'cy'].flatMap((locale) =>
    pages.map(({ slug }) => ({
      params: { slug: slug.split('/').filter(Boolean), locale },
    }))
  );

  return {
    paths,
    fallback: true, // NOTE: needs to be true for non default locale pages
  };
}
