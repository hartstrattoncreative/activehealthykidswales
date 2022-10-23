import { GetStaticProps } from 'next/types';
import * as React from 'react';

export default function SlugPage() {
  return <div>SLUG PAGE</div>;
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const getPages = (await import('sanity/queries/getPages')).default;
  const pages = await getPages();

  if (pages.length === 0) {
    console.error('/pages/[[...slug]]: no pages found');
    // 404 not found - no fallback
    return { paths: [], fallback: false };
  }

  console.log(pages);
  return { paths: [], fallback: false };
}
