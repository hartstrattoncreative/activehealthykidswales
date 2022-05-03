import RenderSections from 'components/RenderSections';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as React from 'react';

export type SlugPageProps = {
  config: any;
  page: {
    title: string;
    description: string;
    disallowRobots?: boolean;
    content?: any[];
  };
};

const SlugPage: NextPage<SlugPageProps> = (props) => {
  const { page } = props;
  const { title, description, disallowRobots = false, content } = page;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        // TODO:
        // openGraph={{
        //   images: openGraphImages,
        // }}
        noindex={disallowRobots}
      />
      {content && <RenderSections sections={content} />}
    </>
  );
};

export default SlugPage;
