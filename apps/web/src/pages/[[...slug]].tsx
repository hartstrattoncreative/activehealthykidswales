import * as React from 'react';
import { GetStaticProps } from 'next/types';
import { Page } from 'sanity/types/documents';
import RenderContent from 'components/RenderContent';

export type SlugPageProps = { data: Page };

export default function SlugPage(props: SlugPageProps) {
  const { data } = props;

  return <>{data?.content && <RenderContent content={data?.content} />}</>;
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  const getPage = (await import('sanity/queries/getPage')).default;
  // NOTE: if no params then its the index route
  if (!params?.slug) {
    console.warn(
      '/pages/[[...slug]]: no params provided assuming index route "/"'
    );
    const page = await getPage('/');

    if (!page) {
      return { notFound: true };
    }
    const getSiteContent = (await import('sanity/queries/getSiteContent'))
      .default;
    const siteContent = await getSiteContent();
    return { props: { data: page, ...siteContent } };
  }

  const page = await getPage(`/${(params.slug as string[]).join('/')}`);

  if (!page) {
    console.error('/pages/[[...slug]]: no page found');
    return { notFound: true };
  }

  const getSiteContent = (await import('sanity/queries/getSiteContent'))
    .default;
  const siteContent = await getSiteContent();
  return { props: { data: page, ...siteContent } };
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
