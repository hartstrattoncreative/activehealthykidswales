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

import '@fontsource/cantarell';
import '@fontsource/roboto';

interface AHKWAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function AHKWApp(props: AHKWAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locales, asPath } = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {locales?.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={getAbsoluteAsPath(locale, asPath)}
          />
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
