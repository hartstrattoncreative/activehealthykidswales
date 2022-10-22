const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['en', 'cy'],
    defaultLocale: 'en',
  },
});
