import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { LocaleString, SanityBase } from 'sanity/types/objects';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type AccordionProps = SanityBase & {
  body: Record<string, string>;
  en: string;
  cy?: string;
  _key: string;
};

export type AccordionsProps = { accordions: AccordionProps[] };

export default function Accordions(props: AccordionsProps) {
  const { accordions } = props;
  const { locale = 'en' } = useRouter();

  return (
    <>
      {accordions?.map((accordion) => (
        <MuiAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {accordion[locale]}
          </AccordionSummary>
          <AccordionDetails>
            <RenderPortableText value={accordion.body[locale]} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
