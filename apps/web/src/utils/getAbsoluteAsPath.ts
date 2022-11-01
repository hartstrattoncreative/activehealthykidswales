export default function getAbsoluteAsPath(locale: string, asPath: string) {
  let origin = 'http://localhost:3000';
  if (process.env.NODE_ENV === 'production') {
    origin = `https://${process.env.SITE_URL}`;
  }

  return `${origin}/${locale}${asPath}`; // NOTE: handle index route
}
