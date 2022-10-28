import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { CollaboratorList as CollaboratorListProps } from 'sanity/types/objects';

export default function CollaboratorList(props: CollaboratorListProps) {
  const { title, type, memberList, orgList } = props;
  const { locale = 'en' } = useRouter();

  return (
    <Stack sx={{ mt: 2, mb: 8 }} spacing={1}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        {title[locale]}
      </Typography>
      {type === 'member' && memberList && (
        <Grid container spacing={2}>
          {memberList?.map((member) => (
            <Grid item key={member._id} xs={12} sm={6} display="flex">
              {member.asset && 'hello'}
              <div>
                <Typography variant="body1" fontWeight={600}>
                  {member.title}
                </Typography>
                <Typography variant="body2">{member.org?.[locale]}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      {type === 'organisation' && orgList && (
        <Grid container spacing={2}>
          {orgList?.map((org) => (
            <Grid item key={org._id} xs={12} sm={6}>
              {org.href}
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
