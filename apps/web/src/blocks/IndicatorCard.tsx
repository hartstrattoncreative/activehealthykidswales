import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Link from 'components/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  IndicatorCard as IndicatorCardProps,
  Grade,
} from 'sanity/types/documents';
import { useRouter } from 'next/router';
import Chip from '@mui/material/Chip';

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

export default function IndicatorCard(props: IndicatorCardProps) {
  const {
    asLink,
    path,
    actionType,
    title,
    grade,
    gradeLabel,
    gradeRefinement,
  } = props;
  const { locale = 'en' } = useRouter();

  const color = React.useMemo(() => getGradeColor(grade), [grade]);

  const content = (
    <>
      {grade && (
        <Box p={4} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h3" component="span" sx={{ color: '#fff' }}>
            {(gradeLabel?.[locale] ?? grade)?.toUpperCase()}
            {gradeRefinement && getGradeRefinement(gradeRefinement)}
          </Typography>
        </Box>
      )}
      <Box p={2}>
        <Typography variant="h6" color="#fff">
          {title?.[locale]}
        </Typography>
      </Box>
    </>
  );

  return (
    <Card
      variant="outlined"
      sx={{ border: `1px solid ${color}`, backgroundColor: color }}
      // color={color}
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
