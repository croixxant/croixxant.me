import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'

const dirname = path.dirname(new URL(import.meta.url).pathname)
const articlesRoot = path.join(dirname, '../contents/articles')
const scrapsRoot = path.join(dirname, '../contents/scraps')

function createContentsMap(dirpath) {
  const entries = glob
    .sync(`${dirpath}/*.md`)
    .map((filepath) => {
      const { data } = matter.read(filepath)
      return { ...data }
    })
    .filter((data) => {
      return data.published
    })

  return { dirpath: dirpath, entries: entries }
}

function main() {
  ;[articlesRoot, scrapsRoot].map(createContentsMap).map(({ dirpath, entries }) => {
    fs.writeFileSync(`${dirpath}/map.json`, JSON.stringify(entries))
  })
}

main()
