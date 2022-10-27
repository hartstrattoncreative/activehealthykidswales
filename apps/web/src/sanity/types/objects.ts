export type SanityBase = { _type: string };

export type LocaleString = SanityBase & {
  en: string;
  cy: string;
};

type PortableText = {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
};

export type LocalePortableText = SanityBase & {
  en: PortableText;
  cy: PortableText;
};

export type Link = SanityBase & {
  en: string;
};
