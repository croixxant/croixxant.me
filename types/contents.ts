export type Summary = {
  uuid: string
  title: string
  tags: string[]
  createdAt: string
}

export type File = {
  data: Data
  contents: string
}

export type Data = {
  frontmatter: Frontmatter
}

export type Frontmatter = {
  uuid: string
  title: string
  tags?: string[]
  createdAt?: string
  description?: string
}
