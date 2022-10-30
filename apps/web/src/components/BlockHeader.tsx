import Typography, { TypographyProps } from '@mui/material/Typography';

export type BlockHeaderProps = {
  text: string;
  TypographyProps?: TypographyProps;
};

export default function BlockHeader(props: BlockHeaderProps) {
  const { text, TypographyProps } = props;
  return (
    <Typography
      variant="h5"
      textAlign="center"
      gutterBottom
      fontWeight={500}
      {...TypographyProps}
    >
      {text}
    </Typography>
  );
}
