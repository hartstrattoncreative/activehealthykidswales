import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'createEmotionCache';
import theme from 'theme';
import { AppProps } from 'next/app';
import AppLayout from 'layouts/AppLayout';
import { useRouter } from 'next/router';
import getAbsoluteAsPath from 'utils/getAbsoluteAsPath';
import { SiteSettings } from 'sanity/types/documents';

import '@fontsource/cantarell';
import '@fontsource/roboto';

interface AHKWAppProps extends AppProps<{ settings: SiteSettings; data: any }> {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function AHKWApp(props: AHKWAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locales, asPath, locale = 'en' } = useRouter();
  const { data, settings } = pageProps;

  console.log('Settings', settings);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          {data?.metaTitle?.[locale] ?? settings?.metaTitle?.[locale]}
        </title>
        {(data?.metaDescription || settings?.metaDescription) && (
          <meta
            name="description"
            content={
              data?.metaDescription?.[locale] ??
              settings?.metaDescription?.[locale]
            }
          />
        )}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {locales?.map((locale) => (
          <React.Fragment key={locale}>
            <link rel="canonical" href={getAbsoluteAsPath(locale, asPath)} />
            <link
              rel="alternate"
              hrefLang={locale}
              href={getAbsoluteAsPath(locale, asPath)}
            />
          </React.Fragment>
        ))}
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppLayout {...pageProps}>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
