import { serialize as s } from 'next-mdx-remote/serialize'
import img2figure from './unified-plugins/figure'
import gfm from 'remark-gfm'
import slug from 'remark-slug'
import highlight from '@mapbox/rehype-prism'
import prismText from './unified-plugins/prism-text'

export const serialize = (content, scope) => {
  return s(content, {
    mdxOptions: {
      remarkPlugins: [gfm, slug],
      rehypePlugins: [img2figure, highlight, prismText],
      compilers: [],
    },
    scope: scope,
  })
}
