import { SanityBase, Iterable, Asset } from './base';

export type LocaleString = SanityBase & Record<string, string>;

type PortableText = Iterable &
  SanityBase & {
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

export type Accordion = SanityBase &
  Iterable & {
    body: LocalePortableText;
    title: LocaleString;
  };

export type Member = SanityBase & {
  _id: string;
  title: string;
  org: LocaleString;
  asset?: Asset;
};
export type Organisation = SanityBase & {
  _id: string;
  logo: Asset;
  href: string;
};

export type CollaboratorList = SanityBase & {
  type: 'member' | 'organisation';
  title: LocaleString;
  memberList?: Member[];
  orgList?: Organisation[];
};
