// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import menu from './documents/menu';
import page from './documents/page';
import indicator from './documents/indicator';
import grade from './documents/grade';
import member from './documents/member';
import organisation from './documents/organisation';
import notification from './documents/notification';
import siteConfig from './documents/siteConfig';

// Object types
import link from './objects/link';
import accordion from './objects/accordion';
import localeString from './objects/localeString';
import localePortableText from './objects/localePortableText';
import portableText from './objects/portableText';
import textSection from './objects/textSection'
import indicatorCard from './objects/indicatorCard'
import indicatorCardGallery from './objects/indicatorCardGallery'
import hero from './objects/hero'
import asset from './objects/asset'
import collaboratorList from './objects/collaboratorList'

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
    menu,
    indicator,
    grade,
    member,
    organisation,
    notification,
    siteConfig,
    
    // // Objects
    link,
    accordion,
    localeString,
    localePortableText,
    portableText,
    textSection,
    hero,
    asset,
    indicatorCard,
    indicatorCardGallery,
    collaboratorList
  ]),
});
