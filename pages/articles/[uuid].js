import { useRouter } from 'next/router'
import processor from '../../utils/md-processor'
import Layout from '../../components/layout'

const Page = (props) => {
  const router = useRouter()
  const { uuid } = router.query
  return (
    <Layout>
      Article {uuid}
      <div dangerouslySetInnerHTML={{ __html: props.contents }}></div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { default: article } = await import(`../../contents/articles/${params.uuid}.md`)
  const { contents, data } = processor.processSync(article)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      uuid: data.frontmatter.uuid,
      title: data.frontmatter.title,
      contents: contents,
      tags: data.frontmatter.tags,
    },
  }
}

export async function getStaticPaths() {
  const { default: articles } = await import(`../../contents/articles/index.json`)
  const paths = articles.map(({ uuid }) => {
    return `/articles/${uuid}`
  })
  return {
    paths,
    fallback: false,
  }
}

export default Page
