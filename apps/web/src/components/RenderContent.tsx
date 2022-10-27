import Accordion from 'blocks/Accordion';
import CollaboratorList from 'blocks/CollaboratorList';
import IndicatorCard from 'blocks/IndicatorCard';
import TextSection from 'blocks/TextSection';

export type RenderContentProps = {
  content: any[];
};

export default function RenderContent(props: RenderContentProps) {
  const { content = [] } = props;

  console.log(content);

  return (
    <>
      {content?.map((block, i) => {
        switch (block._type) {
          // NOTE: add cases for content types here
          case 'indicatorCard':
            return <IndicatorCard {...block} />;
          case 'textSection':
            return <TextSection {...block} />;
          case 'accordion':
            return <Accordion {...block} />;
          case 'collaboratorList':
            return <CollaboratorList {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
