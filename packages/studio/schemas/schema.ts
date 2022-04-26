// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import navigation from './documents/navigation';
import footer from './documents/footer';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import imageSection from './objects/imageSection';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import textSection from './objects/textSection';
import heroSection from './objects/heroSection';

// Then we give our schema to the builder and provide the result to Sanity
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    navigation,
    footer,
    cta,
    page,
    route,
    embedHTML,
    figure,
    heroSection,
    internalLink,
    imageSection,
    link,
    portableText,
    simplePortableText,
    siteConfig,
    textSection,
  ]),
});
