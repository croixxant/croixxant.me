import processor from '../../lib/md-processor'
import Head from '../../components/head'
import Layout from '../../components/layout'
import ContentsDetail from '../../components/contentsDetail'
import Breadcrumbs from '../../components/breadcrumbs'
import type { File, Summary } from '../../types/contents'
import type { GetStaticPropsContext } from 'next'

type Props = {
  uuid: string
  title: string
  contents: string
  tags: string[]
  createdAt: string
  description: string
}

const Page = ({ uuid, title, contents, tags, createdAt, description }: Props) => {
  const breadcrumbs = [
    { title: 'Articles', link: '/articles' },
    { title: title, link: `/articles/${uuid}` },
  ]
  return (
    <>
      <Head title={title} />
      <Layout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <article>
          <ContentsDetail
            context="articles"
            title={title}
            contents={contents}
            tags={tags}
            createdAt={createdAt}
            description={description}
          />
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

  const { default: article } = await import(`../../../contents/articles/${params.uuid}.md`)
  const {
    contents,
    data: { frontmatter },
  } = processor.processSync(article) as File

  if (!frontmatter || !contents) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      uuid: frontmatter.uuid,
      title: frontmatter.title,
      contents: contents,
      tags: frontmatter.tags || [],
      createdAt: frontmatter.createdAt || '',
      description: frontmatter.description || '',
    },
  }
}

export async function getStaticPaths() {
  const { default: articles } = await import(`../../../contents/articles/index.json`)
  const paths = articles.map(({ uuid }: Summary) => {
    return `/articles/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
