export type SanityBase = { _type: string };
export type Iterable = { _key: string };
type Palette = {
  background: string;
  foreground: string;
  population: number;
  title: string;
  _type: string;
};
export type Asset = SanityBase & {
  alt: string;
  url: string;
  _id: string;
  metadata: {
    blurhash: string;
    dimensions: {
      aspectRatio: number;
      width: number;
      height: number;
      _type: string;
    };
    hasAlpha: boolean;
    isOpaque: boolean;
    lqip: string;
    palette: {
      darkMuted: Palette;
      darkVibrant: Palette;
      dominant: Palette;
      lightMuted: Palette;
      lightVibrant: Palette;
      muted: Palette;
      vibrant: Palette;
    };
  };
};
