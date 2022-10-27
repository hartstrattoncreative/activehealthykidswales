import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import RenderPortableText from 'components/RenderPortableText';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';
import { LocaleString } from 'sanity/types/objects';

export type AccordionProps = {
  body: { en: any[]; cy: any[] };
  en: string;
  cy?: string;
};

export default function Accordion(props: AccordionProps) {
  const { body, ...rest } = props;
  const { locale } = useRouter();

  return (
    <MuiAccordion>
      <AccordionSummary expandIcon={<CaretDown />}>
        {rest[(locale ?? 'en') as keyof Omit<AccordionProps, 'body'>]}
      </AccordionSummary>
      <AccordionDetails>
        <RenderPortableText
          value={body[(locale ?? 'en') as keyof Omit<LocaleString, '_type'>]}
        />
      </AccordionDetails>
    </MuiAccordion>
  );
}
