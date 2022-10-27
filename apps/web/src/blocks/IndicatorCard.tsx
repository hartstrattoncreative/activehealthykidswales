import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ActionType, SanityBase } from 'sanity/types';

export type IndicatorCardProps = SanityBase & {
  _key: string;
  asLink: boolean;
  openInTab: boolean;
  actionType: ActionType;
};

export default function IndicatorCard(props: IndicatorCardProps) {
  console.log(props);

  return (
    <Card>
      <CardActionArea>
        <CardContent>Indicator Card</CardContent>
      </CardActionArea>
    </Card>
  );
}
