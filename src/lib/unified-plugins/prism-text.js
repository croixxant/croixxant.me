import { visit } from 'unist-util-visit'

module.exports = (options) => {
  options = options || {}

  return (tree) => {
    visit(tree, { tagName: 'code' }, visitor)
  }

  function visitor(node, index, parent) {
    if (!parent || !['pre', 'p'].includes(parent.tagName)) {
      return
    }

    // If node already have a language-class, don't do anything.
    if (existLanguage(node)) {
      return
    }

    if (parent.tagName === 'pre') {
      parent.properties.className = (parent.properties.className || []).concat('language-text')
    }
    node.properties.className = (node.properties.className || []).concat('language-text')
  }
}

function existLanguage(node) {
  const className = node.properties.className || []

  for (const classListItem of className) {
    if (classListItem.slice(0, 9) === 'language-') {
      return true
    }
  }

  return false
}
