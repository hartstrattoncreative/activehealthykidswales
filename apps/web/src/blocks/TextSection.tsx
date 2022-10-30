import Container from '@mui/material/Container';
import BlockHeader from 'components/BlockHeader';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { TextSection as TextSectionProps } from 'sanity/types/objects';

export default function TextSection(props: TextSectionProps) {
  const { body, header } = props;
  const { locale = 'en' } = useRouter();

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      {header && <BlockHeader text={header[locale]} />}
      <RenderPortableText value={body[locale]} />
    </Container>
  );
}
