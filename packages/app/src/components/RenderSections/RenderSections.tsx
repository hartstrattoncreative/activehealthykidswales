import upperFirst from 'lodash/upperFirst';
import * as SectionComponents from 'sections';
import Error from 'next/error';

export type Section = { _type: string; _key: string };
export type RenderSectionsProps = {
  sections: Section[];
};

function resolveSection(section: Section): React.ElementType | null {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Section =
    SectionComponents[
      upperFirst(section._type) as keyof typeof SectionComponents
    ];

  if (!Section) {
    console.error('Cant find section', section); // eslint-disable-line no-console
    return null;
  }

  return Section as React.ElementType;
}

const RenderSections: React.FC<RenderSectionsProps> = (props) => {
  const { sections } = props;

  if (!sections) {
    console.error('Missing sections');
    return <Error statusCode={500}>Missing sections</Error>;
  }

  return (
    <>
      {sections?.map((section) => {
        const SectionComponent = resolveSection(section);
        if (SectionComponent) {
          // @ts-ignore because of the ElementType type casting
          return <SectionComponent {...section} key={section?._key} />;
        }
        return null;
      })}
    </>
  );
};

export default RenderSections;
