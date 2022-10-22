// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import appBar from './documents/appBar';
import page from './documents/page';

// Object types
import link from './objects/link';
import accordion from './objects/accordion';
import localeString from './objects/localeString';
import localePortableText from './objects/localePortableText';
import portableText from './objects/portableText';
import textSection from './objects/textSection'
import hero from './objects/hero'
import asset from './objects/asset'

// Then we give our schema to the builder and provide the result to Sanity
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default createSchema({
  // We name our schema
  name: 'activehealthykidswales',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    page,
    appBar,
    
    // // Objects
    link,
    accordion,
    localeString,
    localePortableText,
    portableText,
    textSection,
    hero,
    asset
  ]),
});
