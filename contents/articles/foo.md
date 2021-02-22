---
uuid: foo
title: 'foo'
tags: ['foo', 'bar', 'baz']
published: true
---

# h1

This is example article.

## h2

Hello?

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done

## code

```js
import React from 'react'
import unified from 'unified'
import toMarkdownAST from 'remark-parse'
import gfm from 'remark-gfm'
import slug from 'remark-slug'
import remark2rehype from 'remark-rehype'
import highlight from '@mapbox/rehype-prism'
import rehype2react from 'rehype-react'

export default unified()
  .use(toMarkdownAST)
  .use(gfm)
  .use(slug)
  .use(remark2rehype)
  .use(highlight)
  .use(rehype2react, { createElement: React.createElement })
```
