// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import menu from './documents/menu';
import team from './documents/team';
import indicators from './documents/indicators';

// Page sections
import textSection from './sections/textSection';
import heroSection from './sections/heroSection';
import membersSection from './sections/membersSection';
import imageSection from './sections/imageSection';
import accordionSection from './sections/accordionSection';

// Object types
import navPage from './objects/navPage';
import navDropdown from './objects/navDropdown';
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import member from './objects/member';
import localeSimplePortableText from './objects/localeSimplePortableText';
import localePortableText from './objects/localePortableText';
import indicator from './objects/indicator';
import score from './objects/score';
import localeString from './objects/localeString';

// Then we give our schema to the builder and provide the result to Sanity
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default createSchema({
  // We name our schema
  name: 'activehealthykidswales',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    navPage,
    navDropdown,
    cta,
    page,
    route,
    indicators,
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
    menu,
    indicator,
    team,
    member,
    localeSimplePortableText,
    accordionSection,
    localeString,
    localePortableText,
    membersSection,
    score,
  ]),
});
