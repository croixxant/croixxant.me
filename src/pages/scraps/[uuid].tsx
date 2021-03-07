import processor from '../../utils/md-processor'
import tw from 'twin.macro'
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
    { title: 'Scraps', link: '/scraps' },
    { title: title, link: `/scraps/${uuid}` },
  ]
  return (
    <>
      <Head title={title} />
      <Layout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <ContentsDetail context="scraps" title={title} contents={contents} tags={tags} createdAt={createdAt} description={description} />
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

  const { default: article } = await import(`../../../contents/scraps/${params.uuid}.md`)
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
  const { default: scraps } = await import(`../../../contents/scraps/index.json`)
  const paths = scraps.map(({ uuid }: Summary) => {
    return `/scraps/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
