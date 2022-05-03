import Link from 'next/link';
import clsx from 'clsx';
import * as React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import AHKWLogo from '/public/images/ahkw_logo.svg';
import {
  SanityAsset,
  SanityImageObject,
} from '@sanity/image-url/lib/types/types';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Header from 'blocks/Header';
import Footer from 'blocks/Footer';
import { LogoJsonLd } from 'next-seo';
import { SiteSettings } from 'types';

export type AppLayoutProps = {
  config: SiteSettings;
};

const Main = styled('main')();

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children, config = { title: '', url: '' } } = props;
  const { logo, title, url } = config;

  return (
    <>
      <Header title={title} navItems={[]} logo={logo} />

      <Main className="content">
        <Container maxWidth="xl">{children}</Container>
      </Main>

      <Footer navItems={[]} />

      {(logo?.asset as SanityAsset)?.url && url && (
        <LogoJsonLd
          url={url}
          logo={(logo?.asset as SanityAsset)?.url as string}
        />
      )}
    </>
  );
};

export default AppLayout;
