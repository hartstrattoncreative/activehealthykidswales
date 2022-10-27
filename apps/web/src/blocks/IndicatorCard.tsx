import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import { SanityBase } from 'sanity/types/base';
import { ActionType } from 'types';
import Link from 'components/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LocaleString } from 'sanity/types/objects';
import { useRouter } from 'next/router';

export type IndicatorCardProps = SanityBase & {
  _key: string;
  asLink: boolean;
  openInTab?: boolean;
  actionType?: ActionType;
  path?: string;
  grade?: string;
  gradeRefinement?: 'plus' | 'minus';
  year: string;
  title: LocaleString;
};

function getGradeRefinement(refinement: IndicatorCardProps['gradeRefinement']) {
  return refinement === 'minus' ? '-' : '+';
}

// TODO: get grade color mapping
function getGradeColor(grade) {}

export default function IndicatorCard(props: IndicatorCardProps) {
  const { asLink, path, actionType, grade, gradeRefinement, year, title } =
    props;
  const { locale } = useRouter();

  const content = (
    <>
      {grade && (
        <Box p={4} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h2" component="span">
            {grade?.toUpperCase()}
            {gradeRefinement && getGradeRefinement(gradeRefinement)}
          </Typography>
        </Box>
      )}
      <Box p={2}>
        <Typography>{title?.[locale ?? 'en']}</Typography>
      </Box>
    </>
  );

  return (
    <Card variant="outlined">
      {asLink ? (
        <CardActionArea component={Link} href={path as string}>
          {content}
        </CardActionArea>
      ) : (
        content
      )}
    </Card>
  );
}
