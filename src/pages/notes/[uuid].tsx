import Head from '../../components/head'
import Layout from '../../components/layout'
import ContentsDetail from '../../components/contentsDetail'
import Breadcrumbs from '../../components/breadcrumbs'
import matter from 'gray-matter'
import { serialize } from '../../lib/mdx-serializer'
import type { Summary } from '../../types/contents'
import type { GetStaticPropsContext } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

type Props = {
  uuid: string
  title: string
  contents: MDXRemoteSerializeResult
  tags: string[]
  createdAt: string
  description: string
}

const Page = ({ uuid, title, contents, tags, createdAt, description }: Props) => {
  const breadcrumbs = [
    { title: 'Notes', link: '/notes' },
    { title: title, link: `/notes/${uuid}` },
  ]
  return (
    <>
      <Head title={title} />
      <Layout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <article>
          <ContentsDetail context="notes" title={title} contents={contents} tags={tags} createdAt={createdAt} description={description} />
        </article>
      </Layout>
    </>
  )
}
type Params = {
  uuid: string
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<Params>) => {
  if (!params || !params.uuid) {
    return {
      notFound: true,
    }
  }

  const { default: article } = await import(`../../../contents/notes/${params.uuid}.mdx`)
  const { data, content } = matter(article)
  if (!data || !content) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(content)
  return {
    props: {
      uuid: data.uuid,
      title: data.title,
      contents: mdxSource,
      tags: data.tags || [],
      createdAt: data.createdAt || '',
      description: data.description || '',
    },
  }
}

export async function getStaticPaths() {
  const { default: notes } = await import(`../../../contents/notes/index.json`)
  const paths = notes.map(({ uuid }: Summary) => {
    return `/notes/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
