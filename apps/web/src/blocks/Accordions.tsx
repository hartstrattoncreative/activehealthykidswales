import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import { Accordion, LocaleString } from 'sanity/types/objects';

export type AccordionsProps = { accordions: Accordion[] };

export default function Accordions(props: AccordionsProps) {
  const { accordions } = props;
  const { locale = 'en' } = useRouter();

  return (
    <>
      {accordions?.map((accordion) => (
        <MuiAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {accordion.title[locale]}
          </AccordionSummary>
          <AccordionDetails>
            <RenderPortableText value={accordion.body[locale]} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
