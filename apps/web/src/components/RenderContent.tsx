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
            return <IndicatorCard key={block._key} {...block} />;
          case 'indicatorCardGallery':
            return <IndicatorCardGallery key={block._key} {...block} />;
          case 'textSection':
            return <TextSection key={block._key} {...block} />;
          case 'accordions':
            return <Accordions key={block._key} {...block} />;
          case 'collaboratorList':
            return <CollaboratorList key={block._key} {...block} />;
          case 'hero':
            return <Hero {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
