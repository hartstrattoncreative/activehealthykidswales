import { SanityBase } from 'sanity/types';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IndicatorCard from './IndicatorCard';

export type IndicatorCardGalleryProps = SanityBase & {
  _key: string;
  indicators: any[];
};

export default function IndicatorCardGallery(props: IndicatorCardGalleryProps) {
  const { indicators } = props;

  if (!indicators) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {indicators?.map((indicator) => (
        <Grid key={indicator._key} xs={6}>
          <IndicatorCard {...indicator} />
        </Grid>
      ))}
    </Grid>
  );
}
