import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './site-settings'

import navigationLink from './objects/navigation/link'
import navigation from './navigation'
import page from './page'
import photo from './photo'
import photoFacet from './photo-facet'
import blogPost from './blog-post'
import author from './author'
import blockContent from './block-content'
import blogCategory from './blog-category'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',

  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    author,
    blockContent,
    blogPost,
    blogCategory,
    navigation,
    navigationLink,
    page,
    photo,
    photoFacet,

    siteSettings,
  ]),
})
