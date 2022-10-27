import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SanityBase } from 'sanity/types/base';
import { ActionType } from 'types';

export type IndicatorCardProps = SanityBase & {
  _key: string;
  asLink: boolean;
  openInTab?: boolean;
  actionType?: ActionType;
  path?: string;
};

export default function IndicatorCard(props: IndicatorCardProps) {
  const { asLink, path, actionType } = props;
  console.log(props);

  return (
    <Card>
      <CardActionArea>
        <CardContent>Indicator Card</CardContent>
      </CardActionArea>
    </Card>
  );
}
