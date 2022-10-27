import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';
import { LocaleString, SanityBase } from 'sanity/types/objects';

export type AccordionProps = SanityBase & {
  body: { en: any[]; cy: any[] };
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
          <AccordionSummary expandIcon={<CaretDown />}>
            {accordion[locale as keyof Omit<AccordionProps, 'body'>]}
          </AccordionSummary>
          <AccordionDetails>
            <RenderPortableText
              value={
                accordion.body[locale as keyof Omit<LocaleString, '_type'>]
              }
            />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}