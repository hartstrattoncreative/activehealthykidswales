import type { AppProps as NextAppProps } from 'next/app';
import AppLayout from 'layouts/AppLayout';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import createEmotionCache from 'libs/emotion/createEmotionCache';
import theme from 'theme';
import { SiteSettings } from 'types';

config.autoAddCss = false;

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

export interface AHKWAppProps
  extends AppProps<{
    config: SiteSettings;
  }> {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function AHKWApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AHKWAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppLayout config={pageProps?.config}>
          <DefaultSeo
            titleTemplate={`${pageProps?.config?.title} | %s`}
            canonical={pageProps?.config?.url && `${pageProps?.config?.url}`}
          />
          {/* 
          // @ts-ignore */}
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default AHKWApp;
