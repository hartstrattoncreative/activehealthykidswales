export type SanityBase = { _type: string };

export type LocaleString = SanityBase & Record<string, string>;

type PortableText = {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
};

export type LocalePortableText = SanityBase & Record<string, PortableText>;

export type Link = SanityBase & {
  en: string;
};

export type ActionType = 'internalPage' | 'file' | 'url';

export type Action = {
  actionType: ActionType;
  internalPage?: string;
  path?: string;
  url?: string;
  openInTab?: boolean;
  file: any; // TODO: add type for file
};

export type TextSection = {
  body: LocalePortableText;
  header: LocaleString;
};

export type Accordion = SanityBase & {
  _key: string;
  body: LocalePortableText;
  title: LocaleString;
};
