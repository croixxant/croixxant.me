import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'

const dirname = path.dirname(new URL(import.meta.url).pathname)
const articlesRoot = path.join(dirname, '../contents/articles')
const notesRoot = path.join(dirname, '../contents/notes')

function createContentsMap(dirpath) {
  const entries = glob
    .sync(`${dirpath}/*.mdx`)
    .map((filepath) => {
      const { data } = matter.read(filepath)
      return { ...data }
    })
    .filter((data) => {
      return data.published
    })
    .map((data) => {
      return {
        uuid: data.uuid,
        title: data.title,
        tags: data.tags,
        createdAt: data.createdAt,
      }
    })
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

  return { dirpath: dirpath, entries: entries }
}

function main() {
  ;[articlesRoot, notesRoot].map(createContentsMap).map(({ dirpath, entries }) => {
    fs.writeFileSync(`${dirpath}/index.json`, JSON.stringify(entries))
  })
}

main()
