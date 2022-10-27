import { SanityBase } from 'sanity/types/base';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IndicatorCard from './IndicatorCard';
import Typography from '@mui/material/Typography';
import { LocaleString } from 'sanity/types/objects';
import { useRouter } from 'next/router';

export type IndicatorCardGalleryProps = SanityBase & {
  _key: string;
  indicators: any[];
  header: LocaleString;
};

export default function IndicatorCardGallery(props: IndicatorCardGalleryProps) {
  const { indicators, header } = props;
  const { locale } = useRouter();

  if (!indicators) {
    return null;
  }

  return (
    <>
      <Typography variant="h5" component="h2" textAlign="center" mb={2}>
        {header?.[locale ?? 'en']}
      </Typography>
      <Grid container spacing={2}>
        {indicators?.map((indicator) => (
          <Grid key={indicator._key} xs={12} sm={6}>
            <IndicatorCard {...indicator} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
