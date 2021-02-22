import visit from 'unist-util-visit'
import { parse } from 'yaml'

export default (_opts = { type: 'yaml', storeName: 'frontmatter' }) => {
  return (tree, file) => {
    file.data[_opts.storeName] = {}

    visit(tree, _opts.type, (node) => {
      file.data[_opts.storeName] = parse(node.value)
    })
  }
}
