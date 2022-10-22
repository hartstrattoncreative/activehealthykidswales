const withTM = require('next-transpile-modules')([]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  /**
   * See MDN docs
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
   */
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  /**
   * See MDN docs
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
   */
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  /**
   * See MDN docs
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
   */
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload', // in seconds, 730 days
  },
];

module.exports = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
    i18n: {
      locales: ['en', 'cy'],
      defaultLocale: 'en',
    },
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
  })
);
