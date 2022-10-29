import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { Accordion } from 'sanity/types/objects';
import Typography from '@mui/material/Typography';

export type AccordionsProps = { accordions: Accordion[] };

export default function Accordions(props: AccordionsProps) {
  const { accordions } = props;
  const { locale = 'en' } = useRouter();

  return (
    <>
      {accordions?.map((accordion) => (
        <MuiAccordion key={accordion._key}>
          <AccordionSummary>
            <Typography color="text.secondary" variant="h6" fontWeight={600}>
              {accordion.title[locale]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'text.secondary' }}>
            <RenderPortableText value={accordion.body[locale]} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
