import { useRouter } from 'next/router';
import getAbsoluteAsPath from './getAbsoluteAsPath';

export default function useAbsoluteAsPath() {
  const { defaultLocale, locale, asPath } = useRouter();

  return getAbsoluteAsPath(locale ?? defaultLocale ?? 'en', asPath);
}
