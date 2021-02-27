---
uuid: foo
title: 'foo'
tags: ['foo', 'bar', 'baz']
published: true
---

Faucibus commodo massa rhoncus, volutpat. **Dignissim** sed **eget risus enim**. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. [Mattis mauris semper](#) sed amet vitae sed turpis id.

- Quis elit egestas venenatis mattis dignissim.
- Cras cras lobortis vitae vivamus ultricies facilisis tempus.
- Orci in sit morbi dignissim metus diam arcu pretium.

Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.

## From beginner to expert in 30 days

Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.

> Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.

Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.

![example](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3 'example')
Purus morbi dignissim senectus mattis [adipiscing](#). Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
![example](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3 'example')
www.example.com, https://example.com, and contact@example.com.
![example](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3 'example')

## Everything you need to get up and running

Purus morbi dignissim senectus mattis [adipiscing](#). Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.

Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.

## GFM

### Autolink literals

www.example.com, https://example.com, and contact@example.com.

### Strikethrough

~one~ or ~~two~~ tildes.

### Table

| a       | b       |       c |    d    |
| ------- | :------ | ------: | :-----: |
| example | example | example | example |

### Tasklist

- [ ] いい感じに頑張る
- [x] よろしく

## code

```js
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
```
