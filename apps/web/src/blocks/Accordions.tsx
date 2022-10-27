import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';
import { Accordion as AccordionProps } from 'sanity/types/objects';

export type AccordionsProps = { accordions: AccordionProps[] };

export default function Accordions(props: AccordionsProps) {
  const { accordions } = props;
  const { locale = 'en' } = useRouter();

  return (
    <>
      {accordions?.map((accordion) => (
        <MuiAccordion>
          <AccordionSummary expandIcon={<CaretDown />}>
            {accordion[locale as keyof Omit<LocaleString, '_type'>]}
          </AccordionSummary>
          <AccordionDetails>
            <RenderPortableText value={accordion.body[locale]} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
