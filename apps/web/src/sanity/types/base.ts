export type SanityBase = { _type: string };
export type Iterable = { _key: string };
export type Asset = SanityBase & {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
