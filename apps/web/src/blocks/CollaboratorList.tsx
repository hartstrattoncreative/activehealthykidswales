import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { CollaboratorList as CollaboratorListProps } from 'sanity/types/objects';
import Link from 'components/Link';

export default function CollaboratorList(props: CollaboratorListProps) {
  const { title, type, memberList, orgList } = props;
  const { locale = 'en' } = useRouter();
  if (type === 'organisation') {
    console.log(props);
  }
  return (
    <Stack sx={{ mt: 2, mb: 12 }} spacing={1}>
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
            <Grid item key={org._id} xs={6} sm={4}>
              <Link href={org.href}>
                <Stack
                  sx={{
                    position: 'relative',
                    width: { xs: 120, sm: 150 },
                    height: { xs: 120, sm: 150 },
                  }}
                >
                  <Image
                    alt={org.logo.alt}
                    src={org.logo.url}
                    layout="fill"
                    objectFit="contain"
                  />
                </Stack>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
