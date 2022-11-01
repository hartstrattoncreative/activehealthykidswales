import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IndicatorCard from './IndicatorCard';
import BlockHeader from 'components/BlockHeader';
import { IndicatorCardGallery as IndicatorCardGalleryProps } from 'sanity/types/documents';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';

export default function IndicatorCardGallery(props: IndicatorCardGalleryProps) {
  const { indicators, header } = props;
  const { locale = 'en' } = useRouter();

  if (!indicators) {
    return null;
  }

  return (
    <Stack spacing={1}>
      {header[locale] && <BlockHeader text={header[locale]} />}
      <Grid container spacing={2}>
        {indicators?.map((indicator) => (
          <Grid key={indicator._key} xs={12} sm={6}>
            <IndicatorCard {...indicator} featured={false} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
