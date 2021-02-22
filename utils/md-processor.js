import unified from 'unified'
import toMarkdownAST from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import storeFrontmatter from './unified-plugins/store-frontmatter'
import gfm from 'remark-gfm'
import slug from 'remark-slug'
import remark2rehype from 'remark-rehype'
import highlight from '@mapbox/rehype-prism'
import stringify from 'rehype-stringify'

export default unified()
  .use(toMarkdownAST)
  .use(frontmatter, { type: 'yaml', marker: '-' })
  .use(storeFrontmatter)
  .use(gfm)
  .use(slug)
  .use(remark2rehype)
  .use(highlight)
  .use(stringify)
