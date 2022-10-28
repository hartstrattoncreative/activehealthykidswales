import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { CollaboratorList as CollaboratorListProps } from 'sanity/types/objects';

export default function CollaboratorList(props: CollaboratorListProps) {
  const { title, type, memberList, orgList } = props;
  const { locale = 'en' } = useRouter();
  console.log(memberList);
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        {title[locale]}
      </Typography>
      {type === 'member' && memberList && (
        <Grid container spacing={2}>
          {memberList?.map((member) => (
            <Grid item key={member._key} xs={12} sm={6} display="flex">
              {member.asset && 'hello'}
              <Stack spacing={2}>
                <Typography fontWeight={500}>{member.title}</Typography>
                <Typography>{member.org?.[locale]}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}

      {type === 'organisation' && orgList && (
        <Grid container spacing={2}>
          {orgList?.map((org) => (
            <Grid item key={org._key} xs={12} sm={6}>
              {org.media}
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
