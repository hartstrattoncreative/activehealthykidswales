import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { TextSection as TextSectionProps } from 'sanity/types/objects';

export default function TextSection(props: TextSectionProps) {
  const { body, header, headerVariant = 'h5' } = props;
  const { locale = 'en' } = useRouter();

  console.log(props);

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      {header && (
        <Typography variant={headerVariant} textAlign="center" gutterBottom>
          {header[locale]}
        </Typography>
      )}
      <RenderPortableText value={body[locale]} />
    </Container>
  );
}
