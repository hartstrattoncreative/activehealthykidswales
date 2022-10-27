import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { LocaleString } from 'sanity/types/objects';

export type TextSectionProps = {
  body: { en: any[]; cy: any[] };
  header: LocaleString;
};

export default function TextSection(props: TextSectionProps) {
  const { body, header } = props;
  const { locale } = useRouter();

  return (
    <Box>
      <Typography variant="h6" textAlign="center" gutterBottom>
        {header[(locale ?? 'en') as keyof Omit<LocaleString, '_type'>]}
      </Typography>
      <RenderPortableText
        value={body[(locale ?? 'en') as keyof Omit<LocaleString, '_type'>]}
      />
    </Box>
  );
}
