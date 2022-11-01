import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Link from 'components/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  IndicatorCard as IndicatorCardSchema,
  Grade,
} from 'sanity/types/documents';
import { useRouter } from 'next/router';

function getGradeRefinement(refinement: Grade['keyRefinement']) {
  return refinement === 'minus' ? '-' : '+';
}

function getGradeColor(grade?: string) {
  if (!grade) {
    return '#000';
  }
  const colormap = {
    a: '#00cc7b',
    b: '#00cc7b',
    c: '#f3c244',
    d: '#eb7c38',
    e: '#ed4a43',
    f: '#ed4a43',
    inc: '#ed4a43',
  };

  // @ts-ignore
  return colormap[grade] ?? '#000';
}

export type IndicatorCardProps = IndicatorCardSchema & {
  featured?: boolean;
};

export default function IndicatorCard(props: IndicatorCardProps) {
  const {
    asLink,
    path,
    actionType,
    title,
    grade,
    gradeLabel,
    gradeRefinement,
    featured = true,
  } = props;
  const { locale = 'en' } = useRouter();
  const color = React.useMemo(() => getGradeColor(grade), [grade]);

  const content = (
    <CardContent
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'space-between',
        minHeight: 200,
      }}
    >
      {grade && (
        <Box>
          <Typography
            variant={featured ? 'h2' : 'h4'}
            component="p"
            color="text.secondary"
            fontWeight="bold"
            gutterBottom
          >
            {(gradeLabel?.[locale] ?? grade)?.toUpperCase()}
            {gradeRefinement && getGradeRefinement(gradeRefinement)}
          </Typography>
        </Box>
      )}
      <Typography
        variant={featured ? 'h4' : 'h5'}
        component={featured ? 'h1' : 'p'}
        color="text.secondary"
        gutterBottom
      >
        {title?.[locale]}
      </Typography>
    </CardContent>
  );

  return (
    <Card
      variant="outlined"
      sx={{
        border: `1px solid ${color}`,
        backgroundColor: color,
        ...(featured && { my: 2, textAlign: 'center' }),
      }}
    >
      {asLink && actionType === 'internalPage' ? (
        <CardActionArea component={Link} href={path as string}>
          {content}
        </CardActionArea>
      ) : (
        content
      )}
    </Card>
  );
}
