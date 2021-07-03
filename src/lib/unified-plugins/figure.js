import { visitParents } from 'unist-util-visit-parents'
import { h } from 'hastscript'

module.exports = (_opts) => {
  const img2figure = (node) => {
    const props = node.properties
    const img = h('img', props)
    const figcaption = props.title ? h('figcaption', props.title) : null
    const children = [img, figcaption].filter((v) => !!v)

    return h('figure', {}, children)
  }

  return (tree, file) => {
    visitParents(tree, { tagName: 'img' }, (node, ancestors) => {
      const idx = ancestors[ancestors.length - 1].children.indexOf(node)
      ancestors[ancestors.length - 1].children.splice(idx, 1, img2figure(node))
      console.log(idx)
    })
  }
}
