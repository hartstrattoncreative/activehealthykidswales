import Accordions from 'blocks/Accordions';
import CollaboratorList from 'blocks/CollaboratorList';
import Hero from 'blocks/Hero';
import IndicatorCard from 'blocks/IndicatorCard';
import IndicatorCardGallery from 'blocks/IndicatorCardGallery';
import TextSection from 'blocks/TextSection';

export type RenderContentProps = {
  content: any[];
};

export default function RenderContent(props: RenderContentProps) {
  const { content = [] } = props;

  return (
    <>
      {content?.map((block, i) => {
        switch (block._type) {
          // NOTE: add cases for content types here
          case 'indicatorCard':
            return <IndicatorCard {...block} />;
          case 'indicatorCardGallery':
            return <IndicatorCardGallery {...block} />;
          case 'textSection':
            return <TextSection {...block} />;
          case 'accordions':
            return <Accordions {...block} />;
          case 'collaboratorList':
            return <CollaboratorList {...block} />;
          case 'hero':
            return <Hero {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
